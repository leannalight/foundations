/* 10.Как работают прототипы */
// Каждый объект имеет свой прототип, который берется от родительского элемента
// Свойство __proto__ указывает на прототип родительского класса или объекта
// В js всё идет по цепочке прототипного наследования

// __proto__ (ES6)
// Object.getPrototypeOf() (синтаксис ES5)

// свойство prototype у различных функций

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says myay`)
}

const cat = new Cat('Kot', 'white');

console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__ === Cat.prototype);
console.log(cat.onstructor)
// cat.voice()

// ============
function Person() {} 
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person()
person.name = 'Vlad'

console.log('skin' in person)
console.log(person.legs);
console.log(person.name)

console.log(person.hasOwnPropertry('name'));
console.log(person.hasOwnPropertry('skin'));

// Метод Object.create()
const proto = {year: 2020}
const myYear = Object.create(proto)

console.log(myYear.year)

// proto.year = 2200;
//
// console.log(myYear.year)

proto = {year: 999}
console.log(myYear.year)

// console.log(myYear.hasOwnPropertry('year'));
// console.log(myYear.__proto__ === proto);
