import React, { useState, useEffect, useRef} from "react";
import ImageComp from "./Image.js";
import useFetchImage from '../utils/hooks/useFetchImage';
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce.js";

export const Images = (props) => {
  const [page, setpage] = useState(1)
  const [inputQuery, setInputQuery] = useState(null);
  const inputRef = useRef(null);

  const [images, setImages, errors, isLoading] = useFetchImage({page, inputQuery});


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
          { images.map((img, index) => <ImageComp key = {index} image={img.urls.regular} index={index} handleRemove={handleRemove}/>)}
      </InfiniteScroll>
    );
  }

  const debounce = useDebounce();
  
  function handleInput(e){
    const text = e.target.value;
    debounce(()=>setInputQuery(text));
  }

  return (
    <div>
      {errors.length > 0 ? (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      ) : (
        <section>
          <div className="flex justify-center my-5 w-full">
            <div className= "w-full">
              <input
                type = "text"
                ref={inputRef}
                onChange={handleInput}
                placeholder="Search photos here"
                className="p-2 border border-gray-800 shadow rounded w-full"
              />
            </div>
            
          </div>

          <div className="justify-center">
            <ShowImage />
          </div>
        </section>
      )}
      {isLoading === true ? <Loading /> : null}
    </div>
  );
};
