import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Blogs from './components/Blogs/blogs';
import Contact from './components/Contact/contact';
import NoPage from './components/Nopage/nopage';
import Footer from './components/Footer/footer';
import Nosotros from './components/Nosotros/nosotros';
import Servicios from './components/Servicios/servicios';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Servicios' element={<Servicios/>} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
