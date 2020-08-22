/*Iteration 5: Add a new item: "Collector's Edition"
The store incorporated a new kind of book, the "Collector's Edition". These books increases it's quality over time.*/
const json = require(`../data/data.json`);
const fs = require("fs");
const moment = require("moment");
const now = moment(new Date());

const diffCollectors = (collectorsName) => {
  const updated = json.data.map((item) => {
    if (collectorsName == item.titulo && item.tipo === "Collectors") {
      const diffTime = moment.duration(now.diff(item.date));
      const diffDays = diffTime.asDays();
      item.quality = item.quality += diffDays;
    }
    if (item.quality <= 0) {
      item.cantidad = 0;
    }
    return item;
  });

  json.data = updated;

  fs.writeFileSync("data/data.json", JSON.stringify(json));
};

diffCollectors("Clean Code");
