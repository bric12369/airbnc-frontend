

export function convertDateISOtoString(ISODate) {

    return new Date(ISODate).toDateString()

}

export function getDateRange(startISODate, endISODate) {

    const allDates = []

    const startDate = new Date(startISODate)
    const endDate = new Date(endISODate)
    let currentDate = new Date(startDate)

    while (currentDate <= endDate) {
        allDates.push(convertDateISOtoString(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return allDates
}