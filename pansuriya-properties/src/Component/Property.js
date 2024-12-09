import { get } from "http";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Property() {
  const [activeTab, setActiveTab] = useState("All");

  const [gets, setGets] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3032/Makan")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGets(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const filteredProperties = gets.filter(
    (property) => activeTab === "All" || property.sellRentType === activeTab
  );

  function funcNavigate() {
    navigate("/AddProperty");
  }
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="text-start mx-auto mb-5 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h1 className="mb-3">Property Listing</h1>
                <p>See Properties</p>
              </div>
            </div>
            <div
              className="col-lg-6 text-start text-lg-end wow slideInRight"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li
                  className={`nav-item me-2 ${
                    activeTab === "All" ? "active" : ""
                  }`}
                >
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => setActiveTab("All")}
                  >
                    All
                  </button>
                </li>
                <li
                  className={`nav-item me-2 ${
                    activeTab === "For Sell" ? "active" : ""
                  }`}
                >
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => setActiveTab("For Sell")}
                  >
                    For Sell
                  </button>
                </li>
                <li
                  className={`nav-item me-0 ${
                    activeTab === "For Rent" ? "active" : ""
                  }`}
                >
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => setActiveTab("For Rent")}
                  >
                    For Rent
                  </button>
                </li>
                <li className={`nav-item me-2`}>
                  <button
                    className="btn btn-outline-primary btn-primary"
                    style={{ color: "white" }}
                    onClick={funcNavigate}
                  >
                    Add Property
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content">
            <div className="row g-4">
              {filteredProperties.map((get, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={get.wowDelay}
                >
                  <div className="property-item rounded overflow-hidden">
                    <div className="position-relative overflow-hidden">
                      <a href="">
                        <img className="img-fluid" src={get.imgSrc} alt="" />
                      </a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        {get.sellRentType}
                      </div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        {get.propertyType}
                      </div>
                    </div>
                    <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">{get.price}</h5>
                      <a className="d-block h5 mb-2" href="">
                        {get.title}
                      </a>
                      <p>
                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                        {get.location}
                      </p>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-ruler-combined text-primary me-2"></i>
                        {get.area}
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-bed text-primary me-2"></i>
                        {get.bedrooms}
                      </small>
                      <small className="flex-fill text-center py-2">
                        <i className="fa fa-bath text-primary me-2"></i>
                        {get.bathrooms}
                      </small>
                    </div>
                    <div className="d-flex border-top">
                      <center>
                        <Button style={{margin:"10px 0px 10px 150px"}}
                          onClick={() => {
                            Swal.fire(get.contact);
                          }}
                        >
                          Contact
                        </Button>
                      </center>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
