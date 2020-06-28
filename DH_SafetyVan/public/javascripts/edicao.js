const botaocarro = document.getElementById("car_change");

const botaoinfo = document.getElementById("info_change");

let div = document.getElementById("botoes");

botaocarro.addEventListener("click", function () {
    div.innerHTML = `    
    <form action="/editar/carro" method="POST">
<h3>Dados do Veículo</h3>

<div class="form-row">
    <div class="form-group col-md-4">
        <label for="veiculo">Marca:*</label>
        <input type="text" class="form-control" name="marca" placeholder="Marca">
    </div>
    <div class="form-group col-md-3">
        <label for="veiculo">Modelo:*</label>
        <input type="text" class="form-control" name="modelo" placeholder="Modelo">
    </div>
    <div class="form-group col-md-4">
        <label for="ano">Ano  *</label>
        <input type="text" class="form-control" name="ano" placeholder="Ano de fabricação">
    </div>
</div>

<div class="form-row">
    <div class="form-group col-md-4">
        <label for="placa">Placa:*</label>
        <input type="text" class="form-control" name="placa" placeholder="Placa do veículo">
    </div>    
    <div class="form-group col-md-8">
        <label for="crm">CRMC: *</label>
        <input type="text" class="form-control" name="crmc" placeholder="Número CRMC">
    </div>
    <br>
    <div class="form-group">
    <button type="submit" class="btn btn-warning">Alterar</button>
    <a href="/user"><button class="btn btn-warning">Voltar</button></a>
    </div>
</div>
</form>
    `
})


botaoinfo.addEventListener("click", function () {
    div.innerHTML = `    
    <form action='/editar/sobre' method='POST'> 
<div class="form-group">
    <label for="sobre">Sobre_mim</label>
</div>
<textarea id="sobre" name="sobre"
rows="5" cols="33">
conte um pouco sobre voce
</textarea>
<br>
    <div class="form-group">
    <button type="submit" class="btn btn-warning">Alterar</button>
    </div>
    </form>
    `
})