import { getBorrowList } from "../lib/books";
import { getCurrentUser } from "../lib/auth";
import dynamic from "next/dynamic";

const BorrowList = dynamic(() => import("./BorrowList/BorrowList"), {
  ssr: false,
});

const BorrowPage = async () => {
  const user = await getCurrentUser();
  const borrowList = (await getBorrowList(user?.id)) || [];

  return <BorrowList borrowList={borrowList} />;
};

export default BorrowPage;
