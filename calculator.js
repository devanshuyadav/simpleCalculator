
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "\\index.html");
});


app.post("/", function (req, res) {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The result is " + result);
})

app.listen(3000);

// bmicalculator
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "\\bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    var ht = parseFloat(req.body.height);
    var wt = parseFloat(req.body.weight);
    var bmi = wt / (ht * ht);
    res.send("BMI = " + bmi);
});