import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary-700 flex items-center">
            <ShoppingBag className="mr-2 h-6 w-6" />
            Medi Logística
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">
            Início
          </Link>
          <Link to="/produtos" className="text-gray-700 hover:text-primary-600 font-medium">
            Produtos
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary-600 font-medium">
            Blog
          </Link>
          <Link to="/sobre" className="text-gray-700 hover:text-primary-600 font-medium">
            Sobre Nós
          </Link>
          <Link to="/contato" className="text-gray-700 hover:text-primary-600 font-medium">
            Contato
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-primary-50 px-3 py-1 rounded-full">
            <Phone className="h-4 w-4 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">0800 123 4567</span>
          </div>
          <Link to="/contato">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transition-all">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Produtos
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/sobre"
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Sobre Nós
            </Link>
            <Link
              to="/contato"
              className="text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={toggleMenu}
            >
              Contato
            </Link>
            <div className="flex items-center py-2">
              <Phone className="h-4 w-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium">0800 123 4567</span>
            </div>
            <Link to="/contato" className="w-full">
              <Button className="w-full">Solicitar Orçamento</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;