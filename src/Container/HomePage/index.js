import React from "react";
import Middle from "../../Container/HomePage/MiddleSection/Middle";
import ProjectCounter from "../../components/ProjectsCounter/ProjectCounter";
import AboutSection from "../../components/AboutSection/AboutSection";
import AboutSection2 from "../../Container/HomePage/AboutTheme/AboutSection2";
import Services from "../../Container/HomePage/Services/Services";
import Feedback from "../../components/FeedBack/Feedback";
import Reason from "../../Container/HomePage/Reason/Reason";
import Slider from "../../components/Slider/Slider";
import Bottom from "../../components/BottomSection/Bottom";
import Footer from "../../components/Footer/Footer";
import HeaderCont from "../../Container/HomePage/HeaderContent/HeaderCont";
const HomePage = () => {
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
      <Bottom />
      <Footer />
    </>
  );
};

export default HomePage;
