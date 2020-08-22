/*Iteration 4: Add a new item: "Comics"
In order to reach younger customers, the store now started to offer comics. Comics are similar to books but they degrades at double the speed.*/

const json = require(`../data/data.json`);
const fs = require("fs");
const moment = require("moment");
const now = moment(new Date());

const diffComic = (comicName) => {
  const updated = json.data.map((item) => {
    if (comicName == item.titulo && item.tipo === "Comic") {
      const diffTime = moment.duration(now.diff(item.date));
      const diffDays = diffTime.asDays();
      item.quality = item.quality -= diffDays * 2;
    }
    if (item.quality <= 0) {
      item.cantidad = 0;
    }
    return item;
  });

  json.data = updated;

  fs.writeFileSync("data/data.json", JSON.stringify(json));
};

diffComic("SpiderMan");
