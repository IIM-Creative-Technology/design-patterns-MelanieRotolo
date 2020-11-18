console.log('\nExercice 1:')
function movie(title, year, categorie, budget){
  this.title = title;
  this.year = year;
  this.categorie = categorie;
  this.budget = budget;

  this.eurBudget = function (){
    return this.budget * 1.10
  }
};

let movie1 = new movie('Titanic','2020','Action','1000000');
console.log(movie1.budget, movie1.eurBudget());