import React from "react";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import OurYoutubeChannel from "./OurYoutubeChannel";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import BookCallButton from "./BookACall";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <OurYoutubeChannel />
      <FAQ />
      <ContactForm />
      <BookCallButton />
      <Footer />
    </>
  );
};

export default Home;
