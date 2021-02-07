import React from "react";
import Headroom from "react-headroom";
import { Fade as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   // Hides the navigation and resets the state of hamburger when scrolling
   function hideNavOnScroll() {
      const navigationSelector = document.querySelector("nav.main-navigation");
      if (navigationSelector.classList.contains("show-navigation")) {
         navigationSelector.classList.remove("show-navigation");
      }
      setIsOpen(false);
   }

   window.addEventListener("scroll", hideNavOnScroll);
   useEffect(() => {
      const navigationSelector = document.querySelector("nav.main-navigation");
      if (isOpen === true) {
         navigationSelector.classList.toggle("show-navigation");
      } else {
         navigationSelector.classList.remove("show-navigation");
      }

      // Cleanup Function
      return () => window.removeEventListener("scroll", hideNavOnScroll);
   }, [isOpen]);

   function hide_nav_onClick() {
      const navigationSelector = document.querySelector("nav.main-navigation");
      if (navigationSelector.classList.contains("show-navigation")) {
         navigationSelector.classList.remove("show-navigation");
      }
      setIsOpen(false);
   }

   return (
      <header>
         <Headroom>
            {/* Logo */}
            <div className="logo">
               <h1>
                  <Link to={"/"}>Japan</Link>
               </h1>
            </div>

            {/* Navigation */}
            <nav className="main-navigation">
               <ul
                  onClick={() => {
                     hide_nav_onClick();
                  }}
               >
                  <li>
                     <Link to={"/accommodations"}>Accommodations</Link>
                  </li>
                  <li>
                     <Link to={"/culture"}>Culture</Link>
                  </li>
                  <li>
                     <Link to={"/explore"}>Explore</Link>
                  </li>
               </ul>
            </nav>
            {/* Button */}
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
         </Headroom>
      </header>
   );
};

export default Header;
