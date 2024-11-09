# Dados dos Atletas 🏅

Este projeto foi desenvolvido como parte do curso de programação, com o objetivo de criar uma aplicação que recebe informações de atletas e realiza cálculos para exibir diversos parâmetros, como categoria, IMC e média válida.

## 📋 Resumo do Projeto

A aplicação é capaz de receber dados de um atleta e calcular os seguintes parâmetros:
- **Categoria** (com base na idade do atleta)
- **Índice de Massa Corporal (IMC)**
- **Média válida** das notas (descartando a maior e menor nota)

## 🚀 Introdução

Após o sucesso do projeto anterior, os organizadores de uma competição solicitaram um novo software, desta vez utilizando **JavaScript**. Este programa foi criado para fornecer informações detalhadas sobre atletas, incluindo a categoria, IMC, média das notas e outras informações essenciais.

## 📌 Especificações do Projeto

### Estrutura da Classe `Atleta`

A aplicação utiliza uma classe chamada `Atleta` que contém os seguintes atributos e métodos:

#### 📊 Atributos:
- **nome**: Nome do atleta
- **idade**: Idade do atleta
- **peso**: Peso em kg
- **altura**: Altura em metros
- **notas**: Array de notas atribuídas ao atleta

#### 🛠️ Métodos:
- **calculaCategoria()**: Calcula a categoria do atleta com base na idade.
- **calculaIMC()**: Calcula o Índice de Massa Corporal (IMC).
- **calculaMediaValida()**: Calcula a média válida das notas, removendo a maior e menor nota.
- **obtemNomeAtleta()**: Retorna o nome do atleta.
- **obtemIdadeAtleta()**: Retorna a idade do atleta.
- **obtemPesoAtleta()**: Retorna o peso do atleta.
- **obtemNotasAtleta()**: Retorna as notas do atleta.
- **obtemCategoria()**: Retorna a categoria do atleta.
- **obtemIMC()**: Retorna o IMC do atleta.
- **obtemMediaValida()**: Retorna a média válida das notas.

## 📐 Regras de Cálculo

### 1. Categoria do Atleta
- **Infantil**: 9 a 11 anos
- **Juvenil**: 12 e 13 anos
- **Intermediário**: 14 e 15 anos
- **Adulto**: 16 a 30 anos
- **Sem categoria**: Outras idades

### 2. Cálculo do IMC
- **Fórmula**: `IMC = peso / (altura * altura)`

### 3. Cálculo da Média Válida
- **Método**: Descartar a maior e menor nota, e calcular a média das notas restantes.

## 📥 Exemplo de Uso

### Entrada:
```javascript
// Declaração do atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
```

### Saída Esperada:

Nome: Cesar Abascal  
Idade: 30  
Peso: 80  
Altura: 1.7  
Notas: 10, 9.34, 8.42, 10, 7.88  
Categoria: Adulto  
IMC: 27.68  
Média válida: 9.23  
