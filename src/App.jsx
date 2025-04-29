
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import ServicePage from './pages/ServicesPage/ServicePage'
import ServiceContructionNeuve from './pages/ConstructionNeuvePage/ServiceContructionNeuve'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/services/Renov' element={<ServicePage />} />
          <Route path='/services/ConstructionNeuve' element={<ServiceContructionNeuve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
