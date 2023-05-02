function verificar(){
    let email = document.getElementById('cadastroEmail').Value;
    let telefone = document.getElementById('cadastroTelefone').Value;
    let nascimento = document.getElementById('cadastroNascimento').Value;
    let cpf = document.getElementById('cadastroCpf').Value;
    let cep = document.getElementById('cadastroCep').Value;
    let rua = document.getElementById('cadastroRua').Value;
    let bairro = document.getElementById('cadastroBairro').Value;
    let senha = document.getElementById('cadastroSenha').Value;  
    
    if (!email || !senha || !CEP || !numero || !bairro || !cidade || !telefone || !cpf || !nascimento)
alert("Campos de preenchimento obrigatório. Favor preencher")
}
