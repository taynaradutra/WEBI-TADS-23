let listaAnimais = [
  {
    idAnimal: 1,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img1.webp",
  },
  {
    idAnimal: 2,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img2.jpg",
  },
  {
    idAnimal: 3,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img3.webp",
  },
  {
    idAnimal: 4,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img4.jpg",
  },
  {
    idAnimal: 5,
    nome: "Barão",
    descricao:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam     nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctustristique est, a faucibus elit. Vivamus et dapibus mi, id facilisisnunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper",
    img: "./img/img5.webp",
  },
];

const criarCards = () => {
  let container = document.querySelector(".container");

  listaAnimais.forEach((element) => {
    let card = `
      <div class="card">
        <img class="card-img" src="${element.img}" />
        <h2 class="card-titulo">${element.nome}</h2>
        <p class="card-descricao">${element.descricao}</p>
        <a class="card-botao" idAnimal="${element.idAnimal}"> ADOTAR </a>
      </div>
    `;

    container.innerHTML += card;
  });
};

criarCards();

//mouseover
//mouseout

let listaCards = document.querySelectorAll(".card");

listaCards.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("change-scale");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("change-scale");
  });

  element.lastElementChild.addEventListener("click", (event) => {
    event.preventDefault();
    let animalSelecionado = element.lastElementChild.getAttribute("idAnimal");
    sessionStorage.setItem("animalSelecionado", animalSelecionado);
    window.location.href = "./adotar.html";
  });
});
