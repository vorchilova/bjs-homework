"use strict";
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let now;
    let dateUser;
    let diff;
    let age;

    now = +new Date();
    dateUser = +new Date(birthday);
    diff = now - dateUser;
    age = diff / 31536000000;
    console.log(now + " " + dateUser + " " + diff + "age=" + age);

    /*let result;
    let resultForOlder18, resultForUnder18;
    let ageGuest;
    let today = new Date();

    ageGuest = today.getFullYear() - dateOfBirthday.getFullYear();
     console.log(ageGuest);
    ageGuest >= 18 ? result = `Не желаете ли олд-фэшн, ${name} ?` : result = `Сожалею, ${name} , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    
    console.log(result);
    return result;*/

}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
}