import $ from 'jquery';
import whatInput from 'what-input';
import anime from 'animejs';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


var cssSelector = anime({
  targets: '.test-box ',
  translateX: 250,
  duration: 12000,
  loop: true,
});

$(document).foundation();
