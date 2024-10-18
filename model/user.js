const mongoose=  require('mongoose')
const schema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },

  surname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  pass:{
    type:String,
    required:true
  }
})
module.exports=mongoose.model('mvc_get_post_api',schema)