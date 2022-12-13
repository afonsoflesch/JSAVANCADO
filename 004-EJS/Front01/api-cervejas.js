const url = 'http://localhost:3000/cervejas';

function getCervejas() {
    fetch(url)
        // Quando o resultado vier Com sucesso, faça algo
        .then(resultado => resultado.json())
        .then(dados => {
            const tbody = document.getElementById('tbody-cervejas');

            dados.forEach(e => {
                tbody.innerHTML += `<tr>
                                        <td>${e.id}</td>
                                        <td>${e.nome}</td>
                                        <td>${e.ibu}</td>
                                        <td>${e.lote}</td>
                                    </tr>`;

            });
        })
        //Quando o resultado vier Com erro, faça algo
        .catch(erro => console.error(erro));
}

document.getElementById('form-bebidas').addEventListener('submit', cadastar);

function cadastar(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const ibu = document.getElementById('IBU').value;
    const lote = document.getElementById('lote').value;

    const cerveja = {
        'id' : id,
        'nome' : nome,
        'IBU' : ibu,
        'lote' : lote
    }

    console.log(` ${nome} ${ibu} ${lote} `);

    fetch(url, {
        method : 'POST',
        body : JSON.stringify(cerveja),
        headers : {
            "Content-type" : "application/json"
        }

    })
    .then(resultado => resultado.text())
    .then(data => alert(data))
    .catch(erro => console.error(erro));
}