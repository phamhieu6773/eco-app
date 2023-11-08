import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWithlist } from "../features/user/userSlice";
import { addToWithlist } from "../features/product/productSlice";
import { Link, useLocation } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    dispatch(getWithlist());
  }, []);
  const withListState = useSelector((state) => state.user.withList);
  console.log(withListState);
  const handleDelete = async (id) => {
    await dispatch(addToWithlist(id));
    await dispatch(getWithlist());
  };
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {withListState?.map((item) => (
            <div key={item?._id} className="col-3">
              <div className="wishlist-card position-relative">
                <TiDeleteOutline
                  className="position-absolute cross fs-1 top-0 end-0"
                  onClick={() => handleDelete(item?._id)}
                />
                <Link to={`/product/${item._id}`}>
                  <div className="wishlist-card-image">
                    <img
                      src={item?.images[0].url}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">đ{item?.price}</h6>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
