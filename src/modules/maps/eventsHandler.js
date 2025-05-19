import {
  mapContainer,
  createMapBtn,
  destroyMapBtn,
  loadMapForm,
  toggleGridBtn
} from '../../main.js'
import { createMap } from './createMap.js'
import { renderMap } from './renderMap.js'
import { displayGridLines } from './displayGridLines.js'
import { destroyMap } from './destroyMap.js'
import { hideGridLines } from './hideGridLines.js'
import { showToast } from '../utils/showToast.js'
import { createTilesetFileUpload } from '../tilesets/index.js'

export let tileMap = null

export const handleCreateMap = (event) => {
  event.preventDefault()

  createMap(
    mapContainer,
    tileMap
  )

  renderMap(mapContainer, tileMap)

  if (toggleGridBtn.checked) {
    displayGridLines(mapContainer, tileMap)
  }

  destroyMapBtn.removeAttribute('disabled')
  createMapBtn.setAttribute('disabled', 'true')
  toggleGridBtn.removeAttribute('disabled')

  activeZoomControls(true)

  const zoomRadio = document.querySelector('input[name="zoomLevel"]:checked')
  handleZoomChange(zoomRadio.value)
}

export const handleDestroyMap = (event) => {
  event.preventDefault()

  destroyMap(mapContainer)

  destroyMapBtn.setAttribute('disabled', 'true')
  createMapBtn.removeAttribute('disabled')
  toggleGridBtn.setAttribute('disabled', 'true')
}

export const handleMapFileUpload = async (event) => {
  event.preventDefault()

  const file = event.target.files[0]

  // Make sure `file.name` matches our extensions criteria
  if (/\.(tmj|json)$/i.test(file.name) === false) {
    showToast('Map Format Error', 'Please select a valid Tiled map file (tmj, json)')
  }

  if (file) {
    tileMap = JSON.parse(await file.text())

    document.getElementById('tilesetUpload')?.remove()

    const tilesetUploadControl = createTilesetFileUpload(tileMap.tilesets)

    loadMapForm.appendChild(tilesetUploadControl)
  }
}

export const handleGridLines = (event) => {
  if (event.target.checked) {
    displayGridLines(mapContainer, tileMap)
  } else {
    hideGridLines(mapContainer)
  }
}

export const handleZoomChange = (zoomLevel) => {
  const mapContainer = document.querySelector('#mapContainer')

  if (mapContainer && tileMap) {
    mapContainer.style.zoom = zoomLevel
  }
}

export const activeZoomControls = (mapExists) => {
  const zoomRadios = document.querySelectorAll('input[name="zoomLevel"]')

  zoomRadios.forEach(radio => {
    radio.disabled = !mapExists
  })
}
