export class Levels {

  constructor() {
    this.dayTime = 20;
    this.nightTime = 20;
  }

  setDayTime() {
    setInterval(() => {
      this.dayTime--;
    }, 4000);
  }

  setNightTime() {
    setInterval(() => {
      this.nightTime--;
    }, 2000);
  }

  switchToNight() {
    if (this.dayTime === 0) {
      this.nightTime = 20;
      return this.nightTime = true;
    } else {
      return this.nightTime = false;
    }
  }

  switchToDay() {
    if (this.nightTime === 0) {
      this.dayTime = true;
      this.dayTime = 20;
    } else {
      this.dayTime = false;
    }
  }
}
