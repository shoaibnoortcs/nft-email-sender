const emailSender = require('./email-sender')
module.exports.sendEmail = async (request, response) => {
    try {
        const subject = request.body.subject
        const fullName = request.body.fullName
        const email = request.body.email
        const number = request.body.number
        const message = request.body.message
        const HTML = `<div>
        <b>Name:</b> ${fullName} <br/>
        <b>Email:</b> ${email} <br/>
        <b>Number:</b> ${number ? number : 'Not provided'} <br/>
        <b>Message:</b> ${message} <br/>
        <b>Subject:</b> ${subject ? subject : 'Not provided'} <br/>
        </div>`;
        await emailSender({ HTML })

        response.status(200).send({
            message: `Thank you for contacting us, we'll be in touch very soon.`,
            data: true
        })
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}
