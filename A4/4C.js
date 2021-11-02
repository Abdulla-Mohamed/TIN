let pString = "bob";
function checkIfPalindrome (string) {
    string = string.toLowerCase();
     let leftStringHalf = string.slice(0, string.length/2);
     let rightStringHalf = " ";
     if (string.length % 2 === 0){
         rightStringHalf = string.slice(0, string.length / 2, string.length);
     }
     else {
         rightStringHalf = string.slice(string.length / 2+1, string.length);
     }
     let flipLeftHalf = leftStringHalf.split("").reverse().join("");
     if (flipLeftHalf === rightStringHalf)
     {
         console.log(string +" is a palindrome");
     }
     else
     {
         console.log(string +" is not a palindrome");
     }
}
checkIfPalindrome(pString);

