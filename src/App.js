import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  ProductsList,
  DeleteProduct,
  AddProduct,
  EditProduct,
} from "./components/exports";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/edit/:productID" element={<EditProduct />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route
            path="/products/delete/:productID"
            element={<DeleteProduct />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
