import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import React from "react";

const ContactForm = () => {
  const [name, setName] = useState("Name  ");
  const [email, setEmail] = useState("Email  ");
  const [phone, setPhone] = useState("Phone Number ");
  const [address, setAddress] = useState("Your Address ");

  const onViaCallSubmit = () => {
    console.log("I am From Call");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setPhone(event.target[2].value);
    setAddress(event.target[3].value);

    alert(`Your Details has been sent!`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_imga}>
        <img src="./images/Nike_Shoes_Brand.png" alt="" />
      </div>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text=" SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button
            onClick={onViaCallSubmit}
            text=" CALL"
            icon={<MdCall fontSize="24px" />}
          />
        </div>
        <Button
          // Passing Props  to the button component
          isOutline={true}
          text=" EMAIL FORM"
          icon={<MdOutlineEmail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controler}>
            <label htmlFor="name">Name : </label>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="email">Email : </label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="number">Phone : </label>
            <input type="Number" placeholder=" Enter Number" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="text">Address: </label>
            <textarea name="text" style={{ width: "460px", height: "76px" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT DETAILS" />
          </div>
          <div>
            <h2>Details Submitted Successfully</h2>
            <h4>{name + " , " + email + " , " + phone + " , " + address}</h4>
          </div>
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src="./images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
//how to adjust this contact_img with the form height?
