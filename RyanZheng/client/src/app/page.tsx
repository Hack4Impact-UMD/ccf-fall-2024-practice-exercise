"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RandomCatGenerator = () => {
  const [catUrl, setCatUrl] = useState('');
  const [catCount, setCatCount] = useState(0);

  const generateCat = async () => {
    const timestamp = new Date().getTime();
    setCatUrl(`https://cataas.com/cat?${timestamp}`);
    setCatCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    generateCat();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Random Cat Generator</h1>
      <div className="bg-white rounded-lg p-4 shadow-md">
        {catUrl && (
          <div className="relative w-64 h-64 mb-4">
            <Image
              src={catUrl}
              alt="Random cat"
              width={256}
              height={256}
              className="rounded-lg object-cover"
            />
          </div>
        )}
        <button
          onClick={generateCat}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Generate Cat!
        </button>
      </div>
      <p className="mt-4">You have seen {catCount} cats.</p>
    </div>
  );
};

export default RandomCatGenerator;