import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src={data?.images[0]?.url}
          // className="img-fluid w-100"
          className="card-img-top"
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">{new Date(data?.updatedAt).toLocaleString()}</p>
        <h5 className="title">{data?.title}</h5>
        {/* <p
          className="desc"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        >
        </p> */}
        <p className="desc">{data?.category}</p>
        <Link to={`/blog/${data?._id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
