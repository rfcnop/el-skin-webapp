import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import FaleConosco from './pages/FaleConosco';

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/faleconosco' element={<FaleConosco />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>;
}

export default App;