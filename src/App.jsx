import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './models/routes'
import { Landing } from './pages/landing/Landing'
import './styles/global.css'
import { DetailHouse } from './pages/detailHouse/DetailHouse'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path={PublicRoutes.HOME} element={<Landing/>} />
        <Route path={PublicRoutes.DETAILS} element={<DetailHouse/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
