"use strict";

//declare global vars here
var arNumbers;
var divResult;
//wait for document load
window.addEventListener('load',Initialize);

function Initialize()
{
    divResult = document.querySelector('#divResult')
    arNumbers =  [1,2,5,6,8,9,10];
    printArrayInfo(arNumbers);
    addItemToArray(arNumbers,'test');
    removeLastItemFromArray(arNumbers);
    removeFirstElementFromArray(arNumbers);
    let strArray = parseArrayToString(arNumbers);
    let arrayStr = parseStringToarray(strArray);
    let arJoined = joinTwoArrays(arNumbers,arrayStr);
    sortArray(arNumbers);
    addFirstValueToArray(arNumbers,35);
    checkIfNumbers(arNumbers);
    getNumbersGreaterThan(arNumbers,10);
    findInArray(arNumbers,10);
    findIndexOfValue(arNumbers,10);
    indexOfValue(arNumbers,10);
    findIndexOfValue(arNumbers,10);
    lastIndexOfValue(arNumbers,10);
    calculateSumWithReduce(arNumbers);
    checkIfValueInArray(arNumbers,10);
    checkIfSomeValueInArray(arNumbers,2);
    multiplyArrayElementsWithRandomNumber(arNumbers);
}
