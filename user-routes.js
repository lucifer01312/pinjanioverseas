var app = require('express').Router();
var users=require('./user');
app.get('/',users.getall);
app.post('/signup',users.add);
app.post('/login', users.login);
app.get('/getById',users.getById);
app.get('/getByUser',users.getbyUser);
module.exports = app;   