import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import AuthorPage from "./pages/AuthorPage";
import CompaniesPage from "./pages/CompaniesPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderPage from "./pages/OrderPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css'
import Home from "./components/Home";

function App() {
  return (
    <div className={App}>
      
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path = '/*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
