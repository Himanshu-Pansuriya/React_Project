import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowUp } from "react-icons/fa";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Land from "../image/Land.jpg";
import Garage from "../image/Garage.jpg";
import Building from "../image/Building.jpg";
import Apartment from "../image/Apartment1.jpg";
import Shop from "../image/Shop.jpg";
import Plot from "../image/Plot.jpg";
import Villa from "../image/Villa.jpg";
import Office from "../image/Office1.jpg";
import Swal from "sweetalert2";

function Home() {
  return (
    <>
      <div className="container-xxl bg-white p-0 containerhome">
        {/* <!-- Navbar Start --> */}
        <div className="container-fluid nav-bar bg-transparent">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <a
              href="index.html"
              className="navbar-brand d-flex align-items-center text-center"
            >
              <div className="icon p-2 me-2">
                <img
                  className="img-fluid"
                  src={"../img/icon-deal.png"}
                  alt="Icon"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <h2 className="m-0 text-primary">PANSURIYA PROPERTIES</h2>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/About" className="nav-item nav-link">
                  About
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="/Property"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Property
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/Property" className="dropdown-item">
                      Property List
                    </Link>
                    <Link to="/PropertyType" className="dropdown-item">
                      Property Type
                    </Link>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <Link
                    to="/Pages"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/TermsAndConditions" className="dropdown-item">
                      Terms And Conditions
                    </Link>
                    <Link to="/PrivacyPolicy" className="dropdown-item">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <Link to="/Contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <Link to="/" className="btn btn-primary px-3 d-none d-lg-flex">
                LOGOUT
              </Link>
            </div>
          </nav>
        </div>
        {/* <!-- Navbar End -->

        <!-- Header Start --> */}
        <div class="container-fluid header bg-white p-0">
          <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
              <h1 class="display-5 animated fadeIn mb-4">
                Find A <span class="text-dark">Perfect Place</span> To Live
                With Your Family
              </h1>
              <h3 class="animated fadeIn mb-4 pb-2">
                <span class="text-primary">
                  'Turning your dreams into an address,
                </span>{" "}
                Real estate, real service, real results.'
              </h3>
              <a href="" class="btn btn-primary py-3 px-5 me-3 animated fadeIn " style={{fontWeight:"bold"}}>
                Welcome!
              </a>
            </div>
            <div className="col-md-6 animated fadeIn ">
              <Carousel>
                <Carousel.Item>
                  <div className="owl-carousel-item w-100">
                    <img
                      src="img/carousel-1.jpg"
                      className="d-block img-fluid"
                      alt="First slide"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="owl-carousel-item w-100">
                    <img
                      src="img/carousel-2.jpg"
                      className="d-block img-fluid"
                      alt="Second slide"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        {/* <!-- Header End --> */}

        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "900px" }}
            >
              <h1 className="mb-3">Property Types</h1>
              <p>
                There are five main categories of real estate which include
                residential, commercial, industrial, raw land, and special use.
                Investing in real estate includes purchasing a home, rental
                property, or land. Indirect investment in real estate can be
                made via REITs or through pooled real estate investment.
              </p>
            </div>
            <div className="row g-4">
              {/* Repeat the following block for each property type */}
              {propertyTypes.map((propertyType, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay={`${0.1 * ((index % 4) + 1)}s`}
                >
                  <a
                    className="cat-item d-block bg-light text-center rounded p-3"
                    href=""
                  >
                    <div className="rounded p-4">
                      <div className="icon mb-3">
                        <img
                          style={{
                            width: "250px",
                            height: "20vh",
                            borderRadius: "50px",
                          }}
                          className="img-fluid"
                          src={propertyType.icon}
                          alt="Icon"
                        />
                      </div>

                      <h6>{propertyType.name}</h6>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section
          class="us_section layout_padding2"
          style={{ padding: "20px", margin: "20px" }}
        >
          <div class="container" style={{ backgroundColor: "#00B98E" }}>
            <div class="heading_container" style={{ padding: "20px" }}>
              <center>
                <h2>Why Choose Us</h2>
              </center>
            </div>
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="box" style={{ padding: "20px" }}>
                  <div class="img-box" style={{ padding: "20px" }}>
                    <img src="img/u-1.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h3 class="price">1000+</h3>
                    <h5>Years of House</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="box" style={{ padding: "20px" }}>
                  <div class="img-box" style={{ padding: "20px" }}>
                    <img src="img/u-2.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h3>20000+</h3>
                    <h5>Projects Delivered</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="box" style={{ padding: "20px" }}>
                  <div class="img-box" style={{ padding: "20px" }}>
                    <img src="img/u-3.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h3>10000+</h3>
                    <h5>Satisfied Customers</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="box" style={{ padding: "20px" }}>
                  <div class="img-box" style={{ padding: "20px" }}>
                    <img src="img/u-4.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h3>1500+</h3>
                    <h5>Cheap Rates</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-box">
              <a href="">Get A Quote</a>
            </div>
          </div>
        </section>
        {/* <!-- Call to Action Start --> */}
        <div class="container-xxl py-5">
          <div class="container">
            <div class="bg-light rounded p-3">
              <div
                class="bg-white rounded p-4"
                style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
              >
                <div class="row g-5 align-items-center">
                  <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img
                      class="img-fluid rounded w-100"
                      src={"../img/call-to-action.jpg"}
                      alt=""
                    />
                  </div>
                  <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="mb-4">
                      <h1 class="mb-3">Contact With Our Certified Agent</h1>
                      <p>
                        "If you’re not going to put your money into real estate,
                        Where else??"
                      </p>
                    </div>
                    <button onClick={()=>{
                    Swal.fire("9861078781 <br/> 9861087872");                    
                    }} href="" class="btn btn-primary py-3 px-4 me-2">
                      <i class="fa fa-phone-alt me-2"></i>Make A Call
                    </button>
                    <button  onClick={()=>{
                    Swal.fire("patelproperties09@gmail.com");                    
                    }}  href="" class="btn btn-dark py-3 px-4">
                      <i class="fa fa-calendar-alt me-2"></i>Get Appoinment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Call to Action End --> */}

        {/* <!-- Team Start --> */}
        <div class="container-xxl py-5">
          <div class="container">
            <div
              class="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1 class="mb-3">Property Agents</h1>
              <p>
                ""In any market, in any country, there are developers who make
                money. So I say all of this doom and gloom, but there will
                always be people who make money, because people always want
                homes."
              </p>
            </div>
            <div class="row g-4">
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="team-item rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src="../img/team-1.jpg" alt="" />
                    <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a
                        class="btn btn-square mx-1"
                        href="https://twitter.com/?lang=en"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "skyblue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.facebook.com/login/"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ color: "blue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "purple" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div class="text-center p-4 mt-3">
                    <h5 class="fw-bold mb-0">Elis Perry</h5>
                    <small>Certified Residential Specialist</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-item rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src="../img/team-2.jpg" alt="" />
                    <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a
                        class="btn btn-square mx-1"
                        href="https://twitter.com/?lang=en"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "skyblue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.facebook.com/login/"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ color: "blue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "purple" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div class="text-center p-4 mt-3">
                    <h5 class="fw-bold mb-0">Moonda Vin</h5>
                    <small>Counselor of Real Estate</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-item rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src="../img/team-3.jpg" alt="" />
                    <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a
                        class="btn btn-square mx-1"
                        href="https://twitter.com/?lang=en"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "skyblue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.facebook.com/login/"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ color: "blue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "purple" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div class="text-center p-4 mt-3">
                    <h5 class="fw-bold mb-0">Loozy Met</h5>
                    <small>Counselor of Real Estate</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="team-item rounded overflow-hidden">
                  <div class="position-relative">
                    <img class="img-fluid" src="../img/team-4.jpg" alt="" />
                    <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      <a
                        class="btn btn-square mx-1"
                        href="https://twitter.com/?lang=en"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "skyblue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.facebook.com/login/"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ color: "blue" }}
                        />
                      </a>
                      <a
                        class="btn btn-square mx-1"
                        href="https://www.instagram.com/"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{ color: "purple" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div class="text-center p-4 mt-3">
                    <h5 class="fw-bold mb-0">Seron Biz</h5>
                    <small>General Accredited Appraiser</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End --> */}

        {/* <!-- Testimonial Start --> */}
        <div class="container-xxl py-5">
          <div class="container">
            <div
              class="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1 class="mb-3">Our Clients Say!</h1>
              <p>
                ""In the real estate business you learn more about people, and
                you learn more about community issues, you learn more about
                life, you learn more about the impact of government, probably
                than any other profession that I know of." —Johnny Isakson"
              </p>
            </div>
            <div
              class="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                  <p>
                    Jennifer Ferland expertises real estate services in the San
                    Francisco and Marin areas. Being in the top 1.5% of Realtors
                    in the United States, Jennifer has generated over $165
                    million in sales volume since 2016, a testament to her
                    knowledge of the real estate industry. This impressive track
                    record is complemented by her unique background in
                    Nutrition, as mentioned on her website.
                  </p>
                  <div class="d-flex align-items-center">
                    <img
                      class="img-fluid flex-shrink-0 rounded"
                      src={"../img/testimonial-1.jpg"}
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ps-3">
                      <h6 class="fw-bold mb-1">Jennifer Ferland</h6>
                      <small>Real Estate Investor</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                  <p>
                    Debra Smalley is one of the best real estate website
                    examples run by Debra Smalley, a well-known real estate
                    broker in Los Angeles. The website stands out by offering a
                    lot of information on top neighborhoods and luxurious
                    houses. Debra’s knowledge of the L.A. housing market and her
                    professionalism make this site a go-to for people looking to
                    buy or sell houses.
                  </p>
                  <div class="d-flex align-items-center">
                    <img
                      class="img-fluid flex-shrink-0 rounded"
                      src={"../img/testimonial-2.jpg"}
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ps-3">
                      <h6 class="fw-bold mb-1">Debra Smalley</h6>
                      <small>Real Estate Broker</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="testimonial-item bg-light rounded p-3">
                <div class="bg-white border rounded p-4">
                  <p>
                    Guy Yarkoni is a luxury real estate agent, investor, and a
                    well-known member of the community in Downtown Toronto.
                    Yarkoni’s strategy is based on developing strong connections
                    and meeting customers’ various demands. This is one of the
                    most significant real estate agent website examples as it
                    features a blend of market insights, property listings, and
                    practical advice for homebuyers and sellers.
                  </p>
                  <div class="d-flex align-items-center">
                    <img
                      class="img-fluid flex-shrink-0 rounded"
                      src={"../img/testimonial-3.jpg"}
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ps-3">
                      <h6 class="fw-bold mb-1">Guy Yarkoni</h6>
                      <small>Investor,Real Estate Agent</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End -->
        

        <!-- Footer Start --> */}
        <div
          class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div class="container py-5">
            <div class="row g-5">
              <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Get In Touch</h5>
                <p class="mb-2">
                  <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York,
                  USA
                </p>
                <p class="mb-2">
                  <i class="fa fa-phone-alt me-3"></i>+012 345 67890
                </p>
                <p class="mb-2">
                  <i class="fa fa-envelope me-3"></i>info@example.com
                </p>
                <div class="d-flex pt-2">
                  <a
                    class="btn btn-outline-light btn-social"
                    href="https://www.youtube.com/"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ color: "red" }}
                    />
                  </a>
                  <a
                    class="btn btn-outline-light btn-social"
                    href="https://twitter.com/?lang=en"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ color: "skyblue" }}
                    />
                  </a>
                  <a
                    class="btn btn-outline-light btn-social"
                    href="https://www.facebook.com/login/"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "blue" }}
                    />
                  </a>
                  <a
                    class="btn btn-outline-light btn-social"
                    href="https://www.instagram.com/"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "purple" }}
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Quick Links</h5>
                <Link class="btn btn-link text-white-50" to="/About">
                  About Us
                </Link>
                <Link class="btn btn-link text-white-50" to="/Contact">
                  Contact Us
                </Link>
                <Link class="btn btn-link text-white-50" to="/Pages">
                  Our Services
                </Link>
                <Link class="btn btn-link text-white-50" to="/PrivacyPolicy">
                  Privacy Policy
                </Link>
                <Link
                  class="btn btn-link text-white-50"
                  to="/TermsAndConditions"
                >
                  Terms & Condition
                </Link>
              </div>
              <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Photo Gallery</h5>
                <div class="row g-2 pt-2">
                  <div class="col-4">
                    <img
                      class="img-fluid rounded bg-light p-1"
                      src={"../img/property-1.jpg"}
                      alt=""
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid rounded bg-light p-1"
                      src={"../img/property-2.jpg"}
                      alt=""
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid rounded bg-light p-1"
                      src={"../img/property-3.jpg"}
                      alt=""
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid rounded bg-light p-1"
                      src={"../img/property-4.jpg"}
                      alt=""
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid rounded bg-light p-1"
                      src={"../img/property-5.jpg"}
                      alt=""
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid rounded bg-light p-1"
                      src={"../img/property-6.jpg"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Newsletter</h5>
                <p>If you want to deal with us , send Email Id</p>
                <div
                  class="position-relative mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <input
                    class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="copyright">
              <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy;{" "}
                  <a class="border-bottom" href="#">
                    Pansuriya Properties
                  </a>
                  , All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                  <div class="footer-menu">
                    <a href="">Home</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End -->


        <!-- Back to Top --> */}
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
          <center>
            <FaArrowUp style={{ color: "white" }} />
          </center>
        </a>
      </div>

      {/* // <!-- JavaScript Libraries --> */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="lib/wow/wow.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      {/* //  <!-- Template Javascript --> */}
      <script src="js/main.js"></script>
    </>
  );
}
const propertyTypes = [
  { name: "Apartment", icon: Apartment },
  { name: "Villa", icon: Villa },
  { name: "Office", icon: Office },
  { name: "Building", icon: Building },
  { name: "Plot", icon: Plot },
  { name: "Land", icon: Land },
  { name: "Shop", icon: Shop },
  { name: "Garage", icon: Garage },
];

const imageData = [
  { url: "../img/property-6.jpg", alt: "Image 1" },
  { url: "../img/property-7.jpg", alt: "Image 2" },
  { url: "../img/property-8.jpg", alt: "Image 3" },
];

export default Home;
