const okng = (flg = null) => {
    if (flg === null) {
        const ran = Math.floor(Math.random() * 2)
        return (ran % 2 === 0 ) ? true : false;
    } else if (flg) {
        return true
    }

    return false
}

module.exports = okng;