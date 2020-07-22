export default class loadImage {
    constructor(opts = {}) {
        this.targetImageUrl = opts.targetImageUrl;
        this.LENGTH = this.targetImageUrl ? this.targetImageUrl.length : 0;
        this.CNT = 0;
        this.loadUrlImage();
        this.callback = opts.callback;
    }
    loadUrlImage() {
        if (!this.targetImageUrl.length) return false;
        for (var i = 0; i < this.targetImageUrl.length; i++) {
            this.loadimage(this.targetImageUrl[i]);
        }
    }
    loadimage(target_img) {
        var img = new Image();
        img.addEventListener("load", () => {
            this.counter();
        }, false);
        img.addEventListener("error", () => {
            this.counter();
        }, false);
        img.src = target_img;
    }
    counter() {
        this.CNT++;
        if (this.CNT >= this.LENGTH) {
            this.callback();
        }
    }
}
module.exports = loadImageJs;