/**
 * Created by Colin on 2017/12/17.
 */
window.onload = function () {

  // window.onresize = function () {
  //   // 屏幕尺寸改变的时候 动态获取搜索和留言一栏的高度
  //   var height = document.querySelector('.header>.text').offsetHeight;
  //   console.log(height);
  //   // 获取到li 然后设置li的行高等于height
  //   var a = document.querySelectorAll('.header>.text>li>a');
  //   console.log(a);
  //   for (var i = 0; i < a.length; i++) {
  //     a[i].style.marginTop = height / 4 + 'px';
  //   }
  // };


  // 音乐图片效果
  var img = document.querySelector('.music>img');
  var audio = document.querySelector('.music>audio');

  var flag = true;
  img.onclick = function () {
    if (flag) {
      this.src = 'images/music_off.png';
      audio.pause();
      flag = false;
      this.style.animation = 'none';
    } else {
      this.src = 'images/music_on.png';
      audio.play();
      flag = true;
      this.style.animation = 'run 3s linear infinite';
    }
  };

  
  // tab栏切换
  var tab_left = document.querySelector('.tab-l');
  var tab_right = document.querySelector('.tab-r');
  var con_left = document.querySelector('.layout>.left');
  var con_right = document.querySelector('.layout>.right');

  tab_left.onclick = function () {
    con_left.style.display = 'block';
    con_right.style.display = 'none';
    this.classList.add('active');
    tab_right.classList.remove('active');

  };

  var flag2 =true;
  tab_right.onclick = function () {
    con_left.style.display = 'none';
    con_right.style.display = 'block';
    this.classList.add('active');
    tab_left.classList.remove('active');

    // 标记一下 避免再次点击进行多次生成滚动条
    if(flag2){
      new IScroll('.right',{
        mouseWheel: true,
        scrollbars: true
      });
      flag2 = false;
    }
  };


  // 用iscroll实现下面的滚动
  new IScroll('.left',{
    mouseWheel: true,
    scrollbars: true
  });


};