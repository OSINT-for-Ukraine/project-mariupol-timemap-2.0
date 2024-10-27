import { TimelineOptions } from "vis-timeline/esnext";
import { Event } from "utils/types";
import { getClusterDisplayValue } from "utils/utils";

export const options: TimelineOptions = {
  height: 200,
  zoomMax: 126227704000,
  zoomMin: 604800000,
  dataAttributes: ["longitude", "latitude"],
  autoResize: true,
  cluster: {
    titleTemplate:
      "Cluster containing {count} events. Double-click or zoom in to see the individual events.",
    maxItems: 10,
    showStipes: true,
    clusterCriteria: (firstItem, secondItem) => {
      if (firstItem.title === secondItem.title) {
        return false;
      }
      return true;
    },
  },
  template: (_itemData, _element, data) => {
    if (data.isCluster) {
      const div = document.createElement("div");
      const clusterSize = getClusterDisplayValue(data.items.length, 10, 100);
      div.setAttribute("data-count", data.items.length);
      div.style.setProperty("width", `${clusterSize}px`);
      div.style.setProperty("height", `${clusterSize}px`);
      div.innerText = data.items.length;
      return div;
    } else {
      return `<div>${data.content}</div>`;
    }
  },
};

export const eventsToTimelineEvents = (events: Event[]) => {
  return events?.map((event) => ({
    id: event.id,
    longitude: event.longitude,
    latitude: event.latitude,
    content: "",
    start: event?.date,
    title: event?.date,
  }));
};
