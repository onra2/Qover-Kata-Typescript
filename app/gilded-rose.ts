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
      const isSulfuras = item.name.toLowerCase().includes('sulfras');
      const isBrie = item.name.toLowerCase().includes('aged brie');
      const isBackstage = item.name.toLowerCase().includes('backstage passes to a tafkal80etc concert');

      if(isSulfuras) {
        item.quality = 80; // Sulfuras quality is always 80
        continue; // Sulfuras does not change
      }

      let degradeMultiplier = 1;
      if(item.sellIn < 0){
        degradeMultiplier = 2;
      }

      if(isConjured){
        degradeMultiplier *= 2;
      }

      if (isBrie){
        item.quality += 1 * degradeMultiplier;
      }
      else if(isBackstage){
        if (item.sellIn < 0) {
          item.quality = 0;
        }
        else if(item.sellIn < 6){
          item.quality += 3;
        }
        else if(item.sellIn < 11){
          item.quality += 2;
        }
      }
      else{
        item.quality -= 1 * degradeMultiplier;
      }

      item.sellIn--;
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
