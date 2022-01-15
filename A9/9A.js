const express = require('express');
const app = express();
const path = require("path");
const port = 5412;
const bodyParser = require("body-parser");
app.use(express.static(__dirname));

app.use (
    express.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());

app.post(('/calc'),(req, res) => {
    const body = req.body;
    const v1 = parseInt(body.v1);
    const v2 = parseInt(body.v2);
    const operation = body.operation;
    let result;

    const header = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };

    if(isNaN(v1) ||  isNaN(v2) ) {
        result = "inavlid v1 or v2";
        res.statusCode = 400;
    }

    switch (operation) {
        case "+":
            result = v1 + v2;
            break;
        case "-":
            result = v1 - v2;
            break;
        case "*":
            result = v1 * v2;
            break;
        case "/":
            if (v2 === 0) {
                result = "can't divide by 0"
                break;
            }
            else
            {
                result = v1 / v2;
                break;
            }

    }
    res.send ({ headers: header, result: result});
});

app.get("/calc", (req,res) => {
    res.sendFile(path.join(__dirname,"9B.html"));
})

app.listen(port, ()=> {
    console.log(`listening at  http://localhost:${port}`)});