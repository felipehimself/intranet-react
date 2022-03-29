import { ICurrentFullDate } from "../interfaces/interfaces";

function formatTime  (horario:string):string   {
  return horario.substring(0,2) + 'h' + horario.substring(3,5)   
}

function formatDayOfTheWeek(dia:string):string {
  return dia[0].toUpperCase() + dia.substring(1) 
}

function getCurrentFullDate () : ICurrentFullDate {
  const date = new Date();
  const diasDaSemana = ['domingo','segunda-feira', 'terça-feira', 'quarta-feira','quinta-feira','sexta-feira','sábado' ]
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
  
  return {
    diaSemana: diasDaSemana[date.getDay()] ,
    dia: date.getDate(),
    mes: meses[date.getMonth()],
    ano: date.getFullYear(),
    horario: date.toLocaleTimeString(),
  }
}

export { getCurrentFullDate, formatTime,formatDayOfTheWeek }