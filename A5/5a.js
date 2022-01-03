let player =
    {
        Name:"Potato",
        Weapon:"Sword",
        Class:"Fighter",
        showFullName: function()
        {
            return this.Name + " " + this.Weapon;
        },
        isClass: function()
        {
            if(this.Class === "Wizard")
            {
                console.log("This player is not a wizard");
            }
            else
            {
                console.log("This player is a wizard");
            }
        },
        showWeapon: function ()
        {
            return this.Weapon;
        }
    };

let showFullDetails= function (player)
{
    var propValue;
    for(var propName in player) {
        propValue = player[propName]

        console.log(propName,propValue,typeof propName);
    }
};
showFullDetails(player);