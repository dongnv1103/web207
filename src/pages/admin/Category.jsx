import { Link } from "react-router-dom";

const CategoryManager = ({ categories, onRemove }) => {
    return (
        <table class="table table-striped" style={{ marginTop: "50px" }}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên danh mục</th>
                    <th>
                        <Link to="add" class="btn btn-success">Thêm mới</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {categories &&
                    categories.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{index}</th>
                                <th>
                                    {item.name}
                                </th>
                                <th>
                                    <button type="button" class="btn btn-danger" onClick={() => onRemove(item.id)}>Remove</button>
                                    <Link to={`${item.id}/edit`} class="btn btn-warning">Edit</Link>
                                </th>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};
export default CategoryManager;