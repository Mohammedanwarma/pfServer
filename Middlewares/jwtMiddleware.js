const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    // console.log("Middleware")
    // res.status(401).json("Response from Middleware")
    // next()

    // console.log(req.headers.authorization.split(" ")[1])
   try{
    const token =req.headers.authorization.split(" ")[1]

    try {

            const user = jwt.verify(token,process.env.SECRETKEY)
            console.log(user)
            req.payload=user.userId
            next()
    }
    catch (e) {
         console.log(e)
        res.status(401).json(e)
    }  
   }
    catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}

module.exports=jwtMiddleware