/* eslint-disable no-useless-concat */
function ConvertToDate(stampDate) {
    const monthsArr = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    const date = new Date(stampDate * 1000);
    const month = monthsArr[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    let completed = 0;
    const aktDate = new Date();

    if (day === aktDate.getDate() && month === monthsArr[aktDate.getMonth()]) {
        completed = 'Heute,' + ` ${hours}:${minutes.substr(-2)} Uhr`;
    } else {
        completed = day < 10 ? `0${day}.` + ` ${month}.` + ` ${hours}:${minutes.substr(-2)} Uhr` : `${day}.` + ` ${month}.` + ` ${hours}:${minutes.substr(-2)} Uhr`;
    }
    return completed;
}

export default ConvertToDate;
