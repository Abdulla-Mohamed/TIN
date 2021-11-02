let x = 3;
const recursion = (n) => {
    if (n === 0) {
        return 1; }
    else { return recursion(n-1)*n;}
}
console.log("using recursion factorial " +  x + " is : "+ recursion(x) );

function iteration (n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log("using iteration factorial " +  x + " is : "+ iteration(x) );
