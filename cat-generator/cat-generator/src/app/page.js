"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [generateCount, setGenerateCount] = useState(0);
  const [catImageUrl, setCatImageUrl] = useState('');

  useEffect(() => {
    getImage();
  }, []);

  function getImage() {
    fetch('https://cataas.com/cat?json=true')
    .then((res) => res.json())
    .then((data) => setCatImageUrl(`https://cataas.com/cat/${data._id}`))
    .catch((error) => console.error('Error fetching cat image:', error));
    setGenerateCount(generateCount + 1);
  }

  return (
    <div className={styles.mainContainer}>
        <h1 id={styles.heading}>Random Cat Generator</h1>
        <div className={styles.subContainer}>
          <img src={catImageUrl} id={styles.catImage}/>
          <button onClick={() => {
            setGenerateCount(generateCount + 1);
            getImage();
          }}
          id={styles.generateBtn}
          >
            Generate Cat!
          </button>
          <p className={styles.output}>You have seen {generateCount} cats. 
          <br />Generate another?</p>
        </div>
    </div>
  );
}
