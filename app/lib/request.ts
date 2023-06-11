import { Borrow } from "../types";

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
