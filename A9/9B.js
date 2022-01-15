const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const operation = document.getElementById("operation");
const result = document.getElementById("result");

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        result.value = `result: ${JSON.parse(xhttp.responseText).result}`;
    }
};

let clickToSubmitHandler = () => {
    xhttp.open("POST", "http://localhost:5412/calc", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(
        JSON.stringify({v1: v1.value, v2: v2.value, operation: operation.value})
    );
};