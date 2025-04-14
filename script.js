
function gameOne() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    let userInput;
    while (userInput !== randomNumber) {
        userInput = prompt('Угадай число от 1 до 100');
        if (!userInput) return alert('Игра отменена!')
        if (userInput < randomNumber) {
            alert('Не угадал. Попробуй больше!');
        } else if (userInput > randomNumber) {
            alert('Не угадал. Попробуй меньше!')
        } else if (userInput === randomNumber) {
            alert('Молодец, угадал');
        } else {
            alert('Вы ввели неправильное значениие!');
        }   
    }  
    
    console.log('Кнопка "Играть" нажата!');
};
