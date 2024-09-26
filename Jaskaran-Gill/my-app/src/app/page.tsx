"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [catImage, setCatImage] = useState('https://cataas.com/cat')
  const [catCount, setCatCount] = useState(1)

  const fetchCatImage = async () => {
    setCatImage(`https://cataas.com/cat?${new Date().getTime()}`);

    setCatCount(prevCount => prevCount + 1)
  }

  return (
    <div className={styles.headingContainer}>
      <h1>Random Cat Generator</h1>
      <div className={styles.imageContainer}>
        <img className={styles.catImage}
          src={catImage}
          alt="Random Cat"/>
          <button className={styles.button} onClick={fetchCatImage}>Generate Cat!</button>
          <div className={styles.footer}>
            <p>You have seen {catCount} cats.</p>
            <p>Generate another?</p>
          </div>
      </div>
      
    </div>
  );
}
