import { useQuery } from "react-query";
import { Book } from "@/app/types";
import { fetchBorrow } from "../lib/request";

const useBorrow = (
  key: string,
  bookId: number,
  userId: string | null | undefined
) => {
  const { data, isLoading, refetch } = useQuery<Book>(
    [key, bookId, userId],
    () => fetchBorrow(bookId, userId)
  );

  return { data, isLoading, refetch };
};

export default useBorrow;
