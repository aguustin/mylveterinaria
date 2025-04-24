import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Blogs from './components/Blogs/blogs';
import Contact from './components/Contact/contact';
import NoPage from './components/Nopage/nopage';
import Footer from './components/Footer/footer';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
