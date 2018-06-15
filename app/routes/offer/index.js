import AuthorizeRoute from './../authorize';

export default AuthorizeRoute.extend({
  controllerName: 'offer/offer_details',

  afterModel(my_offer) {
    if(!my_offer) {
      this.transitionTo('offers');
    } else if(my_offer && my_offer.get('itemCount') > 0) {
      this.transitionTo('offer.offer_details', my_offer);
    }
  }
});
