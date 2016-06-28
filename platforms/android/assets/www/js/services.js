angular.module('starter.services', [])

.factory('Kids', function(){
   var kids = false;
     
   return{
     get: function(){
     return kids;
     },
     set: function(value){
     kids = value;
     }
   };
})

.factory('Animals', function() {

  // Some fake testing data
  var animals = [{
    id: 0,
    name: 'Lion',
    text: 'The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae. The commonly used term African lion collectively denotes the several subspecies found in Africa. With some males exceeding 250 kg (550 lb) in weight, it is the second-largest living cat after the tiger.',
    kids: 'The lion is th King of the jungle and the prairies. He rules over the kingdom of animals that rever him as a wise and powerful ruler.',
    face: 'img/lion.jpg'
  }, {
    id: 1,
    name: 'The giraffe',
    text: 'The giraffe (Giraffa camelopardalis) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant. Its species name refers to its camel-like shape and its leopard-like colouring. Its chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones, and its distinctive coat patterns. It is classified under the family Giraffidae, along with its closest extant relative, the okapi. The nine subspecies are distinguished by their coat patterns.',
    kids: 'The giraffe is the tallest animal on Earth. It watches over all its friends from a great height, almost among the birds.',
    face: 'img/giraffe.jpg'
  }];

  return {
    all: function() {
      return animals;
    },
    get: function(animalId) {
      for (var i = 0; i < animals.length; i++) {
        if (animals[i].id === parseInt(animalId)) {
          return animals[i];
        }
      }
      return null;
    },
    id: function(animalName){
      for (var i = 0; i < animals.length; i++) {
      console.log(animals[i].name + " == " + animalName + " -> " + String(animals[i].name == animalName));
        if(animals[i].name == animalName){
          return animals[i].id;
        }
      }
      return null;
    }
  };
});
