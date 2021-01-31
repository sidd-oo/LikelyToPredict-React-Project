import React from "react";
import "./assets/css/tailwind.css"

let App = (props) => {
  return (
    <div className = "bg-gray-600 text-white p-5 border">
      {props.title}
    </div>
  );
};

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {name:"Siddharth Sahoo"}
//     }
//     render(){
//         return <div>{this.state.name}</div>
//     }
// }
export default App;
