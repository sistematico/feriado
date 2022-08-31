export const afterDates = (dates) => {
  let current = new Date()

  return dates.filter((d) => {
    return new Date(d.date) - current >= 0
  })[0]
}

export const weekDay = (wday) => {
  const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
  const d = new Date(wday)
  return weekday[d.getDay()]
}

export const beforeDates = (dates) => {
  let current = new Date()

  return dates.filter((d) => {
    return new Date(d.date) - current >= 0
  })[0]
}