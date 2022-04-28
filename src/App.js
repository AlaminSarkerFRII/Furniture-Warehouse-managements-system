import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import UploadProduct from "./components/UploadProduct/UploadProduct";
import OrderList from "./components/OrderList/OrderList";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/uploadproduct"
          element={
            <PrivateRoute>
              <UploadProduct />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orderlist"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
