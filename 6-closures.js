/* 6.Замыкания */

// Это момент, когда функция имеет доступ до переменных из вышестоящего скоупа

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function() {
            console.log(fw)
        },
        add: function(framework) {
            fw.push(framework)
        }
    }
}
 const manager = createFrameworkManager()
 //console.log(manager)
 manager.print() // ['Angular', 'React']
 manager.add('VueJS')

 manager.print() // ['Angular', 'React', 'VueJS]*/

 // setTimeout

 const fib = [1, 2, 3, 5, 8, 13]
 for (var i = 0; i < fib.length; i++) {
     setTimeout(function () {
         console.log(`fib[${i}] = ${fib[i]}`)
     }, 1500)
 }

 // fib[6] = undefined
// заменяем var на let
 const fib = [1, 2, 3, 5, 8, 13]
 for (let i = 0; i < fib.length; i++) {
     setTimeout(function () {
         console.log(`fib[${i}] = ${fib[i]}`)
     }, 1500)
 }

 // Если мы не можем использовать ES6 синтаксис, то на помощь к нам приходит замыкание
 const fib = [1, 2, 3, 5, 8, 13]
 for (var i = 0; i < fib.length; i++) {
    (function(j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
 }
