import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Filter, Grid3X3, List } from 'lucide-react';

// Dados de exemplo para produtos
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Estetoscópio Profissional',
    category: 'Equipamentos Médicos',
    price: 'R$ 350,00',
    image: '/placeholder-product.svg',
    description: 'Estetoscópio de alta qualidade para uso profissional em clínicas e hospitais.',
  },
  {
    id: 2,
    name: 'Kit de Luvas Descartáveis',
    category: 'Materiais Descartáveis',
    price: 'R$ 89,90',
    image: '/placeholder-product.svg',
    description: 'Caixa com 100 luvas descartáveis de nitrilo, sem látex, tamanhos variados.',
  },
  {
    id: 3,
    name: 'Pinça Cirúrgica',
    category: 'Instrumentos Cirúrgicos',
    price: 'R$ 120,00',
    image: '/placeholder-product.svg',
    description: 'Pinça cirúrgica de precisão em aço inoxidável para procedimentos médicos.',
  },
  {
    id: 4,
    name: 'Maca Hospitalar Ajustável',
    category: 'Mobiliário Hospitalar',
    price: 'R$ 2.500,00',
    image: '/placeholder-product.svg',
    description: 'Maca hospitalar com altura ajustável, estrutura em aço e estofamento de alta densidade.',
  },
  {
    id: 5,
    name: 'Oxímetro de Pulso',
    category: 'Equipamentos Médicos',
    price: 'R$ 180,00',
    image: '/placeholder-product.svg',
    description: 'Oxímetro de pulso digital para medição rápida e precisa da saturação de oxigênio.',
  },
  {
    id: 6,
    name: 'Máscaras Cirúrgicas',
    category: 'Materiais Descartáveis',
    price: 'R$ 45,00',
    image: '/placeholder-product.svg',
    description: 'Caixa com 50 máscaras cirúrgicas tripla camada com elástico.',
  },
  {
    id: 7,
    name: 'Tesoura Cirúrgica',
    category: 'Instrumentos Cirúrgicos',
    price: 'R$ 85,00',
    image: '/placeholder-product.svg',
    description: 'Tesoura cirúrgica de precisão em aço inoxidável para procedimentos médicos.',
  },
  {
    id: 8,
    name: 'Cadeira de Rodas',
    category: 'Mobiliário Hospitalar',
    price: 'R$ 1.200,00',
    image: '/placeholder-product.svg',
    description: 'Cadeira de rodas dobrável com estrutura em alumínio, leve e resistente.',
  },
];

// Categorias disponíveis
const CATEGORIES = [
  'Todos',
  'Equipamentos Médicos',
  'Materiais Descartáveis',
  'Instrumentos Cirúrgicos',
  'Mobiliário Hospitalar',
];

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Redirecionar para a página de catálogo
  useEffect(() => {
    navigate('/produtos');
  }, [navigate]);

  // Filtrar produtos com base na pesquisa e categoria
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Produtos Hospitalares</h1>
      
      {/* Barra de pesquisa e filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-500'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-5 w-5" />
          </button>
          <button
            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-500'}`}
            onClick={() => setViewMode('list')}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Resultados da pesquisa */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Nenhum produto encontrado. Tente uma nova busca.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-product.svg';
                }}
              />
              <div className="p-4">
                <span className="text-sm text-primary-600 font-medium">{product.category}</span>
                <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <Link to={`/produtos/${product.id}`}>
                    <Button size="sm">Ver Detalhes</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-4 flex">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-product.svg';
                }}
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-primary-600 font-medium">{product.category}</span>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <div className="mt-4 flex justify-end">
                  <Link to={`/produtos/${product.id}`}>
                    <Button size="sm">Ver Detalhes</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Paginação (simplificada) */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            Anterior
          </button>
          <button className="px-3 py-1 rounded-md bg-primary-600 text-white">
            1
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            Próxima
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Products;