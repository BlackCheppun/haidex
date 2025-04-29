
import './App.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import ServicePage from './pages/ServicesPage/ServicePage'
import ServiceContructionNeuve from './pages/ConstructionNeuvePage/ServiceContructionNeuve'



function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/services/Renov' element={<ServicePage />} />
          <Route path='/services/ConstructionNeuve' element={<ServiceContructionNeuve />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
