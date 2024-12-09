import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const AdminLogin = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3032/signup")
      .then((response) => response.json())
      .then((receive) => {
        setData(receive);
        setFilteredData(receive);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const searchFaculty = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.email.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3032/signup/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Update both data and filteredData after successful deletion
          setData(data.filter((item) => item._id !== id));
          setFilteredData(filteredData.filter((item) => item._id !== id));
        } else {
          throw new Error("Failed to delete user");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

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
          </div>
        </div>
        <div className="w-full mx-auto md:px-16 my-5 flex items-center justify-between font-serif">
          <div className="w-3/4 relative">
            <input
              className="border-2 outline-none rounded-full w-full text-xl px-5 py-3 pl-[3.5rem]"
              type="text"
              onChange={searchFaculty}
              placeholder="Search by Email"
            />
          </div>
        </div>

        <div className="col-lg-12 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Signup Users</h4>
              <p className="card-description">Users</p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item,index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.role}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  );
};

export default AdminLogin;
