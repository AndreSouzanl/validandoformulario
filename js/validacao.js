
const dataDeNascimento = document.querySelector('#nascimento');

dataDeNascimento.addEventListener('blur', (evento)=>{
    
    validaDataNascimento(evento.target);

    console.log(dataDeNascimento);
})


function validaDataNascimento(input) {
    
    const dataRecebida = new Date(input.value);

    let mensagem = ''

    if(!maiorQue18(dataRecebida)){
      mensagem = 'Você deve ser maior de 18 anos para se Cadastrar';
    }

    input.setCustomValidity(mensagem);
}

function maiorQue18(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual

}