import Character from './Character.js';

export default class Deamon extends Character {
  constructor(name) {
    super(name);
    this._attack = undefined;
    this._position = undefined;
    this._spell = false;
  }

  get attack() {
    const resultValue = this._attack - Math.floor((this._attack / 10) * (this._position - 1));
    this._attack = resultValue;
    if (this._spell) {
      const resultSpellValue = Math.floor(this._attack - Math.log2(this._position) * 5);
      this._attack = resultSpellValue;
      return resultSpellValue;
    }
    return resultValue;
  }

  set attack(param) {
    this._attack = param.attack;
    this._position = param.position;
  }

  get stoned() {
    return `Active : ${this._spell}`;
  }

  set stoned(param) {
    this._spell = param;
  }
}

const magic = new Deamon('testName');
magic.attack = { attack: 100, position: 2 };
magic.stoned = true;
console.log(magic.stoned);
console.log(magic.attack);
