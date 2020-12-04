/* 3. Как работает Scope */ 

// Scope это что-то, что говорит нам о доступности переменных в функции
// Существует 2 понятия: глобальный скоуп и локальный скоуп
// Scope - это область видимости

function funcA() {
    let a = 1

    function funcB() {
        let b = 2

        function funcC() {
            let c = 3
            console.log('funcC:', a, b, c)
        }
        funcC()
        console.log('funcB:', a, b)
    }
    funcB()
    console.log('funcA:', a)
}

funcA();

// funcC: 1 2 3
// funcB: 1 2
// funcA: 1