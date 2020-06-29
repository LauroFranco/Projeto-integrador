const botaocarro = document.getElementById("car_change");

const botaoinfo = document.getElementById("info_change");

const botaovoltar = document.getElementById("voltar1");
const botaovoltar2 = document.getElementById("voltar2");

const titulo = document.getElementById("tituloMsg");


let botoes = document.getElementById("botoes");
let carroConfig = document.getElementById("carro");
let pessoaConfig = document.getElementById("pessoa");

botoes.style.display="block";
carroConfig.style.display="none";
pessoaConfig.style.display="none";

botaoinfo.addEventListener("click", function () {
    console.log("me apertou");
    carroConfig.style.display="none";
    pessoaConfig.style.display="block";
    botoes.style.display="none";
    titulo.innerHTML = "editar suas informações"
})

botaocarro.addEventListener("click", function () {
    console.log("me apertou");
    carroConfig.style.display="block";
    pessoaConfig.style.display="none";
    botoes.style.display="none";
    titulo.innerHTML = "editar informações da sua van"
})

botaovoltar.addEventListener("click", function () {
    carroConfig.style.display="none";
    pessoaConfig.style.display="none";
    botoes.style.display="block";
    titulo.innerHTML = "editar o perfil"
})
botaovoltar2.addEventListener("click", function () {
    carroConfig.style.display="none";
    pessoaConfig.style.display="none";
    botoes.style.display="block";
    titulo.innerHTML = "editar o perfil"
})


