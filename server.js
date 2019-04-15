var ex = require('express');
var app = ex();
var mongo = require('mongodb').MongoClient;
var path = require('path');
var d = require('body-parser');
var mongoose = require('mongoose');

app.use(d.json());

var dbo;

mongo.connect('mongodb://HarshaVardhan:1qaz2WSX@ds213183.mlab.com:13183/studentdb', (err, db) => {
    app.use(ex.static(path.join(__dirname, 'dist/COLOR')));
    if (err) throw err;
    dbo = db.db('database');

})

app.post('/log-in', (req, res) => {
    console.log(req.body);

    dbo.collection('').find({ $and: [{ username: req.body.username, password: req.body.password }] }).toArray((err, data) => {
        if (err) throw err;
        if (data[0] != null)

            res.send(data);
        else
            res.send(data);
    })
});


app.post('//stud-log', (req, res) => {
    dbo.collection('stud').find({ $and: [{ student: req.body.user, paw: req.body.pw }] }).toArray((err, data) => {
        if (err) throw err;
        if (data[0] != null)
            res.send(data);
        else
            res.send(data);
    })
})

const port = 5000;
app.listen(process.env.PORT || 8080, () => {
    console.log("server started");
})