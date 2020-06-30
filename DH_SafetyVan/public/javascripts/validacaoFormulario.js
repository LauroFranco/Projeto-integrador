

 //busca o elemento
function selectId(id){
    return document.getElementById(id);
}
//Verifica espaços vazio
function empty(input){
    return input.value.trim()==="";
}

function errorMassage(message){
    errorListUl.innerHTML+= "<li>" + message +"</li>"
}

let formulario = selectId("form");
let nome = selectId("name");
let cpf = selectId("cpf");
let date = selectId("birthdate ");
let fone = selectId("fone");
let cep = selectId("cep");
let endereco = selectId("end");
let numCasa = selectId("numCasa");
let bairro = selectId("bairro");
let cidade = selectId("cidade");
let estado = selectId("estado");
let cnh = selectId("cnh");
let crm = selectId("crm");
let marca = selectId("marca");
let modelo = selectId("modelo");
let fabricacao = selectId("anoFab");
let placa = selectId("placa");
let crmc = selectId("crmc");

let errorListUl= document.querySelector('#error-list ul');
let errorList= selectId('error-list');

formulario.addEventListener("submit", function(ev){

    errorListUl.innerHTML='';

    if(empty(nome)){
        errorMassage("Campo <b>nome</b> não preechido")
    }

    if(empty(cpf)){
        errorMassage("Campo <b>cpf</b> não preechido")
    }

    if(empty(date)){
        errorMassage("Campo <b>Data de nascimento</b> não preechido")
    }

    if(empty(fone)){
        errorMassage("Campo <b>Telefone</b> não preechido")
    }
    if(empty(cep)){
        errorMassage("Campo <b>CEP</b> não preechido")
    }

    if(empty(endereco)){
        errorMassage("Campo <b>Endereço</b> não preechido")
    }
    if(empty(numCasa)){
        errorMassage("Campo <b>Número</b> não preechido")
    }

    if(empty(bairro)){
        errorMassage("Campo <b>Bairro</b> não preechido")
    }
    if(empty(cidade)){
        errorMassage("Campo <b>Cidade</b> não preechido")
    }
    if(empty(estado)){
        errorMassage("Campo <b>Estado</b> não preechido")
    }
    if(empty(cnh)){
        errorMassage("Campo <b>CNH</b> não preechido")
    }
    if(empty(crm)){
        errorMassage("Campo <b>CRM</b> não preechido")
    }

    if(empty(marca)){
        errorMassage("Campo <b>Marca</b> não preechido")
    }
    if(empty(modelo)){
        errorMassage("Campo <b>Modelo</b> não preechido")
    }
    if(empty(fabricacao)){
        errorMassage("Campo <b>Fabricação</b> não preechido")
    }
    if(empty(placa)){
        errorMassage("Campo <b>Placa</b> não preechido")
    }
    if(empty(crmc)){
        errorMassage("Campo <b>CRMC</b> não preechido")
    }

    if(errorListUl.querySelectorAll('li').length > 0){
        ev.preventDefault();
        errorList.hidden = '';
        
    }
})





