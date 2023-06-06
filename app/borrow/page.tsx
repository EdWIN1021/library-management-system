import BorrowList from "./BorrowList/page";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

const BorrowPage = async () => {
  const session = await getServerSession(authOptions);

  return <BorrowList session={session} />;
};

export default BorrowPage;
