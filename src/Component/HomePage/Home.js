import React from "react";
import Hero from "./Hero";

import CardOverview from "./CardOverview";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <CardOverview />
      <AboutUs />

      <Footer />
    </div>
  );
}
