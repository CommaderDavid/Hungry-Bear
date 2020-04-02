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


}
