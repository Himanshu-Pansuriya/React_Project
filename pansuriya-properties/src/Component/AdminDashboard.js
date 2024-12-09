import React from "react";
import { Link } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import "../../src/css/Admincss.css";

function AdminDashboard() {
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
        <main role="main">
          <h1>Welcome to Admin World!</h1>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
