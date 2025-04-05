export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const isConjured = item.name.toLowerCase().includes('conjured');
      const isSulfuras = item.name === 'Sulfuras, Hand of Ragnaros';
      const isBrie = item.name === 'Aged Brie';
      const isBackstage = item.name === 'Backstage passes to a TAFKAL80ETC concert';

      item.sellIn--;
      item.quality--;
    }
    return this.items;
  }
}
