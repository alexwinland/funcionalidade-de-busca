const campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    pesquisar();
  }
});

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar o nome do dinnosauro, alimentação ou habitat.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <div class="foto-titulo">              
            <h2>
              <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
              <img src="${dado.img}" alt="${dado.titulo}">
          </div>
          <div class="descricao">              
            <p class="descricao-meta">Alimentação: ${dado.alimentacao}</p>
            <p class="descricao-meta">Habitat: ${dado.habitat}</p>
            <p class="descricao-meta">Descrição: ${dado.descricao}</p>
            <br>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
