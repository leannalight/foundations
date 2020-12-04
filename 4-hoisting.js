/* 4.Что такое hoisting */
// Показывает как работает интерпретатор
// hoisting это когда javascript при интерпретации какого-либо файла берет и перемещает определение некоторых вещей,
// например, функций - в начало файла. Т.е мы можем к ним обращаться до того, как мы их определили

console.log(sum(1, 41)); // 42

function sum(a, b) {
    return a + b;
} 

// =========================
var i
console.log(i) // undefined
i = 42
console.log(i) // 42 */

// Есть разница в использовании var и const. Переменные let и const не подвержены хойстингу

console.log(num) // ReferenceError: Cannot access 'num' before initialization
const num = 42
console.log(num) // 42 */

// Function declaration
console.log(square(25)); // 625

function square(num) {
    return num ** 2
}
 
// Function expression
console.log(square(25)); // TypeError: square is not a function

var square = function(num) {
    return num ** 2
}

console.log(square(25)) // 625

