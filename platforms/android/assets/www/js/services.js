angular.module('starter.services', [])

.factory('Animals', function() {

  // Some fake testing data
  var animals = [{
    id: 0,
    name: 'King of the jungle',
    lastText: 'You on your way?',
    face: 'img/lion.jpg'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
    }
  };
});
