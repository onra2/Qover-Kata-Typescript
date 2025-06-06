import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should degrade quality twice as fast after sell date', () => {
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });

  it('should not have negative quality', () => {
    const gildedRose = new GildedRose([new Item('Conjured Elixir of the Mongoose', -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('should increase Aged Brie quality over time', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(1);
    const items2 = gildedRose.updateQuality();
    expect(items2[0].quality).toBe(2);
    expect(items2[0].sellIn).toBe(0);
  });

  it('should increase Aged Brie quality over time by 1 after sell date', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(-2);
  });

  it('should increase Conjured Aged Brie quality over time by 1 after sell date', () => {
    const gildedRose = new GildedRose([new Item('Conjured Aged Brie', -1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
    expect(items[0].sellIn).toBe(-2);
  });

  it('should not increase item quality beyond 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('should not change Sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(0);
  });

  it('should increase Backstage Passes quality by 1 if days > 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
    expect(items[0].sellIn).toBe(14);
  });

  it('should increase quality of backstage passes by 2 if 10 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it('should increase quality of backstage passes by 3 if 5 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  it('should increase quality of conjured backstage passes by 2 if 10 days or less', () => {
    const gildedRose = new GildedRose([new Item('Conjured Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  it('should set quality to 0 after concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 33)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('should degrade quality twice as fast if its a conjured item (-2)', () => {
    const gildedRose = new GildedRose([new Item('Conjured Elixir of the Mongoose', 4, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });

  it('should degrade quality twice as fast after sell date + twice as fast if its a conjured item (-4)', () => {
    const gildedRose = new GildedRose([new Item('Conjured Elixir of the Mongoose', -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(16);
  });

  it('should set Sulfuras quality to 80 if it is not 80', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(0);
  });

  it('should not set Conjured item quality below 0', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
