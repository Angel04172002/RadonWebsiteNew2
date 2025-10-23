import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';


const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {

  const { firstName, lastName, companyName, companyEmail, phoneNumber, otherInfo } = await request.json();

  if (!firstName || !lastName || !companyName || !companyEmail || !phoneNumber) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  if (!validEmailPattern.test(companyEmail)) {
    return NextResponse.json(
      { message: 'Невалиден формат на имейла' },
      { status: 400 }
    );
  }

  try {
    // Initializing the SMTP connection
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: companyEmail,
        pass: process.env.SMTP_PASS,
      },
    });

    // Define email content
    const mailOptions = {
      from: companyEmail,
      to: `${process.env.SMTP_USER}, ${companyEmail}`,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\n${message}`,
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Имейлът е изпратен успешно!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Възникна грешка при изпращане на имейла!' },
      { status: 500 }
    );
  }
}