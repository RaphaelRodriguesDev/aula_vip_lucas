# 📚 Apostila Completa - HTML & CSS
**Professor: Jarvis | Aluno: Raphael**

---

## 📋 Índice

1. [Aula 01 - Introdução ao HTML](#aula-01---introdução-ao-html)
2. [Aula 02 - Estrutura de Site e Tabelas](#aula-02---estrutura-de-site-e-tabelas)
3. [Aula 03 - HTML Semântico e Formulários](#aula-03---html-semântico-e-formulários)
4. [Aula 04 - CSS Básico e Layout](#aula-04---css-básico-e-layout)
5. [Aula 05 - Projeto Completo](#aula-05---projeto-completo)
6. [Conceitos Importantes](#conceitos-importantes)
7. [Boas Práticas](#boas-práticas)

---

## 🎯 Aula 01 - Introdução ao HTML

### Conceitos Fundamentais
- **HTML (HyperText Markup Language)**: Linguagem de marcação para estruturar conteúdo web
- **Estrutura básica**: DOCTYPE, html, head, body
- **Meta tags**: charset, viewport, title

### Tags Básicas Aprendidas
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
</head>
<body>
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
    <p>Parágrafo de texto</p>
    <hr> <!-- Linha horizontal -->
    <span>Texto inline</span>
</body>
</html>
```

### Hierarquia de Headings
- `<h1>` - Título principal (apenas um por página)
- `<h2>` até `<h6>` - Subtítulos em ordem hierárquica

---

## 🔗 Aula 02 - Estrutura de Site e Tabelas

### Links e Navegação
```html
<!-- Link externo -->
<a href="https://www.google.com" target="_blank">Google</a>

<!-- Link interno -->
<a href="./pages/sobre.html">Sobre</a>

<!-- Link para seção -->
<a href="#secao1">Ir para Seção 1</a>
```

### Imagens
```html
<!-- Imagem local -->
<img src="./assets/img/foto.jpg" alt="Descrição da imagem" width="200" height="100">

<!-- Imagem externa -->
<img src="https://exemplo.com/imagem.jpg" alt="Imagem externa">
```

### Tabelas Estruturadas
```html
<table border="1" style="border-collapse: collapse;">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th colspan="2">Informações</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>25</td>
            <td rowspan="2">Brasileiro</td>
            <td>Desenvolvedor</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
            <td>Designer</td>
        </tr>
    </tbody>
</table>
```

### Atributos Importantes de Tabela
- `colspan`: Mescla células horizontalmente
- `rowspan`: Mescla células verticalmente
- `border-collapse: collapse`: Remove espaços entre bordas

---

## 🏗️ Aula 03 - HTML Semântico e Formulários

### Tags Semânticas
```html
<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <article>
            <h2>Título do Artigo</h2>
            <p>Conteúdo do artigo...</p>
        </article>
        
        <aside>
            <h3>Informações Relacionadas</h3>
        </aside>
    </section>
</main>

<footer>
    <p>&copy; 2025 Todos os direitos reservados</p>
</footer>
```

### Formulários Completos
```html
<form>
    <!-- Texto -->
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>
    
    <!-- Email -->
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Senha -->
    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha">
    
    <!-- Radio buttons -->
    <input type="radio" id="masc" name="sexo" value="masculino">
    <label for="masc">Masculino</label>
    
    <!-- Checkboxes -->
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Receber newsletter</label>
    
    <!-- Select -->
    <select name="estado">
        <option value="">Selecione</option>
        <optgroup label="Sudeste">
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
        </optgroup>
    </select>
    
    <!-- Textarea -->
    <textarea name="mensagem" rows="5" cols="30"></textarea>
    
    <!-- Outros tipos -->
    <input type="number" min="1" max="100">
    <input type="date">
    <input type="time">
    <input type="color">
    <input type="file">
    <input type="range" min="0" max="10">
    
    <!-- Botões -->
    <button type="submit">Enviar</button>
    <button type="reset">Limpar</button>
</form>
```

### Iframe
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=..."
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

---

## 🎨 Aula 04 - CSS Básico e Layout

### Estrutura CSS
```css
@charset "utf-8";

/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Seletores */
body { /* Seletor de elemento */ }
.classe { /* Seletor de classe */ }
#id { /* Seletor de ID */ }
```

### Propriedades Fundamentais
```css
/* Tipografia */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
color: #333;
text-align: center;

/* Layout */
width: 100%;
height: 100vh;
padding: 10px;
margin: 20px;
border: 1px solid #ccc;

/* Background */
background-color: #f0f0f0;
background: linear-gradient(45deg, #ff0000, #0000ff);

/* Flexbox */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
```

### Estados de Link
```css
a:link { color: blue; }      /* Link não visitado */
a:visited { color: purple; } /* Link visitado */
a:hover { color: red; }      /* Mouse sobre o link */
a:active { color: orange; }  /* Link sendo clicado */
```

### Transições
```css
.elemento {
    transition: all 0.3s ease;
}

.elemento:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

---

## 🚀 Aula 05 - Projeto Completo

### Estrutura do Projeto
```
projeto-completo/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   └── js/
└── pages/
    ├── sobre.html
    ├── contato.html
    └── portfolio.html
```

### CSS Grid Layout
```css
.conteudo {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

@media (max-width: 768px) {
    .conteudo {
        grid-template-columns: 1fr;
    }
}
```

### Design Responsivo
```css
/* Mobile First */
@media (max-width: 768px) {
    .nav ul {
        flex-direction: column;
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
}
```

---

## 💡 Conceitos Importantes

### 1. HTML Semântico
- Use tags que descrevem o conteúdo: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Melhora acessibilidade e SEO

### 2. Acessibilidade
- Sempre use `alt` em imagens
- Labels associados aos inputs (`for` e `id`)
- Hierarquia correta de headings

### 3. CSS Box Model
```
┌─────────────────────────────────┐
│           Margin                │
│  ┌─────────────────────────────┐ │
│  │         Border              │ │
│  │  ┌─────────────────────────┐ │ │
│  │  │       Padding           │ │ │
│  │  │  ┌─────────────────────┐ │ │ │
│  │  │  │      Content        │ │ │ │
│  │  │  └─────────────────────┘ │ │ │
│  │  └─────────────────────────┘ │ │
│  └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### 4. Flexbox vs Grid
- **Flexbox**: Layout unidimensional (linha ou coluna)
- **Grid**: Layout bidimensional (linhas e colunas)

---

## ✅ Boas Práticas

### HTML
1. **Sempre declare o DOCTYPE**: `<!DOCTYPE html>`
2. **Use lang no html**: `<html lang="pt-br">`
3. **Meta charset**: `<meta charset="UTF-8">`
4. **Viewport para responsividade**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
5. **Alt em imagens**: Sempre descreva o conteúdo
6. **Hierarquia de headings**: H1 → H2 → H3 (não pule níveis)

### CSS
1. **Reset CSS**: Remova margens e paddings padrão
2. **Box-sizing**: Use `border-box` para facilitar cálculos
3. **Mobile First**: Comece com design mobile
4. **Organize o código**: Comente seções importantes
5. **Use unidades relativas**: `rem`, `em`, `%`, `vh`, `vw`

### Estrutura de Arquivos
1. **Organize por tipo**: CSS em `/css`, imagens em `/img`
2. **Nomes descritivos**: `style.css`, `contato.html`
3. **Caminhos relativos**: `./assets/css/style.css`

---

## 🎓 Resumo do Aprendizado

### Aulas Concluídas: 5/10
### Conceitos Dominados:
- ✅ HTML5 Semântico
- ✅ Formulários Completos
- ✅ Tabelas com rowspan/colspan
- ✅ CSS3 Moderno
- ✅ Flexbox Layout
- ✅ CSS Grid
- ✅ Design Responsivo
- ✅ Gradientes e Transições

### Próximos Passos:
- 🔄 JavaScript Básico
- 🔄 DOM Manipulation
- 🔄 Eventos e Interatividade
- 🔄 APIs e AJAX
- 🔄 Frameworks CSS

---

**Desenvolvido por: Jarvis (Professor) | Estudante: Raphael**
**Data: Janeiro 2025**