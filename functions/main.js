"use strict";
let a, b, c;
function getSolutions(a,b,c) {
  let d = b*b - 4*a*c;
  let x1, x2;
    if (d < 0) {
        return { D: d };
    } else if (d === 0) {
        x1 = -b / 2 * a;
        return { D: d, roots: [x1] };
    } else if (d > 0) {
       x1 = (Math.sqrt(d) - b) / 2*a;
       x2 = (-Math.sqrt(d) - b) / 2*a;
       return { D: d, roots: [ x1, x2 ] };
    }

}

function showSolutionsMessage(a,b,c) {
  let result = getSolutions(a,b,c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${result.D} \n `);
  if (result.D < 0) {
   console.log(`Уравнение не имеет вещественных корней`);
} else if (result.D === 0) {
   console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);


function getPersonData( secretData ) {
  function getName(num) {
    let name;
    if (num === 0) {
      name = 'Родриго';
    } else if (num === 1) {
      name = 'Эмильо';
    }
    return name;
  }
 
  return {firstName: getName(secretData.aaa), lastName: getName(secretData.bbb)};
}

console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));

function getAverageScore(data) {
  let average;
  let resultAverageScore = {};

  for (let key in data) {
   let value = data[key];
   let count;
   count++;
   function getArrAverage(arr) {
    let arrAverageValue = 0;
    let totalAverageValue;
    for (let i = 0; i < arr.length; i++) {
      arrAverageValue = arr[i] + arrAverageValue;
      }
      return arrAverageValue / arr.length;
  }
  resultAverageScore[key] = getArrAverage(value);

  }
   
  return resultAverageScore;
}

console.log(getAverageScore({
  algebra: [5,4,3],
  geometry: [3,3,3],
  russian: [4,2,3]
}));

//не знаю как посчитать итоговую отметку за все предметы