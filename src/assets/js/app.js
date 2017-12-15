import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax} from 'gsap';

import overlayNav from './components/overlayNav';
import menuBtnAnimation from './components/menuBtnAnimation';


window.$ = $;

import Foundation from 'foundation-sites';

//navigation menu animation
menuBtnAnimation();

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

overlayNav();


$(document).foundation();
