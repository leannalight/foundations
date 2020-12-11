/* 5. Переменные let и const */
// C появлением нового синтаксиса ES6 появились let и const вместо var
// let - позволяет создавать переменные, которые впоследствии мы можем изменить

let a = 'Variable a'
let b = 'Variable b'
// block scope - рамки фигурных скобок - область видимости
{
    a = 'New Variable A'
    let b = 'Local Variable B'
    console.log('Scope A', a)
    console.log('Scope B', b)
    console.log('Scope C', c)
    let c = 'Something'
}
console.log('A:', a)
console.log('B:', b)

// Const
PORT = 8080;
const array = ['Javascript', 'is', 'Awesome'];
array.push('!');
array[0] = 'JS';
console.log(array);

const obj = {};
obj.name = 'David';
obj.age = 26;

console.log(obj);

delete obj.name;

console.log(obj);