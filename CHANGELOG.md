# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-01-19

### Adicionado
- Site institucional completo da MediLogística
- Página inicial com hero section e formulário de orçamento
- Catálogo de produtos com sistema de busca e filtros
- Página "Sobre Nós" com informações da empresa
- Página de contato com formulário e informações
- Sistema de carregamento de produtos via CSV
- Design responsivo para mobile, tablet e desktop
- Paleta de cores personalizada em tons de azul
- Animações e transições suaves
- Componentes reutilizáveis com shadcn/ui

### Funcionalidades Principais
- **Catálogo Interativo**: Busca por nome/descrição, filtros por categoria e subcategoria
- **Formulários**: Contato e solicitação de orçamento
- **Responsividade**: Layout adaptativo para todos os dispositivos
- **Performance**: Carregamento otimizado e lazy loading
- **SEO**: Meta tags e estrutura otimizada para buscadores

### Tecnologias Utilizadas
- React 18 com TypeScript
- Vite para build e desenvolvimento
- Tailwind CSS para estilização
- React Router para navegação
- Lucide React para ícones
- shadcn/ui para componentes

### Estrutura de Dados
- Base de produtos em formato CSV
- 20 produtos iniciais nas categorias:
  - Descartáveis (Luvas, Máscaras, Seringas, Equipos)
  - Equipamentos (Estetoscópio, Esfigmomanômetro, Termômetro, Oxímetro)
  - Higiene e Limpeza (Álcool, Antissépticos)
  - Curativos (Bandagens, Gazes, Adesivos)
  - Medicamentos (Soluções)

### Correções
- Fix para erro de JavaScript no catálogo ao buscar produtos
- Correção de estilos do botão "Limpar filtros"
- Adição de verificações de segurança para campos undefined
- Correção de cores hardcoded por variáveis CSS

### Documentação
- README.md completo com guia de instalação
- CONTRIBUTING.md com padrões de desenvolvimento
- CHANGELOG.md para controle de versões

---

## Formato das Versões

### [Unreleased]
- Mudanças que estão em desenvolvimento

### [X.Y.Z] - YYYY-MM-DD

#### Adicionado
- Novas funcionalidades

#### Alterado
- Mudanças em funcionalidades existentes

#### Descontinuado
- Funcionalidades que serão removidas

#### Removido
- Funcionalidades removidas

#### Corrigido
- Correções de bugs

#### Segurança
- Correções de vulnerabilidades

---

**Legenda:**
- 🎉 Nova funcionalidade
- 🐛 Correção de bug
- 📝 Documentação
- 🎨 Melhorias de UI/UX
- ⚡ Melhorias de performance
- 🔒 Correções de segurança