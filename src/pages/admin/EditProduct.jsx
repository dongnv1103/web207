import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../../api/productAPI";

const EditProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  let navigate = useNavigate();

  // Sử dụng hook useParams để lấy ID từ trên Url
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // Cal API để lấy thông tin sản phẩm
  useEffect(() => {
    read(id).then((response) => {
      // Sau khi lấy được thông tin sản phẩm thì set vào state products
      setProduct(response.data);
      // reset lại input để tránh lỗi không nhập gì mà vẫn báo validate
      reset(response.data);
    });
  }, [id, reset]);

  const onSubmit = (data) => {
    // sau khi submit, dữ liệu input được gán vào biến data
    // đẩy lên App.js một object bao gồm ID và dữ liệu input
    props.onUpdate({ id, ...data });
  };
  const addProductForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "800px" }} className="container">
        <br />
        <input
          type="text" class="form-control"
          placeholder="Tên sản phẩm"
          {...register("name", { required: true })}
        />
        {/* Nếu input name có lỗi thì sẽ hiển thị message */}
        {errors.name && <span style={{ float: "left", color: "red" }}>Tên sản phẩm không được để trống</span>}
        <br />
        <input
          type="text" class="form-control"
          placeholder="Giá sản phẩm"
          {...register("price", { required: true })}
        />
        {errors.price && <span style={{ float: "left", color: "red" }}>Giá sản phẩm không được để trống</span>}
        <br />
        <input
          type="text" class="form-control"
          placeholder="Số lượng sản phẩm"
          {...register("quantity", { required: true })}
        />
        {errors.quantity && <span style={{ float: "left", color: "red" }}>Số lượng sản phẩm không được để trống</span>}
        <br />
        <input
          type="text" class="form-control"
          placeholder="Ảnh sản phẩm"
          {...register("image", { required: true })}
        />
        {errors.image && <span style={{ float: "left", color: "red" }}>Ảnh sản phẩm không được để trống</span>}
        <br />
        <input
          type="text" class="form-control"
          placeholder="Danh mục sản phẩm"
          {...register("category", { required: true })}
        />
        <br />
        {errors.category && <span style={{ float: "left", color: "red" }}>Danh mục sản phẩm không được để trống</span>}
        <div style={{ float: "left" }}>
          <button class="btn btn-primary mb-3">Cập nhật</button>
          <button onClick={() => navigate(-1)} class="btn btn-warning mb-3">Quay lai</button>
        </div>

      </form>
    );
  };

  return <div>{addProductForm()}</div>;
};
export default EditProduct;