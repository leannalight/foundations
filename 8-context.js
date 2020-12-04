/* 8. Контекст */

// Определяет как функция была вызвана и поcтоянно указывает на ключевое слово this
// call, apply, bind

const person = {
    surname: 'Старк', 
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

const john = { surname: 'Сноу'}

person.knows('все', 'Бран')
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон']) // отличие от , что вторым аргументом идёт массив
person.knows.call(john, ...['ничего не', 'Джон'])
const bound = person.knows.bind(john, 'ничего не', 'Джон')
bound();

// ========================

function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}

const elena = new Person('Elena', 20) // Person { name: 'Elena', age: 20 }

// ====== Явная передача контекста (explicit)
function logThis() {
    console.log(this)
}

const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

// ====== Неявная передача контекста (implicit)
const animal = {
    legs: 4,
    logThis: function() {
        console.log(this)
    }
}

animal.logThis(); //  { legs: 4, logThis: [Function: logThis] }

// Как работают стрелочные функции

function Cat(color) {
    this.color = color;
    console.log('This', this);
    ( () => console.log('Arrow this', this))()
}

new Cat('red');

// This Cat { color: 'red' }
// Arrow this Cat { color: 'red' } 