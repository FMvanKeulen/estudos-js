// não aceita repetição/não indexada
const times = new Set()
times.add('Palmeiras')
times.add('Botafogo')
times.add('Grêmio').add('Palmeiras')

console.log(times)
console.log(times.has('Botafogo'))
times.delete('Botafogo')
console.log(times)

const nomes = ['Lucas', 'Raquel', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)