import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  ProductsList,
  DeleteProduct,
  AddProduct,
  EditProduct,
  InterPage,
} from "./components/exports";

function App() {
  const edited = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/edit/:productId" element={<EditProduct />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route
            path="/products/delete/:productId"
            element={<DeleteProduct />}
          />
          <Route path="/products/add/success" element={<InterPage />} />
          <Route
            path="/products/edit/success"
            element={<InterPage edited={edited} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
