var app=require('express').Router();
var feedback=require('./feedbackdata');
app.get('/',feedback.getall);
app.post('/',feedback.add);
app.put('/',feedback.update);
app.delete('/',feedback.delete);
module.exports=app;