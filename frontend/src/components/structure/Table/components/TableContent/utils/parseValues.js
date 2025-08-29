export function parseArrayToString(value) {
  return value
    .filter(v => v != null)
    .map(v => {
      if (typeof v !== 'object') return v

      const firstKey = Object.keys(v)[1]

      return v[firstKey] ?? JSON.stringify(v)
    })
    .join(', ')
}

export function parseValues(value) {
  if (!value) return ''

  if (!Array.isArray(value)) return String(value)

  return parseArrayToString(value)
}
