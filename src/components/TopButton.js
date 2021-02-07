import React from "react";
import { FaAngleUp } from "react-icons/fa";

const TopButton = () => {
   const scrollTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <aside className="scroll-top" onClick={scrollTop}>
         <FaAngleUp size="1.5em" />
         <p>Back to Top</p>
      </aside>
   );
};

export default TopButton;
