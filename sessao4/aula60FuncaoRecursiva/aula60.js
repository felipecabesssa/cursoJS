// Função recursiva se chama repetidamente ex.:

function recursiva(max){
    console.log(max);
    if (max >= 10) return; //para quando atingir essa condição
    max++;
    recursiva(max);
}

recursiva(0);