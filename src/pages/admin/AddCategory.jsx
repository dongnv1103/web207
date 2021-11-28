import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCategory = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    let navigate = useNavigate();

    const onSubmitCate = (data) => {
        props.onAdd(data);
        navigate("/admin/category", { replace: true });
    };
    const addCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmitCate)} style={{ width: "800px" }} className="container">
                <br />
                <input
                    type="text" class="form-control"
                    placeholder="Tên danh mục"
                    {...register("name", { required: true })}
                />
                {errors.name && <span style={{ float: "left", color: "red" }}>Tên danh mục không được để trống</span>}
                <br />
                <button class="btn btn-primary mb-3" style={{ float: "left" }}>Thêm danh mục</button>
            </form>
        );
    };

    return <div>{addCategoryForm()}</div>;
};
export default AddCategory;