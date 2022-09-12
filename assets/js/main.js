function relogioTimer() {
    function criaHoraDosSegundor(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    console.log(criaHoraDosSegundor('10'))

    const relogio = document.querySelector('.timer');

    let segundos = 0;
    let timer;
    function iniciaTimer() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundor(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const el = e.target

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaTimer();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
        }

        if (el.classList.contains('reiniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })

}
relogioTimer()