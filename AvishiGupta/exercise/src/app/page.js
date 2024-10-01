"use client";

import { useState } from 'react';

export default function Home() {

  const [catImageUrl, setCatImageUrl] = useState('https://cataas.com/cat');
  const [catCounter, setCatCounter] = useState(1);

  const getNewCat = async () => {
    try {
      const response = await fetch('https://cataas.com/cat?json=true');
      const data = await response.json();
      setCatImageUrl(`https://cataas.com/cat/${data._id}`);
      setCatCounter(prevCount => prevCount + 1);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  return (
    <div className="background">
      <h1 className="title">Random Cat Generator</h1>
      <div className="card">
        <div className="image-container">
          <img src={catImageUrl} alt="Random Cat" className="cat-image" />
          <div className="genBtn"><button onClick={getNewCat} className="button">Generate Cat!</button></div>
        </div>
        <p className="card-text">
          You have seen {catCounter} cat{catCounter > 1 ? "s" : ""}. Generate another?
        </p>
      </div>
    </div>
  );
}
