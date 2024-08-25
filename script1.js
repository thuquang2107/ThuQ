///////text animation
document.addEventListener('DOMContentLoaded', function() {
    const homeContainer = document.querySelector('.home_container');
    const nav = document.querySelector('nav');
    
    homeContainer.classList.add('animateHomeContainer');
    if (nav) {
        nav.classList.add('animateNav');
    }
});



/////different script to ensure that the sticker-set and draggable not overlayed
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
    if (window.innerWidth <= 1024) { ///// Adjust this width as needed
        removeDragEvents();
    } else {
        handleDragEvents();
    }
}


updateDragEvents();

window.addEventListener('resize', updateDragEvents);




