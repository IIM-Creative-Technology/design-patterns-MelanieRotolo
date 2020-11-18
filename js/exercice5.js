let shopList = (function ()) {

  let instance

  function init(){
    
    let list = []

    function getList() {
      return list
    }

    return {
      getList: getList
    }
  }
  
  function getInstance(){
    //same que instance === undifined
    if(!instance) {
      instance = init()
    }

    return instance
  }

  return {
    getInstance: getInstance
  }

}) ()

console.log(shopList.getInstance().getList())

// Il manque du code car j'ai préféré écouter que tout copier