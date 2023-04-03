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

export default getStarsArray