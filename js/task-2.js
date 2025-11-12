class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(item) {
    const deleteIndex = this.#items.indexOf(item);

    if (deleteIndex !== -1) {
      this.#items.splice(deleteIndex, 1);
    } else {
      console.log("Такого товару не існує!");
    }
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");

storage.removeItem("🍇");
console.table(storage.items); // [ '🍎', '🍑', '🍌' ]
