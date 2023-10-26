import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './models/routes'
import { Landing } from './pages/landing/Landing'
import './styles/global.css'
import { DetailHouse } from './pages/detailHouse/DetailHouse'
import { FormContact } from './pages/FormContact/FormContact'
import { Header } from './components/header/Header'

function App() {


  return (
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path={PublicRoutes.HOME} element={<Landing/>} />
        <Route path={PublicRoutes.DETAILS} element={<DetailHouse/>} />
        <Route path={PublicRoutes.CONTACT} element={<FormContact/>} />
      </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App
