const express=require("express")

const app=express();

app.get("/user",(req,res)=>{
    // console.log(req);
    console.log(req.query)
    res.send("I am in GET /user")
})

app.post("/user",(req,res)=>{
    
    res.send("I am POST /user route")

})
app.delete("/user",(req,res)=>{
    res.send("I am DELETE /user Route")
})
 

 app.listen(3000)