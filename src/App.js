import "./App.css";
import Nav from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

import Women from "./pages/Women.js";
import Footer from "./pages/Footer.js";
import Accessories from "./pages/Accessories.js";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Product from "./components/Product";
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="women" element={<Women />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="accessories/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
