import SlantedBanner from "@/components/SlantedBanner";
import React from "react";
import frameImage from '../assets/images/Frame 34.png';
import bgHomeImage from '../assets/images/Frame 53.png';
import peekImage from '../assets/images/Group 236.png';
import HomePage from "@/components/Homepage";
import About from "@/components/About";

const Page = () => {
  return (
    <div style={{height: '500vh', maxWidth: '100vw', overflowX: 'hidden'}}>
      <HomePage backgroundImage={bgHomeImage} mascotPeekImage={peekImage} />
      <SlantedBanner starsImageUrl={frameImage} />
      <About />
    </div>
  )
};

export default Page;
