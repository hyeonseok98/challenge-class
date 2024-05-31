import { useEffect } from "react";
import { getBrand, getBrands } from "./api/api.brand";
import { getProduct, getProducts } from "./api/api.product";

function App() {
  // ! 아래 방식은 리렌더링 될 때마다 계속 fetch됨
  // fetch(GET_PRODUCT_ENDPOINT).then((response) => console.log(response));

  useEffect(() => {
    const productId = 9587059;

    getProduct();
    getProducts(productId);
    getBrands();
    getBrand(productId);
  }, []);

  return <main>hello world</main>;
}

export default App;
