/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../../front/css/custom.scss';
import '../vendor/owlcarousel/assets/owl.carousel.css';
import '../vendor/animate/animate.css';
import '../../front/css/bootstrap.min.css';
import '../../front/css/style.css';

// start the Stimulus application
//import './bootstrap';

// import bootstrap
import 'bootstrap';

// import jquery
const $ = require('jquery');
require('bootstrap');

// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

// import javascript
//import '../vendor/wow/wow';
import '../vendor/easing/easing';
import '../vendor/waypoints/waypoints.min';
import '../vendor/counterup/counterup.min';
import '../js/main';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');