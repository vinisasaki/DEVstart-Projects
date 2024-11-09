class Pontuacao{
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }

    ordenaNotas(){
        return this.notas.sort((a, b) => a - b);
    }

    obterMedia(){
        let notasComputadas = this.ordenaNotas().slice(1,4);

        let soma = notasComputadas.reduce((acumulador, nota) => acumulador + nota, 0);
        
        return soma / notasComputadas.length;

    }
} 


let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

let pontuacoes = atletas.map(atleta => new Pontuacao(atleta.nome, atleta.notas));

pontuacoes.forEach(atleta => {
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.ordenaNotas()}`);
    console.log(`Média Válida: ${atleta.obterMedia()}`);
    console.log("\n");
});

