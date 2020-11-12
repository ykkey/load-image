export default class loadImage {
    /**
    * @classdesc 画像読み込み管理
    * @param {Object} opts 引数
    */
    constructor(opts = {}) {
        this.targetImageUrl = opts.targetImageUrl ? opts.targetImageUrl : '';
        this.LENGTH = this.targetImageUrl ? this.targetImageUrl.length : 0;
        this.callback = opts.callback;
        this.CNT = 0;
        this.loadUrlImage();
    }
    loadUrlImage() {
        if (!this.targetImageUrl.length) return false;
        for (var i = 0; i < this.targetImageUrl.length; i++) {
            this.loadimage(this.targetImageUrl[i]);
        }
    }
    loadimage(targetImage) {
        var img = new Image();
        img.addEventListener("load", () => {
            this.counter();
        }, false);
        img.addEventListener("error", () => {
            this.counter();
        }, false);
        img.src = targetImage;
    }
    counter() {
        this.CNT++;
        if (this.CNT >= this.targetImageUrl.length) {
            this.callback();
        }
    }
}