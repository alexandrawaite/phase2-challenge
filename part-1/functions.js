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
  let sortedArray = array.filter(element => element >= min && element <= max)
  return sortedArray
}

module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}