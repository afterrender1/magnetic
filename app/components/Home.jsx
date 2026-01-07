import React from "react";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import OurYoutubeChannel from "./OurYoutubeChannel";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <OurYoutubeChannel />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default Home;
