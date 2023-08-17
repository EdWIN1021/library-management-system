import { getBorrowList } from "../lib/books";
import { getCurrentUser } from "../lib/auth";
import dynamic from "next/dynamic";

const BorrowList = dynamic(() => import("./BorrowList/BorrowList"));

const BorrowPage = async () => {
  // const user = await getCurrentUser();
  // const borrowList = (await getBorrowList(user?.id)) || [];

  const borrowList = (await getBorrowList("64d6d86bb4f00cb411cce575")) || [];

  return <BorrowList borrowList={borrowList} />;
};

export default BorrowPage;
