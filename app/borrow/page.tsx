import BorrowList from "./BorrowList/BorrowList";
import { getBorrowList } from "../lib/books";
import { getCurrentUser } from "../lib/auth";

const BorrowPage = async () => {
  const user = await getCurrentUser();
  const borrowList = (await getBorrowList(user?.id)) || [];

  return <BorrowList borrowList={borrowList} />;
};

export default BorrowPage;
