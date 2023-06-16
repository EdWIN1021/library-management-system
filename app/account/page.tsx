import Settings from "../components/Settings/Settings";
import { getBorrowList } from "../lib/books";
import { getCurrentUser } from "../lib/auth";

const Account = async () => {
  const user = await getCurrentUser();
  const borrowList = (await getBorrowList(user?.id)) || [];

  return <Settings borrowList={borrowList} />;
};

export default Account;
