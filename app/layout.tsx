import "./globals.scss";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

import StoreProvider from "./providers/StoreProvider";
import Register from "./components/Register/Register";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "library management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StoreProvider>
          <Navbar />
          <Login />
          <Register />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
