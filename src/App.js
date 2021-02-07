import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Homepage from "./components/Index";
import Accommodations from "./components/Accommodations";
import Culture from "./components/Culture";
import Explore from "./components/Explore";
import Credits from "./components/Credits";
function App() {
   return (
      <Router basename={"/discover-japan"}>
         <React.Fragment>
            <Header />

            {/* All components will go inside the container */}
            <div className="container">
               <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/accommodations" component={Accommodations} />
                  <Route path="/culture" component={Culture} />
                  <Route path="/explore" component={Explore} />
                  <Route path="/credits" component={Credits} />
               </Switch>
            </div>
            <Footer />
         </React.Fragment>
      </Router>
   );
}

export default App;
