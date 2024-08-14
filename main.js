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
            background: "white"
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
function section3() {
    const cursor = document.querySelector(".cursor")
    const sectionThree = document.querySelector('.section3')

    sectionThree.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            background: "#0f0f0f"
        })
    })
}

section3()

// section 4 animation
function section4() {
    let sectionFour = document.querySelector(".section4");
    let cursor = document.querySelector(".cursor");

    sectionFour.addEventListener("mouseenter", () => {
        cursor.style.background = "#0f0f0f";
    });

    gsap.to(sectionFour, {
        background: "#0f0f0f",
        color: "white",

        scrollTrigger: {
            trigger: ".section4 .four .moving-text",
            start: "bottom center",
            end: "botttom center",
            scrub: 2,
            // markers: true,
        },
    });

    gsap.to(".services", {
        color: "white",
        scrollTrigger: {
            trigger: ".section4 .four .moving-text",
            start: "bottom center",
            end: "botttom center",
            scrub: 2,
            // markers: true,
        },
    });

    // FOR CHANGING TO OUR CURSOR COLOR TO WHITE WHEN BACKGROUND WILL TURN ITO BLACK

    sectionFour.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            background: "white",
            scrollTrigger: {
                trigger: ".section4 .four .moving-text",
                start: "bottom center",
                end: "bottom center",
                scrub: 0.1,
                // markers: true,
            },
        });
    });

    // =======project======

    let parentEl = document.querySelector(".bg");
    let childEl = document.querySelectorAll(".first-project .first");

    childEl.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            let ids = item.getAttribute("data-id");
            let bgEl = document.querySelector(`.id-${ids}`);
            // console.log(bgEl); HERE U CAN SEE WE ARE GETTING THE VIDEO THAT WE ARE SELECTING

            // NOW WE WANT TO DISPLAY THAT PARTICULAR VIDEO THAT WE ARE SELECTIONG

            parentEl.querySelectorAll("video").forEach((video) => {
                video.style.display = "none";
            });

            bgEl.style.display = "block"; //now u can see we are getting video according to our list that we have made in our html

            // NOW WE WANT OUR CURSOR TO INCREASE ITS SIZE WHEN IT ENTER TO THE RED DIV

            gsap.to(cursor, {
                height: "100px",
                width: "100px",
                duration: 0.1,
                innerHTML: "<P>See Projects</P>",
                fontSize: "15px",
                margin: "20px",
            });
        });

        // NOW WE WANT IT TO COME BACK TO ITS NORAML POSITON ON MOUSE LEAVE

        item.addEventListener("mouseleave", () => {
            let ids = item.getAttribute("data-id");
            let bgEl = document.querySelector(`.id-${ids}`);

            parentEl.querySelectorAll("video").forEach((video) => {
                video.style.display = "none";
            });

            bgEl.style.display = "none";

            // NOW WE WANT OUR CURSOR TO CAME BACK TO ITS NORMAL SIZE WHEN IT COME OUT TO THE RED DIV

            gsap.to(cursor, {
                height: "18px",
                width: "18px",
                duration: 0.1,
                innerHTML: "",
                margin: 0,
            });
        });
    });
}
section4();


