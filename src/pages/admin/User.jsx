import { Link } from "react-router-dom";

const UserManager = ({ users }) => {
    return (
        <table class="table table-striped" style={{ marginTop: "50px" }}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên tài khoản</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Ảnh</th>
                </tr>
            </thead>
            <tbody>
                {users &&
                    users.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{index}</th>
                                <th>
                                    {item.name}
                                </th>
                                <th>
                                    {item.email}
                                </th>
                                <th>
                                    {item.phonenumber}
                                </th>
                                <th>
                                    <img src={item.image} alt width="50px" />
                                </th>
                                <th>
                                    {/* <button type="button" class="btn btn-danger" onClick={() => onRemove(item.id)}>Remove</button>
                                    <Link to={`${item.id}/edit`} class="btn btn-warning">Edit</Link> */}
                                </th>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};
export default UserManager;