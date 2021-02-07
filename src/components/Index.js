import React from "react";
import Banner from "../assets/japan-logo.svg";
import TopButton from "./TopButton";

//AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
   AOS.init();
   return (
      <>
         <main className="homepage" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            {/* Banner */}
            <section className="japan-banner">
               <img src={`${Banner}`} alt="Japan Banner" />
            </section>

            <section className="about">
               <h1>Who We Are</h1>
               <p>
                  <span className="bold-first">Explore</span> lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
               </p>
               <p>
                  <span className="bold-first">Immerse</span> lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
               </p>
               <p>
                  <span className="bold-first">Experience</span> lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
               </p>
            </section>
         </main>
         <TopButton />
      </>
   );
};

export default Index;
