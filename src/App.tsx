import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Catalogo from './pages/Catalogo'
import ProdutoDetalhe from './pages/ProdutoDetalhe'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/produtos" element={<Layout><Catalogo /></Layout>} />
        <Route path="/produtos/:id" element={<Layout><ProdutoDetalhe /></Layout>} />
        <Route path="/sobre" element={<Layout><About /></Layout>} />
        <Route path="/contato" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
