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
  var count = 0;
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
      if (count > ullis.length - 1) {
        count = 0;
        ul.style.left = 0;
      }
      count = this.index;
    }
  }

  right.onclick = function () {
    count++;
    if (count > ullis.length - 1) {
      count = 0;
      ul.style.left = 0;
    }
    for ( var i = 0 ; i < ollis.length ; i ++){
      ollis[i].classList.remove("active");
    }
    if(count>ullis.length-1){
      ollis[0].classList.add("active");
    }else {
      ollis[count].classList.add("active");
    }
    var target = -count * width;
    animate(ul, target, 50);


  }


})()
