import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameregex = /^[a-zA-Z0-9]/;
    if (!nameregex.test(formData.name)) {
      document.getElementById("errorname").style.visibility = "visible";
      document.getElementById("errorname").innerHTML =
        "please enter a valid username";
      return;
    } else {
      document.getElementById("errorname").style.visibility = "hidden";
    }

    const phoneregex = /^[0-9]{10}$/;
    if (!phoneregex.test(formData.phone)) {
      document.getElementById("errorphone").style.visibility = "visible";
      document.getElementById("errorphone").innerHTML =
        "please enter a valid contact number";
      return;
    } else {
      document.getElementById("errorphone").style.visibility = "hidden";
    }

    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailregex.test(formData.email)) {
      document.getElementById("erroremail").style.visibility = "visible";
      document.getElementById("erroremail").innerHTML =
        "please enter a valid email id";
      return;
    } else {
      document.getElementById("erroremail").style.visibility = "hidden";
    }

    try {
      const response = await fetch("http://localhost:3032/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "The Internet?",
        text: "API still not ready to get data!",
        icon: "question",
      });
    }
  };

  return (
    <>
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
                  <Link to="/Property" className="dropdown-item">
                    Property Agent
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
            <Link
              to="/LoginPage"
              className="btn btn-primary px-3 d-none d-lg-flex"
            >
              LOGIN
            </Link>
          </div>
        </nav>
      </div>
      <section className="contact">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 contact-background-color">
                <center>
                  <h1 className="page-title" style={{ color: "#00B98E" }}>
                    Contact
                  </h1>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="contact-item">
                      <i className="fas fa-envelope"></i>
                      <h5 style={{color:"#00B98E"}}>Mail</h5>
                      <h6>pansuriyaproperties1111@gmail.com</h6>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <h5 style={{color:"#00B98E"}}>Address</h5>
                      <h6>
                        'Khodiyar Krupa', KKV chowk, 150ft ring road, Rajkot,
                        Gujarat, India
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact-item">
                      <i className="fas fa-phone-alt"></i>
                      <h5 style={{color:"#00B98E"}}>Phone</h5>
                      <h6>+91 9091929394</h6>
                    </div>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="col-lg-12">
                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="inp-contact"
                        id="inp-name"
                      />
                      <div
                        id="errorname"
                        style={{ visibility: "hidden", color: "red" }}
                      ></div>
                    </div>
                    <div className="col-lg-6">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="inp-contact"
                        id="inp-phone"
                      />
                      <div
                        id="errorphone"
                        style={{ visibility: "hidden", color: "red" }}
                      ></div>
                    </div>
                    <div className="col-lg-12">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="inp-contact"
                        id="inp-email"
                      />
                    </div>
                    <div
                      id="erroremail"
                      style={{ visibility: "hidden", color: "red" }}
                    ></div>
                    <div className="col-lg-12">
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="ta-contact"
                        id="inp-message"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn-contact">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
