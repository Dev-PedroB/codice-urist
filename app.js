//console.log(dados)

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()

    let resultados = "";
    let nome = "";
    let descricao = "";

    if(campoPesquisa.trim() == "") {
        section.innerHTML = "<p>Digite algo pra iniciar sua pesquisa</p>"
        return
    }

    
    for (let drink of drinks) {
        nome = drink.nome.toLowerCase()
        descricao = drink.descricao.toLowerCase()
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
        <h2>
        <a href="#">${drink.nome}</a>
        </h2>
        <p class="descricao-meta">${drink.descricao}</p>
        <a href="${drink.link}" target="blank">Mais informações</a>
        </div>
        `
        }
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado<p>"
    }

    section.innerHTML = resultados
}