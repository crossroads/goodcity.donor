import AuthorizeRoute from './../authorize';

export default AuthorizeRoute.extend({

  model() {
    if(this.modelFor('offer')){
      var offerId = this.modelFor('offer').get('id');
      return this.store.peekRecord('offer', offerId);
    }
  },

  afterModel(my_offer) {
    if(!my_offer) {
      this.transitionTo('offers');
    } else if(my_offer && my_offer.get('itemCount') === 0) {
      this.transitionTo('offer', my_offer);
    }
  }
});
