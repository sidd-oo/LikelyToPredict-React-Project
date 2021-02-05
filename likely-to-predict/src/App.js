import React, {useState}  from "react";
import "./assets/css/tailwind.css";
import {Images} from "./components/Images"

let App = (props) => {
  const [title, setTitle] = useState("React App")
  return (
    <section className="flex flex-wrap justify-center">
      <div className="w-10/12 text-center">
        <div >
          {props.title} {title}
        </div>
        <Images/>
      </div>
    </section>
  );
};

export default App;
