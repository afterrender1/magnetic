import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
export const metadata = {
  title: "Magnetik TSP - Contact Us",
  description: "Contact Magnetik TSP for your TikTok Shop needs in 2026",
};

const Page = () => {
  return (
    <>
      {/* Navbar Wrapper */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="mt-10 sm:mt-14">
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
