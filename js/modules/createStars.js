// import { getStarsArray } from "../helpers/getStarsArray";
import getStarsArray from "../helpers/getStarsArray";

const createStars = (num) => {
    const starsArr = getStarsArray(num)
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

export default createStars