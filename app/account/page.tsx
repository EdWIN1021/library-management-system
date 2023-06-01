import Settings from "../components/Settings/Settings";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Account = async () => {
  const session = await getServerSession(authOptions);

  return <Settings session={session} />;
};

export default Account;
