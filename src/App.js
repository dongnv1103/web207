import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import './App.css';
import ShowName from './ShowName';
import { useEffect, useState } from 'react';
import { create, list, remove, update } from "./api/productAPI";
import { createCate, listCate, removeCate, updateCate } from "./api/categoryAPI";
import { ToastContainer, toast } from "react-toastify";
import Products from './Products';
import LayoutWebsite from "./layout/LayoutWebsite";
import LayoutAdmin from "./layout/LayoutAdmin";
import ProductsWebsite from "./pages/website/Product";
import ProductDetail from "./pages/website/ProductDetail";
import ProductManager from "./pages/admin/Products";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import axios from "axios";
import Contact from "./components/contact";
import CategoryManager from "./pages/admin/Category";
import AddCategory from "./pages/admin/AddCategory";
import EditCategory from "./pages/admin/EditCategory";
import Signin from "./pages/website/Signin";
import Signup from "./pages/website/Signup";
import PrivateAdmin from "./components/PrivateAdmin";
import UserManager from "./pages/admin/User";

// const data = [
//   { id: 1, name: "Product A" },
//   { id: 2, name: "Product B" },
//   { id: 3, name: "Product C" },
// ];
function App() {
  //state hook
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const onHandleRemove = (id) => {
    axios.get("http://localhost:3001/products" + id, {
      method: "DELETE"
    });
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };
  // const onHandleRemove = (id) => {
  //   remove(id).then(() => {
  //     // xoa phan tu dua vao state ( render lại màn hình)
  //     const newProducts = products.filter((item) => item.id !== id);
  //     setProducts(newProducts);
  //   });
  // };


  const onHandleRemoveCate = (id) => {
    axios.get("http://localhost:3001/categories" + id, {
      method: "DELETE"
    });
    const newCategories = categories.filter((item) => item.id !== id);
    setCategories(newCategories);
  };


  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((response) => setProducts(response.data));
    // console.log({categories});
  }, []);
  // useEffect(() => {
  //   list().then((response) => setProducts(response.data));
  // }, []);
  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then((response) => setCategories(response.data));
    // console.log({categories});
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then((response) => setUsers(response.data));
  }, []);

  const increase = () => {
    setCount(count + 1);
  }

  const onHandleAdd = (product) => {
    const fakeProduct = { id: products.length + 1, ...product };

    create(fakeProduct).then((response) =>
      setProducts([...products, response.data])
    );
    console.log({ products });
  };

  const onHandleAddCate = (category) => {
    const fakeCategory = { id: categories.length + 1, ...category };

    createCate(fakeCategory).then((response) =>
      setCategories([...categories, response.data])
    );
    // console.log({categories});
  };

  const onHandleUpdate = (product) => {
    update(product).then(() => {
      const newProducts = products.map((item) =>
        item.id === product.id ? product : item
      );
      // toast.success("Đã cập nhật thành công");
      setProducts(newProducts);
    });
  };

  const onHandleUpdateCate = (category) => {
    updateCate(category).then(() => {
      const newCategories = categories.map((item) =>
        item.id === category.id ? category : item
      );
      // toast.success("Đã cập nhật thành công");
      setCategories(newCategories);
    });
  };

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<div></div>} />
            <Route
              path="product"
              element={<ProductsWebsite products={products} />}
            />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="category" element={<div>Danh muc san pham</div>} />
          </Route>
          <Route
            path="admin/*"
            element={
              <PrivateAdmin abc="123">
                <LayoutAdmin />
              </PrivateAdmin>
            }
          />
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<div>Dashboard Product</div>} />
            <Route
              path="product"
              element={
                <ProductManager products={products} onRemove={onHandleRemove} />
              }
            />
            <Route
              path="category"
              element={
                <CategoryManager categories={categories} onRemove={onHandleRemoveCate} />
              }
            />
            <Route
              path="product/add"
              element={<AddProduct onAdd={onHandleAdd} />}
            />
            <Route
              path="category/add"
              element={<AddCategory onAdd={onHandleAddCate} />}
            />
            <Route
              path="product/:id/edit"
              element={<EditProduct onUpdate={onHandleUpdate} />}
            />
            <Route
              path="category/:id/edit"
              element={<EditCategory onUpdate={onHandleUpdateCate} />}
            />
            <Route
              path="user"
              element={<UserManager users={users} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
