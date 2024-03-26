import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

export const getUser = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return { ...session?.user };
  }

  return null;
};
