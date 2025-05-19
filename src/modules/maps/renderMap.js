import { getTileset } from '../tilesets/index.js'

export const renderMap = (container, mapData) => {
  const fragment = document.createDocumentFragment()

  for (let index = 0; index < mapData.layers.length; index++) {
    const layer = mapData.layers[index]

    if (layer.type !== 'tilelayer') {
      continue
    }

    const layerContainer = document.createElement('div')

    layerContainer.className = 'layer'
    layerContainer.dataset.type = layer.name
    layerContainer.style.zIndex = index

    for (let i = 0; i < layer.data.length; i++) {
      const gid = layer.data[i]

      const tile = document.createElement('div')

      tile.dataset.gid = gid
      tile.className = 'tile'
      tile.style.width = `${mapData.tilewidth}px`
      tile.style.height = `${mapData.tileheight}px`

      if (gid !== 0) {
        const tileset = getTileset(gid, mapData.tilesets)

        if (!tileset) {
          console.error(`Tileset not found for gid: ${gid}`)

          continue
        }

        if (tileset.tiles) {
          for (const { properties } of tileset.tiles) {
            for (const property of properties) {
              tile.dataset[property.name] = property.value
            }
          }
        }

        const tileIndex = gid - tileset.firstgid
        const sx = (tileIndex % tileset.columns) * mapData.tilewidth
        const sy = Math.floor(tileIndex / tileset.columns) * mapData.tileheight

        tile.style.backgroundPosition = `-${sx}px -${sy}px`
        tile.style.backgroundImage = `url(${tileset.image})`
      } else {
        tile.style.backgroundColor = 'transparent'
      }

      layerContainer.appendChild(tile)
    }

    fragment.appendChild(layerContainer)
  }

  container.appendChild(fragment)
}
