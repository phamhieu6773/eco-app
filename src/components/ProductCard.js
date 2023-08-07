import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import watch from "../images/watch2.jpg";
import watch2 from "../images/watch.jpg";

const ProductCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="product image" />
          <img src={watch2} className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <p className="price">$100.00</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-10">
            <Link>
              <img src="images/prodcompare.svg" alt="prodcompare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add-cart" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
