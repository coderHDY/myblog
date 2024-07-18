let scale = 0.2;
class Paint {
  canvas = null;
  ctx = null;
  artillery = null;
  artilleryPosition = [0, 0];
  bombs = [];
  lasTime = Date.now();

  constructor(el = document.body) {
    this.canvas = document.createElement("canvas");
    el.appendChild(this.canvas);
    this.init();
    this.bindEvent();

    this.artillery = new Artillery({
      orientations: "left",
      scale: scale,
    });
    this.update();
  }
  update = (timeStamp = Date.now()) => {
    let diffTime = timeStamp - this.lasTime;
    this.lasTime = timeStamp;
    // 每秒钟控制在 30-60 帧
    diffTime = diffTime < 17 ? 17 : diffTime > 34 ? 34 : diffTime;

    this.clear();
    this.artillery.update(this.ctx, {
      position: this.artilleryPosition,
    });

    this.ctx.save();
    this.ctx.globalCompositeOperation = "destination-over";
    this.bombs.forEach((bomb) => {
      bomb.update(this.ctx, diffTime);
    });
    this.ctx.restore();

    this.bombs = this.bombs.filter((bomb) => {
      return !bomb.done;
    });

    requestAnimationFrame(this.update);
  };

  init() {
    // 按照设备像素初始化画布，解决高清屏幕下模糊问题
    this.ctx = this.getPixelRatioCtx();
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
    this.ctx.globalCompositeOperation = "source-over";
    this.isDrawing = false;
    this.last = null;
    this.artilleryPosition = [this.width - (80 * scale) / 0.3, this.height];
  }
  getPixelRatioCtx = () => {
    const dpr = window.devicePixelRatio;
    const ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.style.position = "fixed";
    this.canvas.style.top = 0;
    this.canvas.style.left = 0;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.canvas.style.pointerEvents = "none";
    this.canvas.style.zIndex = 999;

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    ctx.scale(dpr, dpr);
    return ctx;
  };
  generateBoom = (x, y) => {
    const bomb = new Bomb({
      target: {
        x,
        y,
      },
      position: {
        x: this.artilleryPosition[0] + 30 * scale, // 炮管转轴心 ,同 Artillery.center * scale
        y: this.artilleryPosition[1] - 160 * scale,
      },
    });
    this.bombs.push(bomb);
  };
  mouseDown = (e) => {
    this.generateBoom(e.clientX, e.clientY);
  };
  bindEvent() {
    window.addEventListener("resize", this.onWindowResize);
    document.addEventListener("click", this.mouseDown);
  }

  onWindowResize = (e) => {
    this.init();
  };
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

class Artillery {
  angle = Math.PI;
  position = [500, 500];
  orientations = "left"; // 炮口朝向: left right, 决定底座朝向
  scale = scale;
  center = {
    // 炮管转轴心
    x: 30,
    y: -40,
  };
  constructor(
    params = { position: [500, 500], orientations: "left", scale: scale }
  ) {
    this.position = params.position;
    this.orientations = params.orientations;
    this.scale = params.scale;
    document.addEventListener("mousemove", this.observeMouse2Angle);
  }

  update = (
    ctx,
    params = {
      position: this.position,
    }
  ) => {
    this.position = params.position;
    ctx.save();
    ctx.beginPath();
    ctx.translate(...this.position);

    // 整体设置
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";

    ctx.scale(this.scale, this.scale);
    ctx.translate(0, -120); // 让炮身完全展示出来
    this.drawSump(ctx);
    this.drawArtilleryTube(ctx);

    ctx.save();
    if (this.orientations === "left") {
      ctx.translate(-120, 0);
    }
    this.drawWheel(ctx);
    ctx.restore();

    ctx.restore();
  };
  drawWheel = (ctx) => {
    // 车轮圈
    ctx.beginPath();
    ctx.arc(80, -10, 120, 0, Math.PI * 2);
    ctx.fillStyle = "#FDE198";
    ctx.stroke();
    ctx.fill();
    ctx.save();
    // ctx.globalCompositeOperation = "xor"; // 车轮内外圈重叠部分透明
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(80, -10, 100, 0, Math.PI * 2); // 车轮内圈
    ctx.fill();
    ctx.stroke();
    ctx.stroke(); // 透明边框覆盖
    ctx.restore();

    // 车轮轴
    const wheelLineNum = 4;
    for (let i = 0; i < wheelLineNum; i++) {
      ctx.save();
      ctx.translate(80, -10);
      ctx.rotate((Math.PI / wheelLineNum) * i);
      ctx.beginPath();
      ctx.moveTo(-100, 0);
      ctx.lineTo(100, 0);
      ctx.stroke();
      ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(80, -10, 15, 0, Math.PI * 2); // 车轮内圈
    ctx.fill();
    ctx.stroke();
  };

  drawSump = (ctx) => {
    // 底座
    ctx.save();
    const mirror = this.orientations === "left";
    const prefix = mirror ? -1 : 1;
    ctx.scale(prefix, 1);
    if (mirror) {
      ctx.translate(-60, 0);
    }
    ctx.moveTo(0, 0);
    ctx.lineTo(-130, 80);
    ctx.lineTo(-160, 80);
    ctx.lineTo(-160, 100);
    ctx.lineTo(-100, 100);
    ctx.lineTo(50, 0); // 直径50
    ctx.fillStyle = "#895732"; // 底座颜色
    ctx.strokeStyle = "#683D20";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };
  drawArtilleryTube = (ctx) => {
    // 炮管  转轴心：30, -20
    // 炮管1 圈
    ctx.save();
    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(this.angle);

    ctx.save();
    ctx.translate(-130, 0);
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#E6AA25";
    ctx.strokeStyle = "#683D20";
    ctx.fill();
    ctx.stroke();

    // 炮管2 半圆
    ctx.beginPath();
    ctx.arc(40, 0, 30, Math.PI / 2, Math.PI * 1.5, false);
    ctx.fillStyle = "#AA5A15";
    ctx.strokeStyle = "#683D20";
    ctx.fill();
    ctx.stroke();

    // 炮管3 椭圆
    ctx.save();
    ctx.translate(40, 0);
    ctx.beginPath();
    // ctx.ellipse(50, 0, 10, 40, 0, 0, Math.PI * 2);
    ctx.moveTo(5, 35);
    ctx.lineTo(5, -35);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#683D20";
    ctx.stroke();
    ctx.moveTo(5, 35);
    ctx.lineTo(5, -35);
    ctx.lineWidth = 5;
    ctx.fillStyle = "#F3AF4E";
    ctx.strokeStyle = "#C87318";
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 炮管4 矩形
    ctx.save();
    ctx.translate(52, 0);
    ctx.beginPath();
    ctx.rect(0, -35, 400, 70);
    ctx.fillStyle = "#AA5A15";
    ctx.strokeStyle = "#683D20";
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 炮管5 椭圆
    ctx.save();
    ctx.translate(450, 0);
    ctx.beginPath();
    ctx.moveTo(5, 35);
    ctx.lineTo(5, -35);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#683D20";
    ctx.stroke();
    ctx.moveTo(5, 35);
    ctx.lineTo(5, -35);
    ctx.lineWidth = 5;
    ctx.fillStyle = "#F3AF4E";
    ctx.strokeStyle = "#C87318";
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 炮管6 椭圆
    ctx.save();
    ctx.translate(465, 0);
    ctx.beginPath();
    ctx.moveTo(5, 40);
    ctx.lineTo(5, -40);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#683D20";
    ctx.stroke();
    ctx.moveTo(5, 40);
    ctx.lineTo(5, -40);
    ctx.lineWidth = 5;
    ctx.fillStyle = "#F3AF4E";
    ctx.strokeStyle = "#C87318";
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.restore();

    // 炮管转轴  转轴心：30, -20
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 30, 0, Math.PI * 2);
    ctx.fillStyle = "#DE8720"; // 转轴颜色
    ctx.strokeStyle = "#ED9E23";
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.restore();
  };
  observeMouse2Angle = (e) => {
    const { clientX, clientY } = e;
    const [x, y] = this.position;
    const angle =
      Math.PI / 2 -
      Math.atan2(
        clientX - (x + this.center.x / 2),
        clientY - (y + this.center.y - 10) // 炮台中心有偏移
      );
    this.angle = angle;
  };
}

class Bomb {
  target = {
    x: 0,
    y: 0,
  };
  position = {
    x: 100,
    y: 100,
  };
  time = 400;
  speed = {
    x: 0,
    y: 0,
  };
  boomTime = 15 + Math.random() * 30;
  done = false;
  constructor(params = { target: { x: 0, y: 0 }, position: { x: 0, y: 0 } }) {
    this.target = params.target;
    this.position = params.position;
    const distance = Math.sqrt(
      Math.pow(this.target.x - this.position.x, 2) +
        Math.pow(this.target.y - this.position.y, 2)
    );
    this.time = distance * 0.8 + Math.random() * 300;
    this.speed = {
      x: (this.target.x - this.position.x) / this.time,
      y: (this.target.y - this.position.y) / this.time,
    };
  }
  update = (ctx, diffTime) => {
    if (
      Math.abs(
        this.position.x - this.target.x + (this.position.y - this.target.y)
      ) > diffTime
    ) {
      // 发射阶段
      this.position.x += this.speed.x * diffTime;
      this.position.y += this.speed.y * diffTime;
      this.drawBomb(ctx);
    } else if (this.boomTime > 0) {
      // 爆炸阶段
      this.boom(ctx);
      this.boomTime -= 1;
    } else {
      // 结束阶段
      this.done = true;
    }
  };
  drawBomb = (ctx) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#CD4C09";
    ctx.strokeStyle = "#333";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };

  boom = (ctx) => {
    ctx.save();
    ctx.translate(this.target.x, this.target.y);
    ctx.beginPath();
    for (let i = 0; i < Math.random() * 20; i++) {
      this.randomBoom(ctx);
    }
    ctx.stroke();
    ctx.restore();
  };
  randomBoom = (ctx) => {
    ctx.save();
    const x = Math.sign(Math.random() - 0.5) * Math.random() * 30;
    const y = Math.sign(Math.random() - 0.5) * Math.random() * 30;
    const r = Math.random() * 10;
    const color = this.randomColor();

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };
  randomColor = () => {
    return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() *
      255})`;
  };
}

export default Paint;
