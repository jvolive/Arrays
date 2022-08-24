// video 1
// Revisando callback

// const nomes = ["Joao", "Rebeca", "Matheus", "Nicoly"];

// nomes.forEach(ImprimeNomes); // o .forEach só funciona com funçoes, nao aceitando strings ou valores. a function pode ser dentro do parametro ou declarada pra fora como foi o exemplo agora.

// function ImprimeNomes(nome) {
//   console.log(nome);
// }

// const notas = [10, 6.5, 8, 7.5];

// let somaDeNotas = 0;

// notas.forEach((nota) => {  // forEach siginifica para cada. Ele é chamado de callback- ela serve para chamar outra funçao.  FUNCTION dentro do ForEach
//   somaDeNotas += nota;
// });

// let media = somaDeNotas / notas.length;

// console.log(media);

// //video 2
// // ponto extra em array

// const notas = [10, 9, 8, 7, 6];
// // .map ele faz o retorno na array, diferente do forEach que só executa oq esta dentro dele e nao retorna. o .map é bom para atualizar uma array
// const notasAtualizadas = notas.map((nota) => (nota == 10 ? nota : ++nota)); // aqui oq foi feito: ele esta fazendo um if com ?. se a condiçao for verdadeira ele vai retorna a nota, caso seja falso ele iria adicionar mais um.

// console.log(notasAtualizadas);

// video 3
// alterar strings na array

// let nomes = ["Joao VICTOR", "Rebeca fernandes", "MATHEUS jorge"];

// const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());

// console.log(nomesAtualizados);
 
// Alternativa correta! Certo! Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.