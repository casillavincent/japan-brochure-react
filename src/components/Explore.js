import React from "react";
import TopButton from "./TopButton";

// Images
import Train from "../assets/explore/bullet-train.jpeg";
import Food from "../assets/explore/foodtour.jpeg";
import Robot from "../assets/explore/robot-cafe.jpg";
import Geisha from "../assets/explore/geisha.jpg";
import Shrine from "../assets/explore/shrine.jpg";

//AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

const Explore = () => {
   AOS.init();
   return (
      <React.Fragment>
         <div className="page-title">
            <h1 className="page-title__title">Explore</h1>
            <h2 className="page-title__kanji">探検する</h2>
         </div>

         {/* Content */}
         <main className="explore">
            <section className="explore-info">
               <article data-aos="fade-up-right">
                  <img src={`${Train}`} alt="Bullet Train" width="300" height="200" />
                  <div className="explore-text">
                     <h3>Ride Japan's Bullet Train</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                     </p>
                     <div className="explore-btns">
                        <button type="button">More Info</button>
                        <button type="button">Book Now</button>
                     </div>
                  </div>
               </article>

               <article data-aos="fade-up-right">
                  <img src={`${Food}`} alt="Street Food" width="300" height="200" />
                  <div className="explore-text">
                     <h3>Discover Local Foods</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                     </p>
                     <div className="explore-btns">
                        <button type="button">More Info</button>
                        <button type="button">Book Now</button>
                     </div>
                  </div>
               </article>

               <article data-aos="fade-up-right">
                  <img src={`${Geisha}`} alt="Geisha Flyer" width="300" height="200" />
                  <div className="explore-text">
                     <h3>Learn the History of Geishas</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                     </p>
                     <div className="explore-btns">
                        <button type="button">More Info</button>
                        <button type="button">Book Now</button>
                     </div>
                  </div>
               </article>

               <article data-aos="fade-up-right">
                  <img src={`${Shrine}`} alt="Red Shrine" width="300" height="200" />
                  <div className="explore-text">
                     <h3>Explore Shrines & Temples</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                     </p>
                     <div className="explore-btns">
                        <button type="button">More Info</button>
                        <button type="button">Book Now</button>
                     </div>
                  </div>
               </article>

               <article data-aos="fade-up-right">
                  <img src={`${Robot}`} alt="Robot Restaurant" width="300" height="200" />
                  <div className="explore-text">
                     <h3>Spend the night at the Robot Restaurant</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                     </p>
                     <div className="explore-btns">
                        <button type="button">More Info</button>
                        <button type="button">Book Now</button>
                     </div>
                  </div>
               </article>
            </section>
         </main>
         <TopButton />
      </React.Fragment>
   );
};

export default Explore;
