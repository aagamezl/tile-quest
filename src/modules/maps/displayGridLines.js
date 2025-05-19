export const displayGridLines = (container, mapData) => {
  const layerContainer = document.createElement('div')
  layerContainer.className = 'layer grid'

  const totalWidth = mapData.width * mapData.tilewidth
  const totalHeight = mapData.height * mapData.tileheight

  layerContainer.style.width = `${totalWidth}px`
  layerContainer.style.height = `${totalHeight}px`

  layerContainer.style.backgroundSize = `${mapData.tilewidth}px ${mapData.tileheight}px`

  container.appendChild(layerContainer)
}
