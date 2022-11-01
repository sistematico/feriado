const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0')
}

export const formatDate = (d) => {
  let date = new Date(d)

  return [
    padTo2Digits(date.getUTCDate()),
    padTo2Digits(date.getUTCMonth() + 1),
    date.getFullYear(),
  ].join('-');
}

export const afterDates = (dates) => {
  let current = new Date()
  
  return dates.filter((d) => {
    return new Date(d.date) - current >= 0
  })[0]
}

export const diffDays = (d) => {
  let now = new Date()
  let day = new Date(d)

  let diff = day.getTime() - now.getTime()
  let days = Math.floor(diff / (1000 * 3600 * 24))

  // return days > 0 ? days + 1 : days
  return days + 1
}

export const weekDay = (wday) => {
  const weekday = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
  const d = new Date(wday)
  return weekday[d.getDay()]
}

export const beforeDates = (dates) => {
  let current = new Date()

  return dates.filter((d) => {
    return new Date(d.date) - current >= 0
  })[0]
}