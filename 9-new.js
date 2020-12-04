/* Как работает new */
// ключевое слово new

function Cat(color, name) {
    this.color = color;
    this.name = name;
}

const cat = new Cat('black', 'КОТ') // появляется новый экземпляр класса cat
console.log(cat)

function myNew(constructor, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj;
}

const cat = myNew(Cat, args: 'black', 'КОТ')
console.log(cat)


 const cat = new Cat();
 console.log(cat);
