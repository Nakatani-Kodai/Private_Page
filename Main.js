
$(function(){

  // Canvasの要素を取得し、大きさを設定
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // アニメーションの設定
  window.requestAnimationFrame = 
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.weblitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (cb) { setTimeout(cb, 17); };

  // 表示する円の数を設定
  const NUM = 15;
  const particles = [];

  // 円の描画クラス
  class Particle {
    constructor(x, y, radius, directionX, directionY, index) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.directionX = directionX;
      this.directionY = directionY;
      this.index = index;
    }

    // 円を描画する。
    render() {
      if(this.index % 3 === 0){
        ctx.fillStyle = "#2e8b57";
        ctx.fill();
      } else if(this.index % 3 === 1){
        ctx.fillStyle = "#ffd700";
        ctx.fill();
      } else {
        ctx.fillStyle = "#E67A7A";
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    }

    // 端にいった円を再度描画する。
    update(){
      this.x ++;
   
      if(this.x > canvas.width) {
        this.x = 0;
      }
      this.render();
    }
  }

  // 設定された数だけループ処理を行う
  function init() {
    for(let i = 0; i < NUM; i++) {
      // particles 
      const x = Math.random() * canvas.width;
      const y = Math.floor(Math.random() * canvas.height);
      const radius = Math.floor(Math.random() * 250);
      const directionX = Math.random() * 2;
      const directionY = Math.random() * 2 - 1;
      const particle = new Particle(x, y, radius, directionX, directionY, i);
      particles.push(particle);
    }
  }

  // 描画処理
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particles.length; i++) {
      particles[i].update();
    }
    requestAnimationFrame(render);

    // タイトル部分の文字列を生成
    ctx.fillStyle = "black";
    ctx.font = "50px Times New Roman";
    ctx.fillText("I wanna be beautiful like a brown rat", 20, 70);
    ctx.fillText("because they have the beauty", 30, 130);
    ctx.fillText("that can't be reflected in picture.", 40, 200);
  }

  // 定義したメソッドの呼び出し
  init();
  render();
});
