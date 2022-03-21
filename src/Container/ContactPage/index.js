import React from 'react';
import Footer from "../../components/Footer/Footer";
import ContactBar from "../../Container/ContactPage/ContactNavBar/ContactBar";
import SendMessage from "../../Container/ContactPage/SendMessage/SendMessage";
import ContactBottom from "../../Container/ContactPage/ContactBottom/ContactBottom";
const ContactPage = () =>{
    return(
        <>
        <ContactBar />
        <SendMessage />
        <ContactBottom/>
        <Footer />
        
      </>
    )
}

export default ContactPage;