import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="container">
      <div class="row mt-5 g-4 mb-5">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">
                Different between javascript and node js
              </h4>
              <p class="card-text">
                <span className="text-warning fw-bold">NodeJS :</span> NodeJS is
                a cross-platform and opensource Javascript runtime environment
                that allows the javascript to be run on the server-side. Nodejs
                allows Javascript code to run outside the browser. Nodejs comes
                with a lot of modules and mostly used in web development.
                <br />
                <span className="text-warning fw-bold">JavaScript :</span>{" "}
                Javascript is a Scripting language. It is mostly abbreviated as
                JS. It can be said that Javascript is the updated version of the
                ECMA script. Javascript is a high-level programming language
                that uses the concept of Oops but it is based on prototype
                inheritance.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h4>SQL and NoSQL </h4>
              <p class="card-text">
                <span className="fw-bold text-info">SQL</span>
                <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                These databases are not suited for hierarchical data storage.
                These databases are best suited for complex queries.Vertically
                Scalable
              </p>
              <span className="fw-bold text-info">NoSQL</span>
              <p>
                Non-relational or distributed database system.They have dynamic
                schema.These databases are best suited for hierarchical data
                storage. These databases are not so good for complex queries
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">when use node js and mongodb?</h4>
              <p class="card-text">
                <span>
                  Node.js is an open source server environment which uses
                  JavaScript on the server to develop backend applications. node
                  js is run time variable.
                </span>
                <br />
                <span>
                  MongoDB is NoSQL Database Management. Relational DBMS handles
                  the databases that store data in a structured format with the
                  help of (tables) rows and columns NoSQL DBMS handles the
                  database that stores unstructured data in forms of collections
                  and documents The most commonly used SQL DBMS is MySQL and
                  NoSQL DBMS is MongoDB
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h4>when use JWT and whats purpose of its?</h4>
              <p class="card-text">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
