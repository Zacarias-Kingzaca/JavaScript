let n1 = 12
let n2 = 11
let n3 = 11
let maior, menor, meio

if (n1 >= n2 && n1 >= n3 ) {
   maior = n1
}else if (n2 >= n1 && n2 >= n3) {
    maior = n2
}else {
    maior = n3
}
if (n1 <= n2 && n1 <= n3 ) {
   menor = n1
}else if (n2 <= n1 && n2 <= n3) {
    menor = n2
}else {
    menor = n3
}

if (n1 !== maior && n1 !== menor){
    meio = n1
}else if (n2 !== maior && n2 !== menor) {
    meio = n2
}else {
    meio = n3
}

console.log(maior)
console.log(meio)
console.log(menor)