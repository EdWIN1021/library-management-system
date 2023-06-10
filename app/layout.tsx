import "./globals.scss";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StoreProvider from "./providers/StoreProvider";
import StyleProvider from "./providers/StyleProvider";
import AuthProvider from "./providers/AuthProvider";
import DateProvider from "./providers/DateProvider";
import { Toaster } from "react-hot-toast";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

const Login = dynamic(() => import("./components/Modals/Login/Login"), {
  ssr: false,
});

const Register = dynamic(
  () => import("./components/Modals/Register/Register"),
  {
    ssr: false,
  }
);

const OTP = dynamic(() => import("./components/Modals/OTP/OTP"), {
  ssr: false,
});

const VerifyOTP = dynamic(
  () => import("./components/Modals/VerifyOTP/VerifyOTP"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "library management system",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Toaster />
        <AuthProvider>
          <DateProvider>
            <StoreProvider>
              <StyleProvider>
                <header>
                  <Navbar />
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
