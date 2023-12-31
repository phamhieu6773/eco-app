/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishBlack from "../images/wish-black.svg";

import wishlist from "../images/wishlist.svg";
import watch from "../images/watch2.jpg";
import watch2 from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWithlist } from "../features/product/productSlice";
import { toast } from "react-toastify";
import { getWithlist } from "../features/user/userSlice";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { grid, data, allWithlist } = props;
  console.log("data", data);
  const checkItemWishlist = allWithlist?.some(
    (element) => element._id === data._id
  );
  let location = useLocation();
  const productState = useSelector((state) => state.product);
  console.log("productState", productState);
  const handleAddWithlist = async (id) => {
    if (token) {
      await dispatch(addToWithlist(id));
      await dispatch(getWithlist());
    } else {
      toast.error("Bạn chưa đăng nhập!");
    }
  };

  return (
    <>
      <div
        className={` ${
          location.pathname === "/product"
            ? `gr-${grid}`
            : "col-lg-2 col-md-4 col-sm-6 col-6"
        } `}
      >
        <div className="position-relative">
          <div className="wishlist-icon position-absolute">
            <button
              className="border-0 bg-transparent"
              onClick={() => handleAddWithlist(data?._id)}
            >
              {checkItemWishlist ? (
                <img src={wishBlack} alt="wishlist" />
              ) : (
                <img src={wish} alt="wishlist" />
              )}
            </button>
          </div>
          <Link
            to={`${
              location.pathname === "/"
                ? "/product/:id"
                : location.pathname === "/product/:id"
                ? "/product/:id"
                : ":id"
            }`}
            className="product-card position-relative"
          >
            <div className="product-image">
              <img
                src={data?.images[0]?.url}
                className="img-fluid"
                alt="product image"
              />
              <img
                src={data?.images[1] ? data?.images[1]?.url : watch}
                className="img-fluid"
                alt="product image"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">{data?.brand}</h6>
              <h5 className="product-title">{data?.title}</h5>
              <ReactStars
                count={5}
                size={24}
                value={data?.totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              {/* <p
              dangerouslySetInnerHTML={{ __html: data?.description }}
              className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            ></p> */}
              <p className="price">{data?.price} VND</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src={prodcompare} alt="compare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

/* eslint-disable jsx-a11y/img-redundant-alt */
// import React from "react";
// import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
// import watch from "../images/watch2.jpg";
// import watch2 from "../images/watch.jpg";

// const ProductCard = () => {
//   const ratingChanged = (newRating) => {
//     console.log(newRating);
//   };
//   return (
//     <div className="col-lg-2 col-md-4 col-sm-6 col-6 mt-4">
//       <div className="product-card position-relative">
//         <div className="product-image">
//           <img src={watch} className="img-fluid" alt="product image" />
//           <img src={watch2} className="img-fluid" alt="product image" />
//         </div>
//         <div className="wishlist-icon position-absolute">
//           <Link>
//             <img src="images/wish.svg" alt="wishlisticon" />
//           </Link>
//         </div>
//         <div className="action-bar position-absolute">
//           <div className="d-flex flex-column gap-10">
//             <Link>
//               <img src="images/prodcompare.svg" alt="prodcompare" />
//             </Link>
//             <Link>
//               <img src="images/view.svg" alt="view" />
//             </Link>
//             <Link>
//               <img src="images/add-cart.svg" alt="add-cart" />
//             </Link>
//           </div>
//         </div>
//         <div className="product-details">
//           <h6 className="brand">Havels</h6>
//           <h5 className="product-title">
//             Kids headphones bulk 10 pack multi colored for students
//           </h5>
//           <ReactStars
//             count={5}
//             onChange={ratingChanged}
//             size={24}
//             value="3"
//             edit={false}
//             activeColor="#ffd700"
//           />
//           <p className="price">$100.00</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

{
  /* <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div> */
}
