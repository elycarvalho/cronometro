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
const telaRegressiva = document.getElementById('tela-regress')
const btnRegress = document.getElementById('btn-regress')
const iniciaRegress = document.getElementById('inicia-regress')
const stopRegress = document.getElementById('stop-regress')
const resetRegress = document.getElementById('reset-regress')
const minutoRegress = document.getElementById('minuto-regress')
const segundoRegress = document.getElementById('segundo-regress')
const decimoRegress = document.getElementById('decimo-regress')
const btnCronometro = document.getElementById('btn-cronometro')
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
   console.log(Interval)
})

btnVolta.addEventListener('click', () => {
  numVoltas++
  qtdeVoltas.innerHTML = `voltas: ${numVoltas}` 
  voltas.innerHTML += `${minuto} : ${segundo} : ${decimos}<br>`  
})

btnRegress.addEventListener('click', ()=>{
	telaRegressiva.style.display = 'flex'
})

btnCronometro.addEventListener('click', ()=>{
	telaRegressiva.style.display = 'none'
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