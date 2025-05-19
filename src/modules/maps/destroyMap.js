export const destroyMap = (container) => {
  const layers = container.querySelectorAll('.layer')

  layers.forEach(layer => {
    layer.remove()
  })

  container.style.width = 0
  container.style.height = 0
}
