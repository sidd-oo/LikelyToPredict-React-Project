import React, { useState } from "react";

export default function Image({ image, index,  handleRemove}) {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div
      className="w-1/3 p-1 border flex justify-center"
      key={index}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative">
        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 
                        ${isHovering ? "" : "hidden"}`}
          onClick={() => handleRemove(index)}></i>
        <img src={image} width="100%" alt="" />
      </div>
    </div>
  );
}
