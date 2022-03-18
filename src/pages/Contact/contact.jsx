import React from "react";
import Footer from "../../components/Footer/Footer";
import ContactBar from "../../Container/Contact/Navbar/ContactBar";
import SendMessage from "../../Container/Contact/Navbar/SendMessage";
import ContactBottom from '../../Container/Contact/Navbar/ContactBottom';
const Contact = () => {
    return (
        <>
        <ContactBar />
        <SendMessage />
        <ContactBottom/>
        <Footer />
        
      </>
    );
  };
  
  export default Contact;
  