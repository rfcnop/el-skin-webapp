import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FaleConosco from './pages/FaleConosco';
import { ProdutosContextProvider } from './contexts/ProdutosContext';
import { CarrinhoContextProvider } from './contexts/CarrinhoContext';
import { SearchContextProvider } from './contexts/SearchContext';

function App() {
  return <BrowserRouter>
    <ProdutosContextProvider>
      <SearchContextProvider>
        <CarrinhoContextProvider>
          <Header />
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/faleconosco' element={<FaleConosco />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CarrinhoContextProvider>
      </SearchContextProvider>
    </ProdutosContextProvider>
    <Footer />
  </BrowserRouter>;
}

export default App;