const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo  = document.querySelector("#outCavalo");

const CAVALOS = ["Bala No Alvo", "Veloz", "Raio", "Twister", "Foguete", "Furia"];

const apostas = []; 

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const cavalo = Number(frm.inCavalo.value);
    const valor = Number(frm.inValor.value);

    apostas.push({cavalo, valor});

    let lista = 'Apostas Realizadas\n${"-".repeat(25)\n}';

    for(const aposta of apostas){
        lista += 'Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}';
        lista += ' - R$: ${aposta.valor.toFixed(2)}\n';
    }
    respLista.innerText = lista; 

    frm.reset();
    frm.inCavalo.focus();

});
const obterCavalo = (num) =>{

    const posicao = num - 1; 
    return CAVALOS[posicao];
}

