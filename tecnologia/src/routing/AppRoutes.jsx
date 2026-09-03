import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Informacion from '../pages/Informacion'
import Formulario from '../pages/Formulario'
import Contacto from '../pages/Contacto'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/informacion" element={<Informacion />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default AppRoutes
