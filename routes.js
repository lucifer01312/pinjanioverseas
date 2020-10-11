var app=require('express').Router();
var userRoutes=require('./user-routes');
var feedbackRoutes=require('./feedbackdata-routes');
app.use('/feedback',feedbackRoutes);
app.use('/users',userRoutes);
module.exports=app;
