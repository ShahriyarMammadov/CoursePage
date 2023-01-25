import React from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://preview.colorlib.com/theme/course/images/logo.png"
          alt=""
        />
        <Link to={"/"}>
          <h1>COURSE</h1>
        </Link>
      </div>
      <div className="nav">
        <NavLink>HOME</NavLink>
        <NavLink>ABOUT US</NavLink>
        <NavLink>COURSES</NavLink>
        <NavLink to={"/wishList"}>WishList</NavLink>
        <NavLink>NEWS</NavLink>
        <NavLink to={"/addProdPage"}>CONTACT</NavLink>
      </div>
      <div className="contact">
        <i className="fa-solid fa-phone-volume"></i>
        <div className="number">
          <p>+43 4566 7788 2457</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
