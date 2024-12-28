const nodeMailer = require("nodemailer");
const asynchandler = require("express-async-handler");

const sendEmail = asynchandler(async (data, req, res) => {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MP,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Hello 👻" <foo@example.com>', //sender address
    to: data.to, //list of receivers
    subject: data.subject, //subject line
    text: data.text, //plain text body
    html: data.htm, //html body
  });

  console.log("Message sent: %s", info.messageId);
  //message sent: 3e4e607f-1b9e-4b7b-8b0f-6e6f7b6e8f6b

  //Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
  //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

module.exports = sendEmail;
