# 🎨 SketchRoom

Uma galeria de artes moderna, minimalista e totalmente estática, criada com **HTML, CSS e JavaScript**.

O projeto foi desenvolvido com foco em artistas, ilustradores e desenhistas que desejam compartilhar suas obras através de um link no Instagram, GitHub Pages ou qualquer hospedagem estática.

---

## 📱 Mobile First

O SketchRoom foi desenvolvido seguindo o conceito **Mobile First**, garantindo uma ótima experiência para quem acessa pelo celular.

Posteriormente o layout adapta-se automaticamente para tablets e computadores.

---

## ✨ Recursos

- 🎨 Galeria moderna
- 📱 Layout responsivo
- 🖼️ Modal para visualização das artes
- 📝 Descrição individual para cada obra
- 🏷️ Tags
- 📅 Data da criação
- 🖌️ Ferramenta utilizada
- ⚡ Carregamento automático das artes via JSON
- 🚀 Compatível com GitHub Pages
- ❤️ Totalmente estático (sem banco de dados)

---

# 📂 Estrutura

```
SketchRoom/

│
├── assets/
│   └── img/
│
├── css/
│   ├── style.css
│   ├── gallery.css
│   ├── modal.css
│   └── responsive.css
│
├── data/
│   └── artworks.json
│
├── js/
│   ├── app.js
│   ├── gallery.js
│   └── modal.js
│
├── index.html
└── README.md
```

---

# ➕ Como adicionar uma nova arte

Basta colocar a imagem dentro da pasta:

```
assets/img/
```

Depois abra:

```
data/artworks.json
```

Adicione um novo objeto seguindo este modelo:

```json
{
    "title": "Nome da Arte",
    "description": "Descrição da arte.",
    "date": "Julho de 2026",
    "software": "Clip Studio Paint",
    "tags": [
        "Anime",
        "Fanart"
    ],
    "image": "assets/img/minha_arte.jpg"
}
```

Salve o arquivo.

Pronto!

A nova arte aparecerá automaticamente na galeria.

---

# 🖥️ Tecnologias

- HTML5
- CSS3
- JavaScript (ES6)
- JSON

---

# 🌐 Hospedagem

O projeto pode ser publicado gratuitamente em:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Não é necessário servidor ou banco de dados.

---

# 🎯 Objetivo

O SketchRoom nasceu com a ideia de oferecer uma forma elegante de apresentar desenhos e ilustrações na internet sem depender de sistemas complexos ou redes sociais.

Toda a galeria é gerada automaticamente a partir de um único arquivo JSON, facilitando a manutenção e permitindo que qualquer pessoa atualize seu portfólio rapidamente.

---

# 🚀 Funcionalidades futuras

- [ ] Pesquisa por título
- [ ] Filtro por categoria
- [ ] Tema Claro / Escuro
- [ ] Favoritos (LocalStorage)
- [ ] Compartilhar arte
- [ ] Download da imagem
- [ ] Zoom na imagem
- [ ] Exibição em estilo Masonry
- [ ] Tela de carregamento
- [ ] Informações do artista
- [ ] Redes sociais
- [ ] Estatísticas da galeria

---

# 📜 Licença

Este projeto está disponível sob a licença GNU.



---

# 👨‍💻 Autor

**Edinaldo Cícero**

Digital Artist • Desenvolvedor Indie

GitHub:
https://github.com/

Instagram:
https://instagram.com/

---

## ⭐ Gostou do projeto?

Se este projeto foi útil para você, considere deixar uma ⭐ no repositório.

Isso ajuda bastante o projeto a alcançar mais pessoas.