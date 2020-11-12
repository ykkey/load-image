"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var loadImage = /*#__PURE__*/function () {
  /**
  * @classdesc 画像読み込み管理
  * @param {Object} opts 引数
  */
  function loadImage() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, loadImage);

    this.targetImageUrl = opts.targetImageUrl ? opts.targetImageUrl : '';
    this.LENGTH = this.targetImageUrl ? this.targetImageUrl.length : 0;
    this.callback = opts.callback;
    this.CNT = 0;
    this.loadUrlImage();
  }

  _createClass(loadImage, [{
    key: "loadUrlImage",
    value: function loadUrlImage() {
      if (!this.targetImageUrl.length) return false;

      for (var i = 0; i < this.targetImageUrl.length; i++) {
        this.loadimage(this.targetImageUrl[i]);
      }
    }
  }, {
    key: "loadimage",
    value: function loadimage(targetImage) {
      var _this = this;

      var img = new Image();
      img.addEventListener("load", function () {
        _this.counter();
      }, false);
      img.addEventListener("error", function () {
        _this.counter();
      }, false);
      img.src = targetImage;
    }
  }, {
    key: "counter",
    value: function counter() {
      this.CNT++;

      if (this.CNT >= this.targetImageUrl.length) {
        this.callback();
      }
    }
  }]);

  return loadImage;
}();

exports["default"] = loadImage;
