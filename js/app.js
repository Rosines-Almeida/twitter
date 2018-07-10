/*VERSÃO 0.0.1*/
/******************Incluir no text no HTML *******************************/
var buttonTwittwer = document.getElementById('btnTwittar');
buttonTwittwer.addEventListener('click', submiteMensager);


function submiteMensager(evt) {
    var mensagem = document.getElementById('textTwiter').value;
    var novoParagrafo = document.createElement('p');
    var text = document.createTextNode(mensagem);
    novoParagrafo.appendChild(text);
    main.appendChild(novoParagrafo);
    /*STYLE NOVO PARAGRAFO*/
    novoParagrafo.style.backgroundColor = 'white';
    novoParagrafo.style.borderBottomLeftRadius = "10px";
    novoParagrafo.style.borderBottomRightRadius = "10px";
    novoParagrafo.style.width = '895px';
    novoParagrafo.style.marginLeft = '82px';
    novoParagrafo.style.marginTop = '0px';
}


/*VERSÃO 0.0.2*/

function desativar(event) {

    if (textTwiter.value.length === 0) {
        document.getElementById('btnTwittar').disabled = 'disabled';
        event.preventDefault();
    } else {
        document.getElementById('btnTwittar').disabled = '';
    }
}

/***************Contar Caracteres ******************/
var buttonTextArea = document.getElementById('textTwiter');
buttonTextArea.addEventListener('keypress', contatdoDeCaracteres);

function contatdoDeCaracteres() {
    var maxCaracteres = 140;
    var caracteresDigitados = document.getElementById('textTwiter').value.length;
    var valor = maxCaracteres - caracteresDigitados;

    if (valor <= 140 && valor >= 20) {
        contador.style.color = 'black';
        document.getElementById('btnTwittar').disabled = '';
        document.getElementById('contador').innerHTML = valor;
    } else if (valor <= 20 && valor >= 10) {
        contador.style.color = '#2B02F8';
        document.getElementById('btnTwittar').disabled = '';
        document.getElementById('contador').innerHTML = valor;
    } else if (valor <= 10 && valor >= 0) {
        contador.style.color = '#FA1606';
        document.getElementById('btnTwittar').disabled = '';
        document.getElementById('contador').innerHTML = valor;
    } else {
        contador.style.color = '#FA1606';
        document.getElementById('btnTwittar').disabled = 'disabled';
        document.getElementById('contador').innerHTML = valor;
    }
}

/*VERSÃO 0.0.5 adicionar uma linha a mais */
var moreLine = document.getElementById('textTwiter');
moreLine.addEventListener('input', addLine);

function addLine(e) {
    var objTextArea = document.getElementById('textTwiter');
    if (objTextArea.scrollHeight > objTextArea.offsetHeight) {
        objTextArea.rows += 1;
    }
}


/*versão 0.0.6*/

function time() {
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var horaMin = hora + ":" + min;
    var paragrafoHora = document.createElement('p');
    var textHora = document.createTextNode(horaMin);
    paragrafoHora.appendChild(textHora);
    main.appendChild(paragrafoHora);
    /*STYLE PARAGRAFO DA HORA*/
    paragrafoHora.style.backgroundColor = 'white';
    paragrafoHora.style.width = '895px';
    paragrafoHora.style.marginLeft = '82px';
    paragrafoHora.style.marginBottom = '0px';
    paragrafoHora.style.borderTopRightRadius = "10px";
    paragrafoHora.style.borderTopLeftRadius = "10px";
}