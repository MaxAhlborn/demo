'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'smtptransporter@gmail.com',
        pass: 'Transporter99'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Max Dev" <maxdev@gmail.com>', // sender address
    to: 'max.ahlborn@gmail.com', // list of receivers
    subject: 'Test Subject', // Subject line
    text: 'Hello world', // plain text body
    html: '<b>Hello world</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});	