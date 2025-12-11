// check if it is a leap year 

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 ) 
}


console.log(isLeapYear(2027))