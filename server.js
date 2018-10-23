var ex = require('express');
var app = ex();
var mongo = require('mongodb').MongoClient;
var path = require('path');
var d = require('body-parser');
var mongoose = require('mongoose');

app.use(d.json());

var dbo;

mongo.connect('mongodb://HarshaVardhan:1qaz2WSX@ds231070.mlab.com:31070/colordb', (err, db) => {
    app.use(ex.static(path.join(__dirname, 'dist/COLOR')));
    if (err) throw err;
    dbo = db.db('colordb');

})

app.post('/angular',(req,res)=>
{
    console.log(req.body);
    dbo.collection('angular').insertOne(req.body,(err,data)=>
    {
        if(err) throw err;
        res.send(data);
    })
})

app.get('/html',(req,res)=>
{
    dbo.collection('html').find().toArray((err,data)=>
    {
        if(err) throw err;
        res.send(data);
    })
})

const port = 6000;
app.listen(process.env.PORT || 8080, () => {
    console.log("server started");
})