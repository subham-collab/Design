const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
})

gsap.from("h1",{y:80,opacity:0,duration:1.2})

ScrollReveal().reveal('.glass',{
distance:'60px',
duration:1200,
interval:200
})

document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value:50,
          density: {
            enable: true,
            value_area: 1500
          }
        },
        color: {
          value: ["#587B7F", "#2300D6", "#eb4d4b", "#AAD3CA", "#2B007A"]
        },
        shape: {
          type: ["bubble", "polygon"],
          polygon: {
            nb_sides: 20
          }
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 7,
            opacity_min: 0.2,
            sync: false
          }
        },
        size: {
          value: 8,
          random: true
        },
        move: {
          enable: true,
          speed: 12,
          direction: "bounce",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: ["bubble", "repulse"]
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 150,
            size: 5,
            duration: 1,
            opacity: 2,
            speed:10
          },
          repulse: {
            distance:150,
            duration: 0.4
          },
          push: {
            particles_nb: 5
          }
        }
      },
      retina_detect: true
    });
  });


  //cursor
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");
  
  document.addEventListener("mousemove", function(e){
  
  if(dot && outline){
  
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  
  outline.style.left = e.clientX + "px";
  outline.style.top = e.clientY + "px";
  
  }
  
  });



  // const grid = document.getElementById("portfolio-grid");
  // const loadMoreBtn = document.getElementById("loadMoreBtn");
  
  // let currentIndex = 1;
  // const totalImages = 50;
  // const imagesPerClick = 6;
  
  // function loadImages() {
  
  // for (let i = 0; i < imagesPerClick; i++) {
  
  // if (currentIndex > totalImages) return;
  
  // const item = document.createElement("div");
  // item.className = "portfolio-item";
  
  // let number = String(currentIndex).padStart(2,'0');
  
  // item.innerHTML =
  // `<img src="images/design${number}.jpg" style="width:100%">`;
  
  // grid.appendChild(item);
  
  // currentIndex++;
  
  // }
  
  // }
  
  // loadImages();
  
  // loadMoreBtn.addEventListener("click", loadImages);