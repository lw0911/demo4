/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 30,  //粒子数量
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff3131"   //粒子颜色
      },
      "shape": {
        "type": "circle",   //粒子类型
        "stroke": {    //粒子描边大小及颜色
          "width": 0,
          "color": "#000000"   
        },
        "polygon": {
          "nb_sides": 5     //粒子形状为五边形
        },
        "image": {
          "src": "img/github.svg",   //粒子为图片
          "width": 50,
          "height": 50
        }
      },
      "opacity": {    //粒子透明度
        "value": 0.2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {      //粒子大小
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1000,
          "size_min": 0.4,   //最小为0.4
          "sync": false
        }
      },
      "line_linked": {   //链接线的透明度颜色以及距离宽等
        "enable": true,
        "distance": 150,
        "color": "#ff3131",
        "opacity": 0.2,
        "width": 1
      },
      "move": {    //移动速度等
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);