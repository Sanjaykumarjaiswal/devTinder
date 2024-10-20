const express=require("express")

const app=express();
app.use("/test",(req,res)=>{
    res.send("Hello from the server");
})

app.use("/hello",(req,res)=>{
    res.send("hello guys");
})
app.use("/me",(req,res)=>{
    res.send("sanjay kumar");
})

 app.listen(3000)