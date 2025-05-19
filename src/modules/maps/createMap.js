import { renderMap } from './renderMap.js'

export const createMap = (container, tileMap) => {
  const { height, width, tilewidth: tileWidth, tileheight: tileHeight } = tileMap

  container.style.width = `${width * tileWidth}px`
  container.style.height = `${height * tileHeight}px`

  renderMap(container, tileMap)
}
