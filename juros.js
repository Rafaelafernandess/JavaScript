import entrada from 'readline-sync';

const taxa1 = 10;
const taxa2 = 5

console.log("Aplicação de juros:\n");
let valor = entrada.question("Informe o valor devido:R$");
if(valor > 0)
{
    let dias_atraso = entrada.question("Informe quantos dias se passaram desde o vencimento do boleto:");
    if (dias_atraso > 15) 
    {
        let juros = (valor/100)*taxa1;
        let total = Number(valor) + juros;

        console.log("\nValor original da divida: R$"+valor);
        console.log("Dias atrasados:"+dias_atraso);
        console.log("Taxa de juros: "+taxa1+"%");
        console.log("Valor total com juros: R$"+total);
    } 
    else if((dias_atraso > 0) && (dias_atraso <= 15))
    {
        let juros = (valor/100)*taxa2;
        let total = Number(valor) + juros;
    
        console.log("\nValor original da divida: R$"+valor);
        console.log("Dias atrasados:"+dias_atraso);
        console.log("Taxa de juros: "+taxa2+"%");
        console.log("Valor total com juros: R$"+total);
    }
    else
    {
        console.log("Você está em dia!");
    }
}
else
{
    console.log("O valor da divida deve ser maior que zero!");
}