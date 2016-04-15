'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = reverse;
exports.geocode = geocode;

var _nominatimGeocode = require('nominatim-geocode');

var _nominatimGeocode2 = _interopRequireDefault(_nominatimGeocode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reverse(q) {
  return new Promise(function (res, rej) {
    _nominatimGeocode2.default.reverse(q, function (err, result) {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    });
  });
}

function geocode(q) {
  return new Promise(function (res, rej) {
    _nominatimGeocode2.default.geocode(q, function (err, result) {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    });
  });
}
