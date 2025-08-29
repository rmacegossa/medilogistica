import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Truck, Users } from 'lucide-react';
import medicalBackground from '@/assets/images/medical-background.svg';
import acamadosImg from '@/assets/images/acamados.jpg';
import seringasImg from '@/assets/images/seringas.jpg';
import atadurasImg from '@/assets/images/ataduras.jpg';
import resgateImg from '@/assets/images/resgate.jpg';

// Paletas de cores alternativas que podem ser usadas no site
// Paleta 1 - Verde Saúde: Foco em bem-estar e equilíbrio
// --primary-50: #f0fdf4;
// --primary-100: #dcfce7;
// --primary-200: #bbf7d0;
// --primary-300: #86efac;
// --primary-400: #4ade80;
// --primary-500: #22c55e;
// --primary-600: #16a34a;
// --primary-700: #15803d;
// --primary-800: #166534;
// --primary-900: #14532d;

// Paleta 2 - Azul Confiança: Transmite profissionalismo e segurança
// --primary-50: #eff6ff;
// --primary-100: #dbeafe;
// --primary-200: #bfdbfe;
// --primary-300: #93c5fd;
// --primary-400: #60a5fa;
// --primary-500: #3b82f6;
// --primary-600: #2563eb;
// --primary-700: #1d4ed8;
// --primary-800: #1e40af;
// --primary-900: #1e3a8a;

// Paleta 3 - Verde-Azulado: Equilíbrio entre tranquilidade e profissionalismo
// --primary-50: #ecfeff;
// --primary-100: #cffafe;
// --primary-200: #a5f3fc;
// --primary-300: #67e8f9;
// --primary-400: #22d3ee;
// --primary-500: #06b6d4;
// --primary-600: #0891b2;
// --primary-700: #0e7490;
// --primary-800: #155e75;
// --primary-900: #164e63;

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative text-white py-20 shadow-xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={medicalBackground} alt="Medical Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Soluções completas em <span className="text-primary-200">materiais hospitalares</span>
              </h1>
              <p className="text-xl mb-8">
                Fornecemos produtos de alta qualidade para clínicas e hospitais em todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                  Ver Produtos
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all">
                  Fale Conosco
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in-left">
              <div className="bg-white rounded-lg shadow-2xl p-6 text-gray-800 border border-primary-100">
                <h3 className="text-xl font-semibold mb-4 text-primary-700">Solicite um orçamento</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Seu nome ou nome da clínica"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Descreva o que você precisa"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transition-all">Enviar Solicitação</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Por que escolher a Medi Logística?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Somos especializados em fornecer soluções completas para clínicas e hospitais em todo o Brasil.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-primary-100 animate-fade-in-up delay-100">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Nossa equipe está pronta para entender suas necessidades específicas e oferecer as melhores soluções.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-primary-100 animate-fade-in-up delay-200">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Produtos de Alta Qualidade</h3>
              <p className="text-gray-600">
                Trabalhamos apenas com os melhores fabricantes, garantindo produtos que atendem aos mais altos padrões de qualidade.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-primary-100 animate-fade-in-up delay-300">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <Truck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Entrega para Todo Brasil</h3>
              <p className="text-gray-600">
                Nossa logística eficiente permite entregas rápidas e seguras para clínicas e hospitais em qualquer região do país.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-primary-100">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Suporte Especializado</h3>
              <p className="text-gray-600">
                Nossa equipe de especialistas está sempre disponível para ajudar com dúvidas técnicas e recomendações de produtos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossas Categorias de Produtos</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Oferecemos uma ampla variedade de produtos hospitalares para atender às necessidades específicas da sua clínica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${acamadosImg})` }}>
                <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">ACAMADOS</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">
                  Produtos especializados para cuidados de pacientes acamados.
                </p>
                <a href="/produtos?categoria=acamados" className="text-primary-400 hover:text-primary-300 flex items-center">
                  Ver produtos <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${seringasImg})` }}>
                <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">SERINGAS</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">
                  Seringas e agulhas de alta qualidade para procedimentos médicos.
                </p>
                <a href="/produtos?categoria=seringas" className="text-primary-400 hover:text-primary-300 flex items-center">
                  Ver produtos <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${resgateImg})` }}>
                <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">RESGATES</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">
                  Equipamentos essenciais para emergências e resgates médicos.
                </p>
                <a href="/produtos?categoria=resgates" className="text-primary-400 hover:text-primary-300 flex items-center">
                  Ver produtos <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${atadurasImg})` }}>
                <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">ATADURAS/BANDAGENS</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">
                  Ataduras e bandagens para curativos e cuidados médicos.
                </p>
                <a href="/produtos?categoria=ataduras" className="text-primary-400 hover:text-primary-300 flex items-center">
                  Ver produtos <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Confira os depoimentos de clientes que confiam em nossos produtos e serviços.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 animate-fade-in-up delay-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Dra. Ana Silva" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">Dra. Ana Silva</h4>
                  <p className="text-gray-600 text-sm">Clínica Saúde Total</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Os produtos da Medi Logística são de excelente qualidade. O atendimento é rápido e eficiente, e a entrega sempre dentro do prazo. Recomendo fortemente."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 animate-fade-in-up delay-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Carlos Mendes" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">Dr. Carlos Mendes</h4>
                  <p className="text-gray-600 text-sm">Hospital São Lucas</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Trabalhamos com a Medi Logística há mais de 5 anos e nunca tivemos problemas. Os produtos são de alta qualidade e o suporte técnico é excelente."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dra. Patrícia Oliveira" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">Dra. Patrícia Oliveira</h4>
                  <p className="text-gray-600 text-sm">Clínica Bem Estar</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "A variedade de produtos oferecidos pela Medi Logística é impressionante. Sempre encontramos tudo o que precisamos para nossa clínica em um só lugar."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para melhorar o atendimento da sua clínica?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossos produtos podem fazer a diferença para seus pacientes.
          </p>
          <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <CheckCircle className="text-primary-600 mr-2 h-5 w-5" />
              <span className="text-gray-700 font-medium">Produtos Certificados</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-primary-600 mr-2 h-5 w-5" />
              <span className="text-gray-700 font-medium">Entrega Segura</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-primary-600 mr-2 h-5 w-5" />
              <span className="text-gray-700 font-medium">Suporte 24/7</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-primary-600 mr-2 h-5 w-5" />
              <span className="text-gray-700 font-medium">Garantia de Qualidade</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-primary-600 mr-2 h-5 w-5" />
              <span className="text-gray-700 font-medium">+1000 Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-4">Nossos Parceiros</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Trabalhamos com as melhores marcas e instituições do setor de saúde para garantir produtos de alta qualidade.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {/* Partner 1 */}
              <div className="w-32 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-2 flex items-center justify-center animate-fade-in-up delay-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/800px-Adidas_logo.png" alt="Parceiro 1" className="max-w-full max-h-full object-contain" />
              </div>
              {/* Partner 2 */}
              <div className="w-32 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-2 flex items-center justify-center animate-fade-in-up delay-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/800px-Adidas_logo.png" alt="Parceiro 1" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Partner 3 */}
            <div className="w-32 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-2 flex items-center justify-center animate-fade-in-up delay-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="Parceiro 2" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Partner 4 */}
            <div className="w-32 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-2 flex items-center justify-center animate-fade-in-up delay-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" alt="Parceiro 3" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Partner 5 */}
            <div className="w-32 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-2 flex items-center justify-center animate-fade-in-up delay-500">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Parceiro 4" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="w-32 h-20 bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-2 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Parceiro 5" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8 border border-primary-100 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-primary-700 mb-2">Solicite um orçamento</h2>
            <p className="text-gray-600 text-center mb-8">Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="product_interest" className="block text-sm font-medium text-gray-700 mb-1">
                  Produtos de interesse
                </label>
                <select
                  id="product_interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="equipamentos">Equipamentos Médicos</option>
                  <option value="materiais">Materiais Descartáveis</option>
                  <option value="instrumentos">Instrumentos Cirúrgicos</option>
                  <option value="mobiliario">Mobiliário Hospitalar</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 shadow-sm"
                  placeholder="Descreva o que você precisa"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-md hover:shadow-lg transition-all"
                >
                  Enviar solicitação
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                Ao enviar este formulário, você concorda com nossa <a href="#" className="text-primary-600 hover:underline">Política de Privacidade</a>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;