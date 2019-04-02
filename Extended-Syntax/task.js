use strict;

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let discriminant;
    let x, x1, x2;
    discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        console.log("Корней нет");
    } else if (discriminant === 0) {
        x = -b / 2 * a;
        console.log(x);
        return x;
    } else if (discriminant > 0) {
       x1 = (Math.pow(discriminant, 0.5) - b) / 2*a;
       x2 = (-Math.pow(discriminant, 0.5) - b) / 2*a;
       x = [x1, x2]
       console.log(x);
       return x;
    }
    
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    let today = new Date();
    let todayYear = {};
    let birthdayYear = {};
    todayYear = today.getFullYear;
    birthdayYear = dateOfBirthday.getFullYear;
    todayYear - birthdayYear >= 18 ? result = "Не желаете ли олд-фэшн, " + name + " ?" : result = "Сожалею, " + name + " , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!";
    console.log(result)
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    let sumMarks;
    if (marks.length <= 5) {
       for (let i = 0; i < marks.length; i++) {
        sumMarks = sumMarks + marks[i];
       }
    } else {
        console.log("оценок должно быть меньше 5");
        let j = 0;
        while (marks.length > 5) {
            marks.pop();
        }
        for (let j = 0; j < marks.length; j++) {
        sumMarks = sumMarks + marks[j];
       }
    }
    averageMark = sumMarks / marks.length;
    return averageMark;
}
