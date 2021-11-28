import { useForm } from "react-hook-form";
import { signup } from "../../api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../authenticate";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // call API đăng ký tài khoản
        signup(data)
            .then((response) => {
                console.log("dang ky", response.data);
                authenticate(response.data.user);
                // toast.success("Đăng ký thành cmn công");

                navigate("/signin");
            })
            .catch((error) => toast.error(error.response.data));
        console.log(data);
    };
    return (
        <div style={{paddingTop:"50px", borderRadius:"2px"}}>
            <form onSubmit={handleSubmit(onSubmit)} className="container"
                style={{ width: "800px", paddingTop: "20px", backgroundColor: "" }}
            >
                <h2>Đăng ký</h2>
                <div>
                    <input
                        type="text" class="form-control"
                        {...register("name", { required: true })}
                        placeholder="Tên của bạn"
                    />
                    {errors.name && <span style={{ float: "left", color: "red" }}>Tên không được để trống</span>}
                </div><br />
                <div>
                    <input
                        type="email" class="form-control"
                        {...register("email", { required: true })}
                        placeholder="Email của bạn"
                    />
                    {errors.email && <span style={{ float: "left", color: "red" }}>Email không được để trống</span>}
                </div><br />
                <div>
                    <input
                        type="text" class="form-control"
                        {...register("phonenumber", { required: true })}
                        placeholder="Số điện thoại của bạn"
                    />
                    {errors.phonenumber && <span style={{ float: "left", color: "red" }}>Số điện thoại không được để trống</span>}
                </div><br />
                <div>
                    <input
                        type="password" class="form-control"
                        {...register("password", { required: true })}
                        placeholder="Mật khẩu của bạn"
                    />
                    {errors.password && <span style={{ float: "left", color: "red" }}>Mật khẩu không được để trống</span>}
                </div><br />
                <div>
                    <input
                        type="text" class="form-control"
                        {...register("image", { required: true })}
                        placeholder="Ảnh của bạn"
                    />
                    {errors.image && <span style={{ float: "left", color: "red" }}>Ảnh không được để trống</span>}
                </div><br />
                <button class="btn btn-primary mb-3">Đăng ký</button>
            </form>
        </div>
    );
};

export default Signup;
