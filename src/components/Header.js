import React from "react";
import  logo from './menu.png' 
import { Link } from "react-router-dom";

function Header() {
   return (
      <nav>
         <div className="logo">
            <Link to='/' >
               <img src={logo} alt="logo" />
            </Link>
         </div>
      </nav>
   );
}

export default Header;

