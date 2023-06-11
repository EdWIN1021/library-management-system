export const fetchBorrow = async (
  bookId: number,
  userId: string | null | undefined
) => {
  const res = await fetch(`/api/borrow/${bookId}?userId=${userId}`);
  return await res.json();
};
