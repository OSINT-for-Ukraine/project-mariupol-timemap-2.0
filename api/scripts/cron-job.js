require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.COSMOSDB_CONNECTION_STRING_WRITE);

const getLastDate = async () => {
  await client.connect();
  const database = client.db("Project-Mariupol-Dataset");
  const eventsCollection = database.collection("Events");
  const lastEvent = await eventsCollection
    .find()
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  const lastDate = lastEvent[0].date;

  return lastDate;
};

const convertDate = (dateString) => {
  const [month, day, year] = dateString.split("/");
  return (dateObject = new Date(year, month - 1, day));
};

const fetchData = async () => {
  try {
    const [events, associations, sources] = await Promise.all([
      fetch(
        "https://bellingcat-embeds.ams3.cdn.digitaloceanspaces.com/production/ukr/timemap/events.json"
      ),
      fetch(
        "https://bellingcat-embeds.ams3.cdn.digitaloceanspaces.com/production/ukr/timemap/associations.json"
      ),
      fetch(
        "https://bellingcat-embeds.ams3.cdn.digitaloceanspaces.com/production/ukr/timemap/sources.json"
      ),
    ]);

    const eventsData = await events.json();
    const associationsData = await associations.json();
    const sourcesData = await sources.json();

    const lastDate = await getLastDate();

    const exportEvents = eventsData
      .map((event) => {
        return {
          id: event.id,
          date: convertDate(event.date),
          latitude: event.latitude,
          longitude: event.longitude,
          location: event.location,
          description: event.description,
          sources: event.sources.map((id) => {
            const sources = sourcesData[id];
            return {
              id,
              path: sources.paths[0],
              description: sources.description,
            };
          }),
          filters: event.associations.map((associationItem) => {
            return {
              id: associationsData.find(
                (association) => association.id === associationItem
              ).id,
              value: associationsData.find(
                (association) => association.id === associationItem
              ).title,
            };
          }),
        };
      })
      .filter((item) => item.date > lastDate);

    return exportEvents;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const updateDb = async () => {
  await client.connect();
  const database = client.db("Project-Mariupol-Dataset");
  const eventsCollection = database.collection("Events");
  const newEvents = await fetchData();
  if (newEvents.length === 0) {
    return;
  }
  await eventsCollection.insertMany(newEvents);
};

module.exports = updateDb;
