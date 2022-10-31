
const express = require('express');
const app     = express();
const router  = express.Router();
app.set('view engine','ejs');
const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};


router
    .route('/')
    .get((req,res)=>{
        res.json(data);
    })
    .post((req,res)=>{
        console.log(req.body);
        if(req.body.email==="test@admin.com" && req.body.password==="abc123"){
            res.header({"xsrf-token":"1234567890","Access-Control-Allow-Credentials":"true"});
            //res.cookie('presence', 'user-email', { path: '/', secure: true, httpOnly: true, maxAge: 900000, sameSite: 'none' });
            res.cookie('presence', 'user-name', { path: '/', secure: true, httpOnly: true, maxAge: 900000, sameSite: 'none' });
            res.json({rest:req.body,data:data});
        }else{
            res.json({error:"invalid credentials"});
        }
    }
    );

module.exports = router;


