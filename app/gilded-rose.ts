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

      if(isSulfuras) {
        continue; // Sulfuras does not change
      }

      let degradeRate = 1;
      if(item.sellIn < 0){
        degradeRate = 2;
      }

      item.sellIn--;
      if (isBrie || isBackstage) {
        item.quality += degradeRate;
      }
      else{
        item.quality -= degradeRate;
      }

      if(item.quality < 0){
        item.quality = 0;
      }
      if(item.quality > 50){
        item.quality = 50;
      }
    }
    return this.items;
  }
}
