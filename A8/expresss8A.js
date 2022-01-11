const express = require('express');
const app = express();
const path = require("path");
const port = 5412;
const bodyParser = require("body-parser");


app.set('view engine', 'ejs');

app.use (
    express.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());
//8A
app.get('/hello', (req, res) => res.send('Hello World!'));

//8B
app.get('/form', (req,res) => res.sendFile(path.join(__dirname,"/form8B.html")) );

//8C
app.post('/formdata', (req, res) => {
    const body = req.body;
    res.render(
        'formdata', {
            user_name: body.user_name,
            user_mail: body.user_mail,
            user_message: body.user_message
        }
    );
});

//8D
/*
* */
app.post(('/jsondata'),(req, res) => {
    const body = req.body;
    res.render(
        'jsondata', {
            user_name: body.user_name,
            user_mail: body.user_mail,
            user_message: body.user_message
        }
    );
})
app.listen(port, ()=> {
    console.log(`listening at  http://localhost:${port}`)});