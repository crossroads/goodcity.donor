import MessagesBaseRoute from 'shared-goodcity/routes/messages_base';

export default MessagesBaseRoute({
  afterModel(model) {
    var offerId = offer.id;
    this.store.query('version', { offer_id: offerId, for_offer: true });
  }
});
