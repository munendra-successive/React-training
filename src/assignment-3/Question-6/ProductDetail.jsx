import ProdDesc from "./ProdDesc";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div id="product">
    <h4>Product Details Page</h4>
      <ul>
        {ProdDesc.map((item) => (
          <div>
            {item.id == id ? (
              <div>
                <div >Outlet: {item.outlet}</div>
                <div>Product Name: {item.name}</div>
                <div>Price: {item.price}</div>
                <div>Available: {item.availability}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
