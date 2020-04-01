export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 15;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

 feed() {
    if (this.foodLevel > 0) {
      this.foodLevel = 10;
      return true;
    } else {
      return false;
    }
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 2000);
  }

  lullaby() {
    if (this.sleepLevel > 0) {
      this.sleepLevel = 15;
      return true;
    } else {
      return false;
    }
  }
}
