import { Borrow } from "../types";

export const fetchBorrow = async (
  bookId: number,
  userId: string | null | undefined
) => {
  const res = await fetch(`/api/borrow/${bookId}?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export const createBorrow = async (borrowData: Borrow) => {
  const res = await fetch("/api/borrow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(borrowData),
  });

  return res.json();
};
