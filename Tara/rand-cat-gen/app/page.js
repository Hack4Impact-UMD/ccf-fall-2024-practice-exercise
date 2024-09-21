"use client";

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('https://cataas.com/cat');
  const [catCount, setCatCount] = useState(1);

  const fetchCat = async () => {
    const response = await fetch('https://cataas.com/cat?json=true');
    const data = await response.json();
    setUrl(`https://cataas.com/cat/${data._id}`);
    setCatCount(catCount + 1);
  };

  return (
    <div className="background">
      <h1 className="title">Random Cat Generator</h1>
      <div className="card">
        <div className="passing">
          <img src={url} className="pic" />
          <button onClick={fetchCat} className="button">Generate Cat!</button>
        </div>
        <p className="card-text">You have seen {catCount} cats. Generate another?</p>
      </div>
    </div>
  );
}
