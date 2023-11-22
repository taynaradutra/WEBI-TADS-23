// variaveis var, let, const.
console.log("Hello, world!");

let nome = "Taynara";
console.log(nome);

let dataNascimento = "27/01/1995";
let idade = 28;
console.log(typeof idade);

x = 10;
if (x == 10) {
  var y = "ok";
}
console.log(y);

const pi = 3.14;
console.log(pi);

// data - new Date().getFullYear();

// split - split("/")[2];

// array
var lista = ["sc", "pr", "rs", "mg", "sp"];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// objeto
var pessoa = {
  nome: "Taynara",
  dtNascimento: "27/01/1995",
  endereco: "Pontal do Paraná",
  cpf: "078.896.784-02",
};

// template string
console.log(
  `A ${pessoa.nome} nasceu em: ${pessoa.dtNascimento} mora em: ${pessoa.endereco} `
);

var estados = {
  sc: "Santa Catarina",
  pr: "Paraná",
  rs: "Rio Grande do Sul",
};

// for in  -- iterar sobre cada uma das propriedades de um obj

for (chave in estados) {
  console.log(chave + ": " + estados[chave]);
}

// for of -- iterar sobre elementos de uma lista
for (pos of lista) {
  console.log(pos);
}

// foreach - aplicar uma função sobre cada um dos elementos

// function imprimir(elemento) {
//   console.log("- " + elemento);
// }

const imprimir = (elemento) => {
  console.log("- " + elemento);
};

lista.forEach(imprimir);

// Operador condicional ternário
// condicao ? exp1 : exp2;
var x = 10;
console.log(x === "10" ? "é igual" : "não é igual");

// Operador de atribuição =

// Operador de comparação  ==
// Comparação entre dados da variável, independente do tipo

// Operador de comparação ===
// Comparação entre dados e tipo.

// for convencional

// iterar sobre objetos

var categorias = {
  eletronicos: "Eletrônicos",
  moveis: "Móveis",
  telefonia: "Smartphones",
  automotivo: "Automotiva",
};

// for in  -- iterar sobre cada uma das propriedades de um obj

// for of -- iterar sobre elementos de uma lista
var listaObj = ["elemento", 2, "elemento2", 3, "elemento3", 4];

// numero randomico

let name = prompt("Olá! Informe seu nome");
alert(`Bem-vind@ ${name}`);

let option = confirm(`Seu nome está correto: ${name}`);
if (option) {
  alert("ok");
} else {
  alert("not ok");
}
