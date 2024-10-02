"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const CatGenerator = () => {
  const [catImage, setCatImage] = useState("");
  const [count, setCount] = useState(0);

  const fetchCatImage = async () => {
    // Fetch the cat image directly as a URL
    const imageUrl = "https://cataas.com/cat?t=" + new Date().getTime(); // Append timestamp to prevent caching
    setCatImage(imageUrl);
    setCount(count + 1); // Increment count each time a cat is generated
  };

  useEffect(() => {
    fetchCatImage(); // Fetch initial cat image on page load
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Cat Generator</h1>
      <div className={styles.card}>
        {catImage && (
          <Image
            src={catImage}
            alt="Random Cat"
            width={300}
            height={300}
            className={styles.catImage}
          />
        )}
        <button onClick={fetchCatImage} className={styles.generateButton}>
          Generate Cat!
        </button>
        <p className={styles.text}>
          You have seen {count} cats. Generate another?
        </p>
      </div>
    </div>
  );
};

export default CatGenerator;
