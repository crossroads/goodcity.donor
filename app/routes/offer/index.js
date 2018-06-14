import AuthorizeRoute from './../authorize';
import Ember from 'ember';

export default AuthorizeRoute.extend({
  controllerName: 'offer/offer_details',
  appReview: Ember.inject.service(),

  afterModel(my_offer) {
    this.get("appReview").promptReviewModal();

    if(!my_offer) {
      this.transitionTo('offers');
    } else if(my_offer && my_offer.get('itemCount') > 0) {
      this.transitionTo('offer.offer_details', my_offer);
    }
  }
});
