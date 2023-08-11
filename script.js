let segundo = 0
let decimos = 0
let minuto = 0
const segundosSaida = document.getElementById('segundos')
const decimosSaida = document.getElementById('decimos')
const minutosSaida = document.getElementById('minutos')
const btnIniciar = document.getElementById('btn-iniciar')
const btnStop = document.getElementById('btn-stop')
const btnReset = document.getElementById('btn-reset')
const btnVolta = document.getElementById('btn-volta')
const qtdeVoltas = document.getElementById('qtde-voltas')
const voltas = document.getElementById('voltas')
let numVoltas = 0
let Interval

btnIniciar.addEventListener('click', () => {
	clearInterval(Interval)
	Interval = setInterval(startTime, 10)
})

btnStop.addEventListener('click', () => {
	clearInterval(Interval)
})

btnReset.addEventListener('click', () => {
	clearInterval(Interval)
	decimos = '00'
	segundo = '00'
	minuto = '00'
	segundosSaida.innerHTML = segundo
	decimosSaida.innerHTML = decimos
	minutosSaida.innerHTML = minuto
	voltas.innerHTML = ''
	numVoltas = 0
	qtdeVoltas.innerHTML = ''
})

btnVolta.addEventListener('click', () => {
  numVoltas++
  qtdeVoltas.innerHTML = `voltas: ${numVoltas}` 
  voltas.innerHTML += `${minuto} : ${segundo} : ${decimos}<br>`  
})

function startTime(){
	decimos++
	if(decimos <= 9){
	  decimosSaida.innerHTML = '0' + decimos
    }

    if(decimos > 9){
       decimosSaida.innerHTML = decimos
    }

    if(decimos > 99){
    	segundo++
    	segundosSaida.innerHTML = '0' + segundo
    	decimos = 0
    	decimosSaida.innerHTML = '0' + decimos
    }

    if(segundo > 9){
    	segundosSaida.innerHTML = segundo
    }

    if(segundo > 59) {
    	minuto++
    	minutosSaida.innerHTML = '0' + minuto
    	segundo = '00'
    	segundosSaida.innerHTML = segundo
    }
}