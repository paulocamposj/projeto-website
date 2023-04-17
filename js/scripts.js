let validaEmail = () => {
    let email = document.getElementById("emailInput").value;
    let emailValido = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

    if(!emailValido){
        document.getElementById("msgEmail").innerHTML = 'Email inválido';
    }else{
        document.getElementById("msgEmail").innerHTML = '';
    }
    return emailValido;
}

let validaTelefone = () => {
    let telefone = document.getElementById("telefoneInput").value; 
    let telefoneValido =  /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(telefone);

    if(!telefoneValido){
        document.getElementById("msgTel").innerHTML = 'Telefone inválido';
    }else{
        document.getElementById("msgTel").innerHTML = '';
    }
    return telefoneValido;
}

let validaNome = () => {
    let nomeValido = document.getElementById("nomeInput").value != ''; 

    if(!nomeValido){
        document.getElementById("msgNome").innerHTML = 'Preencha o nome';
    }else{
        document.getElementById("msgNome").innerHTML = '';
    }

}

let validaTermo = () => {
    var termosAceitos = document.getElementById("termosInput").checked;
    
    if(!termosAceitos){
        document.getElementById("msgTermo").innerHTML = 'Os termos devem ser aceitos para continuar com o cadastro';
    }else{
        document.getElementById("msgTermo").innerHTML = '';
    }

}

let confirmaCadastro = (telefoneValido, emailValido) => {
    if(telefoneValido && emailValido){
        alert("Cadastreido meu asmuigo!");
    }
}

function validaCampos(){
    
    let telefoneValido = validaTelefone();   
    let emailValido = validaEmail();
    validaNome();
    validaTermo();
    confirmaCadastro(telefoneValido, emailValido);
}