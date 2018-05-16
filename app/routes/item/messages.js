import MessagesBaseRoute from 'shared-goodcity/routes/messages_base';

export default MessagesBaseRoute.extend({

  afterModel(model) {
    var itemId = model.id;
    this.store.query('version', { item_id: itemId, for_item: true });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('item', this.modelFor('item'));
  }
});
