import { Button } from '@/components/ui/button';
import { Award, Users, TrendingUp, Truck, CheckCircle, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Medi Logística</h1>
            <p className="text-xl mb-8">
              Somos especialistas em distribuição de materiais hospitalares, comprometidos com a qualidade e excelência no atendimento às clínicas em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold mb-4">Missão</h2>
              <p className="text-gray-600">
                Fornecer soluções completas em materiais hospitalares, contribuindo para a excelência no atendimento médico e na saúde dos pacientes em todo o Brasil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-3 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold mb-4">Visão</h2>
              <p className="text-gray-600">
                Ser reconhecida como a principal distribuidora de materiais hospitalares do Brasil, referência em qualidade, inovação e atendimento personalizado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-semibold mb-4">Valores</h2>
              <p className="text-gray-600">
                Ética, compromisso com a qualidade, foco no cliente, inovação constante, responsabilidade social e trabalho em equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/e2e8f0/1e293b?text=Nossa+História"
                alt="História da Medi Logística"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A Medi Logística foi fundada em 2010 com o objetivo de suprir a crescente demanda por materiais hospitalares de qualidade no mercado brasileiro. O que começou como uma pequena operação em São Paulo, rapidamente se expandiu para atender clínicas e hospitais em todo o país.
              </p>
              <p className="text-gray-600 mb-4">
                Ao longo dos anos, investimos constantemente em infraestrutura, tecnologia e capacitação da nossa equipe para oferecer um serviço cada vez mais eficiente e personalizado aos nossos clientes.
              </p>
              <p className="text-gray-600 mb-4">
                Hoje, contamos com um amplo catálogo de produtos, parcerias com os principais fabricantes do setor e uma logística avançada que nos permite entregar com agilidade em qualquer região do Brasil.
              </p>
              <p className="text-gray-600">
                Nossa trajetória é marcada pelo compromisso com a excelência e pela busca constante em contribuir para a melhoria dos serviços de saúde no país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Medi Logística?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Produtos Certificados</h3>
              <p className="text-gray-600">
                Trabalhamos apenas com produtos que atendem aos mais rigorosos padrões de qualidade e possuem todas as certificações necessárias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <Truck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Logística Eficiente</h3>
              <p className="text-gray-600">
                Nossa estrutura logística permite entregas rápidas e seguras para todas as regiões do Brasil, com rastreamento em tempo real.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Contamos com uma equipe de especialistas pronta para oferecer suporte técnico e recomendações personalizadas para cada cliente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-100 p-3 rounded-full w-fit mb-4">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agilidade nas Cotações</h3>
              <p className="text-gray-600">
                Respondemos a solicitações de orçamento com rapidez e precisão, para que você possa tomar decisões com segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossa Equipe</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que fazem da Medi Logística uma empresa de excelência no setor de distribuição de materiais hospitalares.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Carlos Silva',
                role: 'Diretor Executivo',
                image: 'https://placehold.co/300x300/e2e8f0/1e293b?text=CS',
                bio: 'Com mais de 20 anos de experiência no setor de saúde, Carlos lidera a Medi Logística com visão estratégica e foco em inovação.',
              },
              {
                name: 'Ana Oliveira',
                role: 'Gerente Comercial',
                image: 'https://placehold.co/300x300/e2e8f0/1e293b?text=AO',
                bio: 'Especialista em vendas B2B, Ana coordena nossa equipe comercial e desenvolve estratégias para melhor atender nossos clientes.',
              },
              {
                name: 'Marcos Santos',
                role: 'Coordenador de Logística',
                image: 'https://placehold.co/300x300/e2e8f0/1e293b?text=MS',
                bio: 'Responsável por garantir que nossas entregas sejam realizadas com eficiência e segurança em todo o território nacional.',
              },
              {
                name: 'Juliana Costa',
                role: 'Especialista em Produtos',
                image: 'https://placehold.co/300x300/e2e8f0/1e293b?text=JC',
                bio: 'Com formação em enfermagem, Juliana oferece suporte técnico especializado sobre nossos produtos hospitalares.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossos Parceiros</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Trabalhamos com os principais fabricantes e marcas do setor de saúde para oferecer produtos de alta qualidade aos nossos clientes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={`https://placehold.co/200x100/e2e8f0/1e293b?text=Parceiro+${index + 1}`}
                  alt={`Parceiro ${index + 1}`}
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para conhecer nossos produtos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua clínica ou hospital a oferecer um atendimento de excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
              Ver Catálogo de Produtos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;