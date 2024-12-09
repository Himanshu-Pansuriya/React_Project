import React, { useState } from "react";
import "./AddProperty.css";

function AddProperty() {
  const [formData, setFormData] = useState({
    imgSrc: "",
    sellRentType: "",
    propertyType: "",
    price: 0,
    title: "",
    location: "",
    area: "",
    bedrooms: 0,
    bathrooms: 0,
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST request to your API endpoint with formData
    fetch("http://localhost:3032/Makan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form data sent successfully");
          setFormData({
            imgSrc: "",
            sellRentType: "",
            propertyType: "",
            price: 0,
            title: "",
            location: "",
            area: "",
            bedrooms: 0,
            bathrooms: 0,
            contact: "",
          });
        } else {
          console.error("Failed to send form data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="add-property-container">
      <center>
        <h1> PROPERTY FORM</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col">
              <label htmlFor="imgSrc" className="labelproperty">
                Image Source:
              </label>
              <input
                type="text"
                id="imgSrc"
                name="imgSrc"
                value={formData.imgSrc}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="sellRentType" className="labelproperty">
                Sell/Rent Type:
              </label>
              <input
                type="text"
                id="sellRentType"
                name="sellRentType"
                value={formData.sellRentType}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="propertyType" className="labelproperty">
                Property Type:
              </label>
              <input
                type="text"
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="price" className="labelproperty">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="title" className="labelproperty">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="location" className="labelproperty">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="area" className="labelproperty">
                Area:
              </label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="bedrooms" className="labelproperty">
                Bedrooms:
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col">
                <label htmlFor="bathrooms" className="labelproperty">
                  Bathrooms:
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="contact" className="labelproperty">
                  Contact:
                </label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <center>
                <input
                  type="submit"
                  value="Submit"
                  className="submitproperty"
                />
              </center>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProperty;
