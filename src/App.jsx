import Layout from "@/components/Layout";
import Pikachu from "@/components/Pikachu";

function App() {
  const PIKACHU_SIZE = 80;
  const MAP_SIZE = 800;
  return (
    <>
      {/* 맵 크기, 피카츄 크기에 대한 Props Drillig 발생 
      App.jsx → Layout.jsx → Field.jsx, 전역 상태관리는 이번 프로젝트에서 진행하지 않음 */}
      <Layout mapSize={MAP_SIZE} pikachuSize={PIKACHU_SIZE}>
        <Pikachu mapSize={MAP_SIZE} pikachuSize={PIKACHU_SIZE} />
      </Layout>
    </>
  );
}

export default App;
