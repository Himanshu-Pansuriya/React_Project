import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const PropertyData = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3032/Makan')  
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching property data:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3032/Makan/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete property");
      }
      // Remove the deleted property from state
      const updatedProperties = properties.filter(property => property._id !== id);
      setProperties(updatedProperties);
      console.log("Deleted property with ID:", id);
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <div className="container">
                <div className="row">
                  <center>
                    <li className="nav-item" style={{ height: "120px" }}>
                      <img
                        className="img-fluid"
                        src={"../img/icon-deal.png"}
                        alt="Icon"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </li>
                  </center>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <li className="nav-item col-12">
                        <div style={{ color: '#0839dc', fontWeight: 'bold' }}>Himanshu pansuriya</div>
                        <div style={{ color: 'red', fontWeight: 'inherit' }}>Project Manager</div>
                        </li>
                    </div>
                  </div>
                </div>
                <NavItem link="/AdminLogin" text="Login Data" icon={<FaUserCircle style={{ color: "#00B98E" }} />} />
                <NavItem link="/PropertyData" text="Property Data" icon={<FaHouseChimney style={{ color: "#00B98E" }} />} />
                <NavItem link="/ContactData" text="Contact Data" icon={<MdContacts style={{ color: "#00B98E" }} />} />
                <NavItem link="/" text="Logout" icon={<IoLogOut style={{ color: "#00B98E" }} />} />
              </div>
            </ul>
          </div>
        </nav>
        <main role="main" className="col-md-10 ml-sm-auto col-lg-10 my-4 px-md-4" style={{marginLeft:"250px"}}>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Property Data</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th> _id</th>
                          <th> Image </th>
                          <th> Sell/Rent Type </th>
                          <th> Property Type </th>
                          <th> Price </th>
                          <th> Title </th>
                          <th> Location </th>
                          <th> Area </th>
                          <th> Bedrooms </th>
                          <th> Bathrooms </th>
                          <th> Contact</th>
                          <th> Action </th>
                        </tr>
                      </thead>
                      <tbody>
                        {properties.map((property,index) => (
                          <tr key={property._id}>
                            <td>{index + 1}</td>
                            <td><img src={property.imgSrc} alt="Property" style={{ width: '100px', height: '100px' }} /></td>
                            <td>{property.sellRentType}</td>
                            <td>{property.propertyType}</td>
                            <td>{property.price}</td>
                            <td>{property.title}</td>
                            <td>{property.location}</td>
                            <td>{property.area}</td>
                            <td><center>{property.bedrooms}</center></td>
                            <td><center>{property.bathrooms}</center></td>
                            <td>{property.contact}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(property._id)}
                              >DELETE
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ link, text, icon }) => (
  <div className="row">
    <li className="nav-item col-10">
      <Link className="nav-link" to={link}>
        {text}
      </Link>
    </li>
    <div className="col-2">
      <center className="my-3">
        {icon}
      </center>
    </div>
  </div>
);

export default PropertyData;
