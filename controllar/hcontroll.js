const modal =require('../model/user')

exports.createdata = async (req, res) => {
  const data = req.body
  try {
      const createdata = await modal.create(data)
      res.status(200).json({
          status: "success",
          Message: 'data enter succes',
          Data: createdata
      })
  } catch (error) {
      res.status(404).json({
          status:"fail",
          Message:"not enter"
      })
  }
}

exports.showdata=async(req,res)=>{
  const showdata=await modal.find()

  try {
      res.status(200).json({
          status: "success",
          Message: 'all data show',
          Data: showdata
      })
  } catch (error) {
      res.status(404).json({
          status:"fail",
          Message:error.Message,
          data:[]
      })
  }

}

exports.deletedata=async(req,res)=>{
  const deleteId=req.params.id
 await modal.findByIdAndDelete(deleteId)

  try {
      res.status(200).json({
          status: "success",
          Message: 'all data delete',
        
      })
      
  } catch (error) {
    
      res.status(404).json({
          status:"fail",
          Message:error.Message,
          data:[]
      })
  }

}

exports.updatedata=async(req,res)=>{
  const updateId=req.params.id
 await modal.findByIdAndUpdate(updateId,req.body)

  try {
      res.status(200).json({
          status: "success",
          Message: 'all data update',
       
        
      })
      
  } catch (error) {
    
      res.status(404).json({
          status:"fail",
          Message:error.Message,
          data:[]
      })
  }

}