import "./styles.css";
import Search from "./components/search/search";
export default function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}
