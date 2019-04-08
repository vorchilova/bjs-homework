"use strict";
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    let totalAmount;
    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);

    if (Number.isNaN(percent)) {
        totalAmount = `Параметр процентная ставка содержит неправильное значение ${percent}`;
    } else if (Number.isNaN(contribution)) {
        totalAmount = `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (Number.isNaN(amount)) {
        totalAmount = `Параметр сумма кредита содержит неправильное значение ${amount}`;
    } else {
        
    }

        

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}