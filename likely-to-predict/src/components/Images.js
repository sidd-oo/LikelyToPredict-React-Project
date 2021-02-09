import React, { useState, useEffect, useRef} from "react";
import ImageComp from "./Image.js";
import useFetchImage from '../utils/hooks/useFetchImage';
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";

export const Images = (props) => {
  const [newImageURL, setNewImageURL] = useState("");
  const [page, setpage] = useState(1)

  const [images, setImages, errors, isLoading] = useFetchImage(page);

  const inputRef = useRef(null);

  useEffect(() => {
    if(errors.length === 0 && isLoading === false){
    inputRef.current.focus();
    }
  });

  function handleRemove(index) {
    setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
  }

  function ShowImage() {
    return (
      <InfiniteScroll dataLength = {images.length} next = {()=>setpage(page + 1)} hasMore = {true}
        className="flex flex-wrap">
          { images.map((img, index) => <ImageComp image={img.urls.regular} index={index} handleRemove={handleRemove}/>)}
      </InfiniteScroll>
    );
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
    <div>
      {errors.length > 0 ? (
        <div className="flex h-screen">
          <p class="m-auto">{errors[0]}</p>
        </div>
      ) : (
        <section>
          <div className="justify-center">       
              <ShowImage />
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
      )}
      {isLoading === true ? <Loading /> : null}
    </div>
  );
};
