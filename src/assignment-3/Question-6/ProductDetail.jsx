import ProdDesc from "./ProdDesc";
import { useNavigate, useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id is: ", id);
  return (
    <div id="product">
      <h4>Product Details Page</h4>

      {ProdDesc.map((item) => (
        <div>
          {item.id === Number(id) ? (
            <div>
              <div>Outlet: {item.outlet}</div>
              <div>Product Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <div>Available: {item.availability}</div>
            </div>
          ) : null}
        </div>
      ))}
      <button onClick={() => navigate(-1)}>GO Back</button>
    </div>
  );
};

export default ProductDetail;
