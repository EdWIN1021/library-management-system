import styles from "./styles.module.scss";

const EmailConstrain = () => {
  return (
    <ul>
      <li className={styles.message}>Please enter a vaild email address</li>
    </ul>
  );
};

export default EmailConstrain;
