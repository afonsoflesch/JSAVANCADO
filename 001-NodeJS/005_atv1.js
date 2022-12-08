// atividade 1
// Crie um modulo com as seguintes funcoes:
// - uma funcao que receb um parametro(Nome) e retorne uma saudacao concatenada com o nome
// - receba duas variaveis , nome e sobrenome e retorne o nome completo
// - renote o resto da divisao entre dois numeros
// - Crie um segundo arquivo para testar as funcoes do seu modulo

function saudacao(nome) {
    //return console.log('Saudações' + nome);
    return `Bem vindo, ${nome}`;
}

function nome_completo (nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

function resto(n1, n2) {
    resultado = n1 % n2;
    return resultado;
}

module.exports = {saudacao, nome_completo, resto};
