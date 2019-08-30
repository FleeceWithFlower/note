---
home: true
heroImage: /icon.jpg
heroText: 你好啊，朋友！ 🐰
tagline: 你想看看我的魔法吗?  🎉🎉 




actionText: 快速上手 →
actionLink: /blog/Client/vue-x/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: 规范
  details: 遵循 [JavaScript Standard Style](https://standardjs.com/) / Airbnb JavaScript Style 社区规范
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

<style>
.info {
  font-family: monospace;
  position: absolute;
  line-height: 20px;
  font-size: 14px;
  left: 20px;
  top: 20px;
}</style>
<script>
export default {
  mounted () {
 
          (function fairyDustCursor() {
              var possibleColors = ["#D61C59", "#E7D84B", "#1B8798"];
              var width = window.innerWidth;
              var height = window.innerHeight;
              var cursor = {x: width/2, y: width/2};
              var particles = [];
              function init() {
                  bindEvents();
                  loop();
              }
              function bindEvents() {
                  document.addEventListener('mousemove', onMouseMove);
                  document.addEventListener('touchmove', onTouchMove);
                  document.addEventListener('touchstart', onTouchMove);
                  window.addEventListener('resize', onWindowResize);
              }

              function onWindowResize(e) {
                  width = window.innerWidth;
                  height = window.innerHeight;
              }

              function onTouchMove(e) {
                  if( e.touches.length > 0 ) {
                      for( var i = 0; i < e.touches.length; i++ ) {
                          addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
                      }
                  }
              }

              function onMouseMove(e) {
                  cursor.x = e.clientX;
                  cursor.y = e.clientY;

                  addParticle( cursor.x, cursor.y, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
              }

              function addParticle(x, y, color) {
                  var particle = new Particle();
                  particle.init(x, y, color);
                  particles.push(particle);
              }

              function updateParticles() {
                  for( var i = 0; i < particles.length; i++ ) {
                      particles[i].update();
                  }
                  for( var i = particles.length -1; i >= 0; i-- ) {
                      if( particles[i].lifeSpan < 0 ) {
                          particles[i].die();
                          particles.splice(i, 1);
                      }
                  }
              }

              function loop() {
                  requestAnimationFrame(loop);
                  updateParticles();
              }


              function Particle() {

                  this.character = "*";
                  this.lifeSpan = 120; 
                  this.initialStyles ={
                      "position": "absolute",
                      "display": "block",
                      "pointerEvents": "none",
                      "z-index": "10000000",
                      "fontSize": "16px",
                      "will-change": "transform"
                  };

                  this.init = function(x, y, color) {
                      this.velocity = {
                          x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                          y: 1
                      };

                      this.position = {x: x - 10, y: y - 980};
                      this.initialStyles.color = color;

                      this.element = document.createElement('span');
                      this.element.innerHTML = this.character;
                      applyProperties(this.element, this.initialStyles);
                      this.update();
                      document.body.appendChild(this.element);
                  };

                  this.update = function() {
                      this.position.x += this.velocity.x;
                      this.position.y += this.velocity.y;
                      this.lifeSpan--;

                      this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
                  };

                  this.die = function() {
                      this.element.parentNode.removeChild(this.element);
                  };

              }
              function applyProperties( target, properties ) {
                  for( var key in properties ) {
                      target.style[ key ] = properties[ key ];
                  }
              }

              init();
          })();



}
}
</script>