const DateFormatter = () => {

    const SunDate = date => {
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    const GetHour = date => {
        const hours = date.getHours();
        return `${hours > 9 ? hours : "0" + hours}:00`;
    
    }
    return {
        SunDate,
        GetHour
    }
}


export default DateFormatter;