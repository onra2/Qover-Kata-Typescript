import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should increase Aged Brie quality over time', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(1);
    const items2 = gildedRose.updateQuality();
    expect(items2[0].quality).toBe(2);
    expect(items2[0].sellIn).toBe(0);
    const items3 = gildedRose.updateQuality();
    expect(items3[0].quality).toBe(3);
    expect(items3[0].sellIn).toBe(-1);
    const items4 = gildedRose.updateQuality();
    expect(items4[0].quality).toBe(4);
    expect(items4[0].sellIn).toBe(-2);
  });

  // it('should not increase Aged Brie quality beyond 50', () => {
  //   const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(50);
  // });

  // it('should not change Sulfuras', () => {
  //   const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(80);
  //   expect(items[0].sellIn).toBe(0);
  // });

  // it('should increase Backstage Passes quality by 1 when sellIn > 10', () => {
  //   const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(21);
  // });

  // it('should increase Backstage Passes quality by 2 when 10 >= sellIn > 5', () => {
  //   const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(22);
  // });

  // it('should increase Backstage Passes quality by 3 when 5 >= sellIn >= 1', () => {
  //   const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(23);
  // });

  // it('should drop Backstage Passes quality to 0 after the concert', () => {
  //   const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // });

  // it('should degrade Conjured items twice as fast before sell date', () => {
  //   const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 6)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(4);
  //   expect(items[0].sellIn).toBe(2);
  // });

  // it('should degrade Conjured items twice as fast after sell date', () => {
  //   const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 6)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(2);
  //   expect(items[0].sellIn).toBe(-1);
  // });

  // it('should not set Conjured item quality below 0', () => {
  //   const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 1)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // });
});
