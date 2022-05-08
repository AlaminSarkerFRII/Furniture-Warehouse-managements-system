import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Products from "./components/Products/Products";
import UploadProduct from "./components/UploadProduct/UploadProduct";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import NotFound from "./components/NotFound/NotFound";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Agents from "./components/Home/Agents/Agents";
import Product from "./components/Product/Product";
import ManageProducts from "./components/ManageProducts/ManageProducts";
import MyItems from "./components/MyItems/MyItems";
import Register from "./components/Login/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/agents" element={<Agents />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/product/:productId"
          element={
            <PrivateRoute>
              <Product></Product>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/uploadproduct"
          element={
            <PrivateRoute>
              <UploadProduct />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manageproducts"
          element={
            <PrivateRoute>
              <ManageProducts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/MyItems"
          element={
            <PrivateRoute>
              <MyItems />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
