let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*solução que eu cheguei em 2 minutos
mas não precisava criar mais 3 váriaveis, 
só uma pra preservar o valor de varA ja resolveria*/

/*
varAB = varB;
varBC = varC;
varCA = varA;

varC = varCA;
varA = varAB;
varB = varBC;


/*solução moderna que o professor ira explicar melhor o 
funcionamento mais a frente*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);