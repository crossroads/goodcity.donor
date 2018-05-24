import MessagesBaseRoute from 'shared-goodcity/routes/messages_base';

export default MessagesBaseRoute({
  afterModel(model) {
    var offerId = model.id;
    this.store.query('version', { offer_id: offerId, for_offer: true });
  }
});
