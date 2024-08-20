
const itemsArray = [];
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor'); 
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener("click", function (event) {
    let container = document.createElement("div");
    const imgNumber = Math.floor(Math.random() * 13) + 1;
    container.innerHTML = `<div class="img-container">
        <img src="./assets/img-${imgNumber}.png" alt=""/>
    </div>`;

    const appendedElement = container.firstChild;
    document.querySelector(".items-container").appendChild(appendedElement);

    appendedElement.style.position = 'absolute'; //for the click random
    appendedElement.style.left = `${event.clientX - appendedElement.offsetWidth / 2}px`;
    appendedElement.style.top = `${event.clientY - appendedElement.offsetHeight / 2}px`;

    appendedElement.style.zIndex = '40'; //the esticket is overlay the text, but under the navbar

    const initialRotation = Math.random() * 180 - 45;

    gsap.set(appendedElement, {
        scale: 0,
        rotation: initialRotation,
        transformOrigin: "center",
    });

    const tLline = gsap.timeline();

    const finalRotation = Math.random() * 90 - 45;
    const randomScale = Math.random() * 0.5 + 0.5;

    tLline.to(appendedElement, {
        scale: randomScale,
        rotation: finalRotation,
        duration: 0.5,
        delay: 0.1,
    });

    tLline.to(appendedElement, {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "power2.out",
    },
        "<"
    ).to(appendedElement, {
        onComplete: () => {
            appendedElement.parentNode.removeChild(appendedElement);
            const index = itemsArray.indexOf(appendedElement);
            if (index > 2) {
                itemsArray.splice(index, 1);
            }
        },
    }, "-=0.5");
});

///////draggable_home
document.querySelectorAll('.des_text').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

let activeElement = null;
let offsetX = 0;
let offsetY = 0;

function dragStart(e) {
    activeElement = e.target;
    offsetX = e.clientX - activeElement.getBoundingClientRect().left;
    offsetY = e.clientY - activeElement.getBoundingClientRect().top;
}

function dragEnd(e) {
    activeElement.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
    activeElement = null;
}
function updateDragEvents() {
    if (window.innerWidth <= 1024) { // Adjust this width as needed
        removeDragEvents();
    } else {
        handleDragEvents();
    }
}

// Initial check
updateDragEvents();

// Update on resize
window.addEventListener('resize', updateDragEvents);
///////text animation
document.addEventListener('DOMContentLoaded', function() {
    const homeContainer = document.querySelector('.home_container');
    const nav = document.querySelector('nav');
    
    // Add animation classes to trigger CSS animations
    homeContainer.classList.add('animateHomeContainer');
    if (nav) {
        // Add the animation class to the nav element
        nav.classList.add('animateNav');
    }
});

/////
// document.addEventListener("DOMContentLoaded", () => {
//     // Set initial positions using JavaScript
//     const img1 = document.querySelector('#home_p3_1');
//     img1.style.transform = `translate(2vw, 10vw)`;
//     img1.style.width = `17vw`;
  
//     const img2 = document.querySelector('#home_p3_2');
//     img2.style.transform = `translate(12vw, 25vw)`;
//     img2.style.width = `20vw`;
  
//     const img3 = document.querySelector('#home_p3_3');
//     img3.style.transform = `translate(10vw, 20vw)`;
//     img3.style.width = `14.5vw`;
  
//     const img4 = document.querySelector('#home_p3_4');
//     img4.style.transform = `translate(-21vw, 6vw)`;
//     img4.style.width = `18.5vw`;
  
//     const img5 = document.querySelector('#home_p3_5');
//     img5.style.transform = `translate(-6vw, 4vw)`;
//     img5.style.width = `13.5vw`;
  
//     const img6 = document.querySelector('#home_p3_6');
//     img6.style.transform = `translate(-17vw, 6vw)`;
//     img6.style.width = `16.5vw`;
//   });
  
//   document.addEventListener("mousemove", parallax);
//   parallax.style.zIndex = '1';
  
//   function parallax(event) {
//     // angelcover
//     const img1 = document.querySelector('#home_p3_1');
//     moveImage(img1, event, 2, `translate(2vw, 10vw)`);
  
//     // mummy cover
//     const img2 = document.querySelector('#home_p3_2');
//     moveImage(img2, event, 3, `translate(12vw, 25vw)`);
  
//     // stuff 
//     const img3 = document.querySelector('#home_p3_3');
//     moveImage(img3, event, 1.5, `translate(10vw, 20vw)`);
  
//     // last Day
//     const img4 = document.querySelector('#home_p3_4');
//     moveImage(img4, event, 2.5, `translate(-21vw, 6vw)`);
  
//     // home Parallax _mummy_light
//     const img5 = document.querySelector('#home_p3_5');
//     moveImage(img5, event, 2, `translate(-6vw, 4vw)`);
  
//     //bunceofthing
//     const img6 = document.querySelector('#home_p3_6');
//     moveImage(img6, event, 1.8, `translate(-17vw, 6vw)`);
//   }
  
//   function moveImage(img, event, speed, initialTransform) {
//     const rect = img.getBoundingClientRect(); // Get the current position of the image
//     const x = ((window.innerWidth / 2 - event.clientX) * speed) / 200;
//     const y = ((window.innerHeight / 2 - event.clientY) * speed) / 200;
  
//     // Apply translation relative to its initial position
//     img.style.transform = `${initialTransform} translate(${x}px, ${y}px)`;
//   }
 
