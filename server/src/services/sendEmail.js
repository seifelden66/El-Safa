const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "kareemelnady15@gmail.com",
    pass: "viyz fxot oasg saeh",
  },
});

// Send email

async function sendEmail(option) {
  await transporter.sendMail(option, (error, info) => {
    if (error) {
      return console.log(`Error: ${error}`);
    }
  });
}

module.exports = sendEmail;
