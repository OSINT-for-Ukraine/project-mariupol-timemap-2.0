const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const path = require("path");
const cron = require("node-cron");
const updateDb = require("./scripts/cron-job");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

const client = new MongoClient(
  process.env.COSMOSDB_CONNECTION_STRING_READ_ONLY
);

cron.schedule("0 1 * * *", () => {
  updateDb();
});

async function main() {
  try {
    await client.connect();
    console.log("Connected to Cosmos DB");

    const database = client.db("Project-Mariupol-Dataset");
    const eventsCollection = database.collection("Events");
    const millitaryUnitsCollection = database.collection("Millitary_Units");

    app.post("/api/events", async (req, res) => {
      const { intervalBegin, intervalEnd, filtersArr } = req.body;

      try {
        const events = await eventsCollection
          .find(
            {
              date: {
                $gte: new Date(intervalBegin),
                $lte: new Date(intervalEnd),
              },
              ...(filtersArr.length > 0 && {
                filters: {
                  $elemMatch: {
                    id: { $in: filtersArr },
                  },
                },
              }),
            },
            {
              projection: {
                id: 1,
                latitude: 1,
                longitude: 1,
                date: 1,
              },
            }
          )
          .toArray();

        res.status(200).json(events);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.get("/api/event/:id", async (req, res) => {
      const { id } = req.params;

      try {
        const event = await eventsCollection
          .find(
            { id: id },
            {
              projection: {
                id: 1,
                description: 1,
                date: 1,
                sources: 1,
                location: 1,
                graphic: 1,
              },
            }
          )
          .toArray();

        if (event) {
          res.status(200).json(event);
        } else {
          res
            .status(404)
            .json({ error: `Couldn't find event with "${id}" id` });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    app.get("/api/millitary/:date", async (req, res) => {
      const { date } = req.params;

      try {
        const millitaryUnits = await millitaryUnitsCollection
          .find(
            {
              date: new Date(date),
            },
            {
              projection: { _id: 0 },
            }
          )
          .toArray();

        res.status(200).json(millitaryUnits);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    // Handle React routing, return all requests to React app
    app.get("*", (_, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

main().catch(console.error);
