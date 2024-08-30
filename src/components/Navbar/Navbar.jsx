import React, {useState} from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={
        menuOpen ? getImageUrl("nav/closeIcon.png")
        : getImageUrl("nav/menuIcon.png")} alt='menu-btn'
        onClick={()=> setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(!menuOpen)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar