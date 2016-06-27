angular.module('starter.services', [])

.factory('Animals', function() {

  // Some fake testing data
  var animals = [{
    id: 0,
    name: 'King of the jungle',
    text: 'One of the big cats ',
    face: 'img/lion.jpg'
  }, {
    id: 1,
    name: 'The giraffe',
    text: 'The tallest living terrestrial animal ',
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
