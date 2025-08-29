import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Truck, Package, Shield, Star, Tag } from 'lucide-react';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  subcategoria: string;
  preco: number;
  descricao: string;
  imagem: string;
  estoque: number;
  destaque: boolean;
}

const ProdutoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantidade, setQuantidade] = useState(1);
  const [produtosRelacionados, setProdutosRelacionados] = useState<Produto[]>([]);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        setLoading(true);
        const response = await fetch('/produtos.csv');
        const data = await response.text();
        
        // Converter CSV para array de objetos
        const linhas = data.split('\n');
        const cabecalho = linhas[0].split(',');
        
        const produtosData: Produto[] = [];
        
        for (let i = 1; i < linhas.length; i++) {
          if (!linhas[i]) continue;
          
          const valores = linhas[i].split(',');
          const produto: any = {};
          
          for (let j = 0; j < cabecalho.length; j++) {
            let valor = valores[j];
            
            // Tratamento para campos com vírgulas dentro de aspas
            if (valor && valor.startsWith('"') && !valor.endsWith('"')) {
              let k = j + 1;
              while (k < valores.length && !valores[k].endsWith('"')) {
                valor += ',' + valores[k];
                k++;
              }
              if (k < valores.length) {
                valor += ',' + valores[k];
                j = k;
              }
            }
            
            // Remover aspas
            if (valor && valor.startsWith('"') && valor.endsWith('"')) {
              valor = valor.substring(1, valor.length - 1);
            }
            
            // Converter tipos
            if (cabecalho[j] === 'id' || cabecalho[j] === 'estoque') {
              produto[cabecalho[j]] = parseInt(valor);
            } else if (cabecalho[j] === 'preco') {
              produto[cabecalho[j]] = parseFloat(valor);
            } else if (cabecalho[j] === 'destaque') {
              produto[cabecalho[j]] = valor.toLowerCase() === 'true';
            } else {
              produto[cabecalho[j]] = valor;
            }
          }
          
          produtosData.push(produto as Produto);
        }
        
        // Encontrar o produto pelo ID
        const produtoEncontrado = produtosData.find(p => p.id === parseInt(id || '0'));
        
        if (produtoEncontrado) {
          setProduto(produtoEncontrado);
          
          // Encontrar produtos relacionados (mesma categoria)
          const relacionados = produtosData
            .filter(p => p.categoria === produtoEncontrado.categoria && p.id !== produtoEncontrado.id)
            .slice(0, 4);
          
          setProdutosRelacionados(relacionados);
        } else {
          setError('Produto não encontrado');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
        setError('Erro ao carregar dados do produto');
        setLoading(false);
      }
    };
    
    carregarProduto();
  }, [id]);
  
  const formatarPreco = (preco: number) => {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };
  
  const aumentarQuantidade = () => {
    if (produto && quantidade < produto.estoque) {
      setQuantidade(quantidade + 1);
    }
  };
  
  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !produto) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || 'Produto não encontrado'}</h2>
            <p className="text-gray-600 mb-6">O produto que você está procurando não está disponível ou não existe.</p>
            <Link 
              to="/produtos" 
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Voltar para o catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600">
                  Início
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/produtos" className="text-sm font-medium text-gray-700 hover:text-primary-600">
                    Produtos
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-medium text-gray-500 truncate max-w-xs">{produto.nome}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Detalhes do produto */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagem do produto */}
            <div className="p-6 flex items-center justify-center bg-gray-50">
              <div className="relative w-full max-w-md h-80 md:h-96">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-product.svg';
                  }}
                />
                {produto.destaque && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Destaque
                  </div>
                )}
              </div>
            </div>
            
            {/* Informações do produto */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-gray-600">{produto.categoria} / {produto.subcategoria}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{produto.nome}</h1>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < 4 ? 'currentColor' : 'none'} />
                ))}
                <span className="text-sm text-gray-600 ml-2">(4.0) - 12 avaliações</span>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary-700">{formatarPreco(produto.preco)}</span>
                <span className="text-sm text-gray-500 ml-2">à vista</span>
              </div>
              
              <p className="text-gray-700 mb-6">{produto.descricao}</p>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Package className="h-5 w-5 text-primary-600" />
                  <span>
                    <strong>Disponibilidade:</strong> {produto.estoque > 0 ? `${produto.estoque} em estoque` : 'Indisponível'}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Truck className="h-5 w-5 text-primary-600" />
                  <span>
                    <strong>Entrega:</strong> 2-5 dias úteis
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span>
                    <strong>Garantia:</strong> 12 meses
                  </span>
                </div>
              </div>
              
              {/* Seletor de quantidade e botão de compra */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-36">
                  <button 
                    onClick={diminuirQuantidade}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    disabled={quantidade <= 1}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    className="w-full text-center border-none focus:ring-0"
                    value={quantidade}
                    readOnly
                  />
                  <button 
                    onClick={aumentarQuantidade}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    disabled={produto.estoque <= quantidade}
                  >
                    +
                  </button>
                </div>
                
                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
          
          {/* Especificações técnicas */}
          <div className="border-t border-gray-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Especificações Técnicas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Informações Gerais</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Categoria</span>
                    <span className="font-medium">{produto.categoria}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Subcategoria</span>
                    <span className="font-medium">{produto.subcategoria}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Código do Produto</span>
                    <span className="font-medium">MED-{produto.id.toString().padStart(4, '0')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Dimensões e Peso</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Peso</span>
                    <span className="font-medium">0.5 kg</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Dimensões</span>
                    <span className="font-medium">20 x 15 x 10 cm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Embalagem</span>
                    <span className="font-medium">Caixa individual</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Produtos relacionados */}
        {produtosRelacionados.length > 0 && (
          <div className="mb-12 animate-fade-in-up delay-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Produtos Relacionados</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {produtosRelacionados.map((produto) => (
                <div 
                  key={produto.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-product.svg';
                      }}
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-1">{produto.nome}</h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{produto.descricao}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary-700">{formatarPreco(produto.preco)}</span>
                      
                      <Link 
                        to={`/produtos/${produto.id}`} 
                        className="text-primary-600 hover:text-primary-800 font-medium text-sm"
                      >
                        Ver detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdutoDetalhe;