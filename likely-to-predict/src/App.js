import React, {useState, useRef}  from "react";
import "./assets/css/tailwind.css";
import {Image} from "./components/Image"

let App = (props) => {
  const [title, setTitle] = useState("React App")
  const [isShowing, setIsShowing] = useState(false);

 const mountRef =  useRef(false);

  const handleClick = ()=>{
    setIsShowing(!isShowing);
  }

  //Example of mount, when the component is rendered
  React.useEffect(() => {
     console.log("App mounted");
  }, [])

  //Example of update function, and how to control the update function
  React.useEffect(()=>{
    if(mountRef.current === false){
      mountRef.current = true;
    }else{
      console.log("App updated")
    }
  },[isShowing])

  return (
    <section className="flex justify-center">
      {console.log("re-rendered")}
      <div className="w-1/2 text-center">
        <div className="my-4 text-center">
          {props.title} {title}
        </div>
        <div>
          <button
            className="p-1 bg-blue-700 text-white my-5"
            onClick={handleClick}
          >
            Toggle Image
          </button>
          {isShowing ? (
            <Image src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80" />
          ) : null}
        </div>
      </div>
    </section>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "Hello React", isShowing: false };
//   }

//   handleClick = () => {
//     this.setState({ isShowing: !this.state.isShowing });
//   };

//   render() {
//     return (
// <section className="flex justify-center">
//   <div className="w-1/2 text-center">
//     <div className="my-4 text-center">{this.state.title}</div>
//     <div>
//       <button
//         className="p-1 bg-blue-700 text-white my-5"
//         onClick={this.handleClick}
//       >
//         Toggle Image
//       </button>
//       {this.state.isShowing ? (
//         <img
//           src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
//           alt=""
//         />
//       ) : null}
//     </div>
//   </div>
// </section>
//     );
//   }
// }
export default App;
