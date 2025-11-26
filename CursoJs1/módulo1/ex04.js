let n1 = 6
let n2 = 2
let operador = 4

switch (operador) {
    case 1:
        console.log(`${n1} + ${n2} = ${n1 + n2}`);
        break
    case 2:
        console.log(`${n1} x ${n2} = ${n1 * n2}`);
        break
    case 3:
        console.log(`${n1} / ${n2} = ${n1 / n2}`);
        break
    case 4:
        console.log(`${n1} - ${n2} = ${n1 - n2}`);
        break
    default:
        console.log("Opção inválida...")
        
}