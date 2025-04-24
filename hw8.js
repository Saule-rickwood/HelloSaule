// Задание 1
{
    const people = [
        { name: 'Глеб', age: 29 },
        { name: 'Анна', age: 17 },
        { name: 'Олег', age: 7 },
        { name: 'Оксана', age: 47 }
     ];
     
     console.log(people.sort((a, b) => a.age - b.age));
     
}


// Задание 2

function isPositive(number) {
if (number > 0) {
    return true;
} else {
    return false; 
}
}
function isMale(person) {
if (person.gender === 'male') {
    return true;
} else {
    return false;  
}
}
function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
          result.push(array[i]);
      }  
    }
    return result; 
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));


// Задание 3

function timer() {
    const interval = setInterval(() => {
        console.log(new Date());
    },
        3000) 
    setTimeout(() => {
        console.log('Время вышло!');
        clearInterval(interval);
    }, 30000)
      
}
//timer()


// Задание 4

    function delayForSecond1(callback) {
        setTimeout(() => {
            callback();
        }, 1000)
    }
    delayForSecond1(function () {
       console.log('Привет, Глеб!');
    })



// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));



