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
    let result;

    now = +new Date();
    dateUser = +new Date(birthday);

    diff = now - dateUser;
    age = diff / 31536000000;
    age >= 18 ? result = `ДА` : result = `НЕТ`;
    
    console.log(result);
    return result;
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
    function animalSound(sound) {
        this.sound = sound;
    }
    animalSound.prototype = animal;
    console.log(animal.sound);
    if (animal = 'underfined') {
        return result = 'null';
    } else {
        return result = animal.sound;
    }
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