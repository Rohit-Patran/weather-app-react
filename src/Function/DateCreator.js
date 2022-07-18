const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//date creator function
function DateCreator(date) {
    const DATE = date.getDate();
    const DAY = DAYS[date.getDay()];
    const MONTH = MONTHS[date.getMonth()];
    const YEAR = date.getFullYear();
    const TIME = date.toTimeString();

    return `${DAY} , ${DATE} ${MONTH} ${YEAR} , ${TIME}`;
}

export default DateCreator;