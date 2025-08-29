import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dados dos artigos do blog
const blogPosts = [
  {
    id: 1,
    slug: 'cuidados-sonda-alimentacao-enteral',
    title: 'Cuidados Essenciais com Sonda de Alimentação Enteral',
    excerpt: 'Guia completo sobre os cuidados fundamentais com sonda de alimentação enteral, incluindo técnicas de inserção, manutenção e prevenção de complicações para garantir a segurança do paciente.',
    author: 'Dr. Maria Silva',
    authorRole: 'Gastroenterologista',
    date: '2024-01-15',
    readTime: '8 min',
    category: 'Cuidados Médicos',
    tags: ['Nutrição Enteral', 'Cuidados de Enfermagem', 'Segurança do Paciente'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 2,
    slug: 'otimizar-estoque-materiais-clinica',
    title: '5 Dicas Essenciais para Otimizar o Estoque de Materiais na sua Clínica',
    excerpt: 'Estratégias práticas e eficientes para gerenciar o estoque de materiais médicos, reduzir custos, evitar desperdícios e garantir a disponibilidade dos produtos essenciais para o atendimento.',
    author: 'Dra. Ana Paula Rodrigues',
    authorRole: 'Gestora Hospitalar',
    date: '2024-01-20',
    readTime: '10 min',
    category: 'Gestão Hospitalar',
    tags: ['Gestão de Estoque', 'Redução de Custos', 'Eficiência Operacional'],
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 3,
    slug: 'higienizacao-materiais-hospitalares',
    title: 'Protocolos de Higienização de Materiais Hospitalares',
    excerpt: 'Diretrizes atualizadas e melhores práticas para a higienização adequada de materiais hospitalares, garantindo a segurança e prevenção de infecções.',
    author: 'Enfª Ana Costa',
    authorRole: 'Especialista em Controle de Infecção',
    date: '2024-01-10',
    readTime: '6 min',
    category: 'Higiene Hospitalar',
    tags: ['Controle de Infecção', 'Biossegurança', 'Protocolos'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 4,
    slug: 'escolha-seringas-adequadas',
    title: 'Guia Completo: Como Escolher as Seringas Adequadas',
    excerpt: 'Manual detalhado para seleção de seringas conforme o tipo de procedimento, volume necessário e características específicas de cada aplicação médica.',
    author: 'Dr. João Santos',
    authorRole: 'Farmacêutico Clínico',
    date: '2024-01-05',
    readTime: '5 min',
    category: 'Equipamentos Médicos',
    tags: ['Seringas', 'Equipamentos', 'Procedimentos'],
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 5,
    title: "Cuidados com Pacientes Acamados: Prevenção de Úlceras",
    excerpt: "Estratégias eficazes para prevenir úlceras de pressão em pacientes acamados e promover seu bem-estar.",
    content: "Pacientes acamados requerem cuidados especiais para prevenir complicações como úlceras de pressão...",
    author: "Enfª Patricia Lima",
    date: "2023-12-20",
    readTime: "9 min",
    category: "Cuidados Médicos",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

const categories = ["Todos", "Cuidados Médicos", "Segurança", "Procedimentos", "Emergência"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog MediLogística
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Conhecimento especializado em materiais hospitalares, cuidados médicos e melhores práticas na área da saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">
              Artigo em Destaque
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ Artigo em Destaque
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    {featuredPost.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md">
                          {featuredPost.author.split(' ').map(name => name[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                          <p className="text-sm text-gray-600">{featuredPost.authorRole}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                          </div>
                        </div>
                      </div>
                      <Link to={`/blog/${featuredPost.slug || featuredPost.id}`}>
                        <Button className="bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all">
                          Ler artigo completo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className={category === "Todos" ? "bg-primary-600 hover:bg-primary-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-700">
            Últimos Artigos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug || post.id}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                        {post.authorRole && <p className="text-xs text-gray-500">{post.authorRole}</p>}
                        <p className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString('pt-BR')}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.slug || post.id}`}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                    >
                      Ler artigo
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Receba nossos artigos por email
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Mantenha-se atualizado com as últimas novidades e melhores práticas da área médica.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-2 rounded-md text-gray-800"
            />
            <Button className="bg-white text-primary-700 hover:bg-gray-100">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;