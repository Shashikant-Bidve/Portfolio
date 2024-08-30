import React from 'react'
import { getImageUrl } from '../../utils.js'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('hero/shashi.jpg')} className={styles.aboutImage} alt="Me sitting with a laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}  alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Aspiring Backend Developer</h3>
                        <p>Fresh full stack developer with a strong foundation in 
                        server-side technologies, databases, and RESTful APIs. Proficient
                         in MERN stack and eager to contribute to backend development projects.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cpIcon.png")} style={{marginRight:"15px"}} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Competitive programmer</h3>
                        <p>Demonstrated problem-solving skills as a 3-star coder on <a href="https://www.codechef.com/users/shashibidve18">Codechef</a>,
                         a Pupil on <a href="https://codeforces.com/profile/shashibidve_18">Codeforces</a>, and close to Knight on <a href="https://leetcode.com/u/Shashi_18/">LeetCode.</a></p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/collegeIcon.png")} style={{marginRight:"15px"}} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Final year student at IIIT Bhopal</h3>
                        <p>Dedicated and consistent, maintaining a strong CGPA of 8.4 in Computer 
                        Science and Engineering at Indian Institute of Information Technology, Bhopal.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About