import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import UploadProduct from "./components/UploadProduct/UploadProduct";
import OrderList from "./components/OrderList/OrderList";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Blogs from "./components/Blogs/Blogs";

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
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
