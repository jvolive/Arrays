// video 1
// dividindo arrays

// const nomes = [
//   "Joao",
//   "Rebeca",
//   "Matheus",
//   "Nicoly",
//   "Guto",
//   "Pedro",
//   "Marcos",
//   "Betania",
//   "Ivania",
//   "Marcelo",
//   "Jussara",
//   "Vanda",
//   "Carlos",
//   "Margarete",
//   "Flavio",
//   "Cristiane",
//   "Rafael",
//   "Paulo",
//   "Heinz",
//   "Barbosa",
// ];
// console.log("Tamanho da array: ", nomes.length); // ${} ele exibe o que esta dentro // ("Tamanho da array: ", nomes.length) -> ele vai exibir a quantidade da array

// const sala1 = nomes.slice(0, nomes.length / 2); // divide as listas
// const sala2 = nomes.slice(nomes.length / 2);

// console.log(`Alunos da sala 1: ${sala1}`);
// console.log(`Alunos da sala 2: ${sala2}`);

// video 2
// Atualizando elementos - Matheus e Nicoly saiu da sala e o Vitor entrou

// const listaDeChamada = ["Joao", "Rebeca", "Matheus", "Nicoly", "Guto", "Pedro"];

// // O splice acessa atraves da indicacao do indice (ind), remove e quantos apos o ind (rem) e por ultimo adiciona alguma coisa no lugar (add), mas nao é obrigadorio preencher

// //ind,rem,add
// // listaDeChamada.splice(2, 2, 'Vitor'); // aqui ele removeu o Matheus e a Nicoly para adicionar o vitor
// listaDeChamada.splice(2, 0, 'Vitor'); // aqui nao vai renovar ninguem e vai add o vitor antes do matheus

// console.log(
//   `Lista de chamada: ${listaDeChamada}`,
//   "/ Tamanho da lista",
//   listaDeChamada.length
// );

// video 3
// Juntando listas

// const salaDePython = ["Joao", "Rebeca", "Matheus"];
// const salaDeJs = ["Nicoly", "Guto", "Pedro"];
// const salaJuntas = salaDePython.concat(salaDeJs); // ele realiza a concatenação ou sejeeee junta as listas. Ele nao altera a array original por isso um const salaJuntas

// console.log(salaJuntas);

// video 4
// lista com 2 dimençoes -> nome dos alunos e as medias

const alunos = ["Joao", "Rebeca", "Matheus", "NIcoly"];
const medias = [9, 1000, 7, 10];

let listaDeNotasEAlunos = [alunos, medias];

console.log(
  `${listaDeNotasEAlunos[0][1]}, sua media é ${listaDeNotasEAlunos[1][1]}` // -> na primeira chamada da array, estou pegando a array alunos, e ele abre essa array pro indicie q eu quero q foi a Rebeca. Na segunda chamada eu puxei medias que eu selecionei o 1, e apos isso eu selecionei a nota atribuida na rebeca.
);
