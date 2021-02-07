import React, { useState, useEffect, useRef} from "react";
import ImageComp from "./Image.js";
import Axios from 'axios';
export const Images = (props) => {
  const [Image, setImages] = useState([]);
  const [newImageURL, setNewImageURL] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      `${process.env.REACT_APP_UNSPLASH_URL}client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    ).then((res) => {
      setImages(res.data)
      // console.log(res.data);
    });
  });

  function handleRemove(index) {
    setImages(Image.filter((image, ind) => ind !== index));
    console.log("I am changing state");
  }

  function ShowImage() {
    return Image.map((img, index) => (
      <ImageComp image={img.urls.regular} index={index} handleRemove={handleRemove} />
    ));
  }

  const handleAdd = () => {
    if (newImageURL !== "") {
      setImages([...Image, newImageURL]);
      setNewImageURL("");
    }
  };

  const handleChange = (event) => {
    setNewImageURL(event.target.value);
  };

  return (
    <section>
      <div className="justify-center">
        <div className="flex flex-wrap justify-center ">
          <ShowImage />
        </div>

        <div className="flex justify-center my-5 w-full">
          <div className="w-full">
            <input
              id="inputBox"
              ref={inputRef}
              type="text"
              onChange={handleChange}
              value={newImageURL}
              className="p-2 border border-gray-800 shadow rounded w-full"
            />
          </div>

          <div className="">
            <button
              disabled={newImageURL === ""}
              className={`p-2 w-40 rounded text-white ml-2 
            ${newImageURL !== "" ? "bg-green-600" : "bg-green-300"}`}
              onClick={handleAdd}
            >
              Add Image
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
