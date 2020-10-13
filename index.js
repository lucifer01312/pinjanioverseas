var app=require('express')();
var cors=require('cors');
var b=require('body-parser');
app.use(b.json());
app.use(cors());
var router=require('./routes');
app.listen(process.env.PORT,()=>{console.log("Listening on 3000");})
app.use('/',router);
