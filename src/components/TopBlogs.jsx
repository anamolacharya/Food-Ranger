import React from "react";
import Blog from "./Blog";
import blog1 from "../img/blog-1.jpeg";
import blog2 from "../img/blog-2.jpg";
import "../css/topBlogs.css";

function TopBlogs() {
  return (
    <>
      <h1>Top Blogs Today</h1>
      <div className="top_blogs">
        <Blog
          img={blog1}
          blogTitle="Craving for Haleem this Ramadan?"
          author="Author 1"
        />
        <Blog
          img={blog2}
          blogTitle="New Mexican Restaurant in Dhaka"
          author="Author 2"
        />
        <Blog
          img={blog1}
          blogTitle="Craving for Haleem this Ramadan?"
          author="Author 3"
        />
      </div>
    </>
  );
}
export default TopBlogs;
