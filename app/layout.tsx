import "./globals.scss";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

import StoreProvider from "./providers/StoreProvider";
import StyleProvider from "./providers/StyleProvider";

import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

import { Toaster } from "react-hot-toast";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "library management system",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <StoreProvider>
          <StyleProvider>
            <Navbar session={session} />
            <Login />
            <Register />
            {children}
            <Footer />
          </StyleProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
