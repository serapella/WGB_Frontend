import "./style.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/productDetailPage";
import LandingPage from "./pages/LandingPage";
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCart from "./components/ShoppingCart";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <TermsAndConditions />
              </>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id/:slug" element={<ProductDetailPage />} />
          <Route path="/categories" element={<></>} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route
            path="/user/register"
            element={
              <>
                <RegisterPage />
              </>
            }
          />
          <Route path="/user/logout" element={<></>} />
          <Route
            path="/user/wishlist"
            element={
              <>
                <WishlistPage />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <ShoppingCart />
              </>
            }
          />

          <Route
            path="/user/profile"
            element={
              <>
                <ProfilePage />
              </>
            }
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
