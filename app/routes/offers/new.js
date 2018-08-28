import AuthorizeRoute from '../authorize';

export default AuthorizeRoute.extend({
  model() {
    var offer = this.store.peekAll('offer').filterBy('itemCount', 0).filterBy('state', 'draft').get('firstObject');
    if (offer) {
      return this.transitionTo('offer', offer.id);
    }

    offer = this.store.createRecord('offer');
    offer.save()
      .then(() => this.transitionTo('offer', offer.id))
      .catch(error => {
        this.transitionTo('offers');
        throw error;
      });
  }
});
