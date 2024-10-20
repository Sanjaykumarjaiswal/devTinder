const express=require("express")

const app=express();



app.use("/test",(req,res)=>{
    res.send("I am /test route");
})

app.use("/hello",(req,res)=>{
    res.send("I am /hello route");
})

app.use("/",(req,res)=>{
    res.send(" I am / route")
})

app.use("/me",(req,res)=>{
    res.send("i am /me route");
})

 app.listen(3000)