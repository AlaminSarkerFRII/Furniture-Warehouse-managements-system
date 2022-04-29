import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="container">
      <div class="row mt-5 g-4">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Different between javascript and node js
              </h5>
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
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                <h3>SQL</h3>
                <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                These databases are not suited for hierarchical data storage.
                These databases are best suited for complex queries.Vertically
                Scalable
              </p>
              <h3>NoSQL</h3>
              <p>
                Non-relational or distributed database system.They have dynamic
                schema.These databases are best suited for hierarchical data
                storage. These databases are not so good for complex queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
