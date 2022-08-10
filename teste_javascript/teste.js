function somar() {
    //Declaração das variáveis da função
    var valor_entrada_usuario = window.document.getElementById("entrada"); //Variável que guarda o valor inserido pelo usuário como uma 'string'
    var valor_entrada = Number.parseInt(valor_entrada_usuario.value); //Variável que comuta 'string' em inteiro
    var soma; //Variável que guarda a somatória dos valores inferiores ao inserido que são divisíveis por 03 ou 05
    var resultado = window.document.getElementById("resultado");
    soma = 0;

    //Processamento dos dados recebidos
    if (valor_entrada < 0) {
        window.alert("O sistema foi programado para aceitar somente valores positivos. Tente novamente!");
        resultado.innerHTML = ("Insira um novo valor!");
    } else {
        for(let i = 0; i < valor_entrada; i++ /* i = i + 1 */) {
            if(i%3 == 0 || i%5 == 0){
                soma = soma + i;
            }
        }
        resultado.innerHTML = `A soma dos valores inferiores a ${valor_entrada} divisíveis por 03 ou 05 é igual a: ${soma}`;
    }
}