let num = [10, 2, 3]
console.log(`O vetor  tem ${num.length} posições`)
console.log(num)
num.sort()
soma =  0

for (let c = 0; c < num.length; c++) {
    console.log(num[c])
    soma += num[c]
}

console.log(soma)