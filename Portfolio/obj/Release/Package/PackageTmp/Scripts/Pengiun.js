var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

//Press UP to make the Penguin Wave
//Press DOWN to make the Penguin Tip Hat
//Press SHIFT to make the Penguin go back to normal



var THPenguin = function (x, y, fh, fw, wx, fy, hw, hh, hx, hy, s) {
    this.x = x;
    this.y = y;
    this.s = 1;
    this.fh = 0;
    this.fw = 0;
    this.fx = 0;
    this.fy = 0;
    this.hw = 0;
    this.hh = 0;
    this.hx = 0;
    this.hy = 0;


};
THPenguin.prototype.draw = function (x, y, s) {
    //Penguin
    //Feet
    c.fill(255, 140, 0);
    c.stroke(18, 17, 17);
    c.strokeWeight(3);
    c.ellipse((this.x + 90) / this.s, (this.y + 238) / this.s, 50 / this.s, 30 / this.s);
    c.ellipse((this.x - 15) / this.s, (this.y + 238) / this.s, 50 / this.s, 30 / this.s);
    c.fill(13, 12, 12);
    //Head
    c.noStroke();
    c.ellipse((this.x + 34.5) / this.s, (this.y + 162) / this.s, 165 / this.s, 172 / this.s);
    c.fill(245, 242, 242);
    c.ellipse((this.x + 15) / this.s, (this.y + 126) / this.s, 41 / this.s, 47 / this.s);
    c.ellipse((this.x + 56) / this.s, (this.y + 126) / this.s, 41 / this.s, 47 / this.s);
    //Nose
    c.fill(10, 9, 9);
    c.stroke(8, 8, 8);
    c.strokeWeight(5);
    c.arc((this.x + 36) / this.s, (this.y + 140) / this.s, 26 / this.s, 24 / this.s, 180, 360);
    c.triangle((this.x + 23) / this.s, (this.y + 139) / this.s, (this.x + 37) / this.s, (this.y + 157) / this.s, (this.x + 48) / this.s, (this.y + 142) / this.s);
    c.noStroke();
    c.fill(250, 141, 8);
    c.arc((this.x + 36) / this.s, (this.y + 140) / this.s, 26 / this.s, 24 / this.s, 180, 359);
    c.triangle((this.x + 23) / this.s, (this.y + 139) / this.s, (this.x + 37) / this.s, (this.y + 156) / this.s, (this.x + 49) / this.s, (this.y + 139) / this.s);
    c.strokeWeight(3);
    //Eyes
    c.fill(18, 17, 17);
    c.ellipse((this.x + 20) / this.s, (this.y + 122) / this.s, 15 / this.s, 15 / this.s);
    c.ellipse((this.x + 53) / this.s, (this.y + 122) / this.s, 15 / this.s, 15 / this.s);
    //Tummy
    c.fill(255, 255, 255);
    c.ellipse((this.x + 38) / this.s, (this.y + 200) / this.s, 70 / this.s, 70 / this.s);
    //Flippers
    c.stroke(255, 255, 255);
    c.fill(13, 12, 12);
    c.ellipse((this.x + -17 + this.fx) / this.s, (this.y + 180 + this.fy) / this.s, (30 + this.fw) / this.s, (76 + this.fh) / this.s);
    c.stroke(10, 9, 9);
    c.ellipse((this.x + 142) / this.s, (this.y + 158) / this.s, 85 / this.s, 37 / this.s);
    c.stroke(255, 255, 255);
    c.ellipse((this.x + 142) / this.s, (this.y + 158) / this.s, 78 / this.s, 30 / this.s);

    //Hat
    c.fill(18, 17, 17);
    c.noStroke();
    c.rect((this.x - 8 + this.hx) / this.s, (this.y - 5 + this.hy) / this.s, 83 / this.s, 92 / this.s);
    c.ellipse((this.x + 37 + this.hw) / this.s, (this.y + 84 + this.hh) / this.s, 146 / this.s, 42 / this.s);
    c.stroke(255, 254, 247);
    c.rect((this.x - 3 + this.hx) / this.s, (this.y + this.hy) / this.s, 72 / this.s, 80 / this.s);
    c.ellipse((this.x + 37 + this.hw) / this.s, (this.y + 84 + this.hh) / this.s, 133 / this.s, 30 / this.s);

    //Cane
    c.stroke(5, 5, 5);
    c.fill(10, 10, 10);
    c.rect((this.x + 154) / this.s, (this.y + 149) / this.s, 10 / this.s, 100 / this.s);
    c.fill(252, 239, 0);
    c.ellipse((this.x + 159) / this.s, (this.y + 157) / this.s, 30 / this.s, 30 / this.s);

};
/*
var wave = 1;
var WC = 0;
THPenguin.prototype.wave = function () {
    if (wave === 1) {
        this.fh = 0;
        this.fw = 0;
        this.fx = 0;
        this.fy = 0;
    }

    if (wave === 3) {
        this.fh = -40;
        this.fw = 36;
        this.fx = -32;
        this.fy = -12;
    }
};

var flip = 0;
var flipcount = 0;
THPenguin.prototype.TipHat = function () {
    switch (flip) {
        case 0:
            this.wh = 0;
            this.fw = 0;
            this.fx = 0;
            this.fy = 0;
            this.hw = 0;
            this.hh = 0;
            this.hx = 0;
            this.hy = 0;

            break;
        case 2:
            this.fh = -40;
            this.fw = 36;
            this.fx = -32;
            this.fy = -12;
            this.hw = 0;
            this.hh = 0;
            this.hx = 0;
            this.hy = 0;

            break;
        case 4:
            this.fh = 0;
            this.fw = 0;
            this.fx = -6;
            this.fy = -42;
            this.hw = 0;
            this.hh = 0;
            this.hx = 0;
            this.hy = 0;

            break;
        case 6:
            this.fh = -40;
            this.fw = 36;
            this.fx = -32;
            this.fy = -12;
            this.hw = -140;
            this.hh = 79;
            this.hx = -140;
            this.hy = 160;

            break;
        case 8:
            this.fh = 0;
            this.fw = 0;
            this.fx = -6;
            this.fy = -42;
            this.hw = 0;
            this.hh = 0;
            this.hx = 0;
            this.hy = 0;

            break;
        case 10:
            this.fh = -40;
            this.fw = 36;
            this.fx = -32;
            this.fy = -12;
            this.hw = 0;
            this.hh = 0;
            this.hx = 0;
            this.hy = 0;

            break;


    }
};

THPenguin.prototype.Normal = function () {
    this.s = 1;
    this.fh = 0;
    this.fw = 0;
    this.fx = 0;
    this.fy = 0;
    this.hw = 0;
    this.hh = 0;
    this.hx = 0;
    this.hy = 0;
};
var penguin = new THPenguin(160, 100, 1);

draw = function () {
    background(255, 255, 255);
    frameRate(5);
    penguin.draw();
    //wave
    if (keyCode === UP) {

        penguin.wave();
        wave += 1;
        if (wave === 4) {
            wave = 1;
        }
    }

    //Tip Hat
    if (keyCode === DOWN) {
        penguin.TipHat();
        flip += 1;
        if (flip === 10) {
            flip = 0;

        }
    }

    //Normal
    if (keyCode === SHIFT) {
        penguin.Normal();
    }


};*/


var penguin = new THPenguin(160, 100, 1);

draw = function () {
    /*background(255, 255, 255);*/
    /*frameRate(5);*/
    penguin.draw();
}
draw();