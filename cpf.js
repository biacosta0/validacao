//VALIDAÇÃO DE CPF DIRETO NO JAVASCPRIT

//adicionando escutador ao formulario
document.getElementById('cpfForm').addEventListerner('submit', function(event){
  event.preventDefault();

  const cpf = document.getElementById('cpf').Value;
  const msg = document.getElementById('message');

  if(validarCPF(cpf)){
    msg.textContent = "O CPF é válido!";
    msg.style.color = 'green';
  }else{
    msg.textContent = "O CPF é inválido!";
    msg.style.color = 'red';
  }

}
);

function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, ''); //Remove caracteres não numéricos

   // Estrutura de decisão para verificar quantidade de numeros de digitos e se todos os digitos são iguais
   if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
      return false;
   }

   let soma= 0;
   let resto;
  
   for(let i=1;i <= 9;i++){
      soma += parseInt(cpf.substring(i-1, i)) * (11 - 1);
   }

}

  