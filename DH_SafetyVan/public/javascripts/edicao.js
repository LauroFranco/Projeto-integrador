const botaocarro = document.getElementById("car_change");

const botaoinfo = document.getElementById("info_change");

const botaoTelefone = document.getElementById("telefone_change");

const botaoEmail = document.getElementById("email_change");



const botaovoltarCarro = document.getElementById("voltarCarro");
const botaovoltarPessoa = document.getElementById("voltarPessoa");
const botaovoltarTelefone = document.getElementById("voltarTelefone");
const botaovoltarEmail = document.getElementById("voltarEmail");

const titulo = document.getElementById("tituloMsg");


let botoes = document.getElementById("botoes");
let carroConfig = document.getElementById("carro");
let pessoaConfig = document.getElementById("pessoa");
let telefoneConfig = document.getElementById("telefoneConfig");
let emailConfig = document.getElementById("emailConfig");

carroConfig.style.display = "none";
pessoaConfig.style.display = "none";
emailConfig.style.display = "none";
telefoneConfig.style.display = "none";
botoes.style.display = "block";
titulo.innerHTML = "Editar o perfil"

botaoinfo.addEventListener("click", function () {
    console.log("me apertou");
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "block";
    emailConfig.style.display = "none";
    telefoneConfig.style.display = "none";
    botoes.style.display = "none";
    titulo.innerHTML = "Editar suas informações"
})

botaocarro.addEventListener("click", function () {
    console.log("me apertou");
    carroConfig.style.display = "block";
    pessoaConfig.style.display = "none";
    emailConfig.style.display = "none";
    telefoneConfig.style.display = "none";
    botoes.style.display = "none";
    titulo.innerHTML = "Editar informações da sua van"
})

botaovoltarCarro.addEventListener("click", function () {
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    emailConfig.style.display = "none";
    telefoneConfig.style.display = "none";
    botoes.style.display = "block";
    titulo.innerHTML = "Editar o perfil"
})
botaovoltarPessoa.addEventListener("click", function () {
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    emailConfig.style.display = "none";
    telefoneConfig.style.display = "none";
    botoes.style.display = "block";
    titulo.innerHTML = "Editar o perfil"
})
botaovoltarTelefone.addEventListener("click", function () {
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    emailConfig.style.display = "none";
    telefoneConfig.style.display = "none";
    botoes.style.display = "block";
    titulo.innerHTML = "Editar o perfil"
})
botaovoltarEmail.addEventListener("click", function () {
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    emailConfig.style.display = "none";
    telefoneConfig.style.display = "none";
    botoes.style.display = "block";
    titulo.innerHTML = "Editar o perfil"
})

botaoEmail.addEventListener("click", function () {
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    emailConfig.style.display = "block";
    telefoneConfig.style.display = "none";
    botoes.style.display = "none";
    titulo.innerHTML = "Editar seu email"
})
botaoTelefone.addEventListener("click", function () {
    console.log("me apertou");
    carroConfig.style.display = "none";
    pessoaConfig.style.display = "none";
    emailConfig.style.display = "none";
    telefoneConfig.style.display = "block";
    botoes.style.display = "none";
    titulo.innerHTML = "Editar seu telefone"
})