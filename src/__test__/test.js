import Character from '../js/Character.js';
import Deamon from '../js/Deamon.js';
import Magican from '../js/Magican.js';

test('testing chracter Class', () => {
  const character = new Character('testName');
  expect(character.name).toBe('testName');
});

test('testing Deamon attack', () => {
  const deamon = new Deamon('testName');
  deamon.attack = { attack: 100, position: 2 };
  expect(deamon.attack).toBe(90);
});

test('testing Magican attack', () => {
  const magican = new Magican('testName');
  magican.attack = { attack: 100, position: 5 };
  expect(magican.attack).toBe(60);
});

test('testing Deamon attack with spell', () => {
  const deamon = new Deamon('testName');
  deamon.attack = { attack: 100, position: 2 };
  deamon.stoned = true;
  expect(deamon.attack).toBe(85);
});

test('testing Magican attack with spell', () => {
  const deamon = new Deamon('testName');
  deamon.attack = { attack: 100, position: 5 };
  deamon.stoned = true;
  expect(deamon.attack).toBe(48);
});
