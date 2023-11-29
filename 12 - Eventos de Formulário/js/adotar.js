let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[name='renda']:checked").value;
  let residencia = document.querySelector("#residencia");
  let opcResidencia = residencia.options[residencia.selectedIndex].value;
  let intencao = document.querySelector("#intencao");

  console.log(
    `${nome.value}, ${telefone.value}, ${email.value}, ${renda}, ${opcResidencia}, ${intencao.value} `
  );
});
