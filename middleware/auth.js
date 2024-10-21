const adminAuth=(req,res,next)=>{
    const token="xyz";
    const isUserAuthenticated=token==="xyz";
    if(!isUserAuthenticated){
        res.status(403).send("Unauthorized request") 
    }
    else{
        next()
    }
}

const userAuth=(req,res,next)=>{
    const token="xyzw";
    const isUserAuthenticated=token==="xyzw";
    if(!isUserAuthenticated){
        res.status(403).send("Unauthorized request") 
    }
    else{
        next()
    }
}


module.exports=({
adminAuth,
userAuth
})