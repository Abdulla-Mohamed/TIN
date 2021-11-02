let uString = "Potato my tomato please get me a potatolessBow";

function longestWordInAString (string) {
    let words = string.split(" ");
    let longestWord = words[0].length;
    let longestWordIndex = 0;
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i].length;
        if(currentWord > longestWord) {
            longestWordIndex = i;
            longestWord = currentWord;
        }

    }
    console.log('longest word in the sentence is: '+  words[longestWordIndex]);
}
longestWordInAString(uString);