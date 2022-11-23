const monthLookup = { 0: 1, 1: 32, 2: 60, 3: 91, 4: 121, 5: 152, 6: 182, 7: 213, 8: 244, 9: 274, 10: 305, 11: 335, };
const monthLookupLeap = { 0: 1, 1: 32, 2: 61, 3: 92, 4: 122, 5: 153, 6: 183, 7: 214, 8: 245, 9: 275, 10: 306, 11: 336, };

function getDecimalTime() {
    const d = new Date();

    const year = d.getFullYear();
    const isLeapYear = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);

    const day = [monthLookup, monthLookupLeap][0+isLeapYear][d.getMonth()] + d.getDate() - 1;

    const seconds = d.getSeconds() + d.getMinutes()*60 + d.getHours()*3600;
    const ms = d.getMilliseconds() + seconds * 1000;

    const days = day + ms/(3600*24*1000);

    return [year, Math.floor(days*100000)/100000, Math.floor(days), Math.floor(days*10%10), Math.floor(days*1000%100), Math.floor(days*100000 % 100)];
}

Number.prototype.zeroPad = function(x) {
    let s = this.toString();
    while (s.length < x) s = "0"+s;
    return s;
}

$(document).ready(() => {
    const stardate = $(".stardate")[0];
    const french = $(".french")[0];
    function updateTime() {
        [year, days, wholeDays, hours, minutes, seconds] = getDecimalTime();
        stardate.innerHTML = `Year ${year}, Day ${days.toFixed(5)}`;
        french.innerHTML = `Year ${year}, Day ${wholeDays}, ${hours}h : ${minutes.zeroPad(2)}m : ${seconds.zeroPad(2)}s`
    }

    setInterval(updateTime, 50);
    updateTime()
});
