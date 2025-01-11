export function resolveTheme(theme) {
  switch (theme) {
    case 'blue':
      return 'bg-blue-500 hover:bg-blue-700 text-stone-100'
    case 'green':
      return 'bg-green-500 hover:bg-green-700 text-stone-100'
    case 'red':
      return 'bg-red-500 hover:bg-red-700 text-stone-100'
    default:
      return 'bg-blue-500 hover:bg-blue-700 text-stone-100'
  }
}
