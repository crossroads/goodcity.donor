import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    questionAnchor: null
  },

  setupController(controller, model) {
    this._super(controller, model);
    if (this.queryParams.questionAnchor && this.queryParams.questionAnchor !== "undefined") {
      controller.set('questionAnchor', this.queryParams.questionAnchor);
    } else {
      this.queryParams.questionAnchor = null;
    }
  },

  renderTemplate() {
    this.render(); // default template

    if(this.get('session.isLoggedIn')) {
      this.render('appMenuList', {
        into: 'faq',
        outlet: 'appMenuList',
        controller: 'application'
      });
    }
  }

});
