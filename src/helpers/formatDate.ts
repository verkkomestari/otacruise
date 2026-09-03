const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
}

export const formatDate = (date: Date) => date.toLocaleDateString()

export const formatTime = (date: Date) =>
  date.toLocaleTimeString([], TIME_FORMAT)

export const formatDateTime = (date: Date) =>
  `${formatDate(date)} at ${formatTime(date)}`

export const formatTimeRange = (start: Date, end: Date) =>
  `${formatTime(start)}-${formatTime(end)}`

export const formatDateRange = (start: Date, end: Date) =>
  `${start.getDate()} - ${formatDate(end)}`

export const formatDayMonth = (date: Date) =>
  `${date.getDate()}.${date.getMonth() + 1}.`
