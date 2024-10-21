const express=require("express")
const { adminAuth,userAuth }=require("../middleware/auth");
const app=express();
app.use("/admin",adminAuth)

// app.use("/user",userAuth)
// since we are having only one user route we can use it as used below directly

app.get("/user",userAuth,(req,res)=>{
    res.send("hello")
})
 

app.get("/user/getAllData",(req,res)=>{
    res.send("all data sent")
})

 app.listen(3000)