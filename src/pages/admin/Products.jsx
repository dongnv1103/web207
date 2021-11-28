import { Link } from "react-router-dom";

const ProductManager = ({ products, onRemove }) => {
  return (
    <table class="table table-striped" style={{ marginTop: "50px" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Ảnh</th>
          <th>
            <Link to="add" class="btn btn-success">Thêm mới</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((item, index) => {
            return (
              <tr key={index}>
                <th>{index}</th>
                <th>
                  {item.name}
                </th>
                <th>
                  {item.price}
                </th>
                <th>
                  {item.quantity}
                </th>
                <th>
                  <img src={item.image} alt width="50px" />
                </th>
                <th style={{}}>
                  <button type="button" class="btn btn-danger" onClick={() => onRemove(item.id)} style={{marginLeft:""}}>Remove</button>
                  <Link to={`${item.id}/edit`} class="btn btn-warning">Edit</Link>
                </th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default ProductManager;