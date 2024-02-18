import MainApp from "components/MainApp";
import { ProductEditProvider } from "./ProductEditContext";
import ProductInfoEditContent from "./ProductInfoEditContent";

function ProductInfoEditaddProduct(props) {
  return (
    <MainApp>
      <ProductEditProvider>
        <ProductInfoEditContent />
      </ProductEditProvider>
    </MainApp>
  );
}

export default ProductInfoEditaddProduct;
