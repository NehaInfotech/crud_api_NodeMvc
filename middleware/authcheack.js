const jwt= require('jsonwebtoken')
const model =  require('../modal/friend')

exports.tokensecure = async( req,res,next)=>{
    try{
      const token=req.headers.authorization
      if(!token) throw Error('attach token')
        const tokenverify=jwt.verify(token,'surat')
      const userverify= await model.findById(tokenverify.id)
      if(!userverify) throw new Error("user not found");
      next();
      
    }catch(error){
        res.status(400).json({
          status:"fail",
          message:error.message
        })
    }
}