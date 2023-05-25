import { HeadingProps } from "./type";
import styles from "./styles.module.scss";

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.heading}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Heading;
