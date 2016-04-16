'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nominatimGeocode = require('nominatim-geocode2');

var _nominatimGeocode2 = _interopRequireDefault(_nominatimGeocode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(p) {
        _classCallCheck(this, _class);

        this.n = new _nominatimGeocode2.default(p);
    }

    _createClass(_class, [{
        key: 'reverse',
        value: function reverse(q) {
            var _this = this;

            return new Promise(function (res, rej) {
                _this.n.reverse(q, function (err, result) {
                    if (err) {
                        rej(err);
                    } else {
                        res(result);
                    }
                });
            });
        }
    }, {
        key: 'search',
        value: function search(q) {
            var _this2 = this;

            return new Promise(function (res, rej) {
                _this2.n.search(q, function (err, result) {
                    if (err) {
                        rej(err);
                    } else {
                        res(result);
                    }
                });
            });
        }
    }]);

    return _class;
}();

exports.default = _class;
