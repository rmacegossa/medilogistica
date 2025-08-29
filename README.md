# MediLogística - Site Institucional

Site institucional da MediLogística, empresa especializada em produtos médicos e hospitalares.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server rápido
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento para aplicações React
- **Lucide React** - Biblioteca de ícones
- **shadcn/ui** - Componentes de UI reutilizáveis

## 📋 Funcionalidades

### ✅ Páginas Implementadas
- **Home** - Página inicial com hero section, serviços e formulário de contato
- **Catálogo** - Listagem de produtos com busca e filtros avançados
- **Sobre Nós** - Informações sobre a empresa
- **Contato** - Formulário de contato e informações da empresa

### ✅ Recursos
- Design responsivo para desktop, tablet e mobile
- Sistema de busca e filtros no catálogo
- Carregamento de produtos via CSV
- Formulários de contato e orçamento
- Animações e transições suaves
- SEO otimizado

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/rmacegossa/medilogistica.git
cd medi-logistica-site
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse o projeto**
Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── layout/         # Componentes de layout (Header, Footer)
│   └── ui/             # Componentes de UI (shadcn/ui)
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Catalogo.tsx    # Catálogo de produtos
│   ├── SobreNos.tsx    # Sobre nós
│   └── Contact.tsx     # Contato
├── assets/             # Arquivos estáticos
│   └── images/         # Imagens
├── lib/                # Utilitários e configurações
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais

public/
├── produtos-correto.csv # Base de dados dos produtos
└── placeholder-product.svg # Imagem placeholder
```

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores personalizada baseada em tons de azul:

- **Primary**: Tons de azul (#1e40af a #dbeafe)
- **Secondary**: Tons de cinza (#111827 a #f9fafb)
- **Neutral**: Tons neutros para textos e backgrounds

### Cores CSS Customizadas
```css
:root {
  --primary-50: 239 246 255;
  --primary-100: 219 234 254;
  --primary-200: 191 219 254;
  --primary-300: 147 197 253;
  --primary-400: 96 165 250;
  --primary-500: 59 130 246;
  --primary-600: 37 99 235;
  --primary-700: 29 78 216;
  --primary-800: 30 64 175;
  --primary-900: 30 58 138;
}
```

## 📊 Gestão de Produtos

Os produtos são carregados a partir do arquivo `public/produtos-correto.csv` com a seguinte estrutura:

```csv
id,nome,categoria,subcategoria,preco,descricao,imagem,estoque,destaque
1,"Produto","Categoria","Subcategoria",99.90,"Descrição","url",100,true
```

### Campos obrigatórios:
- `id`: Identificador único
- `nome`: Nome do produto
- `categoria`: Categoria principal
- `subcategoria`: Subcategoria
- `preco`: Preço em formato decimal
- `descricao`: Descrição do produto
- `estoque`: Quantidade em estoque
- `destaque`: Boolean para produtos em destaque

## 🚀 Deploy

### Build para produção
```bash
npm run build
```

### Deploy automático
O projeto está configurado para deploy automático no GitHub Pages através de GitHub Actions.

### Deploy manual
1. Execute o build
2. Faça upload da pasta `dist/` para seu servidor
3. Configure o servidor para servir arquivos estáticos

## 🔧 Configurações

### Tailwind CSS
O projeto utiliza configuração customizada do Tailwind em `tailwind.config.js`

### TypeScript
Configuração em `tsconfig.json` com strict mode habilitado

### Vite
Configuração em `vite.config.ts` otimizada para React

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🐛 Solução de Problemas

### Erro de carregamento de produtos
- Verifique se o arquivo `produtos-correto.csv` está na pasta `public/`
- Confirme se a estrutura do CSV está correta

### Problemas de build
- Execute `npm run lint` para verificar erros de código
- Limpe o cache com `rm -rf node_modules package-lock.json && npm install`

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@medilogistica.com.br
- Telefone: (11) 0800 123 4567

## 📄 Licença

Este projeto é propriedade da MediLogística. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para MediLogística**
