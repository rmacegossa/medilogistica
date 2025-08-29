import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

// Dados dos artigos (em uma aplicação real, isso viria de uma API)
const blogPosts = [
  {
    id: 1,
    title: "Guia Completo: Cuidados Essenciais com a Sonda de Alimentação Enteral",
    excerpt: "Aprenda os procedimentos corretos para manuseio, higienização e cuidados com sondas de alimentação enteral, garantindo a segurança do paciente.",
    content: `
      <div class="prose prose-lg max-w-none">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Introdução</h2>
        <p class="text-gray-700 leading-relaxed mb-6">A alimentação enteral é uma técnica fundamental no cuidado de pacientes que não conseguem se alimentar por via oral. Este guia abrangente apresenta os cuidados essenciais com a sonda de alimentação enteral, garantindo a segurança e o bem-estar do paciente.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">O que é a Alimentação Enteral?</h2>
        <p class="text-gray-700 leading-relaxed mb-6">A alimentação enteral consiste na administração de nutrientes diretamente no trato gastrointestinal através de uma sonda. É indicada para pacientes com dificuldades de deglutição, distúrbios neurológicos, ou outras condições que impedem a alimentação oral normal.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Tipos de Sondas</h2>
        <div class="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold text-blue-800 mb-3">Sonda Nasogástrica (SNG)</h3>
          <p class="text-gray-700 mb-4">Inserida através do nariz até o estômago, é a mais comum para uso temporário (até 4-6 semanas).</p>
          
          <h3 class="text-xl font-semibold text-blue-800 mb-3">Sonda Nasoentérica (SNE)</h3>
          <p class="text-gray-700 mb-4">Passa pelo nariz e se estende até o duodeno ou jejuno, indicada quando há risco de aspiração.</p>
          
          <h3 class="text-xl font-semibold text-blue-800 mb-3">Gastrostomia (GTT)</h3>
          <p class="text-gray-700">Acesso direto ao estômago através da parede abdominal, indicada para uso prolongado.</p>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Cuidados Essenciais</h2>
        
        <div class="bg-green-50 p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold text-green-800 mb-3">1. Verificação da Posição</h3>
          <p class="text-gray-700 mb-3">Antes de cada administração:</p>
          <ul class="space-y-2">
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">•</span>Aspire o conteúdo gástrico</li>
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">•</span>Verifique o pH (deve ser ácido, entre 1-5)</li>
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">•</span>Observe características do aspirado</li>
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">•</span>Meça o comprimento externo da sonda</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold text-yellow-800 mb-3">2. Higienização</h3>
          <p class="text-gray-700 mb-3">Procedimentos de limpeza:</p>
          <ul class="space-y-2">
            <li class="flex items-start"><span class="text-yellow-600 font-semibold mr-2">•</span>Lave as mãos antes e após o manuseio</li>
            <li class="flex items-start"><span class="text-yellow-600 font-semibold mr-2">•</span>Use luvas descartáveis</li>
            <li class="flex items-start"><span class="text-yellow-600 font-semibold mr-2">•</span>Limpe a conexão com álcool 70%</li>
            <li class="flex items-start"><span class="text-yellow-600 font-semibold mr-2">•</span>Irrigue a sonda com 20-30ml de água filtrada após cada uso</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold text-purple-800 mb-3">3. Administração da Dieta</h3>
          <p class="text-gray-700 mb-3">Técnica correta:</p>
          <ul class="space-y-2">
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span>Eleve a cabeceira do leito 30-45°</li>
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span>Verifique a temperatura da dieta (ambiente)</li>
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span>Administre lentamente (200-300ml/hora)</li>
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span>Monitore sinais de intolerância</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Complicações e Como Prevenir</h2>
        
        <div class="bg-red-50 p-6 rounded-lg mb-6">
          <h3 class="text-xl font-semibold text-red-800 mb-3">Aspiração</h3>
          <p class="text-gray-700 mb-3">Prevenção:</p>
          <ul class="space-y-2">
            <li class="flex items-start"><span class="text-red-600 font-semibold mr-2">•</span>Mantenha posição adequada</li>
            <li class="flex items-start"><span class="text-red-600 font-semibold mr-2">•</span>Verifique resíduo gástrico</li>
            <li class="flex items-start"><span class="text-red-600 font-semibold mr-2">•</span>Administre em velocidade adequada</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-red-800 mb-3 mt-6">Obstrução da Sonda</h3>
          <p class="text-gray-700 mb-3">Prevenção:</p>
          <ul class="space-y-2">
            <li class="flex items-start"><span class="text-red-600 font-semibold mr-2">•</span>Irrigue regularmente</li>
            <li class="flex items-start"><span class="text-red-600 font-semibold mr-2">•</span>Triture bem medicamentos</li>
            <li class="flex items-start"><span class="text-red-600 font-semibold mr-2">•</span>Use água morna para desobstrução</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Medicamentos via Sonda</h2>
        <div class="bg-indigo-50 p-6 rounded-lg mb-6">
          <p class="text-gray-700 mb-3">Cuidados especiais:</p>
          <ul class="space-y-2">
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">•</span>Verifique se o medicamento pode ser triturado</li>
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">•</span>Administre um medicamento por vez</li>
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">•</span>Irrigue entre medicamentos</li>
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">•</span>Dilua adequadamente</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusão</h2>
        <p class="text-gray-700 leading-relaxed mb-6">O cuidado adequado com a sonda de alimentação enteral é fundamental para garantir a segurança do paciente e o sucesso do tratamento nutricional. A capacitação da equipe e o seguimento rigoroso dos protocolos são essenciais para prevenir complicações e promover a recuperação do paciente.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Referências</h2>
        <ul class="space-y-2">
          <li class="flex items-start"><span class="text-gray-600 mr-2">•</span>Sociedade Brasileira de Nutrição Parenteral e Enteral (SBNPE)</li>
          <li class="flex items-start"><span class="text-gray-600 mr-2">•</span>Conselho Federal de Enfermagem (COFEN)</li>
          <li class="flex items-start"><span class="text-gray-600 mr-2">•</span>Manual de Terapia Nutricional - Hospital das Clínicas</li>
        </ul>
      </div>
    `,
    author: "Dr. Carlos Silva",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Cuidados Médicos",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["sonda", "alimentação enteral", "cuidados", "enfermagem"]
  },
  {
    id: 2,
    title: "5 Dicas Essenciais para Otimizar o Estoque de Materiais na sua Clínica",
    excerpt: "Estratégias práticas e eficientes para gerenciar o estoque de materiais médicos, reduzir custos e garantir disponibilidade.",
    content: `
      <div class="prose prose-lg max-w-none">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Introdução</h2>
        <p class="text-gray-700 leading-relaxed mb-6">A gestão eficiente do estoque de materiais médicos é fundamental para o sucesso operacional e financeiro de qualquer clínica ou hospital. Um controle adequado não apenas reduz custos, mas também garante que os materiais essenciais estejam sempre disponíveis quando necessários.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Implementar um Sistema de Controle Digital</h2>
        <div class="bg-blue-50 p-6 rounded-lg mb-6">
          <p class="text-gray-700 leading-relaxed mb-4">A digitalização do controle de estoque é o primeiro passo para uma gestão eficiente:</p>
          <ul class="space-y-3">
            <li class="flex items-start"><span class="text-blue-600 font-semibold mr-2">•</span><strong>Software de gestão:</strong> Utilize sistemas específicos para área da saúde</li>
            <li class="flex items-start"><span class="text-blue-600 font-semibold mr-2">•</span><strong>Códigos de barras:</strong> Facilita o controle de entrada e saída</li>
            <li class="flex items-start"><span class="text-blue-600 font-semibold mr-2">•</span><strong>Relatórios automáticos:</strong> Gere relatórios de consumo e necessidades</li>
            <li class="flex items-start"><span class="text-blue-600 font-semibold mr-2">•</span><strong>Alertas de reposição:</strong> Configure avisos para itens com estoque baixo</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Estabelecer Níveis Mínimos e Máximos</h2>
        <div class="bg-green-50 p-6 rounded-lg mb-6">
          <p class="text-gray-700 leading-relaxed mb-4">Defina parâmetros claros para cada tipo de material:</p>
          <ul class="space-y-3">
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">✓</span><strong>Estoque mínimo:</strong> Quantidade que aciona a reposição</li>
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">✓</span><strong>Estoque máximo:</strong> Evita excesso e desperdício</li>
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">✓</span><strong>Ponto de pedido:</strong> Momento ideal para nova compra</li>
            <li class="flex items-start"><span class="text-green-600 font-semibold mr-2">✓</span><strong>Estoque de segurança:</strong> Reserve para emergências</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Classificação ABC dos Materiais</h2>
        <div class="bg-yellow-50 p-6 rounded-lg mb-6">
          <p class="text-gray-700 leading-relaxed mb-4">Organize os materiais por importância e valor:</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded border-l-4 border-red-500">
              <h4 class="font-bold text-red-700 mb-2">Classe A (20%)</h4>
              <p class="text-sm text-gray-600">Itens de alto valor, controle rigoroso</p>
            </div>
            <div class="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 class="font-bold text-yellow-700 mb-2">Classe B (30%)</h4>
              <p class="text-sm text-gray-600">Itens de valor médio, controle moderado</p>
            </div>
            <div class="bg-white p-4 rounded border-l-4 border-green-500">
              <h4 class="font-bold text-green-700 mb-2">Classe C (50%)</h4>
              <p class="text-sm text-gray-600">Itens de baixo valor, controle simples</p>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Controle de Validade e Rotatividade</h2>
        <div class="bg-purple-50 p-6 rounded-lg mb-6">
          <p class="text-gray-700 leading-relaxed mb-4">Implemente o sistema FEFO (First Expired, First Out):</p>
          <ul class="space-y-3">
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span><strong>Organização por data:</strong> Produtos com vencimento mais próximo na frente</li>
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span><strong>Alertas de vencimento:</strong> Configure avisos 30, 15 e 7 dias antes</li>
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span><strong>Inspeções regulares:</strong> Verificações semanais de validade</li>
            <li class="flex items-start"><span class="text-purple-600 font-semibold mr-2">•</span><strong>Descarte adequado:</strong> Protocolo para materiais vencidos</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Análise de Consumo e Previsão de Demanda</h2>
        <div class="bg-indigo-50 p-6 rounded-lg mb-6">
          <p class="text-gray-700 leading-relaxed mb-4">Use dados históricos para otimizar compras:</p>
          <ul class="space-y-3">
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">📊</span><strong>Análise de tendências:</strong> Identifique padrões de consumo</li>
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">📈</span><strong>Sazonalidade:</strong> Considere variações por época do ano</li>
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">🎯</span><strong>Previsão de demanda:</strong> Calcule necessidades futuras</li>
            <li class="flex items-start"><span class="text-indigo-600 font-semibold mr-2">💰</span><strong>Negociação com fornecedores:</strong> Use dados para melhores condições</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Benefícios da Gestão Otimizada</h2>
        <div class="bg-gray-50 p-6 rounded-lg mb-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-900 mb-3">Benefícios Financeiros:</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Redução de custos operacionais</li>
                <li>• Diminuição de desperdícios</li>
                <li>• Melhor fluxo de caixa</li>
                <li>• Negociações mais vantajosas</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-900 mb-3">Benefícios Operacionais:</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Maior disponibilidade de materiais</li>
                <li>• Redução de tempo em compras</li>
                <li>• Melhor qualidade do atendimento</li>
                <li>• Equipe mais produtiva</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusão</h2>
        <p class="text-gray-700 leading-relaxed mb-6">A otimização do estoque de materiais médicos é um investimento que traz retornos significativos tanto em termos financeiros quanto operacionais. Implementar essas cinco estratégias de forma gradual e consistente resultará em uma gestão mais eficiente, redução de custos e melhoria na qualidade do atendimento aos pacientes.</p>
      </div>
    `,
    author: "Dra. Ana Paula Rodrigues",
    date: "2024-01-20",
    readTime: "10 min",
    category: "Gestão Hospitalar",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["gestão", "estoque", "otimização", "custos"]
  },
  {
    id: 3,
    title: "Técnicas Avançadas de Curativos e Bandagens",
    excerpt: "Domine as técnicas mais eficazes para aplicação de curativos e bandagens em diferentes tipos de ferimentos.",
    content: `
      <h2>Introdução</h2>
      <p>A correta aplicação de curativos e bandagens é essencial para o processo de cicatrização e prevenção de infecções...</p>
    `,
    author: "Dr. Maria Oliveira",
    date: "2024-01-05",
    readTime: "10 min",
    category: "Procedimentos",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["curativos", "bandagens", "ferimentos", "cicatrização"]
  },
  {
    id: 4,
    title: "Equipamentos de Resgate: Manutenção e Uso Adequado",
    excerpt: "Saiba como manter e utilizar corretamente os equipamentos de resgate para garantir eficiência em emergências.",
    content: `
      <h2>Introdução</h2>
      <p>Os equipamentos de resgate são fundamentais em situações de emergência médica...</p>
    `,
    author: "Paramédico João Costa",
    date: "2023-12-28",
    readTime: "7 min",
    category: "Emergência",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["resgate", "emergência", "equipamentos", "manutenção"]
  },
  {
    id: 5,
    title: "Cuidados com Pacientes Acamados: Prevenção de Úlceras",
    excerpt: "Estratégias eficazes para prevenir úlceras de pressão em pacientes acamados e promover seu bem-estar.",
    content: `
      <h2>Introdução</h2>
      <p>Pacientes acamados requerem cuidados especiais para prevenir complicações como úlceras de pressão...</p>
    `,
    author: "Enfª Patricia Lima",
    date: "2023-12-20",
    readTime: "9 min",
    category: "Cuidados Médicos",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["acamados", "úlceras", "prevenção", "cuidados"]
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '1'));
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Artigo não encontrado</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="max-w-4xl">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-white/90">
                <User className="h-5 w-5 mr-2" />
                <span className="mr-6">{post.author}</span>
                <Calendar className="h-5 w-5 mr-2" />
                <span className="mr-6">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-8">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-gray-600">{post.readTime} de leitura</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    lineHeight: '1.8',
                  }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Sobre o Autor</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{post.author}</h4>
                    <p className="text-sm text-gray-600">Especialista em Saúde</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Profissional experiente na área da saúde, dedicado a compartilhar conhecimento e melhores práticas.
                </p>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-4">Artigos Relacionados</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link 
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <img 
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm group-hover:text-primary-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(relatedPost.date).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gostou do artigo?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Receba mais conteúdos como este diretamente no seu email.
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

export default BlogPost;