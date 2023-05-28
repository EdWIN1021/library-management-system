import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const getCurrentUser = () => getServerSession(authOptions);
