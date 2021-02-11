import React from 'react'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Login from '../pages/Login'


export default [
    {
        path:"/",
        exact:true,
        component:()=> <Home/>,   
    },
    {   
        path:"/gallery",
        component:()=><Gallery/>,
    },
    {  
        path:"/login",
        component:()=><Login/>, 
    }
];

