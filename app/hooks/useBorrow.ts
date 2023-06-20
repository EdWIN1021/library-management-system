import { useQuery } from "react-query";
import { fetchBorrow } from "../lib/request";
import { Borrow } from "@prisma/client";

const useBorrow = (
  key: string,
  bookId: number,
  userId: string | null | undefined
) => {
  const { data, isLoading, refetch } = useQuery<Borrow>(
    [key, bookId, userId],
    () => fetchBorrow(bookId, userId)
  );

  return { data, isLoading, refetch };
};

export default useBorrow;
