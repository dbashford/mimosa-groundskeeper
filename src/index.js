"use strict";

var groundskeeper = require( 'groundskeeper' )
  , config = require( './config' )
  , logger = null;

var registration = function ( mimosaConfig, register ) {
  if ( mimosaConfig.isBuild ) {
    logger = mimosaConfig.log;
    var exts = mimosaConfig.extensions.javascript;
    register( ['buildFile'], 'afterCompile', _cleanse, exts );
  }
};

var _cleanse = function ( mimosaConfig, options, next ) {
  if ( options.files && options.files.length && options.files.length > 0 ) {
    options.files.forEach( function( file ) {
      var cleaner = groundskeeper( mimosaConfig.groundskeeper.options );
      cleaner.write( file.outputFileText );
      var newOutputText = cleaner.toString();
      if ( mimosaConfig.groundskeeper.log && file.outputFileText !== newOutputText ) {
        logger.info( "mimosa-groundskeeper has cleased [[ " + file.outputFileName + " ]]");
      }
      file.outputFileText = newOutputText;
    });
  }

  next();
};

module.exports = {
  registration: registration,
  defaults:     config.defaults,
  placeholder:  config.placeholder,
  validate:     config.validate
};