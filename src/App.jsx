import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './PAGES/PageNotFound'
import './assets/bootstrap.min.css';
import Reglog from './PAGES/Reglog'
import Records from './PAGES/Records';
import Header from './COMPONENTS/Header';
import Footer from './COMPONENTS/Footer';





function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Reglog />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/records' element={<Records/>}/>
        
      </Routes>
    </>
  )
}

export default App
