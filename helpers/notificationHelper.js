const nodemailer = require('nodemailer');

// Email transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail; for other services, configuration might differ
    auth: {
        user: process.env.EMAIL_USERNAME, // Email account username
        pass: process.env.EMAIL_PASSWORD, // Email account password
    },
});

// Send an email
exports.sendEmail = async (to, subject, text, html) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME, // Sender address
        to: to, // List of recipients
        subject: subject, // Subject line
        text: text, // Plain text body
        html: html, // HTML body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.error('Error sending email: ', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
