import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/layouts/footer";
import Header from "./assets/layouts/header";
import AddProdPage from "./assets/pages/addProdPage";
import DetailPage from "./assets/pages/detailPage";
import HomePage from "./assets/pages/homePage";
import WishList from "./assets/pages/wishListPages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/detailPage/:id"} element={<DetailPage />}></Route>
        <Route path={"/wishList"} element={<WishList />}></Route>
        <Route path={"/addProdPage"} element={<AddProdPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
