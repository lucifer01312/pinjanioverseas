var fb=require('./config/fbconfig');
var utils=require('./utils');
var userObj=
{
    getall:(req,res)=>
    {
        fb.ref('users').once('value',success=>
        {
            res.send(utils.fbtoarr(success.val()));
        })
    },

    add:(req,res)=>
    {
        let u=req.body;
        fb.ref('users').push(u).then(success=>
        {
            res.send(success);
        });
    },
    getById:(req,res)=>
    {
        let id=req.query.id;
        fb.ref('users').once('value',success=>
        {
            let owners=utils.fbtoarr(sucess.val());
            let owner=owners.find(x=>x.key===id)
            res.send(owner);
        })
    },
    getbyUser:(req,res)=>
    {
        let id=req.query.userid;
        fb.ref('users/' + id).once('value',success=>
        {
            console.log(success.val())
            res.send(success.val());
        })
    },
    login : (req,res)=>
    {
        let user=req.body;
        fb.ref('users').once('value',success=>
        {
            let owners=utils.fbtoarr(success.val());
            let owner=owners.filter(x=>
                {
                    if(x.name===user.name&&x.password===user.password)
                    return x;
                });
            res.send(owner);
        })
    }
}
module.exports=userObj;