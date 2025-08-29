import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Entre em Contato</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Estamos à disposição para atender às suas necessidades. Entre em contato conosco para solicitar orçamentos, tirar dúvidas ou conhecer mais sobre nossos produtos.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="bg-primary-100 p-3 rounded-full mb-4">
            <Phone className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Telefone</h3>
          <p className="text-gray-600 mb-4">Nossa equipe está disponível para atendê-lo por telefone.</p>
          <a href="tel:08001234567" className="text-primary-600 font-medium hover:text-primary-700">
            0800 123 4567
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="bg-primary-100 p-3 rounded-full mb-4">
            <Mail className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600 mb-4">Envie-nos um email e responderemos o mais breve possível.</p>
          <a href="mailto:contato@medilogistica.com.br" className="text-primary-600 font-medium hover:text-primary-700">
            contato@medilogistica.com.br
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="bg-primary-100 p-3 rounded-full mb-4">
            <MapPin className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Endereço</h3>
          <p className="text-gray-600 mb-4">Visite nossa sede para conhecer nossos produtos.</p>
          <address className="not-italic text-primary-600 font-medium">
            Av. Exemplo, 1234<br />
            São Paulo - SP, 01234-567
          </address>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Endereço</h3>
                <p className="text-gray-600 mt-1">
                  Av. Exemplo, 1234, São Paulo - SP, 01234-567
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Telefone</h3>
                <p className="text-gray-600 mt-1">
                  0800 123 4567
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600 mt-1">
                  contato@medilogistica.com.br
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-medium">Horário de Atendimento</h3>
                <p className="text-gray-600 mt-1">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium mb-4">Siga-nos nas Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa/Clínica
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Nome da sua empresa ou clínica"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Assunto *
              </label>
              <select
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="orcamento">Solicitar Orçamento</option>
                <option value="duvida">Dúvidas sobre Produtos</option>
                <option value="suporte">Suporte Técnico</option>
                <option value="parceria">Proposta de Parceria</option>
                <option value="outro">Outro Assunto</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem *
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Descreva sua mensagem aqui..."
                required
              ></textarea>
            </div>
            
            <div className="flex items-start">
              <input
                id="privacy"
                type="checkbox"
                className="h-4 w-4 text-primary-600 border-gray-300 rounded mt-1"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                Concordo com a{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  Política de Privacidade
                </a>{' '}
                e autorizo o uso dos meus dados para contato.
              </label>
            </div>
            
            <Button type="submit" size="lg" className="w-full md:w-auto">
              <Send className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
      
      {/* Map */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975874001734!2d-46.65429492392006!3d-23.56507017882644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1687456892345!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da localização da Medi Logística"
          ></iframe>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {[
            {
              question: 'Como solicitar um orçamento?',
              answer: 'Você pode solicitar um orçamento através do formulário de contato nesta página, ligando para nosso telefone 0800 123 4567 ou enviando um email para contato@medilogistica.com.br com os detalhes dos produtos que você precisa.',
            },
            {
              question: 'Qual o prazo de entrega dos produtos?',
              answer: 'O prazo de entrega varia de acordo com a região e a disponibilidade dos produtos em estoque. Geralmente, realizamos entregas em capitais em até 3 dias úteis e em outras localidades em até 7 dias úteis após a confirmação do pedido.',
            },
            {
              question: 'Vocês atendem todo o Brasil?',
              answer: 'Sim, a Medi Logística realiza entregas para todas as regiões do Brasil. Para localidades mais remotas, o prazo de entrega pode ser um pouco maior.',
            },
            {
              question: 'Quais são as formas de pagamento aceitas?',
              answer: 'Aceitamos diversas formas de pagamento, incluindo boleto bancário, transferência bancária, cartões de crédito em até 12x e, para clientes com cadastro aprovado, oferecemos opções de faturamento com prazos especiais.',
            },
            {
              question: 'Os produtos possuem garantia?',
              answer: 'Sim, todos os nossos produtos possuem garantia. O período de garantia varia de acordo com o fabricante e o tipo de produto, podendo ser de 3 meses a 2 anos. Consulte a descrição específica de cada produto para mais detalhes.',
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;