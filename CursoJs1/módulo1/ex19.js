let frase = "       estA frAse pReciSa Ser corrigiDa!!!     "
frase = frase.trim().replace("!!!", ".").toLowerCase()
let resultado = frase.charAt(0).toUpperCase() + frase.slice(1)
console.log(resultado)