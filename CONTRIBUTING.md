# Guia de Contribuição - MediLogística

Este documento fornece diretrizes para contribuir com o projeto do site da MediLogística.

## 📋 Antes de Começar

### Pré-requisitos
- Node.js 18+
- Git
- Editor de código (recomendado: VS Code)

### Configuração do Ambiente
1. Fork do repositório
2. Clone do seu fork
3. Instalação das dependências: `npm install`
4. Criação de branch para sua feature: `git checkout -b feature/nome-da-feature`

## 🎯 Padrões de Código

### TypeScript
- Use tipagem estrita
- Evite `any`, prefira tipos específicos
- Documente interfaces complexas

```typescript
// ✅ Bom
interface Produto {
  id: number;
  nome: string;
  preco: number;
}

// ❌ Evitar
const produto: any = {...}
```

### React Components
- Use componentes funcionais com hooks
- Prefira arrow functions para componentes
- Mantenha componentes pequenos e focados

```tsx
// ✅ Bom
const ProductCard: React.FC<ProductCardProps> = ({ produto }) => {
  return (
    <div className="card">
      <h3>{produto.nome}</h3>
    </div>
  );
};

// ❌ Evitar componentes muito grandes
```

### CSS/Tailwind
- Use classes do Tailwind sempre que possível
- Mantenha consistência com a paleta de cores
- Use variáveis CSS para cores customizadas

```tsx
// ✅ Bom
<button className="bg-primary-600 hover:bg-primary-700 text-white">

// ❌ Evitar
<button style={{backgroundColor: '#1e40af'}}>
```

## 📁 Estrutura de Arquivos

### Organização
```
src/
├── components/
│   ├── ui/           # Componentes básicos (Button, Input, etc.)
│   ├── layout/       # Layout components (Header, Footer)
│   └── common/       # Componentes compartilhados
├── pages/            # Páginas da aplicação
├── hooks/            # Custom hooks
├── utils/            # Funções utilitárias
├── types/            # Definições de tipos TypeScript
└── constants/        # Constantes da aplicação
```

### Nomenclatura
- **Componentes**: PascalCase (`ProductCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useProducts.ts`)
- **Utilitários**: camelCase (`formatPrice.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

## 🔄 Fluxo de Trabalho

### Git Workflow
1. **Branch naming**:
   - `feature/nome-da-feature` - Novas funcionalidades
   - `fix/nome-do-bug` - Correções de bugs
   - `docs/nome-da-doc` - Documentação
   - `refactor/nome-do-refactor` - Refatorações

2. **Commits**:
   - Use mensagens descritivas em português
   - Prefixos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
   
```bash
# ✅ Bom
git commit -m "feat: adicionar filtro por categoria no catálogo"
git commit -m "fix: corrigir erro de carregamento de produtos"

# ❌ Evitar
git commit -m "update"
git commit -m "fix bug"
```

### Pull Requests
1. Título descritivo
2. Descrição detalhada das mudanças
3. Screenshots para mudanças visuais
4. Testes realizados

## 🧪 Testes

### Testes Manuais
Antes de submeter PR, teste:
- [ ] Responsividade (mobile, tablet, desktop)
- [ ] Funcionalidades principais
- [ ] Performance (carregamento)
- [ ] Acessibilidade básica

### Checklist de Qualidade
- [ ] Código segue os padrões estabelecidos
- [ ] Não há erros no console
- [ ] Build passa sem erros (`npm run build`)
- [ ] Lint passa sem erros (`npm run lint`)
- [ ] Componentes são reutilizáveis
- [ ] Performance não foi degradada

## 🎨 Design System

### Cores
Use sempre as variáveis CSS definidas:
```css
/* Cores primárias */
rgb(var(--primary-50))   /* Mais claro */
rgb(var(--primary-600))  /* Principal */
rgb(var(--primary-900))  /* Mais escuro */
```

### Espaçamentos
Siga a escala do Tailwind:
- `p-2, p-4, p-6, p-8` para padding
- `m-2, m-4, m-6, m-8` para margin
- `gap-2, gap-4, gap-6` para flexbox/grid

### Tipografia
- Títulos: `text-2xl, text-3xl, text-4xl`
- Corpo: `text-base, text-lg`
- Pequeno: `text-sm, text-xs`

## 📱 Responsividade

### Breakpoints
```css
/* Mobile first */
.class { /* mobile styles */ }

@media (min-width: 768px) {
  .md\:class { /* tablet styles */ }
}

@media (min-width: 1024px) {
  .lg\:class { /* desktop styles */ }
}
```

### Boas Práticas
- Teste em diferentes tamanhos de tela
- Use `flex` e `grid` para layouts
- Imagens responsivas com `object-cover`
- Textos legíveis em todos os tamanhos

## 🚀 Performance

### Otimizações
- Lazy loading para imagens
- Code splitting para rotas
- Minimize re-renders desnecessários
- Use `useMemo` e `useCallback` quando apropriado

### Monitoramento
- Lighthouse score > 90
- First Contentful Paint < 2s
- Largest Contentful Paint < 2.5s

## 🔒 Segurança

### Boas Práticas
- Nunca commite credenciais
- Sanitize inputs do usuário
- Use HTTPS em produção
- Valide dados no frontend e backend

## 📞 Suporte

Para dúvidas sobre contribuição:
- Abra uma issue no GitHub
- Entre em contato com a equipe de desenvolvimento

---

**Obrigado por contribuir com o projeto MediLogística! 🙏**