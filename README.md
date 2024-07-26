# validacao

# CPF HTML
1-Formulário (<form>):

&lt;form action="" id="cpfForm"&gt;: Aqui temos um formulário HTML. O atributo action="" significa que o formulário será submetido para a mesma página (ou URL atual), pois está vazio. O id="cpfForm" é um identificador único para o formulário, que pode ser usado para referenciar este formulário no JavaScript.

2-Label (<label>):

&lt;label for=""&gt;CPF:&lt;label&gt;: Este é um rótulo para o campo de entrada de CPF. O atributo for="" deveria ter um valor que correspondesse ao id do elemento ao qual o rótulo está associado para melhor acessibilidade. Neste caso, está vazio, o que não é ideal.

3-Campo de Entrada (<input>):

&lt;input type="text" id="cpf" name="cpf" maxlength="14"&gt;: Este é o campo de entrada para o CPF.
type="text" indica que é um campo de texto.
id="cpf" é o identificador único deste campo, o que permite acessá-lo facilmente no JavaScript usando document.getElementById('cpf').
name="cpf" é o nome do campo que será enviado quando o formulário for submetido.
maxlength="14" define o número máximo de caracteres permitidos neste campo, que é comumente usado para limitar a quantidade de dígitos para um CPF no formato brasileiro.

4-Botão de Envio (&lt;button&gt;):

&lt;button type="submit"&gt;validar&lt;button&lt;: Este é um botão de envio dentro do formulário.
type="submit" indica que este botão será usado para enviar o formulário quando clicado.
O texto dentro do botão é "validar", que é o rótulo exibido para o botão.

5-Parágrafo (&lt;p&gt;):

&lt;p id="message"&gt;&lt;p&gt;: Este é um elemento &lt;p&gt; usado para exibir mensagens ou resultados depois que o formulário for validado no JavaScript. O id="message" é um identificador que pode ser usado para atualizar o conteúdo deste elemento com mensagens dinâmicas do JavaScript.

6-Script :

&lt;script src='cpf.js'&gt;&lt;script&gt;: Aqui estamos incluindo um arquivo JavaScript externo chamado cpf.js. Este arquivo contém o código JavaScript necessário para validar o CPF e manipular o comportamento do formulário após a submissão.


# Validador de CPF em JavaScript
1- Evento de Submissão do Formulário:
document.getElementById('cpfForm'): Isso seleciona o formulário com o ID cpfForm.
.addEventListener('submit', function(event) { ... }): Define um ouvinte de eventos para quando o formulário for submetido.
event.preventDefault();: Impede o comportamento padrão de submissão do formulário, que é recarregar a página.

2-validação do cpf:
cpf.replace(/[^\d]+/g, ''): Remove todos os caracteres não numéricos do CPF, deixando apenas os dígitos.
if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)): Verifica se o CPF não tem exatamente 11 dígitos ou se todos os dígitos são iguais. Se uma dessas condições for verdadeira, o CPF é considerado inválido.

# Função checar email
1-Verificação do email:document.forms[0].email.value == "": Verifica se o campo de e-mail está vazio.
document.forms[0].email.value.indexOf('@') == -1: Verifica se o e-mail contém o caractere '@'.
document.forms[0].email.value.indexOf('.') == -1: Verifica se o e-mail contém o caractere '.' (ponto).
Se qualquer uma dessas condições for verdadeira, significa que o e-mail não é válido:

Mostra um alerta com a mensagem "Por favor, informar um E-mail válido".
Retorna false, o que impede o envio do formulário.

2-Email válido:
Mostra um alerta com a mensagem "E-mail informado".
Mostra outro alerta com a mensagem "E-mail informado com sucesso".
Atualiza o conteúdo do elemento HTML com o ID email para mostrar o e-mail digitado (document.forms[0].email.value).

# Index Html
 
 1-Formulário (&lt;form&gt;):

&lt;form action=""&gt;: Este é um formulário HTML. O atributo action="" significa que o formulário será submetido para a mesma página (ou URL atual), pois está vazio. Isso é comum quando se deseja manipular a submissão do formulário com JavaScript.

2-Label :

&lt;label for=""&gt;E-mail:&lt;label&gt;: Este é um rótulo para o campo de entrada de email. O atributo for="" deveria ter um valor que correspondesse ao id do elemento ao qual o rótulo está associado para melhor acessibilidade. Neste caso, está vazio, o que não é ideal, mas não afeta o funcionamento básico do formulário.

3-Campo de Entrada (&lt;input&gt;):

&lt;input type="text" name="email" onblur="checaremail()"&gt;: Este é o campo de entrada para o email.
type="text" indica que é um campo de texto.
name="email" é o nome do campo que será enviado quando o formulário for submetido.
onblur="checaremail()" é um evento JavaScript que ocorre quando o usuário sai do campo de entrada (quando o campo perde o foco). Ele chama a função checaremail() para validar o email inserido pelo usuário.

4-Botão de Envio (&lt;input&gt;):

&lt;input type="submit" value="ENVIAR"&gt;: Este é um botão de envio dentro do formulário.
type="submit" indica que este é um botão usado para enviar o formulário quando clicado.
value="ENVIAR" define o texto exibido no botão como "ENVIAR".

5-Div :

&lt;div id="email"&gt;&lt;div&gt;: Este é um elemento &lt;div&gt; vazio com o ID email. Ele será usado para exibir o resultado ou o email inserido após o usuário enviar o formulário e ele ser validado pelo JavaScript.

6-Script :

&lt;script src='email.js'&gt;&lt;script&gt;: Aqui estamos incluindo um arquivo JavaScript externo chamado email.js. Este arquivo contém a lógica de validação do email (checaremail()), que provavelmente verifica se o email inserido é válido antes de atualizar o conteúdo da &lt;div&gt; com ID email.