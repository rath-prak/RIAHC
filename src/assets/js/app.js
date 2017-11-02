import $ from 'jquery';
import whatInput from 'what-input';
import anime from 'animejs';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


var toggleBtn = document.querySelector('.toggle-nav');
var toggleClose = document.querySelector('.toggle-close');

toggleBtn.onclick = function(){
    anime({
      targets: '.overlay-nav',
      translateY: 0,
      duration: 4000,
    });
}

toggleClose.onclick = function(){
    anime({
      targets: '.overlay-nav',
      translateY: '-100%',
      duration: 4000,
    });
}



$(document).foundation();
