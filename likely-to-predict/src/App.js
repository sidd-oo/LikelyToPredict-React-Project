import React  from "react";
import "./assets/css/tailwind.css";
import {Images} from "./components/Images"

let App = (props) => {
  return (
    <section className="flex flex-wrap justify-center">
      <div className="w-10/12 text-center">
        <div >
        </div>
        <Images/>
      </div>
    </section>
  );
};

export default App;
