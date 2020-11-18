console.log('\nExercice 4 :')

let moduleCalculator = (function () {
  let total = 0

  function add(number) {
    validateNumber(number)
    total += number
  }

  function remove(number) {
    validateNumber(number)
    total -= number
  }

  function getTotal() {
    return total
  }

  function validateNumber(number) {
    if(typeof number !== 'number') {
      throw new Error ('La valeur ' + number + 'n\est pas un nombre!')
    }
  }

  return {
    add: add,
    remove: remove,
    getTotal: getTotal
  }

})()

moduleCalculator.add(2)
moduleCalculator.add(3)
moduleCalculator.remove(10)
// moduleCalculator.remove('test')
console.log(moduleCalculator.getTotal())