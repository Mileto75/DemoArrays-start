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
    PrintArrayInfo(arNumbers);
    AddItemToArray(arNumbers,'test');
    RemoveLastItemFromArray(arNumbers);
    RemoveFirstElementFromArray(arNumbers);
    let strArray = ParseArrayToString(arNumbers);
    let arrayStr = ParseStringToarray(strArray);
    let arJoined = JoinTwoArrays(arNumbers,arrayStr);
    SortArray(arNumbers);
    AddFirstValueToArray(arNumbers,35);
    CheckIfNumbers(arNumbers);
    GetNumbersGreaterThan(arNumbers,10);
    FindInArray(arNumbers,10);
    FindIndexOfValue(arNumbers,10);
    IndexOfValue(arNumbers,10);
    FindIndexOfValue(arNumbers,10);
    LastIndexOfValue(arNumbers,10);
    CalculateSumWithReduce(arNumbers);
    CheckIfValueInArray(arNumbers,10);
    CheckIfSomeValueInArray(arNumbers,2);
    MultiplyArrayElementsWithRandomNumber(arNumbers);
}
