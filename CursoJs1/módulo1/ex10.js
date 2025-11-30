console.log("somar apenas números multiplos de 3...")
let soma = 0
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      soma += i
    }
}
console.log(soma)