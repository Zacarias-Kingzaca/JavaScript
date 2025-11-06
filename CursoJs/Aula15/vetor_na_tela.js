let valores = [1, 3, 5, 8, 8]

/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let p in valores) {
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}