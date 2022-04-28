import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.initt";

const Login = () => {
  // google sign in

  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);

  // after login redirect to

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSignIn = () => {
    signInWithGoogle();
  };

  // if user tahole jekahne jete caichilo okhane jaibe  redirect to

  if (user) {
    //user login korle token pabe
    const url = "http://localhost:5000/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
      });

    // redirected to comes from where
    navigate(from, { replace: true });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
          <br />
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
          <h2>imgage will be here</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
