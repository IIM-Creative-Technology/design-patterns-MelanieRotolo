let calculator = {
  total: 0,

  add: function (number){
    this.total += number
  },

  subtract: function (number){
    this.total -= number
  },
  multiply: function (number){
    this.total *= number
  },
  devide: function (number){
    this.total /= number
  }
}

calculator.execute = function (key) {
  let methodName = calculator[key]
  let functionParams = [].splice.call(arguments, 1)
  return methodName.apply(calculator,functionParams)
}

// Il manque du code car j'ai préféré écouter que tout copier