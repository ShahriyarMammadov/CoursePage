import React, { useEffect, useState } from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Helmet } from "react-helmet";
import {
  productAction,
  searchAction,
} from "../../../redux/action/product.action";
import { favAction } from "../../../redux/action/fav.action";
import { Input } from "antd";
import axios from "axios";
const { Search } = Input;

const HomePage = () => {
  const [toggle, setToggle] = useState(true);
  const GetData = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction());
  }, []);

  const handleWishList = (e) => {
    dispatch(favAction(e));
  };

  const handleSort = () => {
    setToggle(!toggle);
    if (toggle) {
      let sortedData = GetData.data.sort((a, b) => a.price - b.price);
      dispatch(searchAction(sortedData));
    } else {
      dispatch(productAction());
    }
  };
  const onSearch = async (ed) => {
    let response = await axios.get(`http://localhost:3000/products`);

    let searchData = response.data.filter((e) =>
      e.text.toLowerCase().includes(ed.target.value.toLowerCase())
    );
    dispatch(searchAction(searchData));
  };
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section id="sec1">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
              alt=""
            />
            <h1>
              Get yout <span>Education </span>today!
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="sec2">
        <div className="header">
          <div className="hr"></div>
          <h1>Popular Courses</h1>
        </div>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={onSearch}
        />
        <button
          onClick={() => {
            handleSort();
          }}
        >
          Sort by Price
        </button>
        <div className="cards">
          {GetData?.data?.map((e) => {
            return (
              <>
                <i
                  class="fa-solid fa-heart-crack"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={() => {
                    handleWishList(e);
                  }}
                ></i>
                <Link to={`/detailPage/${e._id}`}>
                  <div className="card" key={e._id}>
                    <div className="image">
                      <img src={e?.cardImage} alt="" />
                    </div>
                    <div className="body">
                      <Link>{e?.text}</Link>
                      <p>{e?.text2}</p>
                    </div>
                    <div className="user">
                      <img src={e?.userImage} alt="" />
                      <p>
                        {e?.userName}, <span> Author</span>
                      </p>
                      <div className="price">
                        <h2>${e?.price}</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </section>

      <section id="sec3">
        <div className="left">
          <div className="headerText">
            <h1>
              Register now and get a discount <span>50%</span> discount until 1
              January
            </h1>
            <div className="text">
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante
                nisl fermentum nulla, vitae tempo.
              </p>
            </div>
            <button>REGISTER NOW</button>
          </div>
        </div>
        <div className="right">
          <div className="headerText">
            <h1>Search for your course</h1>

            <div className="inputs">
              <input type="text" placeholder="Course Name" />
              <input type="text" placeholder="Category" />
              <input type="text" placeholder="Degree" />

              <button>SEARCH COURSE</button>
            </div>
          </div>
        </div>
      </section>

      <section id="sec4">
        <div className="header">
          <div className="hr"></div>
          <h1>Our Services</h1>
        </div>
        <div className="serviceCard">
          <div className="cardTop">
            <div className="card">
              <div className="svg">
                <img
                  src="https://preview.colorlib.com/theme/course/images/earth-globe.svg"
                  alt=""
                />
              </div>
              <div className="textHeader">
                <h1>Online Courses</h1>
              </div>
              <div className="text">
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="svg">
                <img
                  src="https://preview.colorlib.com/theme/course/images/exam.svg"
                  alt=""
                />
              </div>
              <div className="textHeader">
                <h1>Indoor Courses</h1>
              </div>
              <div className="text">
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="svg">
                <img
                  src="https://preview.colorlib.com/theme/course/images/books.svg"
                  alt=""
                />
              </div>
              <div className="textHeader">
                <h1>Amazing Library</h1>
              </div>
              <div className="text">
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
          </div>
          <div className="cardTop">
            <div className="card">
              <div className="svg">
                <img
                  src="https://preview.colorlib.com/theme/course/images/professor.svg"
                  alt=""
                />
              </div>
              <div className="textHeader">
                <h1>Exceptional Professors</h1>
              </div>
              <div className="text">
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="svg">
                <img
                  src="https://preview.colorlib.com/theme/course/images/blackboard.svg"
                  alt=""
                />
              </div>
              <div className="textHeader">
                <h1>Top Programs</h1>
              </div>
              <div className="text">
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="svg">
                <img
                  src="https://preview.colorlib.com/theme/course/images/mortarboard.svg"
                  alt=""
                />
              </div>
              <div className="textHeader">
                <h1>Graduate Diploma</h1>
              </div>
              <div className="text">
                <p>
                  In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                  vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                  finibus tortor fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sec5">
        <div className="header">
          <div className="hr"></div>
          <h1>Upcoming Events</h1>
        </div>

        <div className="eventsCard">
          <div className="card">
            <div className="date">
              <h1>07 January</h1>
            </div>
            <div className="about">
              <div className="textHeader">
                <Link>Student Festival</Link>
                <p>Grand Central Park</p>
              </div>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/course/images/event_1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="card">
            <div className="date">
              <h1>07 January</h1>
            </div>
            <div className="about">
              <div className="textHeader">
                <Link>Open day in the University campus</Link>
                <p>Grand Central Park</p>
              </div>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/course/images/event_2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="card">
            <div className="date">
              <h1>07 January</h1>
            </div>
            <div className="about">
              <div className="textHeader">
                <Link>Student Graduation Ceremony</Link>
                <p>Grand Central Park</p>
              </div>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <div className="image">
              <img
                src="https://preview.colorlib.com/theme/course/images/event_3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
