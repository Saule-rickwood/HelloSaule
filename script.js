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
