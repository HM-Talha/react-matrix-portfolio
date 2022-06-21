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
import AppPic1 from "../../assets/app-pic-1.PNG";
import AppPic2 from "../../assets/app-pic-2.PNG";
import AppPic3 from "../../assets/app-pic-3.PNG";
import WepPic1 from "../../assets/web-pic-1.PNG";
import WepPic2 from "../../assets/web-pic-2.PNG";
import WepPic3 from "../../assets/web-pic-3.PNG";

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
      <Slider
        title={"Our Application"}
        AppPic1={AppPic1}
        AppPic2={AppPic2}
        AppPic3={AppPic3}
        id={"carousel1Handling"}
        link={[
          "https://play.google.com/store/apps/details?id=com.stiq&pli=1",
          "https://apps.apple.com/us/app/swell/id1498360152",
          "https://play.google.com/store/apps/details?id=com.cpvoter",
        ]}
      />
      <Slider
        title={"Our Web Application"}
        id={"carousel2Handling"}
        AppPic1={WepPic1}
        AppPic2={WepPic2}
        AppPic3={WepPic3}
        link={[
          "https://swellmusicsound.com/case-studies/",
          "https://www.dstore.com.pk/",
          "https://unicorncopy.ai/",
        ]}
      />
      <Bottom />
      <Footer />
    </>
  );
};

export default HomePage;
