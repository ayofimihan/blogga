import Image from "next/image";
import styles from "./post-header.module.css";

const postHeader = (props) => {
  const { image, title } = props;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={150} width={200} />
    </header>
  );
};

export default postHeader;
