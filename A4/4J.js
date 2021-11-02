let number = 8;
let numbersArray =  [1,2,3,4,5,6,7,8,9];

function binarySearch (n, arr, initialNumber, finalNumber) {
    let middleNumber =  Math.floor((initialNumber+finalNumber)/2);
    if (arr[middleNumber] === n) {
        return middleNumber;
    }
    else if (arr[middleNumber] < number)
    {
        return binarySearch(n,arr,middleNumber+1,finalNumber);
    }
    else {
        return binarySearch (n,arr,initialNumber,middleNumber-1);
    }
}
console.log("binary search of " + number + " in " + numbersArray + ":")
console.log(binarySearch(number,numbersArray,0,numbersArray.length));
