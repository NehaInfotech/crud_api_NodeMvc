const cetegory = require('../model/catagory')

exports.Create = async (req, res) => {
  const data = req.body
  try {
      const createdata = await cetegory.create(data)
      res.status(200).json({
          status: "success",
          Message: 'data enter succes',
          Data: createdata
      })
  } catch (error) {
      res.status(404).json({
          status: "fail",
          Message: "not enter"
      })

  }
}

exports.show = async (req, res) => {
  const data = req.body
  try {
      const showdata = await cetegory.find(data)
      res.status(200).json({
          status: "success",
          Message: 'data show succes',
          Data: showdata
      })
  } catch (error) {
      res.status(404).json({
          status: "fail",
          Message: "not show"
      })

  }
}


exports.Delete = async (req, res) => {
  const Id = req.params.id;

  try {
      const deletdata = await cetegory.findByIdAndDelete(Id);

      res.status(200).json({
          status: "success",
          message: 'Data deleted successfully',
          data: deletdata
      });
  } catch (error) {
      res.status(500).json({
          status: "fail",
          message: error.message,
          data: []
      });
  }
};

exports.updete = async (req, res) => {
  const Id = req.params.id;
  try {
      const updetedata = await cetegory.findByIdAndUpdate(Id,req.body)
      res.status(200).json({
          status: "success",
          Message: 'data updete succes',
          Data: updetedata
      })
  } catch (error) {
      res.status(404).json({
          status: "fail",
          Message: "not updete",
          data: []
      })

  }
}














