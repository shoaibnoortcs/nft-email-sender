const nodemailer = require('nodemailer')
module.exports = async ({ HTML }) => {
    let mailTransport = {}
    let mailOptions = {}

    // if gmail is using as a transport service
    const smtpConfig = {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    }

    mailTransport = nodemailer.createTransport(smtpConfig)
    mailOptions = {
        from: {
            name: process.env.EMAIL_SENDER_NAME,
            address: process.env.EMAIL_SENDER,
        },
        to: process.env.EMAIL_RECEIVER,
    }

    mailOptions.subject = process.env.SUBJECT

    mailOptions.html = HTML
    return await mailTransport.sendMail(mailOptions)
}