let number = 13;
function isNumberPrime (n) {
   if (n <= 1)
   {
       console.log(n + ' is not prime');
       return 0;
   }
    for (let i = 2; i <n ; i++) {
        if(n%i===0){
            console.log(n + ' is not prime');
            return 0;
        }
    }

    console.log(n + ' is prime');
}
isNumberPrime(number);

