import React from 'react';
import Navbar from "../../../Container/ServicesPage/WebDesign/Navbar/Navbar";
import ServiceSection2 from "../../../Container/ServicesPage/WebDesign/ServiceSection2/ServiceSection2";
import ServicesSectionThree from "../../../Container/ServicesPage/WebDesign/ServicesSectionThree/ServicesSectionThree";
import Bottom from "../../../components/BottomSection/Bottom";
import Footer from "../../../components/Footer/Footer";
const WebPage = () => {
    return(
        <>
        <Navbar />
        <ServiceSection2 />
        <ServicesSectionThree />
        <Bottom />
        <Footer />
      </>
    );
}
export default WebPage;