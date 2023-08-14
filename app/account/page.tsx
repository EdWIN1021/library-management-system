import dynamic from "next/dynamic";
import { getBorrowList } from "../lib/books";
import { getCurrentUser } from "../lib/auth";

const Settings = dynamic(() => import("../components/Settings/Settings"), {
  ssr: false,
});

const Account = async () => {
  const user = await getCurrentUser();
  const borrowList = (await getBorrowList(user?.id)) || [];

  return <Settings borrowList={borrowList} />;
};

export default Account;
