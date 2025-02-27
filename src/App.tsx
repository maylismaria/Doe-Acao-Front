
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';


import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import Sobre from './pages/sobre/Sobre';
import Perfil from './pages/perfil/Perfil';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/formularioTema'
import ListaPostagens from './components/postagens/listaPostagem/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
    <ToastContainer />

    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh] bg-gray-200'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/perfil" element={<Perfil/>} />
              <Route path="/sobre-nos" element={<Sobre />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

              </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}


export default App;