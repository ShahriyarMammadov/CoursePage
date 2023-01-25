import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";

const WishList = () => {
  const FavData = useSelector((state) => state.favReducer);
  console.log(FavData);
  return (
    <div className="wish">
      <div className="cards">
        {FavData.map((e) => {
          return (
            <div className="card" key={e.data._id}>
              <div className="image">
                <img src={e?.data.cardImage} alt="" />
              </div>
              <div className="body">
                <Link>{e?.data.text}</Link>
                <p>{e?.data.text2}</p>
              </div>
              <div className="user">
                <img src={e?.data.userImage} alt="" />
                <p>
                  {e?.data.userName}, <span> Author</span>
                </p>
                <div className="price">
                  <h2>${e?.data.price}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
