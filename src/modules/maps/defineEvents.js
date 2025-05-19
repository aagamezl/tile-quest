import {
  mapContainer,
  createMapBtn,
  destroyMapBtn,
  toggleGridBtn,
  mapFileUpload
} from '../../main.js'
import {
  handleCreateMap,
  handleDestroyMap,
  handleMapFileUpload,
  handleGridLines,
  handleZoomChange
} from './eventsHandler.js'

export const defineEvents = () => {
  createMapBtn.addEventListener('click', handleCreateMap)
  destroyMapBtn.addEventListener('click', handleDestroyMap)
  mapFileUpload.addEventListener('change', handleMapFileUpload)
  toggleGridBtn.addEventListener('change', handleGridLines)

  // Add zoom event listeners
  const zoomRadios = mapContainer.parentElement.querySelectorAll('input[name="zoomLevel"]')
  zoomRadios.forEach(radio => {
    radio.addEventListener('change', () => handleZoomChange(radio.value))
  })
}
