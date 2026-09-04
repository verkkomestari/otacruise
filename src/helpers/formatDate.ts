const FINNISH_TIME_ZONE = 'Europe/Helsinki'

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: FINNISH_TIME_ZONE,
}

const DAY_FORMAT: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  timeZone: FINNISH_TIME_ZONE,
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString(undefined, { timeZone: FINNISH_TIME_ZONE })

export const formatTime = (date: Date) =>
  date.toLocaleTimeString([], TIME_FORMAT)

export const formatDateTime = (date: Date) =>
  `${formatDate(date)} at ${formatTime(date)}`

export const formatTimeRange = (start: Date, end: Date) =>
  `${formatTime(start)}-${formatTime(end)}`

export const formatDateRange = (start: Date, end: Date) =>
  `${new Intl.DateTimeFormat(undefined, DAY_FORMAT).format(start)} - ${formatDate(end)}`

export const formatDayMonth = (date: Date) =>
  new Intl.DateTimeFormat('fi-FI', {
    day: 'numeric',
    month: 'numeric',
    timeZone: FINNISH_TIME_ZONE,
  }).format(date)
