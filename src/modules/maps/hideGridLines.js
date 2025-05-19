export const hideGridLines = (container) => {
  const grid = container.querySelector('.grid')

  if (grid) {
    grid.remove()
  }
}
