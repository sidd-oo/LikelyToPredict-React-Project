import React, {useState}  from "react";
import "./assets/css/tailwind.css";
import {Image} from "./components/Image"

let App = (props) => {
  const [title, setTitle] = useState("React App")
  return (
    <section className="flex flex-wrap justify-center">
      <div className="w-10/12 text-center">
        <div >
          {props.title} {title}
        </div>
        <Image/>
      </div>
    </section>
  );
};

export default App;
