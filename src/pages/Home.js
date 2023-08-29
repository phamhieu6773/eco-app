import React from "react";
import banner from "../images/main-banner-1.jpg";
import banner2 from "../images/catbanner-01.jpg";
import banner3 from "../images/catbanner-02.jpg";
import banner4 from "../images/catbanner-03.jpg";
import banner5 from "../images/catbanner-04.jpg";
import service1 from "../images/service.png";
import service2 from "../images/service-02.png";
import service3 from "../images/service-03.png";
import service4 from "../images/service-04.png";
import service5 from "../images/service-05.png";
import famoust1 from "../images/famoust1.png";
import famoust2 from "../images/famoust2.png";
import famoust3 from "../images/famoust3.png";
import famoust4 from "../images/famoust4.png";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";

const Home = () => {
  return (
    <>
      <Meta title={"Home"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl" style={{ marginTop: "128px" }}>
          <div className="row">
            <div className="col-lg-6 pb-3">
              <div className="main-banner position-relative ">
                <img
                  src={banner}
                  className="img-fluid rounded-3 w-100"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row h-100">
                <div className="col-6">
                  <div className="small-banner position-relative">
                    <img
                      src={banner2}
                      className="img-fluid rounded-3 w-100"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>Best Sake</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div
                    className="small-banner position-relative"
                    style={{ marginTop: "22px" }}
                  >
                    <img
                      src={banner3}
                      className="img-fluid rounded-3 w-100"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>But IPad Air</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="small-banner position-relative ">
                    <img
                      src={banner4}
                      className="img-fluid rounded-3 w-100"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>But IPad Air</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div
                    className="small-banner position-relative"
                    style={{ marginTop: "22px" }}
                  >
                    <img
                      src={banner5}
                      className="img-fluid rounded-3 w-100"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>But IPad Air</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src={service1} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <img src={service2} alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <img src={service3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <img src={service4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <img src={service5} alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative bg-dark">
                <img src={famoust1} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative bg-info">
                <img src={famoust2} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative bg-dark">
                <img src={famoust3} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>smartphones</h5>
                  <h6>Smartphone 13 Pro.</h6>
                  <p>From $999.00 for 24 mo.Footnote*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative bg-warning">
                <img src={famoust4} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">home speakers</h5>
                  <h6 className="text-dark">Room-filling sound.</h6>
                  <p className="text-dark">
                    From $699 or $116.58/mo. for 12 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Product</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Laterst Blogs</h3>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-3">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-3">
              <BlogCard />
            </div>{" "}
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-3">
              <BlogCard />
            </div>{" "}
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
