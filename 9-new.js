/* 9. Как работает new */
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

const cat = myNew(Cat, 'black', 'КОТ')
console.log(cat)


 const cat = new Cat();
 console.log(cat);

 /* Вызывая ф-ию с ключевым словом new перед вызовом, движок
 создает новый пустой объект и записывает его в значение this внутри
 этой ф-ии, затем исполняет код ф-и и возвращает this */

 function Song(title, artist) {
     this.title = title;
     this.artist = artist;
     this.isLiked = false;
 }

 const song1 = new Song('Футбольный мяч', 'Антоха МС');
 console.log(song1);

 // Функции, предназначенные для того, чтобы их вызывали с оператором new, 
//  называют функциями-конструкторами