function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}
setInputFilter(document.getElementById("age"), function(value) {
    return /^\d*$/.test(value); });

function validate()
{
    let name = document.forms["form"]["name"];
    let email = document.forms["form"]["email"];
    let age = document.forms["form"]["age"];
    let password = document.forms["form"]["password"];

    if (name.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        name.style.backgroundColor = "red";
        return false;
    }

    let atpos = email.value.indexOf("@");
    let dotpos = email.value.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        email.style.backgroundColor = "red";
        return false;
    }

    if  (password.value == "")
    {
        window.alert("Please enter your password");
        password.focus();
        password.style.backgroundColor = "red";
        return false;
    }

    if (age.value == "")
    {
        window.alert("Please enter your age.");
        age.focus();
        age.style.backgroundColor = "red";
        return false;
    }

    return true;
}