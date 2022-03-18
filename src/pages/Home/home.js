import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Middle from "../../Container/Home/MiddleSection/Middle"
import ProjectCounter from "../../components/ProjectsCounter/ProjectCounter"
import AboutSection from "../../components/AboutSection/AboutSection"
import AboutSection2 from "../../Container/Home/AboutSection2/AboutSection2"
import Services from "../../Container/Home/Services/Services"
import Feedback from "../../components/FeedBack/Feedback"
import Reason from "../../Container/Home/Reason/Reason" 
import Slider from "../../components/Slider/Slider"
// import Bottom from "../../components/BottomSection/Bottom"
import Bottom from "../../components/BottomSection/Bottom.jsx"
import Footer from "../../components/Footer/Footer"
import HeaderCont from "../../Container/Home/HeaderContent/HeaderCont";

const Home = () => {
  return (
    <>
      <HeaderCont />
      <Middle />
      <ProjectCounter />
      <div className="AboutSection">
        <AboutSection />
        <AboutSection2 />
        <Services />
      </div>
      <Feedback />
      <Reason />
      <Slider />
      {/* <Bottom /> */}
      <Bottom />
      <Footer />
      
    </>
  );
};

export default Home;
