import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.initt";
import login from "../../Assets/login.jpg";

const Login = () => {
  // google sign in

  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);

  // after login redirect to

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  // if user tahole jekahne jete caichilo okhane jaibe  redirect to

  if (user) {
    //user login korle token pabe
    const url = "https://agile-river-34776.herokuapp.com/login";

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
        <div className="col-md-6 mt-5">
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-2"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mx-auto d-block mt-3"
            >
              Submit
            </button>
          </form>
          <br />

          <div>
            <h3>
              Dont Have an account ?<Link to="/register"> Please Register</Link>
            </h3>
          </div>

          <div className="text-center">
            <p>Or</p>
          </div>
          <div className="text-center">
            <button
              onClick={handleSignIn}
              type="button"
              className="btn btn-warning"
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

export default Login;
