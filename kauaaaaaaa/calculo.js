//calculadora de idade 
/*console.log("esta funcionando!");

let anoDeNascimento = window.prompt("em que ano voce nasceu?");
console.log(anoDeNascimento);

let resultado = 2023 - anoDeNascimento;
console.log (resultado);
alert("quem nasceu em " + anoDeNascimento + " vai fazer " + resultado + " anos em 2023 ");
*/
//------------------------------------------------------------------------//
//calculadora de nota
//perguntar as notas e mostrar o resultado via função alert

let nota1 = window.prompt("Nota do primeiro trimestre:");
console.log(nota1);
let not2 = parseFloat(window.prompt("nota segundo trimestre:"));
console.log(nota2);
let not3=parseFloat(window.prompt("nota terceiro trimestre:"));
console.log(nota3);
let resultado = nota1 + nota2 + nota3;
alert("nota dos trimestres:"+resultado+"");