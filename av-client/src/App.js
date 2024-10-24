import React from "react";
import Layout from "./components/Layout";
import SearchFields from "./components/SearchFields";
import DataTable from "./components/DataTable";

const App = () => {
  const [products, setProducts] = React.useState([]);

  return (
    <div className="App">
      <Layout />
      <SearchFields setProducts={setProducts} />
      <DataTable products={products} />
    </div>
  );
}

export default App;
