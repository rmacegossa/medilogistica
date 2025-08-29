import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Heart, Share2, ShoppingCart, Check, Info, FileText, Truck } from 'lucide-react';

// Produto de exemplo
const MOCK_PRODUCT = {
  id: 1,
  name: 'Estetoscópio Profissional',
  category: 'Equipamentos Médicos',
  price: 'R$ 350,00',
  image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Estetoscópio',
  description: 'Estetoscópio de alta qualidade para uso profissional em clínicas e hospitais.',
  features: [
    'Auscultador duplo em aço inoxidável',
    'Tubo em PVC de alta durabilidade',
    'Olivas macias para maior conforto',
    'Anel não-frio para maior conforto do paciente',
    'Mola interna ajustável',
  ],
  specifications: {
    'Marca': 'MediPro',
    'Modelo': 'MP-200',
    'Material': 'Aço inoxidável e PVC',
    'Peso': '150g',
    'Dimensões': '71 x 3 x 3 cm',
    'Garantia': '2 anos',
  },
  stock: 15,
  rating: 4.8,
  reviewCount: 124,
  relatedProducts: [
    {
      id: 5,
      name: 'Oxímetro de Pulso',
      price: 'R$ 180,00',
      image: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Oxímetro',
    },
    {
      id: 9,
      name: 'Termômetro Digital',
      price: 'R$ 65,00',
      image: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Termômetro',
    },
    {
      id: 12,
      name: 'Esfigmomanômetro',
      price: 'R$ 220,00',
      image: 'https://placehold.co/300x300/e2e8f0/1e293b?text=Esfigmomanômetro',
    },
  ],
};

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'documents'>('description');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= MOCK_PRODUCT.stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <a href="/" className="hover:text-primary-600">Início</a>
        <span className="mx-2">/</span>
        <a href="/produtos" className="hover:text-primary-600">Produtos</a>
        <span className="mx-2">/</span>
        <a href="/produtos/equipamentos-medicos" className="hover:text-primary-600">{MOCK_PRODUCT.category}</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{MOCK_PRODUCT.name}</span>
      </div>

      {/* Back button */}
      <a href="/produtos" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Voltar para produtos
      </a>

      {/* Product main section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product image */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={MOCK_PRODUCT.image}
            alt={MOCK_PRODUCT.name}
            className="w-full h-auto object-contain rounded-md"
          />
          <div className="flex justify-center mt-4 space-x-2">
            <button className="w-3 h-3 rounded-full bg-primary-600"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          </div>
        </div>

        {/* Product info */}
        <div>
          <span className="text-sm text-primary-600 font-medium">{MOCK_PRODUCT.category}</span>
          <h1 className="text-3xl font-bold mt-1 mb-2">{MOCK_PRODUCT.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(MOCK_PRODUCT.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">{MOCK_PRODUCT.rating} ({MOCK_PRODUCT.reviewCount} avaliações)</span>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">{MOCK_PRODUCT.price}</span>
            <span className="text-sm text-gray-500 ml-2">+ impostos</span>
          </div>
          
          {/* Short description */}
          <p className="text-gray-600 mb-6">{MOCK_PRODUCT.description}</p>
          
          {/* Stock */}
          <div className="flex items-center mb-6">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-green-600 font-medium">
              {MOCK_PRODUCT.stock > 10 ? 'Em estoque' : `Apenas ${MOCK_PRODUCT.stock} em estoque`}
            </span>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantidade
            </label>
            <div className="flex items-center">
              <button
                className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                className="w-16 text-center border-y border-gray-300 py-1"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                min="1"
                max={MOCK_PRODUCT.stock}
              />
              <button
                className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= MOCK_PRODUCT.stock}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="flex-grow sm:flex-grow-0">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="flex-grow sm:flex-grow-0">
              <Heart className="mr-2 h-5 w-5" />
              Adicionar aos Favoritos
            </Button>
            <Button size="lg" variant="ghost" className="flex-grow sm:flex-grow-0">
              <Share2 className="mr-2 h-5 w-5" />
              Compartilhar
            </Button>
          </div>
          
          {/* Delivery info */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <Truck className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Informações de Entrega</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Entrega para todo o Brasil. Consulte o prazo de entrega para sua região durante o processo de orçamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product details tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => setActiveTab('description')}
            >
              <Info className="inline-block h-4 w-4 mr-2" />
              Descrição
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'specifications' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => setActiveTab('specifications')}
            >
              <FileText className="inline-block h-4 w-4 mr-2" />
              Especificações
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'documents' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => setActiveTab('documents')}
            >
              <FileText className="inline-block h-4 w-4 mr-2" />
              Documentos
            </button>
          </nav>
        </div>

        <div className="py-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-600 mb-6">
                {MOCK_PRODUCT.description} Este estetoscópio profissional foi projetado para oferecer excelente acústica e conforto durante o uso prolongado. Ideal para médicos, enfermeiros e estudantes da área da saúde.
              </p>
              <h3 className="text-lg font-semibold mb-4">Características</h3>
              <ul className="space-y-2">
                {MOCK_PRODUCT.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(MOCK_PRODUCT.specifications).map(([key, value], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Documentos disponíveis para download:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <FileText className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Manual do Usuário</h4>
                    <p className="text-sm text-gray-500">PDF, 2.4 MB</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <FileText className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Certificado de Garantia</h4>
                    <p className="text-sm text-gray-500">PDF, 1.2 MB</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <FileText className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Ficha Técnica</h4>
                    <p className="text-sm text-gray-500">PDF, 3.1 MB</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <FileText className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Registro ANVISA</h4>
                    <p className="text-sm text-gray-500">PDF, 0.8 MB</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_PRODUCT.relatedProducts.map((product) => (
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
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <Button size="sm">Ver Detalhes</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;