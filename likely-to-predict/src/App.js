import React from "react";
import "./assets/css/tailwind.css";

// let App = (props) => {
//   return (
//     <div className = "bg-gray-600 text-white p-5 border">
//       {props.title}
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Hello React", isShowing: false };
  }

  handleClick = ()=>{
    this.setState({isShowing:!this.state.isShowing});
  }

  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2 text-center">
          <div className="my-4 text-center">{this.state.title}</div>
          <div>
            <button className="p-1 bg-blue-700 text-white my-5" onClick = {this.handleClick}>
              Toggle Image
            </button>
            {this.state.isShowing ? (
              <img
                src="https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
                alt=""
              />
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}
export default App;
