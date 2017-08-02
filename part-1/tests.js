const assert = require('chai').assert
const { month, reverseSentence, nameProps, filterBetween } = require('../part-1/functions')

describe('Tests for part-1 functions in phase-2-challenge', () => {
  describe('month()', () => {
    it('month returns the month for a given Date object', () => {
      let date = new Date(2017, 5, 19)
      assert.equal(month(date), 'June')
    })
    it('month does not return August when given the date of Christmas', () => {
      let christmas = new Date(2017, 11, 25)
      assert.notEqual(month(christmas), 'August')
    })
    it('month returns a string', () => {
      let birthday = new Date(2017, 3, 28)
      assert.typeOf(month(birthday), 'string')
    })
  })
  describe('reverseSentence()', () => {
    it('reverseSentence takes a string of words and returns a string with words in reverse order', () =>
      assert.equal(reverseSentence('The cat jumped over the dog.'), 'dog. the over jumped cat The')
    )
    it('reverseSentence returns one word arguments unchanged', () =>
      assert.equal(reverseSentence('Howdy'), 'Howdy')
    )
    it('reverseSentence does not return a series of non-space words in reverse order', () =>
      assert.notEqual(reverseSentence('Ilovepizza'), 'pizzaloveI')
    )
  })
  describe('nameProps()', () => {
    it('nameProps returns the property names of an object in alphabetical order', () => {
      let friend = {
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      }
      assert.deepEqual(nameProps(friend), ['age', 'name', 'phone'])
    })
    it('nameProps does not return properties from an empty object', () =>
      assert.deepEqual(nameProps({}), [])
    )
    it('nameProps returns an array', () => {
      let animal = {
        name: 'whiskers',
        species: 'cat',
        age: 5
      }
      assert.isArray(nameProps(animal), 'this is an array')
    })
  })
  describe('filterBetween()', () => {
    it('filterBetween returns a new array containing elements that come after a min value and before a max value of a given array alphabetically', () => {
      let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
      assert.deepEqual(filterBetween(arr, 'chimp', 'lobster'), ['dog', 'lion', 'cow'])
    })
    it('filterBetween returns a new array containing only the elements that come after min and before max', () => {
      let desserts = ['cake', 'gelato', 'pie', 'flan']
      assert.notDeepEqual(filterBetween(desserts, 'doughnut', 'gingerbread'), ['gelato', 'pie', 'flan'])
    })
    it('filterBetween returns an array', () => {
      let states = ['Colorado', 'Ohio', 'Idaho', 'Utah']
      assert.isArray(filterBetween(states, 'California', 'Montana'), 'this is an array')
    })
  })
})