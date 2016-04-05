import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('image', {
  sequences: {
    id: function(num) {
      return num + 100;
    },
    cloudinaryId: function(num) {
      return "1407764294/default/test_image" + num + ".jpg";
    },
  },
  default: {
    id:           FactoryGuy.generate('id'),
    cloudinaryId: FactoryGuy.generate('cloudinaryId'),
    favourite: false
  }
});

export default {};
