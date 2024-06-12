import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function HomePage() {
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery({
    queryKey: ["product", { list: true }],
    queryFn: () => api.products.getProducts(),
  });

  const { mutate: addItemToCart } = useMutation({
    mutationFn: (productId) => api.cart.addItemToCart(productId),
  });

  // onclick에 화살표 함수를 쓰는 대신 여기서 두 번 사용하여 함수로 변경
  const handleClickAddItemToCart = (productId) => () => {
    // 장바구니 추가 로직
    addItemToCart(productId, {
      onSuccess: () => {
        const yes = confirm(
          "상품이 장바구니에 잘 추가되었습니다. 장바구니 화면으로 갈까요?"
        );

        if (yes) navigate("/cart");
      },
    });
  };

  return (
    <div>
      <h1>HomePage</h1>
      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {products.map((product) => (
            <li key={product.id}>
              <h5>{product.name}</h5>
              <button onClick={handleClickAddItemToCart(product.id)}>
                장바구니에 추가하기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
