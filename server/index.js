const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const params = require('params');


const app = express()
app.use(express.json())
app.use(cors())
// app.use(bodyParser.json())





//------------------------------------------------------------------GET----------------------------------------------------------------------------------   
app.get('/books_tb',(req,res)=>{        //-------------------------------------Instead of "book_tb", we can use any name for this------------------------------------   
    const q = "SELECT * FROM books_tb"  //-------------------------------------This should be exactly as Table name-------------------------------------------------
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
//------------------------------------------------------------------POST ---------------------------------------------------------------------------------   
app.post('/books_tb',(req,res)=>{    //----------------------------------------------------Instead of "book_tb", we can use any name for this-------------------------
    const q = "INSERT INTO books_tb (`title`,`cover`,`descri`,`price`) VALUES (?)"; //-----This should be exactly as Table name-------------------------------------------
    const values =[
        req.body.title,
        req.body.cover,
        req.body.descri,
        req.body.price
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Books created successfully");      
    })
})
//------------------------------------------------------------------DELETE ---------------------------------------------------------------------------------   
app.delete('/books_tb:id',(req,res)=>{
    const dataID=req.params.id;
    const q = "DELETE FROM books_tb WHERE id = ?"
    db.query(q,[dataID],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Books Deleted successfully");
    })
})
//------------------------------------------------------------------EDIT ---------------------------------------------------------------------------------   
app.put('/books_tb/:id',(req,res)=>{
    const dataID=req.params.id;
    const q = `UPDATE books_tb SET title= ?,cover= ?,descri= ?,price= ?, WHERE id = ?`;
    const values =[
        req.body.title,
        req.body.cover,
        req.body.descri,
        req.body.price
    ];
    db.query(q,[...values,dataID],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Books Upated successfully");
    })
})
//------------------------------------------------------------------VALIDATE ---------------------------------------------------------------------------------   
app.post('/checking',function(req,res){
    const validTitle = req.body.validTitle;

    db.query(
        'SELECT * FROM books_tb WHERE title = ?',[validTitle],
        (err,result)=>{
            if (err){
                res.send({err:err});
            }
            if(result.length > 0){
                res.send(result);
            }else{
                res.send({message:'Wrongly typed email'})
            }
        }
    )
})
app.listen(xxxx,()=>{
    console.log('backend connected on port xxxx')
})