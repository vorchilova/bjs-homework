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
    let totalAmount, sumPercent, p, months;
    let newPercent, newContribution, newAmount, newDate;
    let today = new Date();
    newPercent = parseFloat(percent);
    newContribution = parseFloat(contribution);
    newAmount = parseFloat(amount);

    if (Number.isNaN(newPercent)) {
        totalAmount = `Параметр процентная ставка содержит неправильное значение ${percent}`;
    } else if (Number.isNaN(newContribution)) {
        totalAmount = `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (Number.isNaN(newAmount)) {
        totalAmount = `Параметр сумма кредита содержит неправильное значение ${amount}`;
    } else {
        months = (date.getFullYear() - 1 - today.getFullYear())*12 + Math.abs(date.getMonths() - today.getMonths());
        console.log(months);
        sumPercent = newAmount - newContribution;
        p = newPercent / 12*100;
        totalAmount = sumPercent*(p+p/(((1+p)^months)-1));
    }

    console.log(`Сумма платежа равна ${totalAmount.toFixed(2)}`);
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
    let greeting;
    if ((name === null) || (name === "") || (typeof name === 'undefined') || (name === " ")){
        greeting = `Привет, мир! Меня зовут Аноним.`;
     } else {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    }
    return greeting;
}