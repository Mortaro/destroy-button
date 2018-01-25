/* eslint-env node */
'use strict';

module.exports = {

  name: 'destroy-button',

  included: function(app) {
    this._super.included.apply(this, arguments);
    this.import('vendor/destroy-button.css');
  },

  isDevelopingAddon() {
    return true;
  }

};
