const Products = (props) => {
    const removeProduct = (id) => {
        props.onRemove(id);
    };
    return (
        <table>
            <tbody>
                {props.products.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <h4>{item.name}</h4>
                            </td>
                            <td><button onClick={() => removeProduct(item.id)}>Remove</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default Products;