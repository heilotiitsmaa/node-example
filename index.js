//const {generateRandomNumber, celciusToFahrenheit} = require('./utils');
//console.log(`Random Number: ${generateRandomNumber()}`);
//console.log(`Celcius: ${celciusToFahrenheit(30)}`);
//ei saa eelnevat kasutada, kuna need ei ole modulaarselt tehtud, vaja modifitseerida

import getPosts, {getPostslength} from './postController.js';

console.log(getPosts());

console.log(`Posts Length: ${getPostslength()}`);

