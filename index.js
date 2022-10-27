import Magican from './src/js/Magican.js';

const magic = new Magican('testName');
magic.attack = { attack: 100, position: 2 };
magic.stoned = true;
console.log(magic.stoned);
console.log(magic.attack);
