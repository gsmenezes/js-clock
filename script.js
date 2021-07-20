//selecionando os elementos que vamos manipular
let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock(){
  let now = new Date(); // manipula a data
  let hour = now.getHours(); // para pegar a hora
  let minute = now.getMinutes();// para pegar minutos
  let second = now.getSeconds(); // para pegar segundos

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;  //consigo adicionar um texto dentro dele

  let secondDeg = ((360/60) * second) - 90; // divide os graus por quantos segundos tem 1 minuto e diminui 90 graus para ficar no lugar correto
  secondElement.style.transform = `rotate(${secondDeg}deg)`; // estipula o ângulo conforme os segundos

  let minuteDeg = ((360 / 60) * minute) - 90;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;

  let hourDeg = ((360 / 12) * hour) - 90;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
  
}

function fixZero(time){ // vai adicionar um 0 na frente caso seja menor que 10
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); // atualiza a cada segundo
updateClock();