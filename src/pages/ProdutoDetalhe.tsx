import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Truck, Package, Shield, Star, Tag } from 'lucide-react';
import * as XLSX from 'xlsx';

interface Produto {
  id: string;
  nome: string;
  categoria: string;
  subcategoria: string;
  preco: number;
  descricao: string;
  imagem: string;
  estoque: number;
  destaque: boolean;
  marca?: string;
  peso?: number;
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
        const response = await fetch('/lista-completa.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        if (jsonData.length === 0) {
          console.error('Arquivo XLSX está vazio');
          setLoading(false);
          return;
        }
        
        console.log('Dados carregados do XLSX:', jsonData.slice(0, 3));
        
        const cabecalho = jsonData[0] as string[];
        const produtosData: Produto[] = [];
        
        for (let i = 1; i < jsonData.length; i++) {
          const linha = jsonData[i] as any[];
          
          // Verificar se a linha tem dados suficientes
          if (!linha || linha.length < 3 || !linha[0] || String(linha[0]).trim() === '') continue;
          
          const produto: any = {};
          
          for (let j = 0; j < cabecalho.length && j < linha.length; j++) {
            let valor = linha[j];
            
            // Converter para string se necessário
            if (valor !== undefined && valor !== null) {
              valor = String(valor);
            } else {
              valor = '';
            }
            
            // Mapear campos do XLSX para o formato esperado
            const nomeColuna = String(cabecalho[j]);
            if (nomeColuna === 'SKU') {
              produto.id = valor.trim();
            } else if (nomeColuna === 'Nome produto') {
              produto.nome = valor.trim();
            } else if (nomeColuna === 'Descrição') {
              produto.descricao = valor.trim();
            } else if (nomeColuna === 'Preço de Venda') {
              // Converter preço brasileiro (R$ 10,39) para número
              if (typeof linha[j] === 'number') {
                produto.preco = linha[j];
              } else if (valor && typeof valor === 'string') {
                // Remover "R$" e espaços, depois converter vírgula para ponto
                const precoLimpo = valor.replace(/R\$\s*/g, '').trim().replace(',', '.');
                produto.preco = parseFloat(precoLimpo) || 0;
              } else {
                produto.preco = 0;
              }
            } else if (nomeColuna === 'Estoque') {
              if (typeof linha[j] === 'number') {
                produto.estoque = Math.floor(linha[j]);
              } else {
                produto.estoque = parseInt(valor) || 0;
              }
            } else if (nomeColuna === 'Categoria Pai') {
              produto.categoria = valor.trim();
            } else if (nomeColuna === 'Categoria Filho') {
              produto.subcategoria = valor.trim();
            } else if (nomeColuna === 'Marca') {
              produto.marca = valor.trim();
            } else if (nomeColuna === 'Peso ( Kg )') {
              // Tratar peso que pode ter vírgula como separador decimal
              if (typeof linha[j] === 'number') {
                produto.peso = linha[j];
              } else if (valor && typeof valor === 'string') {
                const pesoLimpo = valor.trim().replace(',', '.');
                produto.peso = parseFloat(pesoLimpo) || 0;
              } else {
                produto.peso = 0;
              }
            }
          }
          
          // Usar imagem padrão para todos os produtos
          produto.imagem = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center';
          
          // Só adicionar produtos com dados válidos e ID único
          if (produto.id && produto.id.trim() !== '' && produto.nome && produto.nome.trim() !== '') {
            // Verificar se já existe um produto com o mesmo ID
            const jaExiste = produtosData.find(p => p.id === produto.id);
            if (!jaExiste) {
              produtosData.push(produto as Produto);
            }
          }
        }
        
        // Encontrar o produto pelo ID (SKU)
        const produtoEncontrado = produtosData.find(p => p.id === id);
        
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
  
  const formatarPreco = (preco: number | undefined) => {
    if (!preco || isNaN(preco)) {
      return 'Preço não disponível';
    }
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
                    target.src = '/medical-icon.svg';
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
                  Adicionar à Lista de Orçamento
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
                  <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/medical-icon.svg';
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