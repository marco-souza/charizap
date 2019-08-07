const DAY = 24 * 60 * 60 * 1000

export const setCookie = (name, value, days) => {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + (days * DAY))
    expires = date.toUTCString()
  }
  const cookie = `${name}=${value || ''}; expires=${expires}; path=/`
  document.cookie = cookie
}

export const getCookie = name => {
  const listKeys = document.cookie
    .split(';')
    .map(item => item.trim())
    .map(item => item.split('='))
    .filter(([key, val]) => key === name)

  if (!listKeys.length) return null
  const [, value] = listKeys[0]

  return value
}

export const eraseCookie = (name) => {
  document.cookie = `${name}=; Max-Age=-99999999; path=/`
}
