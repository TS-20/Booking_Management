import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import LoginContext from "../loginContext";
const Home = () => { 
  const navigate = useNavigate();
  const [user,setUser] = useState({
    firstName: localStorage.getItem("firstName") || "",
    token: localStorage.getItem("token") || ""
  });
  const updateUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <LoginContext.Provider value={{ user, updateUser }}>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-3" >
  <a class="navbar-brand" href="#">Show</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/bookings" >Bookings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/cities">Cities</a>
      </li>
    </ul>
    <form className="form-inline my-5 my-lg-0 ml-auto">
  {(user.firstName !== "") ? (
    <div className="d-flex align-items-center " style={{ marginLeft: "600px" }}>
      <span className="navbar-text mr-3">
        Welcome, {user.firstName} &nbsp;
      </span>
      <input
        type="button"
        className="btn btn-danger"
        value="Logout"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("firstName");
          updateUser({ firstName: "", token: "" });
          navigate("/login");
        }}
      />
    </div>
  ) : (
    <a href="/login" className="btn btn-outline-primary ml-auto">Login</a>
  )}
</form>
  </div>
</nav>
</LoginContext.Provider>
  );
};

export default Home;
