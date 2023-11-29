let form = document.querySelector("form");

const validarDados = (
  nome,
  telefone,
  email,
  renda,
  residencia,
  opcResidencia,
  intencao
) => {
  let control = true;

  if (nome.value.trim() == "") {
    nome.classList.add("change-background");
    control = false;
  }

  if (email.value.trim() == "") {
    email.classList.add("change-background");
    control = false;
  }

  if (telefone.value.trim() == "") {
    telefone.classList.add("change-background");
    control = false;
  }

  if (renda == null) {
    let erroRenda = document.querySelector("#erro-renda");
    erroRenda.classList.add("msgm-erro--active");
    control = false;
  }
  return control;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[name='renda']:checked");
  let residencia = document.querySelector("#residencia");
  let opcResidencia = residencia.options[residencia.selectedIndex].value;
  let intencao = document.querySelector("#intencao");

  if (
    validarDados(
      nome,
      telefone,
      email,
      renda,
      residencia,
      opcResidencia,
      intencao
    )
  ) {
    let adotante = {
      nome: nome.value.trim(),
      telefone: telefone.value.trim(),
      email: email.value.trim(),
      renda: renda.value,
      residencia: opcResidencia,
      intencao: intencao.value.trim(),
      idAnimal: sessionStorage.getItem("animalSelecionado"),
    };

    let adotanteJSON = JSON.stringify(adotante);
    console.log(adotanteJSON);

    let adotanteNew = JSON.parse(adotanteJSON);
    console.log(adotanteNew);
  }
});
