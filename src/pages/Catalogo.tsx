import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Tag, ShoppingCart } from 'lucide-react';

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

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
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
        
        setProdutos(produtosData);
        setProdutosFiltrados(produtosData);
        
        // Extrair categorias e subcategorias únicas
        const categoriasUnicas = [...new Set(produtosData.map(p => p.categoria))];
        const subcategoriasUnicas = [...new Set(produtosData.map(p => p.subcategoria))];
        
        setCategorias(categoriasUnicas);
        setSubcategorias(subcategoriasUnicas);
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
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
        p.nome.toLowerCase().includes(termo) || 
        p.descricao.toLowerCase().includes(termo)
      );
    }
    
    // Aplicar filtro de categoria
    if (filtroCategoria) {
      resultado = resultado.filter(p => p.categoria === filtroCategoria);
    }
    
    // Aplicar filtro de subcategoria
    if (filtroSubcategoria) {
      resultado = resultado.filter(p => p.subcategoria === filtroSubcategoria);
    }
    
    // Aplicar ordenação
    switch (ordenacao) {
      case 'nome-asc':
        resultado.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      case 'nome-desc':
        resultado.sort((a, b) => b.nome.localeCompare(a.nome));
        break;
      case 'preco-asc':
        resultado.sort((a, b) => a.preco - b.preco);
        break;
      case 'preco-desc':
        resultado.sort((a, b) => b.preco - a.preco);
        break;
      default:
        break;
    }
    
    setProdutosFiltrados(resultado);
  }, [produtos, termoBusca, filtroCategoria, filtroSubcategoria, ordenacao]);
  
  const formatarPreco = (preco: number) => {
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
              </span>
            </div>
            
            <button
              onClick={limparFiltros}
              className="text-sm text-primary-600 hover:text-primary-800 font-medium"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
              <div 
                key={produto.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all animate-fade-in-up"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/placeholder-product.svg" 
                    alt={produto.nome} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="h-4 w-4 text-primary-600" />
                    <span className="text-xs text-gray-600">{produto.categoria} / {produto.subcategoria}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{produto.nome}</h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{produto.descricao}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-700">{formatarPreco(produto.preco)}</span>
                    
                    <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mt-3">
                    <Link 
                      to={`/produtos/${produto.id}`} 
                      className="block text-center py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors text-sm font-medium"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600 mb-6">Tente ajustar seus filtros ou termos de busca para encontrar o que procura.</p>
            <button 
              onClick={limparFiltros}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
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