document.getElementById('play-button').addEventListener('click',
    function gameOne() {
        let randomNumber = +prompt('Угадай число');
        if (randomNumber < 0) {
            alert('число не может быть отрицательным');
        } else if (randomNumber >= 0 && randomNumber <= 100) {
            alert('молодец,угадал!')
        } else if (randomNumber > 100) {
            alert('число не может быть больше 100!');
        } else {
            alert('Вы ввели неправильное значениие!');
        }

        console.log('Кнопка "Играть" нажата!');
    });
