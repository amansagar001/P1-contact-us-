import styles from "./Button.module.css";
const Button = ({ isOutline, icon, text, ...rest }) => {
  //   destructuring props
  //   const { isOutline, icon, text } = props;
  //   or pass the props as parameters  directly to the function like this:
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.pri_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
