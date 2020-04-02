import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HungryBear } from './hungrybear.js';
import { Levels } from './levels.js';

$(document).ready(function() {

  let time = new Levels();
  let fuzzy = new HungryBear("Fuzzy");

  $("button#feed").click(function() {

  });

  $("button#sing").click(function() {
    
  });
});
