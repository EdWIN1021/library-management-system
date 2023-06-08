import "./globals.scss";
import styles from "./page.module.scss";

import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

import StoreProvider from "./providers/StoreProvider";
import StyleProvider from "./providers/StyleProvider";
import AuthProvider from "./providers/AuthProvider";
import DateProvider from "./providers/DateProvider";

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

const OTP = dynamic(() => import("./components/Modals/OTP/OTP"), {
  ssr: false,
});

const VerifyOTP = dynamic(
  () => import("./components/Modals/VerifyOTP/VerifyOTP"),
  {
    ssr: false,
  }
);

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "library management system",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = (await getUser()) || null;

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <AuthProvider>
          <DateProvider>
            <StoreProvider>
              <StyleProvider>
                <header>
                  <Navbar user={user} />
                </header>

                <main>
                  <Login />
                  <Register />
                  <OTP />
                  <VerifyOTP />
                  <div className={styles.container}>{children}</div>
                </main>

                <footer>
                  <Footer />
                </footer>
              </StyleProvider>
            </StoreProvider>
          </DateProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
