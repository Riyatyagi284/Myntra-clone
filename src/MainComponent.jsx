import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductDetailPage from "./components/ProductDetailPage"
// import Card from './components/Card'
import Footer from './components/Footer'
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import { Route, Routes } from "react-router-dom"

function MainComponent() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      {/* <Card /> */}

      <Navbar handleSearchInputChange={handleSearchInputChange} searchQuery={searchQuery} />
      <Routes>
        <Route exact="/" index element={<Home handleSearchInputChange={handleSearchInputChange} searchQuery={searchQuery}/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail-page" element={<ProductDetailPage />} />
        <Route path="/product-detail-page/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />


    </>
  )
}

export default MainComponent
