const month = date => {
  if (!(date instanceof Date)) {
    throw new Error("Please enter a Date object")
  }

  let month = date.getMonth()
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return monthArray[month]
}

const reverseSentence = string => {
  return string.split(' ').reverse().join(' ')
}

const nameProps = obj => {
  return Object.keys(obj).sort()
}

const filterBetween = (array, min, max) => {
  let newArray = []
  array.filter(element => {
    if (element >= min && element <= max) {
      newArray.push(element)
    }
  })
  return newArray
}

module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}