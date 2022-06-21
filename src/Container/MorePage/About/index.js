import React from "react";
import Header from "../../../Container/MorePage/About/Header/Header";
import Reason from "../../../Container/MorePage/About/Reason/Reason";
import ProjectCounter from "../../../components/ProjectsCounter/ProjectCounter";
import AboutSection from "../../../components/AboutSection/AboutSection";
import Feedback from "../../../components/FeedBack/Feedback";
import Slider from "../../../components/Slider/Slider";
import Footer from "../../../components/Footer/Footer";
import AppPic1 from "../../../assets/app-pic-1.PNG";
import AppPic2 from "../../../assets/app-pic-2.PNG";
import AppPic3 from "../../../assets/app-pic-3.PNG";
import WepPic1 from "../../../assets/web-pic-1.PNG";
import WepPic2 from "../../../assets/web-pic-2.PNG";
import WepPic3 from "../../../assets/web-pic-3.PNG";
const AboutPage = () => {
  return (
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
      <Footer />
    </div>
  );
};

export default AboutPage;
