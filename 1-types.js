/* 1. Типы данных в JavaScript */ 

// null, undefined, boolean, number, string, object, symbol
// null - нет значения, но переменная была объявлена
// undefined - используется когда переменная была не объявлена, или когда функция ничего не возвращает 

console.log(typeof 0); // number
console.log(typeof true); // boolean
console.log(typeof 'Javascript'); // "", ''. `` string
console.log(typeof undefined); // undefined
console.log(typeof Math); // object
console.log(typeof Symbol('JS')); // symbol
console.log(typeof null); // object, на самом дела null
console.log(typeof function() {}); // function
console.log(typeof NaN); // number

// Приведение типов
let language = 'JavaScript';
if (language) {
    console.log('The best language is: ', language)
}

// '', 0, undefined, NaN, false
console.log(Boolean('')); //false
console.log(Boolean('Hello')); //true
console.log(Boolean(' ')); //true
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean([])); // true
console.log(Boolean({})); //true
console.log(Boolean(function(){})); // true

// Строки и числа
console.log(1 + '2') // string 12
console.log('' + 1 + 0); // string 10
console.log('' - 1 + 0); // number -1, так как для строк не определен минус
console.log('3' * '8'); // number 24, так как для строк не определен знак умножения,
                        // поэтому строка переводися в число
 console.log(4 + 10 + 'px'); // string 14px
 console.log('px' + 5 + 10); // string px510
 console.log('42' - 40); // number 2, так как для строк нет оператора вычитание
 console.log('42px' - 2); // NaN
 console.log(null + 2); // number 2, null при приведении к числу будет 0
 console.log(undefined + 42); // NaN

 // == vs ===
// == с приведением типов, сравнивает по значениям
// === без приведения типов, сравнивает по типам
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log('0' == false); // true
console.log('0' == 0); // true
console.log(0 == 0); // true

// =====
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // fasle