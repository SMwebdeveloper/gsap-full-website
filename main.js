// NOW LETS ADD ANIMATION TO OUR CURSOR


function cursor() {
    let cursor = document.getElementsByClassName('cursor')
    let body = document.querySelector('body')

    // Now we are going to add an event lister on our mouse

    body.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.x + "px",
            y: e.y + "px"
        })
    })
}

cursor()