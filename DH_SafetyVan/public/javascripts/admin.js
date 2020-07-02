<script type="text/javascript">

const usuariosTab = document.querySelector("#usuarios-tab");
const usuariosContainer = document.querySelector("#usuarios .tbody");
const escolasTab = document.querySelector("#escolas-tab");
const escolasContainer = document.querySelector("#escolas .tbody");

fetch("http://localhost:3000/admin/users")
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(usuarios) {
        
        usuarios.forEach(usuario => {
            usuariosContainer.innerHTML += `                        
            <tr class="mb-5">
                <td class="ml-2">${usuario.name}</td>
                <td class="p-2">${usuario.roles_id == '2'? "Responsável": usuario.roles_id == '3'? "Motorista":"Administrador"}</td>
                <td class="ml-3"><a href="user/${usuario.id}"><button class="btn btn-warning">Visualizar</button></a>
                <a href="user/edit/${usuario.id}"><button class="btn btn-secondary">Editar</button></a>
                <a href="user/delete/${usuario.id}"><button class="btn btn-danger">Excluir</button></a></td>
            </tr>`;
        })
    });

escolasTab.addEventListener("click", async function() {
    
    $(escolasTab).tab('show');
    
    fetch("http://localhost:3000/admin/schools")
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(schools) {
        
        schools.forEach(school => {
            escolasContainer.innerHTML = `                        
            <tr class="mb-5">
                <td class="ml-2">${school.name}</td>
                <td class="ml-3 p-2"><a href="admin/school/${school.id}"><button class="btn btn-warning">Visualizar</button></a>
                <a href="admin/school/edit/${school.id}"><button class="btn btn-secondary">Editar</button></a>
                <a href="admin/school/delete/${school.id}"><button class="btn btn-danger">Excluir</button></a></td>
            </tr>
        `
            console.log(usuario.name);
        });
    });
})

</script>