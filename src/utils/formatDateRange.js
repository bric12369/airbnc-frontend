
export function convertDateISOtoString(ISODate) {

    return new Date(ISODate).toDateString()

}

export function getDateRange(startISODate, endISODate) {

    const allDates = []

    const startDate = new Date(startISODate)
    startDate.setHours(12, 0, 0, 0)
    const endDate = new Date(endISODate)
    endDate.setHours(12, 0, 0, 0)
    let currentDate = new Date(startDate)

    while (currentDate <= endDate) {
        allDates.push(convertDateISOtoString(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return allDates
}