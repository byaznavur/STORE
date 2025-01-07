import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Loading from "./components/loading";

const Home = lazy(() => import("./pages/home/index"));
const Products = lazy(() => import("./pages/products/index"));
const Product = lazy(() => import("./pages/product/index"));
const Users = lazy(() => import("./pages/users/index"));
const User = lazy(() => import("./pages/user/index"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:userId" element={<User />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
