import React from "react";
import TopButton from "../components/TopButton";

const Credits = () => {
   return (
      <React.Fragment>
         {/* Page Title */}
         <div className="page-title">
            <h1 className="page-title__title">Credits</h1>
            <h2 className="page-title__kanji">クレジット</h2>
         </div>
         <main className="credits">
            <section className="credits___photos">
               <h3>Photos</h3>
               <ul>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/bamboo-trees-bridge-city-daylight-115603/"
                        target="_blank"
                     >
                        Donald Tong
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/person-holding-brush-drawing-kanji-script-1498273/"
                        target="_blank"
                     >
                        Engin Akyurt
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/man-and-woman-dolls-2187606/"
                        target="_blank"
                     >
                        Evgeny Tchebotarev
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/wishes-written-in-ema-5493270/"
                        target="_blank"
                     >
                        DLKR Life
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/three-geisha-walking-between-buildings-1325837/"
                        target="_blank"
                     >
                        Satoshi hirayama
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.twowanderingsoles.com/blog/15-must-do-things-in-japan"
                        target="_blank"
                     >
                        Two Wandering Soles | Japan
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/red-and-black-temple-surrounded-by-trees-photo-402028/"
                        target="_blank"
                     >
                        Belle Co
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/food-japanese-food-photography-sushi-9210/"
                        target="_blank"
                     >
                        Skitterphoto
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/yellow-pikachu-plushmascot-1049622/"
                        target="_blank"
                     >
                        mentatdgt
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/woman-wearing-red-kimono-2918492/"
                        target="_blank"
                     >
                        Ivan Siarbolin
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/assorted-color-carp-streamers-2187313/"
                        target="_blank"
                     >
                        Evgeny Tchebotarev
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.pexels.com/photo/black-and-white-mountain-over-yellow-white-and-blue-sky-46253/"
                        target="_blank"
                     >
                        Pixabay
                     </a>
                  </li>
               </ul>
            </section>
            <section className="credits__websites">
               <h3>Websites</h3>
               <ul>
                  <li>
                     <a href="https://www.japan-guide.com/e/e2025.html" target="_blank">
                        Japan-Guide | Accommodation
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.twowanderingsoles.com/blog/15-must-do-things-in-japan"
                        target="_blank"
                     >
                        Two Wandering Soles | Japan
                     </a>
                  </li>
               </ul>
            </section>
         </main>
         <TopButton />
      </React.Fragment>
   );
};

export default Credits;
