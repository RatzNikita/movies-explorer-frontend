export function convertSecondsToHHMM(minutes) {
    const seconds = minutes * 60
    const date = new Date(seconds * 1000).toISOString().slice(11, 16).split(':').map(number => {
        if (number.slice(0, 1) === '0') {
            return number.slice(1)
        }
        return number
    })
    if(date[0] === '0') {
        return `${date[1]}м`
    } else {
        return ` ${date[0]}ч ${date[1]}м`
    }
}
