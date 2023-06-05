import React, { useEffect, useState } from 'react'
import logo from "../Resources/logo.svg"
import Vector from "../Resources/Vector.svg"
import Vector1 from "../Resources/Vector1.svg"
import Vector2 from "../Resources/Vector2.svg"

import nav from "../CSS/navbar.module.css" 
export const  Navbar=()=> {

   let x=window.innerWidth
    window.onresize=function (){
    x=window.innerWidth
    setWidth(window.innerWidth)
     
   }

   const [width,setWidth]=useState(x) 
  

useEffect(()=>{
 
},[width])
  return (
    <div id={nav.navbar}>
       
        <div id={nav.logo}>
          <img src={logo} alt="" />
        </div>
  
        <div id={nav.nav_link}>
             <li>My Assignement</li>
             <li>Chat with Mentor </li>
             {width>850 ?  <li>
                 <img src={Vector} alt="" />
                  ProfileName
                  <img src={Vector1} alt="" />
                 </li> :true}
                 {width<850?<button id={nav.profileBtn}>ProfileName  <img src={Vector2} alt="" /></button>:true}
        </div>

    </div>
  )
}
