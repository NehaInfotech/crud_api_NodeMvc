const mongoose=  require('mongoose')
const schema= new mongoose.schema({
  name:String,
  surname:String
})
module.exports=mongoose.model('mvc_get_post_api',schema)