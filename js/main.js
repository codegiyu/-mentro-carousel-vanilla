// import createStars from "./modules/createStars";

const DATA = [
    {
        name: "Prankur Gupta",
        job: "SDE @Amazon",
        rating: "4.9",
        description: "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
        image: "./img/prankur.png",
        darkGreen: false
    },
    {
        name: "Saurav Pal",
        job: "SDE-2 @Amazon",
        rating: "5.0",
        description: "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
        image: "./img/saurav.png",
        darkGreen: true
    },
    {
        name: "Saumya Singh",
        job: "Software Engineer @Red Hat",
        rating: "5.0",
        description: "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
        image: "./img/saumya.png",
        darkGreen: false
    },
    {
        name: "Keshav Bathla",
        job: "SDE-1 @Groww",
        rating: "5.0",
        description: "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
        image: "./img/keshav.png",
        darkGreen: true
    },
    {
        name: "Ankita",
        job: "ML Engineer @Firework",
        rating: "5.0",
        description: "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ",
        image: "./img/ankita.png",
        darkGreen: false
    },
]

let starsWrap = document.getElementsByClassName("stars_wrap")[0]
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")
let carousel = document.querySelector(".dashed_circle_wrap")
let carouselImages = document.getElementsByClassName("images")
let mainImg = document.querySelector(".main_img")


const getStarsArray = (num) => {
    const starsArr = []
    while (num > 0) {
        if (num >= 1) {
            starsArr.push(1)
            num--
        } else {
            starsArr.push(0.5)
            num = 0
        }
    }

    return starsArr
}

const createStars = (num) => {
    const starsArr = getStarsArray(num)
    console.log(starsArr)
    let starsElements = ``

    for (let num of starsArr) {
        if (num === 1) {
            starsElements += `<img src="./img/star.svg" alt="" class="" />`
        } else {
            starsElements += `<img src="./img/half-star.svg" alt="" class="" />`
        }
    }

    return `<div class="stars">${starsElements}</div>`
}

starsWrap.innerHTML = createStars(4.9)

let dataIndex = 0
let carouselRotation = 0
let imgRotation = 0

prevBtn.addEventListener("click", handleCarouselPrev)
nextBtn.addEventListener("click", handleCarouselNext)

function handleCarouselPrev() {
    dataIndex + 1 > 4 ? dataIndex = 0 : dataIndex++

    carouselRotation = dataIndex * -40

    imgRotation = carouselRotation * -1

    carousel.style.transform = `rotate(${carouselRotation}deg)`

    for (let element of carouselImages) {
        element.style.transform = `rotate(${imgRotation}deg)`
    }

    mainImg.src = DATA[dataIndex].image

    console.log(carouselRotation, imgRotation, dataIndex)
}

function handleCarouselNext() {
    dataIndex - 1 < 0 ? dataIndex = 4 : dataIndex--

    carouselRotation = dataIndex * -40

    imgRotation = carouselRotation * -1

    carousel.style.transform = `rotate(${carouselRotation}deg)`

    for (let element of carouselImages) {
        element.style.transform = `rotate(${imgRotation}deg)`
    }

    mainImg.src = DATA[dataIndex].image

    console.log(carouselRotation, imgRotation, dataIndex)
}