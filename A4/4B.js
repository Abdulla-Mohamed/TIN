let x = 10;
function nFibonacci (n) {
    let n1 = 0, n2 =1, n3;
    for (let i = 1; i < n ; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }

    return n3;
}
console.log("Fibonacci of " +  x + " is : "+ nFibonacci(x) );
