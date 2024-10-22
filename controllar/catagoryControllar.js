const model = require("../model/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "nehagoti446@gmail.com",
    pass: "aobgckueubvulukc",
  },
});

async function main(data) {
  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <nehagoti446@gmail.com>',
    to: data.email,
    subject: `Hello ✔ ${data.name}, email successfully sent to Neha Goti`, 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
}

exports.signup = async (req, res) => {
  const data = req.body;
  try {
    data.pass = await bcrypt.hash(req.body.pass, 10);  // Higher salt rounds are better (10 is recommended)
    await main(data);
    const createdata = await model.create(data);
    res.status(200).json({
      status: "success",
      Message: "Data entered successfully",
      Data: createdata,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      status: "fail",
      Message: "Error: Data not entered",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const logindata = await model.findOne({ email: req.body.email });
    if (!logindata) throw new Error("Invalid email");

    const verifypass = await bcrypt.compare(req.body.pass, logindata.pass);
    if (!verifypass) throw new Error("Invalid password");

    const token = jwt.sign({ id: logindata._id }, 'surat');
    res.status(200).json({
      status: "success",
      Message: "Login successful",
      Data: logindata,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      status: "fail",
      Message: "Login failed",
    });
  }
};
