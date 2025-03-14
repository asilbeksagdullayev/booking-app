import React, { useState } from "react";
import HotelHero from "./hero";
import HotelServices from "./services";
import HotelRooms from "./rooms";
import HotelGallary from "./gallary";
import Footer from "./components/footer/Footer";
import Navbar from "../../components/layout/navbar/Navbar";
import CheckOutCard from "./components/cards/checkOutCard";
import AboutCard from "./components/cards/aboutCard";

function HotelMain() {
  return (
    <div className="w-full">
      {/* navbar */}
      <Navbar />
      {/* Hero page */}
      <section className="pt-10">
        <HotelHero />
      </section>
      {/* Service page */}
      <section>
        <HotelServices />
      </section>
      {/* Rooms page */}
      <section className="px-10">
        <HotelRooms />
      </section>
      {/* Gallary page */}
      <section>
        <HotelGallary />
      </section>
      {/* Footer */}
      <footer className="flex flex-col justify-center items-center pt-20">
        <div className="border-2 border-black w-10/12"></div>
        <Footer />
      </footer>
    </div>
  );
}

export default HotelMain;
