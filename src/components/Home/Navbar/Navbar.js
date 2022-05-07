import React from "react";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.initt";

const Navbar = () => {
  // check user status

  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Furniture Warehouse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agents">
                Agents
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/uploadProduct">
                  Add Products
                </Link>
              </li>
            )}
            <li className="nav-item">
              {user && (
                <Link className="nav-link" to="/MyItems">
                  MyItems
                </Link>
              )}
            </li>
            <li className="nav-item">
              {user && (
                <Link className="nav-link" to="/manageproducts">
                  Manage Products
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        {user ? (
          <span>
            {user.displayName}
            <button onClick={() => signOut(auth)} className="btn btn-link">
              Sign Out
            </button>
          </span>
        ) : (
          <span className="btn btn-link">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
