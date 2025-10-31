import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Car from "./pages/car";
import About from "./pages/about";
import Contact from "./pages/contact";
import DetailCard from "./pages/DetailCard";
import PaymentPage from "./pages/PaymentPage";
import Profile from "./pages/Profile";

// Layout component for conditional Navbar/Footer
function Layout({ children }) {
  const location = useLocation();

  // Hide layout for specific detail/payment pages
  const hideLayout =
    location.pathname.startsWith("/cars/") ||
    location.pathname.startsWith("/payment/");

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="main-content">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars/:id" element={<DetailCard />} />
          <Route path="/payment/:id" element={<PaymentPage />} />
          <Route path="/cars" element={<Car />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
