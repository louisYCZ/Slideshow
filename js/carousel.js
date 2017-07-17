/**
 * Created by 余纯专 on 2017/6/15.
 */
;(function () {

  var carousel = document.querySelector(".carousel")
  var ul = carousel.querySelector("ul");
  var ullis = ul.querySelectorAll("li");
  var ol = carousel.querySelector("ol");
  var ollis = ol.querySelectorAll("li");
  var arrow = document.querySelector(".arrow");
  var right = arrow.querySelector(".right");
  var left = arrow.querySelector(".left");
  var width = carousel.offsetWidth;
  var count = 0,
    timer=null;

  carousel.onmouseover=function () {
    arrow.style.display='block';
    clearInterval(timer);
  }
  carousel.onmouseout=function () {
    arrow.style.display='none';
    timer=setInterval(function () {
      right.onclick();
    },1000)
  }

  for (var i = 0; i < ollis.length; i++) {
    ollis[i].index = i;
    ollis[i].onclick = function () {

      for (var i = 0; i < ollis.length; i++) {
        //干掉所有人
        ollis[i].classList.remove("active");
      }
      this.classList.add("active");
      var target = -this.index * width;
      animate(ul, target, 50);
      if (count ==ullis.length - 1) {
        count = 0;
        ul.style.left = 0;
      }
      count = this.index;
    }
  }

  right.onclick = function () {

    if (count==ullis.length - 1) {
      count = 0;
      ul.style.left = 0;
    }
    count++;
    for ( var i = 0 ; i < ollis.length ; i ++){
      ollis[i].classList.remove("active");
    }
    if(count>=ullis.length-1){
      ollis[0].classList.add("active");
    }else {
      ollis[count].classList.add("active");
    }
    var target = -count * width;
    animate(ul, target, 50);
  };

  left.onclick=function () {

    if(count<=0){
      count=ullis.length-1;
      ul.style.left=-count*width+'px';
    }
    count--;

    for ( var i = 0 ; i < ollis.length ; i ++){
      ollis[i].classList.remove('active');
    }
    if(count>=ollis.length-1){
      ollis[0].classList.add('active')
    }else {
      ollis[count].classList.add('active');
    }
    var target=-count*width;
    animate(ul,target,50)
  }

  timer=setInterval(function () {
    right.onclick();
  },1000)

})()
