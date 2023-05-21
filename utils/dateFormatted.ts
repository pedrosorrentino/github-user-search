export const dateFormatted = (dateString: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const date = new Date(dateString)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  const formattedDate = `${day} ${month} ${year}`
  return formattedDate
}
