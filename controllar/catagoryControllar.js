const model = require("../model/user");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Change this line
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
      user: "nehagoti446@gmail.com",
      pass: "aobgckueubvulukc",
  },
});
async function main(data) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <nehagoti446@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: `Hello ✔ ${data.name} Success fully email send to neha goti `, // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
