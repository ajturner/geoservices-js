var geocode        = require('./lib/geocode'),
    featureservice = require('./lib/featureservice'),
    authentication = require('./lib/authentication'),
    request        = require('./lib/request');

function Geoservices (options) {
  this.options = options;

  this.geocode = geocode.geocode;
  this.featureservice = featureservice.featureservice;
  this.authenticate   = authentication.authenticate;
  this.requestHandler = request;

  var self = this;

  this.geocode.Batch = function (optionalToken) {
    optionalToken = optionalToken || self.token;

    var batch = new geocode.Batch(optionalToken);
    batch.requestHandler = request;

    return batch;
  };
}

module.exports = exports = Geoservices;
