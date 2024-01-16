const DateFormatter = () => {
    const InitialUpperCase = string => {
        return string.slice(0,1).toUpperCase() + string.slice(1);
    }
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
    const FullTime = date => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${ZeroPadding(hours)}:${ZeroPadding(minutes)}`
    }
    const WeekDay = date => {
        const options = {
            weekday: "short",
        }
        return InitialUpperCase(new Intl.DateTimeFormat("en-EN", options).format(date));
    }
    const MonthAndDate = date => {
        const options = {
            month: "short",
            day: "numeric"
        }
        return InitialUpperCase(new Intl.DateTimeFormat("en-EN", options).format(date));
    }
    
    const WeekdayAndMonth = date => {
        const options = {
            weekday: "short",
            month: "short",
            day: "numeric"
        }
        return InitialUpperCase(new Intl.DateTimeFormat("en-EN", options).format(date));
    }

    return {
        SunDate,
        GetHour, 
        FullDate,
        WeekDay,
        WeekdayAndMonth,
        MonthAndDate,
        FullTime
    }
}


export default DateFormatter;