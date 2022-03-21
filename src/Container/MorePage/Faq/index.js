import React from 'react';
import FaqForm from '../../../Container/MorePage/Faq/FaqForm/FaqForm'
import FaqNavbar from '../../../Container/MorePage/Faq/FaqNavbar/FaqNavbar'
import Faqs from '../../../Container/MorePage/Faq/Faqs/Faqs'
import Bottom from "../../../components/BottomSection/Bottom"
import Footer from "../../../components/Footer/Footer"
const FaqPage =() =>{
    return(

        <div>
        <FaqNavbar />
        <Faqs />
        <FaqForm />
        <Bottom />
        <Footer />
    </div>
    )
}

export default FaqPage;