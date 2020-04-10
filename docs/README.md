---
home: true
heroImage: /icon.jpg
heroText: 你好啊，朋友！ 🐰
tagline: 你想看看我的魔法吗?  🎉🎉 




//actionText: 进入日志 →
//actionLink: /blog/README.md

---

<style>
.info {
  font-family: monospace;
  position: absolute;
  line-height: 20px;
  font-size: 14px;
  left: 20px;
  top: 20px;
}
.theme-container{
overflow:hidden;
}
</style>



<script>

export default {
  mounted () {
 
       var a = 1
       var particles = []
       var possibleColors = ["#D61C59", "#E7D84B", "#1B8798"];
       document.addEventListener('mousemove', onMouseMove);
       document.addEventListener('touchmove', onMouseMove);
       document.addEventListener('touchstart', onMouseMove);
   
       function onMouseMove(e) {
           var x = e.clientX;
           var y = e.clientY;
           var a = new ppp(x, y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
           particles.push(a)
   
       }
   
   
       function ppp(x, y, c) {
           function applyProperties(target, properties) {
               for (var key in properties) {
                   target.style[key] = properties[key];
               }
           }
   
           this.character = "*";
           this.lifeSpan = 200;
           this.velocity = {
               x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
               y: 1
           };
           this.position = {
               x: 0,
               y: 0
           }
           this.initialStyles = {
               "position": "fixed",
               "display": "block",
               "pointerEvents": "none",
               "z-index": "10000000",
               "fontSize": "16px",
               "will-change": "transform",
               "top": y + 'px',
               "left": x + 'px',
               color: c
           };
           this.element = document.createElement('span');
           this.element.innerHTML = this.character
           applyProperties(this.element, this.initialStyles);
           document.body.appendChild(this.element);
           this.update = function () {
               this.position.x += this.velocity.x;
               this.position.y += this.velocity.y;
               this.lifeSpan--;
               this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 200) + ")";
           };
           this.die = function () {
               this.element.parentNode.removeChild(this.element);
           };
       }
       function loop() {
           requestAnimationFrame(loop);
           updateParticles();
       }
       loop()
   
   
   
       function updateParticles() {
           for (var i = 0; i < particles.length; i++) {
               particles[i].update();
           }
           for (var i = particles.length - 1; i >= 0; i--) {
               if (particles[i].lifeSpan < 0) {
                   particles[i].die();
                   particles.splice(i, 1);
               }
           }
       }


}
}
</script>
