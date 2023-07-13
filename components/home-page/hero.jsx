import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/cp.png"
          alt="dd"
          width={"300"}
          height={"300"}
        />
      </div>
      <h1>
        Hi, I'm <span>Champion!</span>
      </h1>
      <p> i occasionally shitpost on the internet and showoff my girlfriend.</p>
    </section>
  );
};

export default Hero;
