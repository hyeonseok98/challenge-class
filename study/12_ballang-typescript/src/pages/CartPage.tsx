import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  const { mutateAsync: removeItemFromCart } = useMutation<
    unknown,
    Error,
    number
  >({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });

  // 장바구니에서 제거하는 로직
  const handleClickRemoveItemFromCart = (productId: number) => async () => {
    await removeItemFromCart(productId);
    alert("상품이 장바구니에서 제거되었습니다.");

    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <ul style={{ textAlign: "left" }}>
          {cart.items.map((cartItem) => (
            <li key={cartItem.id}>
              <h5>{cartItem.product.name}</h5>
              <span>[{cartItem.quantity}]</span>
              <button
                onClick={handleClickRemoveItemFromCart(cartItem.product.id)}
              >
                장바구니에 빼기
              </button>
            </li>
          ))}
        </ul>
      )}
      <h1>장바구니</h1>
    </>
  );
}

export default CartPage;
