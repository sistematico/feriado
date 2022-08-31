export const afterDates = (dates) => {
  let current = new Date()

  return dates.filter((d) => {
    return new Date(d.date) - current >= 0
  })[0]
}

export const beforeDates = (dates) => {
  let current = new Date()

  return dates.filter((d) => {
    return new Date(d.date) - current >= 0
  })[0]
}