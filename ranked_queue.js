let vitorias = 500
let derrotas = 410
let saldoVitorias = vitorias - derrotas
let ranks = ["ferro", "bronze", "prata", "ouro", "diamante", "lendário", "imortal"];

if (saldoVitorias <= 10) {
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitorias, e está no nível de " + ranks[0])
}
else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitorias, e está no nível de " + ranks[1])
}
else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitorias, e está no nível de " + ranks[2])
}
else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitorias, e está no nível de " + ranks[3])
}
else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitorias, e está no nível de " + ranks[4])
}
else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitorias, e está no nível de " + ranks[5])
}
else {
    console.log("O Herói tem de saldo de " + saldoVitorias + " vitorias, e está no nível de " + ranks[6])
}