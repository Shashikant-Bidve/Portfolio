import React from 'react'
import { getImageUrl } from '../../utils.js'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={`${styles.title}  ${styles.typewriter}`}>
                Hi, I'm Shashikant!
            </h1>
            <p className={`${styles.description}`}> 
                I'm a full-stack developer with experience in building MERN stack
                applications. Check out my <a href="#projects" className={styles.project}>projects</a> and Reach out if you'd like to know more!
            </p>
            <div className={styles.separate}>
            <a href="mailto:shashi.bidve18@gmail.com" className={styles.contactBtn}>Contact me !</a>
            <a href="https://drive.google.com/file/d/1CMvTI5ULmkK4ktW7tEKWxBTMJwuvQeoV/view?usp=drive_link" className={styles.contactBtn}>Resume</a>
            </div>
        </div>
        <img src={getImageUrl("hero/shashi_2.jpg")} alt="Hero image" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero