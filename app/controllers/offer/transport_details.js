import Ember from 'ember';
import transportDetails from 'shared-goodcity/controllers/offer/transport_details';
import config from '../../config/environment';

export default transportDetails.extend({
  crossroadsContact: Ember.computed(function(){
    return config.APP.CROSSROADS_CONTACT;
  })
});
