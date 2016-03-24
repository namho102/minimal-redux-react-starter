//Node modules
var bar = require('./content.js');
bar();


//ES6 modules

import Point from './Point';
var body = document.querySelector('body');

body.textContent = 'Good point: ' + new Point(24, 12);

import square from './square';
console.log(square(85));

//React
import HelloWorld from './hello.jsx';
import ReactDOM from 'react-dom';

ReactDOM.render(<HelloWorld/>, document.getElementById('hello'));



