import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { User } from "../types";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  return (session?.user as User) || null;
};
