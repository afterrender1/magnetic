import React from "react";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import OurYoutubeChannel from "./OurYoutubeChannel";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import BookCallButton from "./BookACall";

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <OurYoutubeChannel />
      <FAQ />
      <ContactForm />
      <BookCallButton />
    </>
  );
};

export default Home;
