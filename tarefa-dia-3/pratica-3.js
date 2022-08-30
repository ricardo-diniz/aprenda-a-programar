// dado n, exibir valores impares até n

let n=20
let i=1


while (i<=n)    {
    let impar = i % 2 != 0
    if (impar!=0) {
        console.log(i)
    }
    i++

}