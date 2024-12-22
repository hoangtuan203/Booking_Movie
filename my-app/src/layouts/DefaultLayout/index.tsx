import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="default-layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
