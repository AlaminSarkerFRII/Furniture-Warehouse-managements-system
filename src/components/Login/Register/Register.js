import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.initt";
import login from "../../../Assets/login.jpg";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // after login redirect to

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  // create user

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  navigate(from, { replace: true });

  return (
    <div className="container">
      <h2>Please Register </h2>
      <div className="row mt-5">
        <div className="col-md-6">
          <form>
            <div className="form-group mb-3">
              <input
                type="name"
                className="form-control "
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
            <button
              onClick={() => createUserWithEmailAndPassword(email, password)}
              type="submit"
              className="btn btn-primary w-100 mx-auto d-block mt-3"
            >
              Submit
            </button>
          </form>
          <br />

          <div>
            <h3>
              Already have an account ?<Link to="/login"> Please Login</Link>
            </h3>
          </div>

          <div className="text-center">
            <p>Or</p>
          </div>
          <div className="text-center">
            <button
              onClick={handleSignIn}
              type="button"
              class="btn btn-warning"
            >
              Sign In With Google
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="w-75 h-100" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
