// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../firebase/firebase.config";
import { useForm } from "react-hook-form";
import { signin } from "../../api/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../authenticate";

const Signin = () => {
    //   const provider = new GoogleAuthProvider();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    //   const googleSignin = async () => {
    //     const { user } = await signInWithPopup(auth, provider);
    //     console.log(user);
    //   };

    const onSubmit = (data) => {
        // call API đăng ký tài khoản
        signin(data)
        console.log(data)
        if (data.password === '123456' && data.email === 'admin@gmail.com') {
            navigate("/admin/dashboard");
        }
        else {
            navigate("/");
        }
        // console.log("Đăng nhập thành cmn công");
        // .then((response) => {
        //     console.log(response.data);
        //     // toast.success("Đăng nhập thành cmn công");

        //     // Lưu thông tin vào localStorage
        //     // authenticate(response.data.user);

        //     // // Lấy thông tin
        //     // if (response.data.user.id === 1) {
        //     //     navigate("/admin/dashboard");
        //     // }
        //     // else {
        //     //     navigate("/");
        //     // }
        // })
        // .catch((error) => toast.error(error.response.data));
    };
    return (
        <div style={{ paddingTop: "50px", borderRadius: "2px" }}>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="container"
                style={{ width: "800px", paddingTop: "20px", backgroundColor: "" }}>
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
                        type="password" class="form-control"
                        {...register("password", { required: true })}
                        placeholder="Mật khẩu"
                    />
                    {errors.password && <span style={{ float: "left", color: "red" }}>Mật khẩu không được để trống</span>}
                </div><br />
                <button class="btn btn-primary mb-3">Đăng nhập</button>
                {/* <button onClick={googleSignin}>Sign in with google</button> */}
            </form>
        </div>
    );
};
export default Signin;
