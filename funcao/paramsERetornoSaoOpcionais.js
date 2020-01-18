function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

console.log(area(4, 2))
console.log(area(6, 4))
console.log(area(2))
console.log(area())
console.log(area(1, 2, 3))