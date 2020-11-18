console.log('\nExercice 3 :')
let modulePerson = (function () {
  let name
  let surname
  let age
  function setName(nameParam) {
    name = nameParam
  }
  function getName() {
    return name
  }
  function setSurname(surnameParam) {
    surname = surnameParam
  }
  function getSurname() {
    return surname
  }
  function setAge(ageParam) {
    age = ageParam
  }
  function getAge() {
    return age
  }
  function getInfos() {
    return 'Bonjour, je m\'appelle ' + name + ' ' + surname + ' et j\'ai ' + age + ' ans.'
  }
  return {
    setName: setName,
    setSurname: setSurname,
    setAge: setAge,
    getName: getName,
    getSurname: getSurname,
    getAge: getAge,
    infos: getInfos
  }

})()

modulePerson.setName('Mélanie')
modulePerson.setSurname('Rotolo')
modulePerson.setAge('21')
console.log(modulePerson.infos())