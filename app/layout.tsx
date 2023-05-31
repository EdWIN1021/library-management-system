import "./globals.scss";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

import StoreProvider from "./providers/StoreProvider";
import StyleProvider from "./providers/StyleProvider";

import Footer from "./components/Footer/Footer";

import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("./components/Login/Login"), {
  ssr: false,
});

const Register = dynamic(() => import("./components/Register/Register"), {
  ssr: false,
});

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
            <header>
              <Navbar session={session} />
            </header>

            <main>
              <Login />
              <Register />
              {children}
            </main>

            <footer>
              <Footer />
            </footer>
          </StyleProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
