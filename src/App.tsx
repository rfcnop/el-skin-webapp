import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FaleConosco from './pages/FaleConosco';
import { ProdutosContextProvider } from './contexts/ProdutosContext';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import tema from './styles/theme';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (<ThemeProvider theme={tema}>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <ProdutosContextProvider>
        <Provider store={store}>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/faleconosco' element={<FaleConosco />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Provider>
      </ProdutosContextProvider>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>);
}

export default App;