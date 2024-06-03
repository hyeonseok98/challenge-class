import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import api from "../api/api";
import Page from "../components/Page";

function HomePage() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    // queryKey: 가져온 데이터를 어떤 키에다가 저장할 건지, 거의 배열로 사용하며 첫 요소로 데이터의 모델명을 씀
    // 쿼리키 => 배열로 만든다(tanstack 공식 홈페이지 강요 사항)
    // 첫번째 요소로는? 데이터 모델명을 string으로 넣는다(당연한 것)
    // 두번째 요소로는? 데이터를 설명하는 정보를 object로 넣는다(일반적으로)
    // queryKey: ["products", { page: 2 }],
    queryKey: ["products"],
    //queryFn: 데이터를 가져오는 함수(항상 비동기 함수, promise가 들어가야 함)
    queryFn: () => api.products.getProducts(),
  });

  // const { data: brands } = useQuery({
  //   queryKey: ["brands"],
  //   queryFn: () => api.brands.getBrands(),
  // });

  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>loading...</Page>;

  return (
    <Page>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ol>
    </Page>
  );
}

export default HomePage;

/*
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function init() {
      try {
        const products = await api.products.getProducts();
        setProducts(products);

        setIsSuccess(true);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);
  if (isLoading) return <Page>loading...</Page>;
  if (isError) return <Page>loading...</Page>;
  */
