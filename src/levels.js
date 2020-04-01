export class Levels {
  constructor(day, night) {
    this.day = day;
    this.night = night;
  }

  switchLevels() {
    if (this.day === true) {
      return this.day;
    } else if (this.night === true) {
      return this.night;
    }
  }
}
