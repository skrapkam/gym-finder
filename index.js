const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const contribute = express()

contribute.use(bodyParser.json())
contribute.use(bodyParser.urlencoded({ extended: false }))

contribute.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account ) => {
        const htmlEmail = `
            <h3>Details</h3>
                <ul> 
                    <li>City: ${req.body.city}</li>
                    <li>Gym: ${req.body.gym}</li>
                </ul>
        `

        let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587, 
                auth: {
                    user: 'soz2f6qghilxpz4y@ethereal.email',
                    pass: 'syv8vCYgkGkMayPwHE'
                }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'soz2f6qghilxpz4y@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New message', 
            html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err)
        } 

        console.log('Message sent: %s', info.city)
        console.log('Message URL: %s,', nodemailer.getTestMessageUrl(info))
    })
})
}) 

const PORT = process.env.PORT || 3000 

contribute.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})