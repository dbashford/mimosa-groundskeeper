"use strict";

exports.defaults = function () {
  return {
    groundskeeper: {
      log: true,
      options:{}
    }
  };
};

exports.placeholder = function () {
  return "\t\n\n" +
         " groundskeeper:    # config settings for the groundskeeper module\n" +
         "   log: true       # whether or not to be informed on the console when something is cleaned from a file\n" +
         "   options: {}     # Pass-through options to the groundskeeper tool. See\n" +
         "                   # https://github.com/Couto/groundskeeper#usage\n";
};

exports.validate = function ( config, validators ) {
  var errors = [];
  if ( validators.ifExistsIsObject( errors, "groundskeeper config", config.groundskeeper ) ) {
    validators.ifExistsIsBoolean( errors, "groundskeeper.log", config.groundskeeper.log );
    validators.ifExistsIsObject( errors, "groundskeeper.options", config.groundskeeper.options );
  }

  return errors;
};
