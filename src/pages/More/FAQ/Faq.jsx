import React from 'react'
import FaqForm from '../../../Container/More/Faq/FaqForm/FaqForm'
import FaqNavbar from '../../../Container/More/Faq/FaqNavbar/FaqNavbar'
import Faqs from '../../../Container/More/Faq/Faqs/Faqs'
import Bottom from "../../../components/BottomSection/Bottom"
import Footer from "../../../components/Footer/Footer"

const Faq = () => {
  return (
    <div>
        <FaqNavbar />
        <Faqs />
        <FaqForm />
        <Bottom />
        <Footer />
    </div>
  )
}

export default Faq