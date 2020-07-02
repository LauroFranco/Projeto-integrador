<script type="text/javascript">

//busca dos elementos

let form = document.getElementById("form");

let nome = document.getElementById("name");

let alergic = document.getElementById("alergic");

let data = document.getElementById("birthdate");

let errorList = document.querySelector('#error-list');
let errorlistUL = document.querySelector('#error-list ul')

form.addEventListener("submit",function(ev){
    
    errorlistUL.innerHTML = "";

    if(nome.value === ""){
        errorlistUL.innerHTML += "<li> Preencha o campo <b>Nome da Criança</b></li>"
    }
    
    if(data.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Data de Nascimento</b></li>"
    }
    if(alergic.value === ""){
        errorlistUL.innerHTML +="<li> Preencha orientações medicas, caso não tenha informe <b>Não</b></li>"
    }
    
    if(errorlistUL.querySelectorAll('li').length > 0){

        ev.preventDefault();
        errorList.hidden = '';
        
    } 
})
</script>