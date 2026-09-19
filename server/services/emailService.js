const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({
    name,
    email,
    subject,
    message,
  }) => {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER],
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
  });

  if (error) {
    console.error("Resend email error:", error);
    throw new Error(error.message || "Failed to send email.");
  }

  console.log("Email sent successfully!");
  console.log("Message ID:", data?.id);
};

module.exports = sendContactEmail;