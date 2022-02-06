var nome = "João Nzuzi";
var idade = 29;
var idade2 = 29;
alert(nome +" tem "+ idade+ " anos");
console.log(nome);
console.log(idade + idade2);
console.log(nome.toLowerCase);
console.log(nome.toUpperCase);

var lista = ["Maça", "Pêra", "Laranja"];
lista.push("Uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var dicionarioFruto = {nome: "Maça", cor: "Vermelha"};
console.log(dicionarioFruto);
console.log(dicionarioFruto.nome);

var dicionarioFrutos = [{nome: "Maça", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"}];
console.log(dicionarioFrutos);
console.log(dicionarioFrutos[1].nome);