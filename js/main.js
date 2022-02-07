//1ª aula
var nome = "João Nzuzi";
var idade = 29;
var idade2 = 29;
// alert(nome +" tem "+ idade+ " anos");
console.log(nome);
console.log(idade + idade2);
console.log(nome.toLowerCase);
console.log(nome.toUpperCase);

//2ª aula
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

//3ª aula
var idade3 = prompt("Qual a sua idade?");

if(idade3 >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
}

var count = 0;
while(count <= 5){
    console.log(count);
    count ++;
}

var conta;
for(conta = 0; conta <= 5; conta++){
    console.log(conta);
}

var data = new Date();
console.log(data);
console.log(data.getDate);
console.log(data.getMonth + 1);

function soma(numeroUm, numeroDois){
    return numeroUm + numeroDois;
}

var numeroUm = prompt("Informa o primeiro número");
var numeroDois = prompt("Informa o segundo número");

console.log(soma(numeroUm, numeroDois));

function validaIdade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade))