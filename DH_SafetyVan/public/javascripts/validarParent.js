<script type="text/javascript">
//busca dos elementos

let form = document.getElementById("form");

let nome = document.getElementById("name");
let cpf = document.getElementById("cpf");
let data = document.getElementById("birthdate").value;
let fone = document.getElementById("fone");
let cep = document.getElementById("cep");
let endereco = document.getElementById("end");
let numCasa = document.getElementById("numCasa");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("uf");




let errorList = document.querySelector('#error-list');
let errorlistUL = document.querySelector('#error-list ul')


form.addEventListener("submit",function(ev){
    

    errorlistUL.innerHTML = "";

    if(nome.value === ""){
        errorlistUL.innerHTML += "<li> Preencha o campo <b>Nome</b></li>"
    }
    if(cpf.value === ""){
        errorlistUL.innerHTML += "<li> Preencha o campo <b>CPF</b></li>"
    }
    if(data.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Data de Nascimento</b></li>"
    }
    if(fone.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Telefone</b></li>"
    }
    if(cep.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>CEP</b></li>"
    }
    if(endereco.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Endereço</b></li>"
    }
    if(numCasa.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Número</b></li>"
    }
    if(bairro.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Bairro</b></li>"
    }
    if(cidade.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Cidade</b></li>"
    }
    if(estado.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Estado</b></li>"
    }
    
    
    
    if(errorlistUL.querySelectorAll('li').length > 0){

        ev.preventDefault();
        errorList.hidden = '';
        
    }
    
    
    
})
</script>
