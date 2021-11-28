import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        props.onAdd(data);
        navigate("/admin/product", { replace: true });
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
                <select {...register("category")} class="form-control">
                    <option value="category-1">Danh muc 1</option>
                    <option value="category-2">Danh muc 2</option>
                    <option value="category-3">Danh muc 3</option>
                    <option value="category-4">Danh muc 4</option>
                </select>
                <br />
                <button class="btn btn-primary mb-3" style={{ float: "left" }}>Thêm sản phẩm</button>
            </form>
        );
    };

    return <div>{addProductForm()}</div>;
};
export default AddProduct;