import { Borrow } from "../types";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51NJQbTHZ9nNGFgKe56Esg9uRgj5vXjmKYdnYywj0EpQkAw1psSWmlQsXUSiJ77t4O47cvvMjHoTabqX6ktMEkPTP00CbEGx9SP",
  {
    apiVersion: "2022-11-15",
  }
);

const headers = {
  "Content-Type": "application/json",
};

export const fetchBorrow = async (
  bookId: number,
  userId: string | null | undefined
) => {
  const res = await fetch(`/api/borrow/${bookId}?userId=${userId}`, {
    method: "GET",
    headers,
  });
  return res.json();
};

export const createBorrow = async (borrowData: Borrow) => {
  const res = await fetch("/api/borrow", {
    method: "POST",
    headers,
    body: JSON.stringify(borrowData),
  });
  return res.json();
};

export const sendEmail = async (email: string) => {
  const res = await fetch("/api/send_email", {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  });
  return res.json();
};

export const verifyOtp = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  const res = await fetch("/api/verify_otp", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      otp,
    }),
  });
  const data = await res.json();

  if (!res?.ok) {
    throw new Error(data?.error);
  }

  return data;
};

export const resetPassword = async ({
  pwd,
  confirmPwd,
  email,
}: {
  pwd: string;
  confirmPwd: string;
  email: string;
}) => {
  const res = await fetch("/api/reset_password", {
    method: "POST",
    headers,
    body: JSON.stringify({
      pwd,
      confirmPwd,
      email,
    }),
  });

  const data = await res.json();
  if (!res?.ok) {
    throw new Error(data?.error);
  }

  return data;
};

export const uploadImage = async ({
  imageId,
  email,
}: {
  imageId: string;
  email: string | null | undefined;
}) => {
  const res = await fetch("api/upload_image", {
    method: "POST",
    headers,
    body: JSON.stringify({ imageId, email }),
  });

  const data = await res.json();
  if (!res?.ok) {
    throw new Error(data?.error);
  }

  return data;
};

export const makePayment = async (quantity: number) => {
  console.log(quantity);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1NJR2jHZ9nNGFgKeyTVmj9fA",
        quantity,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  return { url: session.url };
};

export const getBooks = async (
  page: number,
  categoryId: string,
  order: boolean
) => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/books?q=${categoryId}&_page=${page.toString()}&_limit=10&_sort=rating&_order=${
      order ? "asc" : "desc"
    }`,
    {
      headers,
    }
  );

  const data = await res.json();
  if (!res?.ok) {
    throw new Error(data?.error);
  }

  return data;
};
