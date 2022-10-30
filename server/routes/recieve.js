
const express = require('express');
const app     = express();
const router  = express.Router();
const dataSchema = require('../model/schema');
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
        res.render('index',data);
    })
    .post((req,res)=>{
        console.log(req.body.sentence);
        const data = new dataSchema({
            id: Date.now(),
            message: req.body.sentence
        });
        data.save()
            .then(data =>{
                res.json({
                    data:"response ok!",
                    status:200,
                    sentData:data
                });
            })
            .catch(err =>{
                res.json({message: err});
            });
    }
    );

module.exports = router;


