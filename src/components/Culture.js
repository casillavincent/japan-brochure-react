import React from "react";
import TopButton from "../components/TopButton";

// Images
import Art from "../assets/culture/art.png";
import Cuisine from "../assets/culture/cuisine.png";
import Fuji from "../assets/culture/landmark.png";
import Pikachu from "../assets/culture/pop-culture.png";
import Temple from "../assets/culture/religion.png";
import History from "../assets/culture/history.png";
//AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

const Culture = () => {
   AOS.init();
   return (
      <React.Fragment>
         {/* Page Title */}
         <div className="page-title">
            <h1 className="page-title__title">Culture</h1>
            <h2 className="page-title__kanji">文化</h2>
         </div>

         {/* Culture main content */}
         <main className="culture" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <section className="culture-about">
               <h2 className="culture-about__title">Why Choose Japan?</h2>
               <p className="culture-about__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
               </p>
               <table className="culture-about__table">
                  <tr className="culture-about__table-head">
                     <th>City</th>
                     <th>Population</th>
                     <th>Average Food Expense per Day (One Person)</th>
                     <th>Average Accommoadtion Expense per Night (One Person)</th>
                  </tr>
                  <tr>
                     <td>Tokyo</td>
                     <td>14 000 000</td>
                     <td>3200¥</td>
                     <td>8990¥</td>
                  </tr>
                  <tr>
                     <td>Kyoto</td>
                     <td>1 500 000</td>
                     <td>2800¥</td>
                     <td>7224¥</td>
                  </tr>
                  <tr>
                     <td>Osaka</td>
                     <td>2 900 000</td>
                     <td>2400¥</td>
                     <td>6663¥</td>
                  </tr>
                  <tr>
                     <td>Nagoya</td>
                     <td>2 300 000</td>
                     <td>1605¥</td>
                     <td>5539¥</td>
                  </tr>
               </table>
            </section>

            <section className="culture-bubbles">
               {/* Cuisine */}
               <article>
                  <img src={`${Cuisine}`} alt="Sushi Photo" width="150" height="150" />
                  <h2>Cuisine</h2>
                  <button type="button">More Info</button>
               </article>

               {/* Geisha */}
               <article>
                  <img src={`${History}`} alt="Geisha Photo" width="150" height="150" />
                  <h2>History</h2>
                  <button type="button">More Info</button>
               </article>

               {/* Fish Flag */}
               <article>
                  <img src={`${Art}`} alt="Japan Fish Photo" width="150" height="150" />
                  <h2>Art & Music</h2>
                  <button type="button">More Info</button>
               </article>

               {/* Pikachu */}
               <article>
                  <img src={`${Pikachu}`} alt="Pikachu Photo" width="150" height="150" />
                  <h2>Pop Culture</h2>
                  <button type="button">More Info</button>
               </article>

               {/* Mount Fuji */}
               <article>
                  <img src={`${Fuji}`} alt="Mount Fuji Photo" width="150" height="150" />
                  <h2>Landmarks</h2>
                  <button type="button">More Info</button>
               </article>

               {/* Temple Photo */}
               <article>
                  <img src={`${Temple}`} alt="Temple Photo" width="150" height="150" />
                  <h2>Religion</h2>
                  <button type="button">More Info</button>
               </article>
            </section>
         </main>
         <TopButton />
      </React.Fragment>
   );
};

export default Culture;
