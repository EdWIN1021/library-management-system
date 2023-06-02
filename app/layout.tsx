import "./globals.scss";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

import StoreProvider from "./providers/StoreProvider";
import StyleProvider from "./providers/StyleProvider";
import AuthProvider from "./providers/AuthProvider";

import Footer from "./components/Footer/Footer";

import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import { getUser } from "./lib/getUser";

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
  const user = await getUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <AuthProvider>
          <StoreProvider>
            <StyleProvider>
              <header>
                <Navbar user={user} />
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
        </AuthProvider>
      </body>
    </html>
  );
}
