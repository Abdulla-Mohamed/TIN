let amount = 46
let coinTypes = [25,10,5,2,1];

function moneyConverter (moneyAmount, coinsTypes)
{
    console.log("The conversion of " + moneyAmount );
    let chosenCoin = [];
    coinsTypes = coinsTypes.sort((x, y) => x - y).reverse();
    for (let i = 0; i < coinsTypes.length; i++) {
        while (moneyAmount >= coinsTypes[i]) {
        moneyAmount = moneyAmount - coinsTypes[i];
        chosenCoin.push(coinsTypes[i]);
        }
    }

    console.log("from the coin set of " + coinsTypes + " is: ");
    console.log(chosenCoin);
}

moneyConverter(amount,coinTypes);

