/*Iteration 4: Add a new item: "Comics"
In order to reach younger customers, the store now started to offer comics. Comics are similar to books but they degrades at double the speed.*/

const json = require(`../data/data.json`);
const fs = require("fs");
const now = new Date();

const diffComic = (bookName) => {
  const updated = json.data.map((item) => {
    if (bookName == item.titulo && item.tipo === "Comic") {
      const itemTime = new Date(item.date).getTime();
      const diff = now - itemTime;
      var diffDays = diff / (1000 * 60 * 60 * 24);
      item.quality = item.quality -= diffDays * 2;
    }
    if (item.quality <= 0) {
      item.cantidad = 0;
    }
    return item;
  });

  json.data = updated;

  fs.writeFileSync(__dirname + "/data/data.json", JSON.stringify(json));
};

diffComic("SpiderMan");
