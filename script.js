function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  let userInput;
  while (userInput !== randomNumber) {
    userInput = prompt("Угадай число от 1 до 100");
    if (!userInput) return alert("Игра отменена!");
    if (userInput < randomNumber) {
      alert("Не угадал. Попробуй больше!");
    } else if (userInput > randomNumber) {
      alert("Не угадал. Попробуй меньше!");
    } else if (userInput === randomNumber) {
      alert("Молодец, угадал");
    } else {
      alert("Вы ввели неправильное значениие!");
    }
  }

  console.log('Кнопка "Играть" нажата!');
}

function simpleArithmetics() {
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const firstNumber = Math.floor(Math.random() * 100 + 1);
  const secondNumber = Math.floor(Math.random() * 100 + 1);
  let result = 0;
  let userAnswer = '';
  switch (operator) {
    case "+":
         
          while (userAnswer !== result) {
            userAnswer = prompt(`${firstNumber} + ${secondNumber}`);
              if (!userAnswer) return alert("Игра отменена!");
              result = firstNumber + secondNumber;
              if (Number(userAnswer) === result) {
                  alert("Верно");
                  break
              } else {
                alert("Неверно");
              } 
          }
          
          break;

      case "-":
          while (userAnswer !== result) {
            userAnswer = prompt(`${firstNumber} - ${secondNumber}`);
            if (!userAnswer) return alert("Игра отменена!");
                  result = firstNumber - secondNumber;
              if (Number(userAnswer) === result) {
                  alert("Верно");
                  break
              } else {
                alert("Неверно");
              } 
        }
          
            break;
      case "*":
          while (userAnswer !== result) {
            userAnswer = prompt(`${firstNumber} * ${secondNumber}`);
            if (!userAnswer) return alert("Игра отменена!");
                      result = firstNumber * secondNumber;
                  if (Number(userAnswer) === result) {
                      alert("Верно");
                      break
                  } else {
                    alert("Неверно");
                  } 
        }
          
          break;
      case "/":
          while (userAnswer !== result) {
            userAnswer = prompt(`${firstNumber} / ${secondNumber}`);
            if (!userAnswer) return alert("Игра отменена!");
                  result = Math.floor(firstNumber / secondNumber);
              if (Number(userAnswer) === result) {
                  alert("Верно");
                  break
              } else {
                alert("Неверно");
              }  
        }
         
            break;
    default:
          break;
  }
  console.log(operator, firstNumber, secondNumber);
}


function reverseText(){
  let input = prompt('Введите текст:');
  let reversedText = '';
  if (!input ) {
    alert('Игра отменена!');
    return 
  }

  reversedText = input.split('').reverse().join('');
  alert(reversedText);
  console.log(reversedText);
  
}



function quiz() {
  const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2 
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];
  let correctAnswers = 0;
  
  for (const item of quiz) {
    const userAnswer = prompt(item.question + '\n' + item.options.join(' '));
    if (!userAnswer) {
      alert('Игра отменена!');
      return
    }
    if (+userAnswer === item.correctAnswer) {
      correctAnswers += 1;
    }
  }
 alert(`Вы правильно ответили на ${correctAnswers} вопроса!`) 
}


function rockScissorsPaper() {
  const userAnswer = prompt('Введите вариант: Камень ножницы бумага!')
  const options = ['камень', 'ножницы', 'бумага']
  const compAnswer = options[Math.floor(Math.random() * options.length)];
  if (!userAnswer) {
    alert('Игра отменена!')
    return 
  }
  if (userAnswer.toLowerCase() === compAnswer.toLowerCase()) {
    alert('Ничья');
  }
  else {
    if (userAnswer.toLowerCase() === options[0] && compAnswer.toLowerCase() === options[1]) {
      alert('Вы выйграли!');
    }

    else if (userAnswer.toLowerCase() === options[0] && compAnswer.toLowerCase() === options[2]) {
      alert('Вы проиграли!');
    }

     else if (userAnswer.toLowerCase() === options[1] && compAnswer.toLowerCase() === options[0]) {
      alert('Вы проиграли!');
    } 
    else if (userAnswer.toLowerCase() === options[1] && compAnswer.toLowerCase() === options[2]) {
      alert('Вы выйграли!');

    } 
    else if (userAnswer.toLowerCase() === options[2] && compAnswer.toLowerCase() === options[0]) {
      alert('Вы выйграли!');
    } 
    else if (userAnswer.toLowerCase() === options[2] && compAnswer.toLowerCase() === options[1]) {
      alert('Вы проиграли!');
    } 
    else {
      alert('Вы ввели что-то не то!')
    }
  }
  console.log(compAnswer);
}

