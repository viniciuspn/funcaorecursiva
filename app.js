/*
Crie uma função recursiva para descobrir o menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo. 
Quando encontrá-lo, imprima-o na tela.
*/

console.log(divisivel());
function divisivel(valor) {
    if(!valor){
        valor = 1;
    }
    
    if ((valor % 2) == 0 && (valor % 3) == 0 && (valor % 10) == 0) {
        return valor;
    }
    valor = valor + 1;
    return divisivel(valor);
}