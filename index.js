function task1 (){
    const a = +prompt('Введите число a - число для перевода в новую систему исчисления')
        if(typeof(a) !== 'number' || a !== a) {
            alert('Значение a введено некорректно')
            return task1()
        } 
    const b = +prompt('Введите число b - системa исчисления')
        if(typeof(b) !== 'number' || b !== b) { 
            alert('Значение b введено некорректно')
            return task1()
        }
        alert(a.toString(b))
}

// task1()


function task2 () {
    const a = +prompt('Введите число a')
        if(typeof(a) !== 'number' || a !== a) {
            alert('Значение a введено некорректно')
            return task2()
    } 
    const b = +prompt('Введите число b')
        if(typeof(b) !== 'number' || b !== b) { 
            alert('Значение b введено некорректно')
            return task2()
        }
    const c = prompt('Введите строку')
        return console.log(`${c}: \n Сумма: ${a - b} \n Частное: ${(a / b).toFixed(2)} `)
}

// task2()