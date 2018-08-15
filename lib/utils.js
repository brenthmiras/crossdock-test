function get_rdd () {
    const dateObj   = new Date();

    const numberOfDaysToAdd = 2;
    
    // Add 2 days today
    dateObj.setDate(dateObj.getDate() + numberOfDaysToAdd); 

    const month     = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const date      = ('0' + dateObj.getDate()).slice(-2);
    const year      = dateObj.getFullYear();

    const dateString = [month, date, year].join('/');

    return dateString;
}

module.exports = {
    get_rdd
}