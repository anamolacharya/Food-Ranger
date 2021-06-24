import React from "react";
import "../css/topBlogs.css";

function Blog(props) {
  return (
    <>
      <div className="blog">
        <img
          className="blog_img"
          src={props.img}
          alt="image need to be added"
          writer={props.author}
        />
        <h1> {props.blogTitle}</h1>
      </div>
    </>
  );
}
export default Blog;
