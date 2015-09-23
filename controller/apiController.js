"use strict";

exports.index = function *() {
  this.body = {
    "i18n": this.i18n ? true : false,
    "lang": this.i18n ? this.i18n.__('lang') : null
  };
};