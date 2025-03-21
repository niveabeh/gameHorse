const frm = document.querySelector("form")
const outResult = document.querySelector("pre")
const outHorse = document.querySelector("#outCavalo")

const horse = ["Shazan", "Bala no Alvo", "Botz", "Foguete", "Brilho do Sol", "Scorpion"]
const apostas = [];

const lerListHorse = (horse) =>{
    let list = "";
    for (let i = 0; i < horse.length; i++) {
        list += `${i + 1}- ${horse[i]} || `; 
    }
    return list; 
}
outHorse.innerText = lerListHorse(horse)

frm.addEventListener("submit", (e) => {

    e.preventDefault();
    const nCavalo = Number(frm.inCavalo.value);
    const nAposta = Number(frm.inValor.value);
    
    apostas.push({nCavalo, nAposta});

    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`
    for (const aposta of apostas){
        lista += `Nº ${aposta.nCavalo} ${obterCavalo(aposta.nCavalo)}`
        lista +=` - R$: ${aposta.nAposta.toFixed(2)}\n`
    }
    outResult.innerText = lista
    
    frm.reset()
    frm.inCavalo.focus()
})
const obterCavalo = (num) =>{
    const posicao = num - 1
    return horse[posicao] 
}
