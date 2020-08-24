/*Iteration 5: Add a new item: "Collector's Edition"
The store incorporated a new kind of book, the "Collector's Edition". These books increases it's quality over time.*/

const json = require(`../data/data.json`);
const fs = require("fs");
const now = new Date();

const diffCollectors = (bookName) => {
  const updated = json.data.map((item) => {
    if (bookName == item.titulo && item.tipo === "Collectors") {
      const itemTime = new Date(item.date).getTime();
      const diff = now - itemTime;
      var diffDays = diff / (1000 * 60 * 60 * 24);
      item.quality = item.quality += diffDays;
    }
    if (item.quality <= 0) {
      item.cantidad = 0;
    }
    return item;
  });

  json.data = updated;

  fs.writeFileSync(__dirname + "/data/data.json", JSON.stringify(json));
};

diffCollectors("Clean Code");
