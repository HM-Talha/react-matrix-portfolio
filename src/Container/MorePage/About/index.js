import React from 'react';
import Header from "../../../Container/MorePage/About/Header/Header";
import Reason from "../../../Container/MorePage/About/Reason/Reason";
import ProjectCounter from "../../../components/ProjectsCounter/ProjectCounter";
import AboutSection from "../../../components/AboutSection/AboutSection";
import Feedback from "../../../components/FeedBack/Feedback";
import Slider from "../../../components/Slider/Slider";
import Footer from "../../../components/Footer/Footer";
const AboutPage = () =>{
    return(
        <div>
        <Header />
        <Reason />
        <ProjectCounter />
        <div className="AboutSection p-4">
          <AboutSection />
        </div>
        <div className="forMargin">
          <Feedback />
        </div>
        <Slider />
        <Footer />
      </div>
    )
}

export default AboutPage;