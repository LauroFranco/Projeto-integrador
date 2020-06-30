
<script type="text/javascript">

//bucar elemento
let form = document.getElementById('form-cadastro');
let nome = document.getElementById('name');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let responsavel = document.getElementById('selecResp');
let motorista = document.getElementById('selecMotorista');

let errorList = document.querySelector('#error-list');
let errorlistUL = document.querySelector('#error-list ul')


form.addEventListener("submit",function(ev){
    

    errorlistUL.innerHTML = "";

    if(nome.value === ""){
        errorlistUL.innerHTML += "<li> Preencha o campo <b>Nome</b></li>"
    }
    if(email.value === ""){
        errorlistUL.innerHTML += "<li> Preencha o campo <b>Email</b></li>"
    }
    if(senha.value === ""){
        errorlistUL.innerHTML +="<li> Preencha o campo <b>Senha</b></li>"
    }
    
    
    if(errorlistUL.querySelectorAll('li').length > 0){

        ev.preventDefault();
        errorList.hidden = '';
        
    }
    
    
    
})
</script>







