function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre cada dado da lista de dados
  for (let dinossauro of dinossauros) {
    // Cria um novo elemento HTML para cada resultado
    resultados += `
                <div class="item-resultado">
                <img src="imagens/${dinossauro.imagem}.png" alt="${dinossauro.imagem}">
                    <h2>
                        <a href="#" target="_blank">${dinossauro.nome}</a>
                    </h2>
                    <p class="descricao-meta">Alimentação: ${dinossauro.alimentacao}</p>
                    <p class="descricao-meta">Habitat: ${dinossauro.habitat}</p>
                    <p class="descricao-meta">${dinossauro.descricao}</p>
                    <a href="${dinossauro.link}" target="_blank">Mais informações</a>
                </div>
        `;
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
