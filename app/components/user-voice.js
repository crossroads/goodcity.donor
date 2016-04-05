import Ember from 'ember';

export default Ember.Component.extend({

  isChinese: Ember.computed('session.language', function(){
    return this.get('session.language') === 'zh-tw';
  }),

  didInsertElement() {
    var height = (Ember.$(window).height() - 82) + "px";
    var locale = this.get("isChinese") ? "zh-TW" : "en";
    var name = this.get("session.currentUser.fullName") || "";
    var mobile = this.get("session.currentUser.mobileWithCountryCode") || "";

    UserVoice.push(['set', {
      locale: locale,

      contact_enabled: true,
      ticket_custom_fields: {
        'Name/姓名': name,
        'Phone/電話': mobile
      },

      strings: {
        // Menu items
        contact_menu_label: '',
        contact_title: ''
      }
    }]);

    UserVoice.push(['embed', '#widget', {
      mode: 'contact',
      height: height,
    }]);
  }
});
