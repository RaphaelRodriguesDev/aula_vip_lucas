# 📝 Changelog - Curso HTML & CSS

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

---

## [1.0.1] - 2025-01-27

### ✨ Adicionado
- **Imagem Local do Unsplash**
  - Baixada imagem `coding.jpg` do Unsplash para `assets/img/`
  - Atualizada página portfolio para usar imagem local em vez de URL externa

### 🔄 Modificado
- **Portfolio Page**: Alterado src da imagem para caminho local `../assets/img/coding.jpg`

---

## [1.0.0] - 2025-01-27

### ✨ Adicionado
- **Projeto Completo da Aula 5**
  - Estrutura completa do projeto em `aula05/projeto-completo/`
  - Página principal (`index.html`) integrando todos os conceitos
  - Página "Sobre" com tabelas e conteúdo detalhado
  - Página "Contato" com formulário completo demonstrando todos os tipos de input
  - Página "Portfólio" com tabelas complexas usando rowspan e colspan

- **CSS Moderno e Responsivo**
  - Arquivo `style.css` com design moderno
  - Implementação de Flexbox e CSS Grid
  - Gradientes e animações CSS
  - Design responsivo com media queries
  - Sistema de cores consistente

- **Documentação Completa**
  - Apostila completa (`APOSTILA-HTML-CSS.md`) com todos os conceitos das 5 aulas
  - Exemplos de código para cada conceito
  - Boas práticas e dicas importantes
  - Estrutura organizada por aulas

- **Sistema de Versionamento**
  - Arquivo `CHANGELOG.md` para documentar todas as alterações
  - Versionamento semântico (MAJOR.MINOR.PATCH)

### 🎯 Conceitos Integrados
- HTML5 Semântico (header, nav, main, section, article, aside, footer)
- Formulários completos com todos os tipos de input
- Tabelas estruturadas com rowspan e colspan
- CSS3 moderno com Flexbox e Grid
- Design responsivo
- Gradientes e transições CSS
- Estrutura de projeto organizada

### 📚 Conteúdo da Apostila
- **Aula 01**: Introdução ao HTML, tags básicas, estrutura
- **Aula 02**: Links, imagens, tabelas básicas
- **Aula 03**: HTML semântico, formulários avançados, iframe
- **Aula 04**: CSS básico, layout, Flexbox
- **Aula 05**: Projeto completo integrando todos os conceitos

### 🔧 Estrutura Técnica
```
frontend/
├── aula01/ (HTML básico)
├── aula02/ (Estrutura e tabelas)
├── aula03/ (Semântico e formulários)
├── aula04/ (CSS básico)
├── aula05/
│   └── projeto-completo/
│       ├── index.html
│       ├── assets/
│       │   ├── css/style.css
│       │   └── img/coding.jpg
│       └── pages/
│           ├── sobre.html
│           ├── contato.html
│           └── portfolio.html
├── APOSTILA-HTML-CSS.md
└── CHANGELOG.md
```

---

## 📋 Formato do Changelog

Este changelog segue o formato [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

### Tipos de Mudanças
- **✨ Adicionado** para novas funcionalidades
- **🔄 Modificado** para mudanças em funcionalidades existentes
- **❌ Removido** para funcionalidades removidas
- **🐛 Corrigido** para correção de bugs
- **🔒 Segurança** para vulnerabilidades corrigidas

---

**Mantido por: Jarvis (Professor) | Projeto de: Raphael**