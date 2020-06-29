const botaocarro = document.getElementById("car_change");

const botaoinfo = document.getElementById("info_change");

const botaovoltarCarro = document.getElementById("voltarCarro");
const botaovoltarPessoa = document.getElementById("voltarPessoa");

const titulo = document.getElementById("tituloMsg");


let botoes = document.getElementById("botoes");
let carroConfig = document.getElementById("carro");
let pessoaConfig = document.getElementById("pessoa");

botoes.style.display = "block";
carroConfig.style.display = "none";
pessoaConfig.style.display = "none";

botaoinfo.addEventListener("click", function () {
    console.log("me apertou");
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "block";
    botoes.style.display = "none";
    titulo.innerHTML = "Editar suas informações"
})

botaocarro.addEventListener("click", function () {
    console.log("me apertou");
    carroConfig.style.display = "block";
    pessoaConfig.style.display = "none";
    botoes.style.display = "none";
    titulo.innerHTML = "Editar informações da sua van"
})

botaovoltarCarro.addEventListener("click", function () {
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    botoes.style.display = "block";
    titulo.innerHTML = "Editar o perfil"
})
botaovoltarPessoa.addEventListener("click", function () {
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    botoes.style.display = "block";
    titulo.innerHTML = "Editar o perfil"
})

