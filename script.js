
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



document.addEventListener("click", handleEvent);

// Listen for touch events (tablets, phones)
document.addEventListener("touchend", function(event) {
    // Adjust touch event to work like a click
    let touch = event.changedTouches[0];
    let simulatedEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    touch.target.dispatchEvent(simulatedEvent);
    handleEvent(simulatedEvent);
}, false);





