# Notas dos Atletas 🏅

## Resumo do Projeto 📋

Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média válida e apresentar o resultado ao usuário.

## Introdução 📝

Em uma competição de ginástica artística, vários atletas realizam apresentações para uma banca composta por cinco jurados. Cada jurado avalia um critério específico, como:

- Tempo de duração da apresentação
- Originalidade da coreografia
- Postura do atleta
- Dificuldade das acrobacias
- Sincronismo

### Regras de Avaliação:

- Cada jurado pode fornecer uma nota de **1** a **10**.
- A média é calculada com base nas **três notas do meio**, desconsiderando a maior e menor nota.

O organizador da competição contratou sua equipe para criar uma aplicação capaz de receber o nome e notas dos atletas e realizar o devido cálculo. Você foi encarregado de criar a solução utilizando a linguagem **JavaScript**.

## Especificações ⚙️

Você deverá criar uma função que:

1. Recebe uma **matriz de objetos** contendo o **nome do atleta** e as **cinco notas atribuídas**.
2. Calcula a média das notas, **ignorando a maior e menor nota**.
3. Exibe o **nome do atleta**, as **notas obtidas** e a **média válida** calculada.

### Estrutura de Entrada:

```javascript
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
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
```

### Saída Esperada:

Atleta: Cesar Abascal  
Notas Obtidas: 10, 10, 7.88, 8.42, 9.34  
Média Válida: 9.25  
  
Atleta: Fernando Puntel  
Notas Obtidas: 8, 10, 10, 7, 9.33  
Média Válida: 9.11  
  
Atleta: Daiane Jelinsky  
Notas Obtidas: 7, 10, 9.5, 9.5, 8  
Média Válida: 9.00  
  
Atleta: Bruno Castro  
Notas Obtidas: 10, 10, 10, 9, 9.5  
Média Válida: 9.83  
  