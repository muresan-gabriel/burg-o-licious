import React from "react";
import BurgerImage from "./img/burger-mock.png";

function Header() {
  // Import result is the URL of your image
  return (
    <img className="card-img asset-card-bg" src={BurgerImage} alt="Borgir" />
  );
}

export default Header;
