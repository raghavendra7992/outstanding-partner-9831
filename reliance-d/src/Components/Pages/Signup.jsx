import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import Message from "./message.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formdata, setformdata] = useState({});
  const navigate=useNavigate()
  const onNameChange = (e) => {
    const inputname = e.target.name;
    if (inputname == "name") {
      setformdata({
        ...formdata,
        name: e.target.value,
      });
    }
    if (inputname == "mobile") {
      setformdata({
        ...formdata,
        mobile: e.target.value,
      });
    }
    if (inputname == "email") {
      setformdata({
        ...formdata,
        email: e.target.value,
      });
    }
    if (inputname == "confirmpass") {
      setformdata({
        ...formdata,
        confirmpass: e.target.value,
      });
    }

    if (inputname == "password") {
      setformdata({
        ...formdata,
        password: e.target.value,
      });
    }

    if (inputname == "mobile") {
      setformdata({
        ...formdata,
        mobile: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    navigate("/login")
    console.log(formdata.password);
    console.log(formdata.confirmpass);
    if (formdata.password === formdata.confirmpass) {
      axios.post("https://relianceapi.onrender.com/signup", formdata).then((e) => {
        
    //   alert(e.data.message);
  <Message variant={"success"}>
    {e.data.message}
  </Message>
      
      });
    } else {
        <Message variant={"success"}>
        {e.data.message}
      </Message>
    //   alert("please check your password");
    }
  };

  return (
    <div style={{ paddingTop: "170px", paddingBottom: "20px" }}>
      <div
        style={{
          paddingBottom: "20px",
          borderRadius: "5px",
          margin: "auto",
          width: "35%",
          backgroundColor: "#ffffff",
          border: "1px solid black",
          height: "auto",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div>
          <h1>Register New Account</h1>
        </div>
        <hr />

        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name*"
              name="name"
              className="inpelem"
              onChange={onNameChange}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Last Name*"
              name="lastname"
              className="inpelem"
              onChange={onNameChange}
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Email Address*"
              name="email"
              className="inpelem"
              onChange={onNameChange}
            />{" "}
            <br />
            <p
              style={{
                fontSize: "14.4px",
                marginLeft: "40px",
                lineHeight: "3px",
              }}
            >
              Your email address will be used to send order invoice, order
              updates etc.
            </p>
            <button style={{ width: "190px", marginLeft: "40px" }}>
              Verify Email
            </button>
            <input
              type="number"
              name="mobile"
              placeholder="Mobile No*"
              className="inpelem"
              onChange={onNameChange}
            />{" "}
            <br />
            <p style={{ fontSize: "14.4px", marginLeft: "40px" }}>
              Your mobile number will be used to avail benefits such as Jio Mart{" "}
              <br /> Cashback and ROne Loyality Points and receive quick
              notifications.
            </p>
            <input
              type="password"
              placeholder="Password*"
              name="password"
              className="inpelem"
              onChange={onNameChange}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Confirm Password*"
              name="confirmpass"
              className="inpelem"
              onChange={onNameChange}
            />{" "}
            <br />
            {/* <input type="submit">Proceed</input> */}
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;