export const getCurrentDates = () => {
    const dates = [];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate()

    for (let i = 1; i < daysInCurrentMonth; i++) {
        dates.push(new Date(currentDate.getFullYear(), currentMonth, i))
        
    }
    return dates
} 