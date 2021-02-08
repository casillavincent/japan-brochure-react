import React from "react";

// Images
import Ryokan from "../assets/accommodations/ryokan.jpg";
import Manga from "../assets/accommodations/manga.jpg";
import Temple from "../assets/accommodations/temple.jpg";
import Capsule from "../assets/accommodations/capsule.jpg";

// Compoenents
import TopButton from "../components/TopButton";

//AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

const Accommodations = () => {
   AOS.init();
   return (
      <React.Fragment>
         {/* Page Title */}
         <div className="page-title">
            <h1 className="page-title__title">Accommodations</h1>
            <h2 className="page-title__kanji">宿泊施設</h2>
         </div>

         <main className="accommodations">
            {/* Ryokan */}
            <section
               className="accommodations-card"
               data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
            >
               <img
                  className="accommodations-card__img"
                  src={`${Ryokan}`}
                  alt="Ryokan"
                  width="300"
               />
               <div className="accommodations-card__text">
                  {/* Title */}
                  <h2>
                     Ryokan;
                     <span className="nihon">
                        <br />
                        旅館
                     </span>
                  </h2>

                  {/* Text */}
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                  </p>
               </div>
            </section>

            {/* Manga Cafe */}
            <section
               className="accommodations-card"
               data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
            >
               <img
                  className="accommodations-card__img"
                  alt="Ryokan"
                  src={`${Manga}`}
                  width="300"
               />
               <div className="accommodations-card__text">
                  {/* Title */}
                  <h2>
                     Manga Cafe;
                     <span className="nihon">
                        <br />
                        漫画喫茶
                     </span>
                  </h2>

                  {/* Text */}
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                  </p>
               </div>
            </section>

            {/* Capsule Hotel */}
            <section
               className="accommodations-card"
               data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
            >
               <img
                  className="accommodations-card__img"
                  alt="Ryokan"
                  src={`${Capsule}`}
                  width="300"
               />
               <div className="accommodations-card__text">
                  {/* Title */}
                  <h2>
                     Capsule Hotel;
                     <span className="nihon">
                        <br />
                        カプセルホテル
                     </span>
                  </h2>

                  {/* Text */}
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                  </p>
               </div>
            </section>

            {/* Temple */}
            <section
               className="accommodations-card"
               data-aos="fade-up"
               data-aos-anchor-placement="center-bottom"
            >
               <img
                  className="accommodations-card__img"
                  alt="Ryokan"
                  src={`${Temple}`}
                  width="300"
               />
               <div className="accommodations-card__text">
                  {/* Title */}
                  <h2>
                     Temple;
                     <span className="nihon">
                        <br />
                        寺院
                     </span>
                  </h2>

                  {/* Text */}
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                     culpa qui officia deserunt mollit anim id est laborum.
                  </p>
               </div>
            </section>
         </main>
         <TopButton />
      </React.Fragment>
   );
};

export default Accommodations;
