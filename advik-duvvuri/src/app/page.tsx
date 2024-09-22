"use client";

import { useState } from 'react';

export default function Page() {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [counter, setCounter] = useState<number>(0);
  const arr = ["cute", "funny", "angry", "sleep", "happy", "sad", "grumpy", "silly", "playful"]

  const generateCat = async () => {
    const response = await fetch('https://cataas.com/cat?json=true');
    const data = await response.json();
    if(data.tags.length === 0) {
      setCatUrl(`https://cataas.com/cat/${arr[Math.floor(Math.random() * arr.length)]}`);
    } else {
      setCatUrl(`https://cataas.com/cat/${data.tags}`);
    }
    setCounter(counter + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '50px' }}>Random Cat Generator</h1>
      <div className='cat' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {catUrl && (
          <div>
            <img src={catUrl} alt="A Cute Cat" style={{ width: '300px', margin: '20px' }} />
          </div>
        )}
        <button onClick={generateCat}>Generate Cat</button>
        <p>You have seen {counter} cats</p>
        <p>Generate another?</p>
      </div>
    </div>

  );
}
