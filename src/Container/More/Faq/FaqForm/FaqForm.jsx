import React,{useState} from "react";
import axiox from 'axios';
import "./FaqForm.css";

const FaqForm = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  const [subject,setSubject] = useState('');
  const [comments,setComments] = useState('');

  const userSumbitDetailsHandler = async (e) =>{
    e.preventDefault();
    console.log("Submit Click")

    let userDetail = {
      name ,
      email,
      phoneNo,
      subject,
      comments
    }
    console.log(userDetail);
 
   let respone = await axiox.post(`https://e2b5-39-50-168-27.ngrok.io/contact `,userDetail ); 
   console.log("Server Response",respone.data);

  }
  
  return (
    <div className="my-5">
      <section className="faqFormBox" data-aos="zoom-in" data-aos-duration="1500">
        <div>
          <input type="text" placeholder="Enter Your Name"  onChange={(e)=>{setName(e.target.value)}}/>
          <input type="email" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div>
          <input type="text" placeholder="Enter Your Phone Number"  onChange={(e)=>{setPhoneNo(e.target.value)}} />
          <input type="text" placeholder="Enter Your Subject"  onChange={(e)=>{setSubject(e.target.value)}}/>
        </div>
        <div className="container my-3 textAreaBox" >
          <textarea
            name=""
            id=""
            placeholder="Enter Your comment"
            cols="30"
            rows="10"
            onChange={(e)=>{setComments(e.target.value)}}
          ></textarea>
        </div>
        <div>
            <button onClick={userSumbitDetailsHandler}>Send Your Message</button>
        </div>
      </section>
    </div>
  );
};

export default FaqForm;
