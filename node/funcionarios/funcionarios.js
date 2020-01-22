const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const genero = funcionarios => funcionarios.genero == 'F'
    const pais = funcionarios => funcionarios.pais == 'China'
    const menorSalario = (resultado, atual) => {
        return resultado.salario < atual.salario ? resultado : atual
    }

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(genero).filter(pais).reduce(menorSalario))
})