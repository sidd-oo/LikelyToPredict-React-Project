import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from "../config/firebase"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  function handleLogout() {
    firebase.auth().signOut().then(res =>{
      history.replace("/login");
      setIsLoggedIn(false);
    }).catch(err=>{
      console.log(err.response.data);
    })
  }
    return (
      <div>
        <nav className="py-5 bg-gray-900 text-white">
          <ul className="flex justify-between px-10">
            <span className="flex">
              <li className="mr-5">
                <Link to="/">Home</Link>
              </li>

              <li className="mr-5">
                <Link to="/gallery">Gallery</Link>
              </li>
            </span>

            <li>
              {
                isLoggedIn ? <button onClick = {handleLogout}>Logout</button> : <Link to="/login">Login</Link>
              }           
            </li>
          </ul>
        </nav>
      </div>
    );
}
