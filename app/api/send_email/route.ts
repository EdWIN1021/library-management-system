import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (email) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "edwinshi.develop@gmail.com",
        pass: "dnauujvpwudiqlhx",
      },
    });

    let info = await transporter.sendMail({
      from: "edwinshi.develop@gmail.com",
      to: "edwinshi1021@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello Edwin</b>",
    });

    //create code and save into the database

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  return NextResponse.json(
    {
      message: "hi",
    },
    {
      status: 200,
    }
  );
}
