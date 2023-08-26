import React from "react";
import Luces from "./luces.jsx";
import Footer from "./footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <div>
        <Luces />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
