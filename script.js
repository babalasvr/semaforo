const semaforo = document.getElementById('semaforo');
const buttons = document.getElementById('buttons');
let corIndex = 0;
let intervalId = null;

const sinais = (event) =>
{
    stopAuto();
    ligar[event.target.id]();
}

const nextIndex = () =>
{
    if(corIndex < 2)
    {
        corIndex++;
    }
    else{corIndex = 0}
}

function trocarCor()
{
    const cores = ['red', 'yellow', 'green'];
    const cor = cores[corIndex];
    ligar[cor]();
    nextIndex();
}

const stopAuto = () =>
{
    clearInterval(intervalId);
}

const ligar = {
    'red':    () => semaforo.src = './img/vermelho.png',
    'yellow': () => semaforo.src = './img/amarelo.png',
    'green':  () => semaforo.src = './img/verde.png',
    'auto':   () => intervalId = setInterval(trocarCor, 1000)
}


buttons.addEventListener('click', sinais);
