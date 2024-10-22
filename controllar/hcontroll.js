const modal = require("../model/user");
const catagory=require('../model/catagory')
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
exports.createdata = async (req, res) => {
  const data = req.body;
  try {
    const createdata = await modal.create(data);
    res.status(200).json({
      status: "success",
      Message: "data enter succes",
      Data: createdata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: "not enter",
    });
  }
};
exports.showdata = async (req, res) => {
  try {
    const showdata = await modal.find();
    res.status(200).json({
      status: "success",
      Message: "all data show",
      Data: showdata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: error.Message,
      data: [],
    });
  }
};
exports.deletedata = async (req, res) => {
  const deleteId = req.params.id;
  try {
    await modal.findByIdAndDelete(deleteId);
    res.status(200).json({
      status: "success",
      Message: "all data delete",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: error.Message,
      data: [],
    });
  }
};

exports.updatedata = async (req, res) => {
  const updateId = req.params.id;

  try {
    await modal.findByIdAndUpdate(updateId, req.body);
    res.status(200).json({
      status: "success",
      Message: "all data update",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: error.Message,
      data: [],
    });
  }
};

exports.signup = async (req, res) => {
  const data = req.body;
  try {
    req.body.pass = await bcrypt.hash(req.body.pass, 3);

    const createdata = await modal.create(data);
    res.status(200).json({
      status: "success",
      Message: "data enter succes",
      Data: createdata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: "not enter",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const logindata = await modal.findOne({ email: req.body.email })
    if (!logindata) throw new Error("invalid email");
    const verifypass =  bcrypt.compare(req.body.pass, logindata.pass);
    if (!verifypass) throw new Error("invalid password");
    const token =jwt.sign({id : logindata._id},'surat')
    res.status(200).json({
      statuse: "sucsess",
      Message: "Login user succsessfuly",
      Data: logindata,
      token
    });
  } catch {
    res.status(404).json({
      status: "fail",
      Message: "ERROR",
    });
  }
};














