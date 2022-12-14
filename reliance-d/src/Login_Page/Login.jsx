import React from 'react'

export const Login = () => {
  return (
    <div>

document.querySelector("button").addEventListener("click", login);
  var regduser = JSON.parse(localStorage.getItem("userdatabase"));
  async function login() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    let cred = { email, password };
    console.log(cred);
    let response = await fetch("http://localhost:2345/auth/login", {
      method: "POST",
      body: JSON.stringify(cred),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let d = await response.json();
    console.log(d);
    window.location.href = "/";
  }
    </div>
  )
}
