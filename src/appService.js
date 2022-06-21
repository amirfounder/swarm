export const copy = async (s) => {
  await navigator.clipboard.writeText(s)
  await chrome.runtime.sendMessage({method: 'saveCopied', data: s})
}

export const log = (message) => {
  chrome.runtime.sendMessage({method: 'log', message})
}

const getTimeOfDay = (now = null) => {
  if (now === null) {
    now = new Date()
  }
  const hours = now.getHours()
  const timeOfDay = {
    morning: new Set([6, 7, 8, 9, 10, 11]),
    afternoon: new Set([12, 13, 14, 15]),
    evening: new Set([16, 17, 18, 19, 20, 21, 22])
  }
  if (timeOfDay.morning.has(hours)) return 'morning'
  if (timeOfDay.afternoon.has(hours)) return 'afternoon'
  if (timeOfDay.evening.has(hours)) return 'evening'
}

const getDayOfWeek = (now = null) => {
  if (now === null) {
    now = new Date()
  }
  const dayOfWeekIndex = now.getDay()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[dayOfWeekIndex]
}

export const formatTemplate = (template, personalizationData) => {
  const now = new Date()
  personalizationData.dayOfWeek = getDayOfWeek(now)
  personalizationData.timeOfDay = getTimeOfDay(now)
  return Object.entries(personalizationData).reduce((prev, [key, value]) => {
    return value ? prev.replaceAll(`{${key}}`, value) : prev
  }, template)
}
