import React, { useState, useEffect, useRef} from "react";
import ImageComp from "./Image.js";
import useFetchImage from '../utils/hooks/useFetchImage';


export const Images = (props) => {
  const [newImageURL, setNewImageURL] = useState("");

  const [images, setImages] = useFetchImage();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  function handleRemove(index) {
    setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
  }

  function ShowImage() {
    return images.map((img, index) => (
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
