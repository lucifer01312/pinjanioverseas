var fb=require('./config/fbconfig');
var utils=require('./utils');
var feedbackObj=
{
    getall:(req,res)=>
    {
        fb.ref('feedback').once('value',success=>
        {
            let data=utils.fbtoarr(success.val());
            res.send(data);
        })
    },
    add:(req,res)=>
    {
        let f=req.body;
        fb.ref('feedback').push(f).then(success=>
            {
                res.send(success);
            }).catch(err=>
            {
                    res.send(err);
            })
    },
    update:(req,res)=>
    {
        let d=req.body;
        let key=d.key;
        fb.ref('feedback/'+key).update(d).then(success=>
            {res.send(success);})
            .catch(err=>
                {res.send(err);})    
    },
    delete:(req,res)=>
    {
        let key=req.query.key;
        fb.ref('feedback/' + key).remove().then(success=>
            {res.send(success);})
    },
    getById:(req,res)=>
    {
        let id =req.query.key;
        fb.ref('feedback/' + id).once('value' , success=>
        {
            res.send(success.val());
            
        })
    }
}
module.exports=feedbackObj;