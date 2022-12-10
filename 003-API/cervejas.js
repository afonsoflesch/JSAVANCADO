var cervejas = [{
    'id': 1,
    'nome': 'skol',
    'ibu': 15,
    'lote': '1000'
},
{
    'id': 2,
    'nome': 'brahma',
    'ibu': 10,
    'lote': '2000'
}]

function create(cerveja) {
    cervejas.push(cerveja)
    return cervejas;
}
function read() {
    return cervejas;
}
function read_by_id(id) {
    let cerveja = {};
    cervejas.forEach(e => {
        if (e['id'] == id) {
            cerveja = e;
            return;
        }
    });
    return cerveja;
}
function update(cerveja) {
    // remover a cerveja antiga
    remove(cerveja['id']);

    //adicionar a alterada
    cervejas.push(cerveja);
    return 'alterado com sucesso';
}
function remove(id) {
    let nova_lista = [];

    cervejas.forEach((e) => {
        if (e['id'] != id) {
            nova_lista.push(e);
        }
    });
    cervejas = nova_lista;
    return 'Deletado com sucesso';
}

module.exports = { create, read, update, remove, read_by_id }