import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  layout,

  classNames: ['destroy-button'],

  actions: {

    confirm() {
      this.sendAction('confirm', this.get('model'));
      this.set('active', false);
    }

  }

});
