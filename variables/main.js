//задача 1
let x, y, z, result;

x = 2;
y = 22;
z = 0;

result = x * y + 5 * z + x - 1;
console.log('Результат ' + result);

//задача 2
let algebra;
let geography;
let physics;
let total;

algebra = 5;
geography = 4;
physics = 5;

total = (algebra + geography + physics) / 3;
console.log('Итог ' + total);

//задача 3

let name;

name = 'Alina';

console.log(`Привет, мир! Меня зовут ${name}`);

class Weapon {

  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }

  takeDamage(damage) {
  let newDurability;
   newDurability = this.durability - damage;
   if (newDurability =< 0) {
       newDurability = 0;
   } else if (newDurability === 'Infinity') {
       newDurability = 'Infinity';
   }
    return newDurability;
 }

  getDamage() {
    if (newDurability >= this.durability*0.3) {
        return this.attack;
    } else if (newDurability = 0) {
       return 0;
    } else {
       return this.attack/2;
    }
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }

}

const arm = new Weapon('Рука', 1, 'Infinity', 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);