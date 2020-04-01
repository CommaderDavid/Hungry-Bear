// use "debugger" to look for bugs and broken code.
import { HungryBear } from './../src/hungrybear.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
    fuzzy.setSleep();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name, a food level of 10, and a sleep level of 15 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
    expect(fuzzy.sleepLevel).toEqual(15);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should have a sleep level of 10 after 10001 milliseconds', () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.sleepLevel).toEqual(10);
  });

  test('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have sleep level of 15 if it is sang a lullaby', function() {
    jest.advanceTimersByTime(24001);
    fuzzy.lullaby();
    expect(fuzzy.sleepLevel).toEqual(15);
  })

  test('should not be able to do anything if "eaten"', function() {
    fuzzy.foodLevel = 0
    fuzzy.feed();
    expect(fuzzy.feed()).toEqual(false);
  });
});
