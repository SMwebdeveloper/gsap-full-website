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

// Section 1 animation

function section1() {
    const tl = gsap.timeline()
    tl.from("header", {
        y: -50,
        opacity: 0,
        duration: 1,
    })

    tl.from(".text-content h1, .text-content p", {
        y: 100,
        opacity: 0,
        duration: 0.8,
    })
}

section1()

// section 2 animation

function section2() {
    const sectionTwo = document.querySelector(".section2")
    const cursor = document.querySelector(".cursor")
    const body = document.querySelector("body")

    // now we want to excute this code whenever our  mouse enter in our section2

    sectionTwo.addEventListener("mousemove", () => {
        gsap.to(cursor, {
            height: "100px",
            width: "100px",
            innerHTML: "<i class='fa-solid fa-volume-high'></i>",
            fontSize: "25px",
            color: "black",
            margin: "20px",
            background:"white"
        })
    })

    // add we want our body color to change to this

    gsap.to(body, {
        background: "#0f0f0f",
        color: "white"
    })

    // now we want to excute this code whenever our mouse leave in our section2

    sectionTwo.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            height: '18px',
            width: '18px',
            margin: 0,
            innerHTML: ""
        })
    })

    // add we want our body color to change to this

    gsap.to(body, {
        background: "white",
        color: "#0f0f0f"
    })
}

section2()

// section 3 animation
function section3 () {
  const cursor = document.querySelector(".cursor")
  const sectionThree = document.querySelector('.section3')

  sectionThree.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
        background:"#0f0f0f"
    })
  })
}

section3()

