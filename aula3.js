// video 1
// localizando dentro da lista

// const alunos = ["Joao", "Rebeca", "Matheus", "Nicoly"];
// const medias = [9, 1000, 7, 10];

// let listaDeNotasEAlunos = [alunos, medias];

// const exibeNomeNota = (nomeDoAluno) => {
//   if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
//     // o .includes ele faz a busca no arrays retornando true or false
//     let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno); // indexOf  ele  faz a busca e retorna um numero da array (o indice) que no caso foi 0 e mostrou a nota de joao
//     return (
//       listaDeNotasEAlunos[0][indice] +
//       ",sua media é " +
//       listaDeNotasEAlunos[1][indice]
//     );
//   } else {
//     return "Aluno nao esta cadastrado";
//   }
// };

// console.log(exibeNomeNota("Rebeca"));

// video 2
// estrutura com for

// const numeros = [100, 200, 300, 400, 500, 600];

// // O for é usado como laço de repidicao. Ele vai executar enquanto a condicao for true, depois disso ele sai.  sempre se atentar nos loops infinitos.
// for (let i = 0; i < numeros.length; i++) {
//   console.log(i, numeros[i]);
// }

// video 3
//media for

// const notas = [10, 6.5, 8, 7.5];

// let somaDeNotas = 0;

// // apos o ; é a condicao de quando parar o codigo
// for (let i = 0; i < notas.length; i++) {
//   somaDeNotas += notas[i]; // soma o valor da direita com o valor que esta na esquerda
// }

// let media = somaDeNotas / notas.length;

// console.log(media);

// video 4
// media com ForEach

// const notas = [10, 6.5, 8, 7.5];

// let somaDeNotas = 0;

// notas.forEach((nota) => {
//   // forEach siginifica para cada. Ele é chamado de callback- ela serve para chamar outra funçao.
//   somaDeNotas += nota;
// });

// let media = somaDeNotas / notas.length;

// console.log(media);
