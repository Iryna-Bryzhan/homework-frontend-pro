import React from "react";
import "./MainPage.css";
import logo from "../../img/star_wars.jpg";
import Menu from "../../components/menu/Menu";

function MainPage() {
  return (
    <div className="container">
      <div className="main-page">
        <div className="mainPage-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="mainPage-menu">
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
