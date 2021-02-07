import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="footer">
         <h3 className="footer__copyright">&copy; Vincent Casilla 2021</h3>
         <p className="footer__disclaimer">For Educational Pursposes Only</p>
         <Link to={"/credits"} className="footer__credits">
            Credits
         </Link>
      </footer>
   );
};

export default Footer;
