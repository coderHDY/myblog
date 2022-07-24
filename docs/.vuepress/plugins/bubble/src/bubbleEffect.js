class Particle {
    baseDimension = 4;
    lifeSpan = Math.floor(Math.random() * 60 + 60);
    velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
        y: -0.4 + Math.random() * -1,
    }

    constructor(x, y, canvasItem) {
        this.initialLifeSpan = this.lifeSpan;
        this.position = { x, y };
        this.canv = canvasItem;
    }

    update(context) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
        this.velocity.y -= Math.random() / 600;
        this.lifeSpan--;

        const scale = 0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

        context.fillStyle = "#e6f1f7";
        context.strokeStyle = "#3a92c5";
        context.beginPath();
        context.arc(
            this.position.x - (this.baseDimension / 2) * scale,
            this.position.y - this.baseDimension / 2,
            this.baseDimension * scale,
            0,
            2 * Math.PI
        );

        context.stroke();
        context.fill();

        context.closePath();
    }
}

export default class BubbleEffect {
    particles = [];
    canvImages = [];
    canvas = document.createElement("canvas");
    context = this.canvas.getContext("2d");
    width = window.innerWidth;
    height = window.innerHeight;
    interval;
    fixInterval;

    constructor(options) {
        this.hasWrapperEl = options && options.element;
        this.element = this.hasWrapperEl || document.body;

        this.cursor = {
            x: this.width / 2,
            y: this.width / 2 // TODO: 改height
        };
        this.init();
    }

    init(wrapperEl) {
        this.canvas.style.zIndex = 999;
        this.canvas.style.top = "0px";
        this.canvas.style.left = "0px";
        this.canvas.style.pointerEvents = "none";

        if (this.hasWrapperEl) {
            this.canvas.style.position = "absolute";
            this.element.appendChild(this.canvas);
            this.canvas.width = this.element.clientWidth;
            this.canvas.height = this.element.clientHeight;
        } else {
            this.canvas.style.position = "fixed";
            document.body.appendChild(this.canvas);
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        }

        this.bindEvents();
        this.loop();
    }

    bindEvents() {
        // 代码不触发，影响阅读
        this.element.addEventListener("click", e => this.preventCode(e));
        this.element.addEventListener("mousemove", e => this.preventCode(e));
        this.element.addEventListener("touchmove", e => this.preventCode(e));
        this.element.addEventListener("touchstart", e => this.preventCode(e));
        window.addEventListener("resize", e => this.preventCode(e));

        this.element.addEventListener("click", e => this.onMouseMove(e));
        this.element.addEventListener("mousemove", e => this.onMouseMove(e));
        this.element.addEventListener("touchmove", e => this.onTouchMove(e));
        this.element.addEventListener("touchstart", e => this.onTouchMove(e));
        window.addEventListener("resize", e => this.onWindowResize(e));
    }

    isCode(e) {
        const eventPath = e.path;
        return eventPath.some(item => item.tagName === 'PRE');
    }

    preventCode(e) {
        if (!Array.isArray(e?.path)) {
            return;
        }
        if (this.isCode(e)) {
            e.stopImmediatePropagation();
        }
    }

    onWindowResize(e) {
        if (this.hasWrapperEl) {
            this.canvas.width = this.element.clientWidth;
            this.canvas.height = this.element.clientHeight;
        } else {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        }
    }

    onTouchMove(e) {
        if (e.touches.length > 0) {
            for (let i = 0; i < e.touches.length; i++) {
                this.addParticle(
                    e.touches[i].clientX,
                    e.touches[i].clientY,
                    this.canvImages[Math.floor(Math.random() * this.canvImages.length)]
                );
            }
        }
    }

    onMouseMove(e) {
        if (this.hasWrapperEl) {
            const boundingRect = element.getBoundingClientRect();
            this.cursor.x = e.clientX - boundingRect.left;
            this.cursor.y = e.clientY - boundingRect.top;
        } else {
            this.cursor.x = e.clientX;
            this.cursor.y = e.clientY;
        }

        this.addParticle(this.cursor.x, this.cursor.y);
    }

    addParticle(x, y, img) {
        this.particles.push(new Particle(x, y, img));
    }

    updateParticles() {
        this.context.clearRect(0, 0, this.width, this.height); // check

        // Update
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update(this.context);
        }

        // Remove dead particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].lifeSpan < 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    loop() {
        this.updateParticles();
        requestAnimationFrame(() => this.loop());
    }

    randomParticle() {
        const x = Math.random() * this.width;
        const y = Math.random() * this.height;
        this.addParticle(x, y);
    }

    autoBubble(speed, timer) {
        this.stopAutoBubble();
        this.autoInterval = setInterval(() => this.randomParticle(), +speed || 300);
        if (timer) {
            setTimeout(() => clearInterval(this.autoInterval), timer);
        }
    }

    stopAutoBubble() {
        clearInterval(this.autoInterval);
    }

    fixBubble(x, y, speed, timer) {
        this.stopFixBubble();
        this.fixInterval = setInterval(() => this.addParticle(x, y), +speed || 100);
        if (timer) {
            setTimeout(() => clearInterval(this.fixInterval), timer);
        }
    }

    stopFixBubble() {
        clearInterval(this.fixInterval);
    }

    clear() {
        this.particles = []
    }
}
