import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  const { email } = await request.json();

  const otp = Math.round(Math.random() * (999999 - 100000) + 100000);

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      {
        message: "unauthorized",
      },
      {
        status: 400,
      }
    );
  }

  const updateOtp = await prisma.user.update({
    where: {
      email,
    },
    data: {
      otp: otp.toString(),
    },
  });

  if (updateOtp) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Please verify your device",
      html: `
            <div>Hey ${updateOtp.name}</div>
            <br/>
            <div>Verification code: ${updateOtp.otp}</div>
            <br/>
            <div>Thanks,</idv>
            <div>The Edwin Team</idv>

          `,
    });

    setTimeout(async () => {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          otp: null,
        },
      });
    }, 60 * 1000);

    return NextResponse.json(
      {
        message: "otp send",
      },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    {
      message: "unauthorized",
    },
    {
      status: 400,
    }
  );
}
