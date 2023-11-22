const listaPosts = [
  {
    titulo: "Título do Post",
    descricao:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est molestias dolorum? Tempore minima, ",
    imgUrl: "./img/gatos.png",
  },
  {
    titulo: "Título do Post",
    descricao:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est molestias dolorum? Tempore minima, ",
    imgUrl: "./img/gatos.png",
  },
  {
    titulo: "Título do Post",
    descricao:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est molestias dolorum? Tempore minima, ",
    imgUrl: "./img/gatos.png",
  },
  {
    titulo: "Título do Post",
    descricao:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est molestias dolorum? Tempore minima, ",
    imgUrl: "./img/gatos.png",
  },
  {
    titulo: "Título do Post",
    descricao:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est molestias dolorum? Tempore minima, ",
    imgUrl: "./img/gatos.png",
  },
];

var container = document.querySelector(".container");

listaPosts.forEach((elemento) => {
  let card = `
        <div class="card">
            <div class="card-img">
                <figure>
                    <img src="${elemento.imgUrl}" alt="Imagem de gato" />
                </figure>
            </div>
            <div class="card-conteudo">
                <h2>${elemento.titulo}</h2>
                <p>
                    ${elemento.descricao}
                </p>
                <a href="">Ver mais!</a>
            </div>
        </div>    
    `;
  container.innerHTML += card;
});
