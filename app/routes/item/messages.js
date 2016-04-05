import MessagesBaseRoute from 'shared-goodcity/routes/messages_base';

export default MessagesBaseRoute.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('item', this.modelFor('item'));
  }
});
