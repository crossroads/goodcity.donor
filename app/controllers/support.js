import Ember from 'ember';

export default Ember.Controller.extend({
  hasDonationDetail: Ember.computed.notEmpty("session.currentUser.donationAmount"),

  donationAmount: Ember.computed.alias("session.currentUser.donationAmount"),
  donationDate: Ember.computed.alias("session.currentUser.donationDate")
});
