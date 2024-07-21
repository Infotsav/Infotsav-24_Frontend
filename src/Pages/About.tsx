// import React from 'react'

import Footer from "../Components/Footer"
import ParticlesBackground from "../Components/ParticlesBackground"

function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="absolute -z-10"><ParticlesBackground /></div>
      <h1 className="scroll-m-20 text-[#FEFEFE] text-[16vw] md:text-[9vw] tracking-tight text-center font-pixelify mb-5 md:mb-0">
        About Us
      </h1>
      <div className="flex mb-5 md:mb-20">
        <h1 className='text-[#ccc] text-[15vh] font-pixelify text-center uppercase hidden md:block'
          style={{ textOrientation: "mixed", writingMode: 'vertical-lr' }}>
          Infotsav
        </h1>
        <div className="h-[69vh] w-[4rem] mr-10 bg-[#ccc] hidden md:block">
        </div>
        <div className="md:px-10 px-5">
          <h3 className='text-[#FEFEFE] text-3xl font-pixelify tracking-tight scroll-m-10 uppercase'>
            Lorem Ipsum
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Lectus mauris ultrices eros in cursus. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Platea dictumst vestibulum rhoncus est pellentesque elit. Tempus urna et pharetra pharetra massa massa ultricies mi quis.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
            Orci a scelerisque purus semper eget duis at tellus at. Consequat semper viverra nam libero justo laoreet. Purus non enim praesent elementum facilisis leo vel. Enim facilisis gravida neque convallis. Ac turpis egestas integer eget aliquet nibh praesent. Posuere sollicitudin aliquam ultrices sagittis. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Diam vel quam elementum pulvinar etiam non quam lacus. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin.
          </p>
        </div>
      </div>
      <div className="flex mb-5 md:mb-10">
        <div className="md:px-10 px-5">
          <h3 className='text-[#FEFEFE] text-3xl font-pixelify tracking-tight scroll-m-10 uppercase'>
            Lorem Ipsum
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Lectus mauris ultrices eros in cursus. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Platea dictumst vestibulum rhoncus est pellentesque elit. Tempus urna et pharetra pharetra massa massa ultricies mi quis.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
            Orci a scelerisque purus semper eget duis at tellus at. Consequat semper viverra nam libero justo laoreet. Purus non enim praesent elementum facilisis leo vel. Enim facilisis gravida neque convallis. Ac turpis egestas integer eget aliquet nibh praesent. Posuere sollicitudin aliquam ultrices sagittis. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Diam vel quam elementum pulvinar etiam non quam lacus. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin.
          </p>
        </div>
        <div className="h-[69vh] w-[4rem] ml-10 bg-[#ccc] hidden md:block">
        </div>
        <h1 className='text-[#ccc] text-[15vh] font-pixelify text-center uppercase hidden md:block'
          style={{ textOrientation: "mixed", writingMode: 'vertical-rl' }}>
          abv-iiitm
        </h1>
      </div>
    </div>
  )
}

export default About
