const DateFormatter = () => {

    const ZeroPadding = nr => {
        return nr > 9 ? nr : "0" + nr;
    }
    const SunDate = date => {
        return `${ZeroPadding(date.getHours())}:${ZeroPadding(date.getMinutes())}`;
    }
    const GetHour = date => {
        const hours = date.getHours();
        return `${ZeroPadding(hours)}:00`;
    
    }
    const FullDate = date => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${ZeroPadding(year)}-${ZeroPadding(month)}-${ZeroPadding(day)} ${ZeroPadding(hours)}:${ZeroPadding(minutes)}`;
    }
    return {
        SunDate,
        GetHour, 
        FullDate
    }
}


export default DateFormatter;