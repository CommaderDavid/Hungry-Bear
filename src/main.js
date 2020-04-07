import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './hungrybear.js';
import { Levels } from './levels.js';

$(document).ready(function() {

  let time = new Levels();
  let fuzzy = new HungryBear("Fuzzy");

  let dayInterval = () => {
    //creates the dayInterval variable
    let day = setInterval(() => {
      //creates the day variable that contains the setInterval
      if (time.dayTime > 0) {
        time.dayTime--;
        //decreases time by one
        $("#timeOfDay").empty().append(time.dayTime);
      } else if (time.dayTime === 0) {
        clearInterval(day);
        //allows the clearing of the interval
        nightInterval();
        //calls the second variable
        time.nightTime = 20;
        //resets the time
      }
    }, 4000);
    //do this every 4 seconds
  };

  let nightInterval = () => {
    let night = setInterval(() => {
      if (time.nightTime > 0) {
        time.nightTime--;
        $("#timeOfDay").empty().append(time.nightTime);
      } else if (time.nightTime === 0) {
        clearInterval(night);
        dayInterval();
        time.dayTime = 20;
      }
    }, 2000);
  };

  $("button#start").click(function() {
    dayInterval();

  });

  $("button#feed").click(function() {

  });

  $("button#sing").click(function() {

  });
});
