import Settings from "../components/Settings/Settings";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Auth } from "../types";

const Account = async () => {
  const auth = (await getServerSession(authOptions)) as Auth;

  return <Settings auth={auth} />;
};

export default Account;
