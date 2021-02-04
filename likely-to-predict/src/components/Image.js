import React from "react";

export const Image = (props) => {
//   const [myInterval, setmyInterval] = React.useState(null);



//Example of unmount, when the component is removed
  React.useEffect(() => {
    console.log("Image Mounted");
  
      const interval = setInterval(() => {
        console.log("Hello");
      },1000);
    return () => {
      console.log("Image Unmounted");
      clearInterval(interval);
    };
    
  }, []);
  return (
    <div>
      <img src={props.src} alt="" />
    </div>
  );
};
