let numbers = [5,4,8,2,6,10,9,13,4];

function secondHighestAndLowest (numbersArray) {
    numbersArray.sort((x, y) => x - y);
    console.log ("The lowest number is " + numbersArray[0] +
    " The highest number is " + numbersArray[numbersArray.length - 1]);
}

secondHighestAndLowest(numbers);