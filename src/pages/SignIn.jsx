import React from "react";
import { useHistory } from "react-router-dom";
//import Button from "../components/Button";
import "../css/SignIn.css";
import axios from "axios";
import Footer from "../components/footer";

function login(event) {
  event.preventDefault();
  let request = {
    email: document.getElementById("exampleInputEmail1").value,
    password: document.getElementById("exampleInputPassword1").value,
  };
  axios
    .post("http://localhost:4000/auth/login", request)
    .then((resp) => {
      alert(resp.data.message);

      //history.push("/user");
    })
    .catch((err) => {
      console.log(err);
    });
}

const SignIn = () => {
  let history = useHistory();

  // function handleClick() {
  //   history.push("/auth/login/user");
  // }

  return (
    // <div className="signin_form">
    //   <form action="/my-handling-form-page" method="post">
    //     <label for="name">Username</label>
    //     <input type="text" id="name" name="user_name" />

    //     <label for="mail">Password</label>
    //     <input type="password" id="password" name="user_password" />
    //     <Button buttonName="Submit" />

    //     {/* <Button onClick = {}/> */}
    //   </form>
    // </div>
    <div>
      <div className="container">
        <form onSubmit={(e) => login(e)}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Email address will be kept confidential.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Accept Company Policy
            </label>
          </div>
          {/* <button type="submit" class="btn btn-primary" onClick={handleClick}> */}
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <button type="submit" class="btn btn-primary">
            SignUP
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
