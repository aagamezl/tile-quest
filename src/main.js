const createMap = ({ container, height, width, tileWidth, tileHeight }) => {
  container.style.width = `${width * tileWidth}px`
  container.style.height = `${height * tileHeight}px`
};

const renderMap = (container, mapData) => {
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
        const tileset = getTileSet(gid, mapData.tilesets)

        if (!tileset) {
          console.error(`Tileset not found for gid: ${gid}`)
          continue
        }

        const solidTiles = getSolidTiles(tileset)

        const tileIndex = gid - tileset.firstgid
        const sx = (tileIndex % tileset.columns) * mapData.tilewidth
        const sy = Math.floor(tileIndex / tileset.columns) * mapData.tileheight

        tile.style.backgroundPosition = `-${sx}px -${sy}px`
        tile.style.backgroundImage = `url(${tileset.image})`

        if (solidTiles.includes(tileIndex)) {
          tile.style.backgroundColor = 'rgba(255, 0, 0, 0.5)' // Red for solid tiles
        }
      } else {
        tile.style.backgroundColor = 'transparent'
      }

      layerContainer.appendChild(tile)
    }

    container.appendChild(layerContainer)
  }
}

// Display grid lines to show every single tile
const displayGridLines = (container, mapData) => {
  const layerContainer = document.createElement('div')
  layerContainer.className = 'layer grid'

  for (let i = 0; i < mapData.width; i++) {
    for (let j = 0; j < mapData.height; j++) {
      const gridLine = document.createElement('div')

      gridLine.className = 'tile grid-line'
      gridLine.style.width = `${mapData.tilewidth}px`
      gridLine.style.height = `${mapData.tileheight}px`

      layerContainer.appendChild(gridLine)
    }
  }

  container.appendChild(layerContainer)
}

const getTileSet = (gid, tilesets) => {
  // Sort tilesets by first gid descending (most specific first)
  const sorted = [...tilesets].sort((a, b) => b.firstgid - a.firstgid);

  for (const ts of sorted) {
    if (gid >= ts.firstgid) {
      return ts;
    }
  }

  return null; // Not found
}

const getSolidTiles = (tileset) => {
  if (!tileset.tiles) {
    return []
  }

  return tileset.tiles.reduce((tiles, tile) => {
    if (tile.properties && tile.properties.find(property => property.name === 'solid' && property.value === true)) {
      tiles.push(tile.id)
    }

    return tiles
  }, [])
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.map');


  createMap({
    container,
    height: tilemap.height,
    width: tilemap.width,
    tileWidth: tilemap.tilewidth,
    tileHeight: tilemap.tileheight,
  });

  renderMap(container, tilemap)

  displayGridLines(container, tilemap)
});
