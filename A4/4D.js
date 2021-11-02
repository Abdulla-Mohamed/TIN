let words = "Webmaster";

function alphabeticOrder (string) {
    console.log("The alphabetic order of "+ string
        + " is " +string.toLowerCase().split("").sort().join(""));
}
alphabeticOrder(words);