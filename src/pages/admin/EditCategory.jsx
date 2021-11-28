import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { readCate } from "../../api/categoryAPI";

const EditCategory = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  let navigate = useNavigate();

  // Sử dụng hook useParams để lấy ID từ trên Url
  const { id } = useParams();
  const [category, setCategory] = useState({});

  // Cal API để lấy thông tin sản phẩm
  useEffect(() => {
    readCate(id).then((response) => {
      // Sau khi lấy được thông tin sản phẩm thì set vào state products
      setCategory(response.data);
      // reset lại input để tránh lỗi không nhập gì mà vẫn báo validate
      reset(response.data);
    });
  }, [id, reset]);

  const onSubmit = (data) => {
    // sau khi submit, dữ liệu input được gán vào biến data
    // đẩy lên App.js một object bao gồm ID và dữ liệu input
    props.onUpdate({ id, ...data });
  };
  const addCategoryForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "800px" }} className="container">
        <br />
        <input
          type="text" class="form-control"
          placeholder="Tên danh mục"
          {...register("name", { required: true })}
        />
        {/* Nếu input name có lỗi thì sẽ hiển thị message */}
        {errors.name && <span style={{float:"left", color:"red"}}>Tên danh mục không được để trống</span>}
        <br />
        <div style={{float:"left"}}>
          <button class="btn btn-primary mb-3">Cập nhật</button>
          <button onClick={() => navigate(-1)} class="btn btn-warning mb-3">Quay lai</button>
        </div>

      </form>
    );
  };

  return <div>{addCategoryForm()}</div>;
};
export default EditCategory;