import Settings from "../components/Settings/Settings";
import { getUser } from "../lib/getUser";

const Account = async () => {
  const user = await getUser();

  return <Settings user={user} />;
};

export default Account;
