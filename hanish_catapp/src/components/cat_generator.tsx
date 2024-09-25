import axios from "axios";
import { useState } from "react";

export default function CatGenerator() {

  // use state to store image link and counter variable
  const [image, setImage] = useState("");
  const [counter, setCounter] = useState(0);

  const fetch_cat = () => {
    //use axios to fetch cat
    axios
      .get(`https://cataas.com/cat`)
      .then((response) => {
        //console.log("Response: ", response);
        const imageUrl = `https://cataas.com/cat/` + response.data._id
        //console.log("Generated URL: ", imageUrl);
        setImage(imageUrl);
        setCounter(counter + 1); // increment counter
      })
      .catch((error) => {
        console.error("Could not fetch cat", error); // handle the error
      });
  };

  return (
    <div className="bg-white w-80 h-96 flex items-center justify-items-center flex-col rounded-3xl">
      <div>
        {image && <img src={image} alt="Generated Cat" className="w-72 h-64 object-cover p-2 rounded-3xl" />}
      </div>
      <div className="p-2">
        <button onClick={fetch_cat} className="text-black bg-purpleish p-3 rounded-xl"><b>Generate Cat!</b></button>
      </div>
      <div className="pt-2">
        <p className="text-black">You have seen {counter} cats, Generate another?</p>
      </div>
    </div>
  );
}
