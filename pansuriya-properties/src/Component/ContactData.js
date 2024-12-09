import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaHouseChimney } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const ContactData = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3032/Contact')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contact data:', error));
  }, []);

  return (
    <>
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
                <div className="row">
                  <li className="nav-item col-10">
                    <Link className="nav-link" to="/AdminLogin">
                      Login Data
                    </Link>
                  </li>
                  <div className="col-2">
                    <center className="my-3">
                      <FaUserCircle style={{ color: "#00B98E" }} />
                    </center>
                  </div>
                </div>
                <div className="row">
                  <li className="nav-item col-10">
                    <Link className="nav-link" to="/PropertyData">
                      Property Data
                    </Link>
                  </li>
                  <div className="col-2">
                    <center className="my-3">
                      <FaHouseChimney style={{ color: "#00B98E" }} />
                    </center>
                  </div>
                </div>
                <div className="row">
                  <li className="nav-item col-10">
                    <Link className="nav-link" to="/ContactData">
                      Contact Data
                    </Link>
                  </li>
                  <div className="col-2">
                    <center className="my-3">
                      <MdContacts style={{ color: "#00B98E" }} />
                    </center>
                  </div>
                </div>
                <div className="row">
                  <li className="nav-item col-10">
                    <Link className="nav-link" to="/">
                      Logout
                    </Link>
                  </li>
                  <div className="col-2">
                    <center className="my-3">
                      <IoLogOut style={{ color: "#00B98E" }} />
                    </center>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </nav>
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-md-4" style={{marginLeft:"230px"}}>
              <div className="row m-3">
                <div className="col-12 m-4 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Users contact</h4>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th> id</th>
                              <th> Name </th>
                              <th> Phone  </th>
                              <th> Email </th>
                              <th> message </th>
                            </tr>
                          </thead>
                          <tbody>
                            {contacts.map((contact,index) => (
                              <tr key={contact._id}>
                                <td>{index + 1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>{contact.message}</td>
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
    </>
  );
};

export default ContactData;
