import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import SearchFields from "../components/SearchFields";
import DataTable from "../components/DataTable";
import { Button } from "@mui/material";

const Home = () => {
    const [products, setProducts] = React.useState([]);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/add-product");
    };

    return (
        <div className="App">
          <Layout />
          <Button variant="outlined" onClick={handleButtonClick}>
            Add new product
          </Button>
          <SearchFields setProducts={setProducts} />
          <DataTable products={products} />

        </div>
      );
}

export default Home;