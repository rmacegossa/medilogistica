import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Tag, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
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

const Catalogo = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [subcategorias, setSubcategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroSubcategoria, setFiltroSubcategoria] = useState('');
  const [ordenacao, setOrdenacao] = useState('nome-asc');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [produtosPorPagina] = useState(12);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
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
        
        const cabecalho = jsonData[0] as string[];
        const produtosData: Produto[] = [];
        
        for (let i = 1; i < jsonData.length; i++) {
          const linha = jsonData[i] as any[];
          
          // Verificar se a linha tem dados suficientes
          if (!linha || linha.length < 3 || !linha[0]) continue;
          
          const produto: any = {};
          
          for (let j = 0; j < cabecalho.length && j < linha.length; j++) {
            const valor = linha[j];
            const nomeColuna = cabecalho[j];
            
            if (nomeColuna === 'SKU') {
              produto.id = String(valor || '').trim();
            } else if (nomeColuna === 'Nome produto') {
              produto.nome = String(valor || '').trim();
            } else if (nomeColuna === 'Descrição') {
              produto.descricao = String(valor || '').trim();
            } else if (nomeColuna === 'Preço de Venda') {
              // Converter preço - pode vir como número ou string
              if (typeof valor === 'number') {
                produto.preco = valor;
              } else if (typeof valor === 'string') {
                // Remover "R$" e espaços, depois converter vírgula para ponto
                const precoLimpo = valor.replace(/R\$\s*/g, '').trim().replace(',', '.');
                produto.preco = parseFloat(precoLimpo) || 0;
              } else {
                produto.preco = 0;
              }
            } else if (nomeColuna === 'Estoque') {
              produto.estoque = typeof valor === 'number' ? valor : parseInt(String(valor || '0')) || 0;
            } else if (nomeColuna === 'Categoria Pai') {
              produto.categoria = String(valor || '').trim();
            } else if (nomeColuna === 'Categoria Filho') {
              produto.subcategoria = String(valor || '').trim();
            } else if (nomeColuna === 'Marca') {
              produto.marca = String(valor || '').trim();
            } else if (nomeColuna === 'Peso ( Kg )') {
              // Tratar peso - pode vir como número ou string
              if (typeof valor === 'number') {
                produto.peso = valor;
              } else if (typeof valor === 'string') {
                const pesoLimpo = valor.trim().replace(',', '.');
                produto.peso = parseFloat(pesoLimpo) || 0;
              } else {
                produto.peso = 0;
              }
            }
          }
          
          // Usar imagem padrão para todos os produtos
          produto.imagem = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center';
          produto.destaque = false;
          
          // Só adicionar produtos com dados válidos e ID único
          if (produto.id && produto.id.trim() !== '' && produto.nome && produto.nome.trim() !== '') {
            // Verificar se já existe um produto com o mesmo ID
            const jaExiste = produtosData.find(p => p.id === produto.id);
            if (!jaExiste) {
              produtosData.push(produto as Produto);
            }
          }
        }
        
        console.log(`Carregados ${produtosData.length} produtos do arquivo XLSX`);
        
        setProdutos(produtosData);
        setProdutosFiltrados(produtosData);
        
        // Extrair categorias e subcategorias únicas
        const categoriasUnicas = [...new Set(produtosData.map(p => p.categoria).filter(Boolean))];
        const subcategoriasUnicas = [...new Set(produtosData.map(p => p.subcategoria).filter(Boolean))];
        
        setCategorias(categoriasUnicas);
        setSubcategorias(subcategoriasUnicas);
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar produtos do XLSX:', error);
        setLoading(false);
      }
    };
    
    carregarProdutos();
  }, []);
  
  // Aplicar filtros e busca
  useEffect(() => {
    let resultado = [...produtos];
    
    // Aplicar termo de busca
    if (termoBusca) {
      const termo = termoBusca.toLowerCase();
      resultado = resultado.filter(p => 
        (p.nome && p.nome.toLowerCase().includes(termo)) || 
        (p.descricao && p.descricao.toLowerCase().includes(termo))
      );
    }
    
    // Aplicar filtro de categoria
    if (filtroCategoria) {
      resultado = resultado.filter(p => p.categoria && p.categoria === filtroCategoria);
    }
    
    // Aplicar filtro de subcategoria
    if (filtroSubcategoria) {
      resultado = resultado.filter(p => p.subcategoria && p.subcategoria === filtroSubcategoria);
    }
    
    // Aplicar ordenação
    switch (ordenacao) {
      case 'nome-asc':
        resultado.sort((a, b) => (a.nome || '').localeCompare(b.nome || ''));
        break;
      case 'nome-desc':
        resultado.sort((a, b) => (b.nome || '').localeCompare(a.nome || ''));
        break;
      case 'preco-asc':
        resultado.sort((a, b) => (a.preco || 0) - (b.preco || 0));
        break;
      case 'preco-desc':
        resultado.sort((a, b) => (b.preco || 0) - (a.preco || 0));
        break;
      default:
        break;
    }
    
    setProdutosFiltrados(resultado);
    setPaginaAtual(1); // Reset para primeira página quando filtros mudam
  }, [produtos, termoBusca, filtroCategoria, filtroSubcategoria, ordenacao]);
  
  const formatarPreco = (preco: number | undefined) => {
    if (!preco || isNaN(preco)) {
      return 'Preço não disponível';
    }
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };
  
  const limparFiltros = () => {
    setTermoBusca('');
    setFiltroCategoria('');
    setFiltroSubcategoria('');
    setOrdenacao('nome-asc');
    setPaginaAtual(1);
  };

  // Calcular produtos da página atual
  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const indiceFinal = indiceInicial + produtosPorPagina;
  const produtosPaginaAtual = produtosFiltrados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);

  const irParaPagina = (pagina: number) => {
    setPaginaAtual(pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner do catálogo */}
      <div className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Catálogo de Produtos</h1>
          <p className="text-xl max-w-3xl animate-fade-in-up delay-100">
            Encontre os melhores produtos médicos e hospitalares para sua clínica ou hospital.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Barra de busca e filtros */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
              >
                <option value="">Todas as categorias</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={filtroSubcategoria}
                onChange={(e) => setFiltroSubcategoria(e.target.value)}
              >
                <option value="">Todas as subcategorias</option>
                {subcategorias.map((subcat) => (
                  <option key={subcat} value={subcat}>{subcat}</option>
                ))}
              </select>
              
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={ordenacao}
                onChange={(e) => setOrdenacao(e.target.value)}
              >
                <option value="nome-asc">Nome (A-Z)</option>
                <option value="nome-desc">Nome (Z-A)</option>
                <option value="preco-asc">Preço (menor-maior)</option>
                <option value="preco-desc">Preço (maior-menor)</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary-600" />
              <span className="text-sm text-gray-600">
                {produtosFiltrados.length} produtos encontrados
                {totalPaginas > 1 && (
                  <span className="ml-2 text-gray-500">
                    • Página {paginaAtual} de {totalPaginas}
                  </span>
                )}
              </span>
            </div>
            
            <button
              onClick={limparFiltros}
              className="px-4 py-2 text-sm text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg transition-colors"
            >
              Limpar filtros
            </button>
          </div>
          
          {/* Tags de filtros ativos */}
          {(filtroCategoria || filtroSubcategoria || termoBusca) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {filtroCategoria && (
                <div className="flex items-center gap-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  <span>Categoria: {filtroCategoria}</span>
                  <button 
                    onClick={() => setFiltroCategoria('')}
                    className="ml-1 hover:text-primary-600"
                  >
                    ×
                  </button>
                </div>
              )}
              
              {filtroSubcategoria && (
                <div className="flex items-center gap-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  <span>Subcategoria: {filtroSubcategoria}</span>
                  <button 
                    onClick={() => setFiltroSubcategoria('')}
                    className="ml-1 hover:text-primary-600"
                  >
                    ×
                  </button>
                </div>
              )}
              
              {termoBusca && (
                <div className="flex items-center gap-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  <span>Busca: {termoBusca}</span>
                  <button 
                    onClick={() => setTermoBusca('')}
                    className="ml-1 hover:text-primary-600"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Lista de produtos */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : produtosFiltrados.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {produtosPaginaAtual.map((produto) => (
              <div 
                key={produto.id} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
              >
                {/* Imagem do produto com gradiente */}
                <div className="relative h-52 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/medical-icon.svg" 
                    alt={produto.nome} 
                    className="w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  {/* Badge de categoria */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-primary-700">{produto.categoria}</span>
                  </div>
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  {/* Subcategoria */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="h-4 w-4 text-primary-500" />
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{produto.subcategoria}</span>
                  </div>
                  
                  {/* Nome do produto */}
                  <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-primary-700 transition-colors">{produto.nome}</h3>
                  
                  {/* Descrição */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">{produto.descricao}</p>
                  
                  {/* Preço e ações */}
                  <div className="flex justify-between items-center mb-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary-700">{formatarPreco(produto.preco)}</span>
                      <span className="text-xs text-gray-500">por unidade</span>
                    </div>
                    
                    <button 
                      className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      title="Adicionar à Lista de Orçamento"
                      aria-label="Adicionar à Lista de Orçamento"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Botão de detalhes */}
                  <Link 
                    to={`/produtos/${produto.id}`} 
                    className="block text-center py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary-50 hover:to-primary-100 text-gray-700 hover:text-primary-700 rounded-xl transition-all duration-300 text-sm font-semibold border border-gray-200 hover:border-primary-200"
                  >
                    Ver detalhes completos
                  </Link>
                </div>
              </div>
            ))}
            </div>
            
            {/* Controles de paginação */}
            {totalPaginas > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  onClick={() => irParaPagina(paginaAtual - 1)}
                  disabled={paginaAtual === 1}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((numeroPagina) => {
                    // Mostrar apenas algumas páginas ao redor da atual
                    if (
                      numeroPagina === 1 ||
                      numeroPagina === totalPaginas ||
                      (numeroPagina >= paginaAtual - 2 && numeroPagina <= paginaAtual + 2)
                    ) {
                      return (
                        <button
                          key={numeroPagina}
                          onClick={() => irParaPagina(numeroPagina)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            numeroPagina === paginaAtual
                              ? 'bg-primary-600 text-white'
                              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                          }`}
                        >
                          {numeroPagina}
                        </button>
                      );
                    } else if (
                      numeroPagina === paginaAtual - 3 ||
                      numeroPagina === paginaAtual + 3
                    ) {
                      return (
                        <span key={numeroPagina} className="px-2 py-2 text-gray-400">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
                
                <button
                  onClick={() => irParaPagina(paginaAtual + 1)}
                  disabled={paginaAtual === totalPaginas}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Próxima
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-100">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-primary-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Nenhum produto encontrado</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">Não encontramos produtos que correspondam aos seus critérios de busca. Tente ajustar os filtros ou termos de pesquisa.</p>
            <button 
              onClick={limparFiltros}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;