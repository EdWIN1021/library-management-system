import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreProvider from "../providers/StoreProvider";
import StyleProvider from "../providers/StyleProvider";
import AuthProvider from "../providers/AuthProvider";
import DateProvider from "../providers/DateProvider";
import { Nunito } from "next/font/google";
import QueryProvider from "../providers/QueryProvider";
import { Container } from "@mui/material";

const nunito = Nunito({ subsets: ["latin"] });

const Login = dynamic(() => import("../components/Login"), {
  ssr: false,
});

const Register = dynamic(() => import("../components/Register"), {
  ssr: false,
});

const OTP = dynamic(() => import("../components/OTP"), {
  ssr: false,
});

const VerifyOTP = dynamic(() => import("../components/VerifyOTP"), {
  ssr: false,
});

const RestPassword = dynamic(() => import("../components/RestPassword"), {
  ssr: false,
});

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
      <body className={`${nunito.className} bg-[rgb(227,230,230)]`}>
        {/* <Toaster /> */}
        <AuthProvider>
          <QueryProvider>
            <DateProvider>
              <StoreProvider>
                <StyleProvider>
                  <Container disableGutters maxWidth="xl">
                    <Navbar />
                    <main>
                      <Login />
                      <Register />
                      <OTP />
                      <VerifyOTP />
                      <RestPassword />
                      {children}
                    </main>
                    <Footer />
                  </Container>
                </StyleProvider>
              </StoreProvider>
            </DateProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
