//Node modules
var bar = require('./content.js');
bar();


//ES6 modules

import Point from './Point';
var body = document.querySelector('body');

body.textContent = 'Good point: ' + new Point(28, 12);
