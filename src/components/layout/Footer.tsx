import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t-4 border-primary-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-primary-400" />
              Medi Logística
            </h3>
            <p className="text-gray-300 mb-4">
              Distribuição de materiais hospitalares para clínicas em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-800 p-2 rounded-full text-white hover:bg-primary-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-800 p-2 rounded-full text-white hover:bg-primary-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-800 p-2 rounded-full text-white hover:bg-primary-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos?categoria=equipamentos" className="text-gray-300 hover:text-white">
                  Equipamentos Médicos
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=descartaveis" className="text-gray-300 hover:text-white">
                  Materiais Descartáveis
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=instrumentos" className="text-gray-300 hover:text-white">
                  Instrumentos Cirúrgicos
                </Link>
              </li>
              <li>
                <Link to="/produtos?categoria=mobiliario" className="text-gray-300 hover:text-white">
                  Mobiliário Hospitalar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-white">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Av. Exemplo, 1234, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-300">0800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-300">contato@medilogistica.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Medi Logística. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;