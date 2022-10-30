
const express = require('express');
const app     = express();
const router  = express.Router();

const data = {
    title: "welcome",
    message: "data came from node backend but changed",
    version: "10.10.10",
    page:"/very very first test page!"
};


router
    .route('/')
    .get((req,res)=>{
        if(req.query !== null){
            console.log(req.query);
        }
        if (req.body !== null){
            console.log(req.body);
        }
        
        res.render('bulk',data);
    })
    .post((req,res)=>{
        if(req.query !== null){
            console.log(req.query);
        }
        if (req.body !== null){
            console.log(req.body);
        }
        res.json(
            {
                status: 200,
                message: "success",
                database: "ok!"
            }
        )
    }
    );

router
    .route('/getall')
    .get((req,res)=>{
        res.json({
            status:404,
            message:"not found",
            reason:"request denied"
        });
    })
    .post((req,res)=>{
        if(req.query !== null){
            console.log(req.query);
        }
        if (req.body !== null){
            console.log(req.body);
        }
        res.json(
            {
                status: 200,
                message: "success",
                database: "ok!"
            }
        )
    }
    );

module.exports = router;


