import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./BlogCards";
import Blogs from "./Blogs";
import NavBar from "./NavBar";
import Img1 from "./Images/6.png";
import Img2 from "./Images/7.png";

function Feeds() {
  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   margin: "120px",
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   swipeToSlide: true,
  //   afterChange: function (index) {
  //     console.log(
  //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //     );
  //   },
  // };
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      <div class="search-bar">
        <i class="fas fa-search search-icon"></i>
      </div>

      <i class="profile-icon fa-3x fas fa-user-circle"></i>

      <NavBar />
      <div class="feed myfeed">
        {Blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            img={blog.imgURL}
            heading={blog.heading}
            desc={blog.desc}
          />
        ))}
      </div>

      {/* <div class="feed myfeed">
        <h2>My Feed</h2>
        <h5>See All</h5>
        <Slider {...settings}>
          {Blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              img={blog.imgURL}
              heading={blog.heading}
              desc={blog.desc}
            />
          ))}
        </Slider>
      </div>
      <div class="feed Trending">
        <h2>Trending</h2>
        <h5>See All</h5>
        <Slider {...settings}>
          {Blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              img={blog.imgURL}
              heading={blog.heading}
              desc={blog.desc}
            />
          ))}
        </Slider>
      </div> */}
    </>
  );
}

export default Feeds;
