import styles from "./ContactHeader.module.css";
console.log(styles);
const ContactHeader = () => {
  return (
    <div className={styles.contact_section}>
      <div className="contact_section">
        <h1>CONTACT US</h1>
        <p>
          <span style={{ fontSize: "x-large" }}>LET’S CONNECT:</span> WE’RE HERE
          TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION,
          COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE
          CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
    </div>
  );
};
export default ContactHeader;
