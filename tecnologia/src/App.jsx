import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Inicio from './pages/Inicio'
import Informacion from './pages/Informacion'
import Formulario from './pages/Formulario'
import Contacto from './pages/Contacto'

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <CartDrawer />
      <Footer />
    </CartProvider>
  )
}

export default App
