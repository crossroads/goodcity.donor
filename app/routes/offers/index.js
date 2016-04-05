import AuthorizeRoute from './../authorize';

export default AuthorizeRoute.extend({

  model() {
    return this.store.peekAll('offer');
  },

  redirect(my_offers) {
    var route = this;
    switch(my_offers.get('length')) {
      case 0 : route.transitionTo('offers.new'); break;
      case 1 :
        if(my_offers.get('firstObject.state') === 'draft') {
          var firstOffer = my_offers.get('firstObject');
          if(firstOffer.get('itemCount') === 0) {
            route.transitionTo('offer', firstOffer);
          } else {
            route.transitionTo('offer.offer_details', firstOffer);
          }
        }
    }
  },

  renderTemplate() {
    this.render(); // default template
    this.render('appMenuList', {
      into: 'offers/index',
      outlet: 'appMenuList',
      controller: 'application'
    });
  }

});
