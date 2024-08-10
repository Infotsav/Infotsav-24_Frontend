// import React from 'react'
// import ComingSoon from '../Components/ComingSoon'
import ParticlesBackground from "../Components/ParticlesBackground";
import MajorEvent from "../Components/Events/MajorEvent";
import Tabs from "../Components/Events/Tabs";

function Events() {
  return (
    <>
      <main className="font-pixelify text-[#FEFEFE] max-w-[1440px] mx-auto">
        <ParticlesBackground />

        <div className="relative  text-center mt-40 mb-20 text-slate-50  z-10 lg:text-5xl md:text-4xl  text-3xl  ">
          Events
        </div>
        <section className="my-20">
          <MajorEvent />{" "}
        </section>
        <section className="relative font-pixelify ">
          <Tabs />
        </section>
      </main>
    </>
  );
}

export default Events;
