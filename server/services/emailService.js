const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,

    replyTo: email,

    subject: `Portfolio Contact: ${subject}`,

    text: `
New message received through your portfolio.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `,

    html: `
      <h2>New Portfolio Message</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <hr>

      <h3>Message</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>

      <hr>

      <p>
        You can reply directly to this email to contact ${name}.
      </p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Email sent successfully!");
  console.log("Message ID:", info.messageId);
};

module.exports = sendContactEmail;