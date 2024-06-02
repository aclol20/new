const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
async function sendmail(to, subject, message) {
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.rariartes.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "support@rariartes.com", 
        pass: "Jesusislord123$", 
      },
      tls: {
        rejectUnauthorized: false,
        ciphers:'SSLv3'
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `Smartwalletmigration <support@rariartes.com>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      //text: "Hello world?", // plain text body
      html: message, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  }
  
  module.exports = sendmail