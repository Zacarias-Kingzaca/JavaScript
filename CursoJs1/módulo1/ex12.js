let res = 1
let calc = ""
for (let i = 1; i <= 5; i++) {
    res *= i
    calc += i + (i < 5? " x ": "")  
}

console.log(calc, "=", res)