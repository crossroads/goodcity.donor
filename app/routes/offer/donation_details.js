import AuthorizeRoute from './../authorize';

export default AuthorizeRoute.extend({

  model() {
    if(this.modelFor('offer')){
      var offerId = this.modelFor('offer').get('id');
      return this.store.peekRecord('offer', offerId);
    }
  }
});
