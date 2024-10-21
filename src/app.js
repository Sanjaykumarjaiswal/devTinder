const express=require("express")

const app=express();

app.get("/user",(req,res,next)=>{
    // console.log(req);
    console.log(req.query)
    res.send("I am in GET /user")
    next()
},
(req,res)=>{
    res.send("2nd response")
}
)

app.post("/user",(req,res)=>{
    
    res.send("I am POST /user route")

})
app.delete("/user",(req,res)=>{
    res.send("I am DELETE /user Route")
})
 

 app.listen(3000)