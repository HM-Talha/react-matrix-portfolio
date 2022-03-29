import React from "react";
import "./SendMessage.css";
import FaqForm from "../../MorePage/Faq/FaqForm/FaqForm";
const SendMessage = () => {
  return (
    <div className="App">
      <div className="contact-page  p-0">
        <div className="container  p-0">
          <div className="section-title text-center ">
            <span className="section_tagline p-0">Contact With US</span>
            <h2 className=" section-title_title text-dark font-weight-bold">
              Write us a message
            </h2>
            <p className="text1">
              Do you have any questions? Requests? Ideas? Or maybe you simply
              want to chat with us to get to know us better? Whatever the
              reason, everything you need to contact us:)
            </p>
          </div>
        </div>
      </div>
      <FaqForm />
      <div className="map container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7413000522465!2d67.05837561447784!3d24.87268375089426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e923adec49d%3A0xcc2dbd936f1c5627!2sTariq%20Rd%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1647337977122!5m2!1sen!2s"
          width={1200}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SendMessage;
