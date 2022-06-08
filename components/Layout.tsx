import React, { ReactNode } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navigation/navbar";
import ContactForm from "./ContactForm"

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navbar />

      {children}
      {<Footer/>}
    </>
  );
};

export default Layout;
