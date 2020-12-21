function task1 (){
    const a = prompt('Введите число a - число для перевода в новую систему исчисления')
        if(typeof(+a) !== 'number' || +a !== +a ) {
            alert('Значение a введено некорректно')
            return task1()
        } else if(a === '') {
            alert('Нельзя передавать пустую строку. Введите корректное значение (число)')
            return task1()
        }
    const b = prompt('Введите число b - системa исчисления')
        if(typeof(+b) !== 'number' || +b !== +b) { 
            alert('Значение b введено некорректно')
            return task1()
        } else if(b === '') {
            alert('Нельзя передавать пустую строку. Введите корректное значение (число)')
            return task1()
        } else if(b < 2) {
            alert('В значение b должно быть передано число больше 2-х')
            return task1()
        }
        alert(a.toString(b))
    }

// task1()


function task2 () {
    const a = prompt('Введите число a')
        if(typeof(+a) !== 'number' || +a !== +a ) {
            alert('Значение a введено некорректно')
            return task2()
    } else if(a === '') {
        alert('Нельзя передавать пустую строку. Введите корректное значение (число)')
        return task1()
    }
    const b = prompt('Введите число b')
        if(typeof(+b) !== 'number' || +b !== +b) { 
            alert('Значение b введено некорректно')
            return task2()
        } else if(b === '') {
            alert('Нельзя передавать пустую строку. Введите корректное значение (число)')
            return task1()
        }
    const c = prompt('Введите строку')
        return console.log(`${c}: \n Разность: ${a - b} \n Частное: ${(a / b).toFixed(2)} `)
}

// task2()


// ========== Task deepCopy begins

function deepCopy(obj){
    let newObj = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            (typeof obj[key] !== 'object') 
            ? newObj[key] = obj[key] 
            : newObj[key] = deepCopy(obj[key])
        }
    }
    return newObj;
    }

// ========== Test 

let person1 = {
    name: 'Evgenii', 
    answers:{
            mostLiked: 'Footbal',
            notLiked: 'Cleaning',
        },
    age: 18
}

let person2 = deepCopy(person1)

person2.name = 'Andrei'
person2.answers.notLiked = 'Swimming'

console.log('Person1:', person1)
console.log('Person2 :', person2)

// ========== Test ends

// ========== Alternative decision:  const newObj = JSON.parse(JSON.stringify(obj));

// ========== Task deepCopy ends


// ========== Task myIterable begins

function correctValues (obj){
    let isCorrect = true
        if(!('from' in obj)){
            console.log('Введите параметр from')
            isCorrect = false
        } else if(!('to' in obj)){
            console.log('Введите параметр to')
            isCorrect = false
        } else if(obj['from'] === undefined || typeof(obj['from']) !== 'number' || obj['from'] !== obj['from']){
            console.log('Введите корректное значение параметра from')
            isCorrect = false
        } else if(obj['to'] === undefined || typeof(obj['to']) !== 'number' || obj['to'] !== obj['to']){
            console.log('Введите корректное значение параметра to')
            isCorrect = false
        }
    return isCorrect
}

function myIterable(obj) {
    if(correctValues(obj)){
        obj[Symbol.iterator] = function () {
            if(this.from <= this.to){   
                return {

                    begins: this.from,
                    ends: this.to,
    
                    next() {
                        return (this.begins <= this.ends) 
                                    ? {done: false, value: this.begins++}
                                    : {done: true}
                    }
                }
            } else if (this.from >= this.to) {
                return {

                    begins: this.from,
                    ends: this.to,
    
                    next() {
                        return (this.begins >= this.ends) 
                                    ? {done: false, value: this.begins--}
                                    : {done: true}
                        
                    }
                }
            } else {
                return {
                    next() {
                        return {done: true}
                    }
                }
            }
        }
    }
    
}

// ======== Test begins

// let obj = {
//     from: 1,
//     to: 4,
// }

// myIterable(obj)

// for (let item of obj) {
//     console.log(item); 
// }

//========== Test ends

//========== Task myIterable ends


//========== Task takeFromInterval begins

function takeFromInterval (arr, from, to){
    if (from <= to){
        return newArr = arr.filter(element => {
            return from <= element && element <= to
        })
    } else if (to >= from){
        return newArr = arr.filter(element => {
            return to <= element && element <= from
        })
    } else {
        return newArr = []
    }
}

//======= Test begins 

// let arr = [1,2,3,4,5,6,7,8,9]

// console.log(takeFromInterval(arr,2,3))

//========= Test ends

//======== Task takeFromInterval ends


