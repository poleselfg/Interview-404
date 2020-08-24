/*Iteration 3: Add quality considerations
A book degrades over time. Each book starts with an initial quality and after each day the quality diminishes by one.
When quality reaches 0 the store will have to remove the book from it's inventory.*/

const json = require(`../data/data.json`);
const fs = require("fs");

const now = new Date();

const diffBook = (bookName) => {
  const updated = json.data.map((item) => {
    if (bookName == item.titulo) {
      const itemTime = new Date(item.date).getTime();
      const diff = now - itemTime;
      var diffDays = diff / (1000 * 60 * 60 * 24);
      item.quality = item.quality -= diffDays;
    }
    if (item.quality <= 0) {
      item.cantidad = 0;
    }
    return item;
  });

  json.data = updated;

  fs.writeFileSync(__dirname + "/data/data.json", JSON.stringify(json));
};

diffBook("Rayuela");
diffBook("El Aleph");
