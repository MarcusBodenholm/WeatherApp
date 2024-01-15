const DateFormatter = () => {

    const SunDate = date => {
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    return {
        SunDate
    }
}


export default DateFormatter;