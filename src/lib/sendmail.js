const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"yapsitusaya111@gmail.com",
        pass:"vodapermadi@2612"
    }
})

const mailOption = {
    from:"yapsitusaya111@gmail.com",
    to:"acerajja14@gmail.com",
    subject:"Test Email",
    text:"This is a test email"
}

transport.sendMail(mailOption, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})