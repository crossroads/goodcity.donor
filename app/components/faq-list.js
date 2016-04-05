import Ember from 'ember';
import initFoundation from './init-foundation';

export default initFoundation.extend({

  didInsertElement() {
    this._super();
    var topMargin = this.get("session.isLoggedIn") ? 20 : 70;

    Ember.run.scheduleOnce('afterRender', this, function(){
      var controller = this.get('currentController');
      if(controller && controller.questionAnchor) {
        controller.send('displayQuestion');
      }
    });

    Ember.$().ready(function(){

      Ember.$('.faq_list ul').on('click', 'li a', function(){
        var anchor = Ember.$(this);
        var scrollOffset = Ember.$(anchor.attr('href').split('faq')[1]).offset().top;

        Ember.$('html, body').animate({
          scrollTop: scrollOffset - topMargin
        }, 'fast');

        return false;
      });
    });
  },

});
