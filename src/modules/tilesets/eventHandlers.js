import { createMapBtn, loadMapForm, mapContainer } from '../../main.js'
import { showToast } from '../utils/showToast.js'

export const handleTilesetImagesUpload = async (event, tilesets) => {
  loadMapForm.querySelector('legend').textContent = `Map Tilesets ${event.target.files.length}/${tilesets.length}`

  if (event.target.files.length === 0) {
    showToast('Tileset Image Error', 'Please select a valid image file (jpg, jpeg, png, gif)')

    return
  }

  if (event.target.files.length < tilesets.length) {
    showToast('Tileset Image Error', `Please select images for all tilesets. Expected: ${tilesets.length} images, but got: ${event.target.files.length}`)

    return
  }

  for (const file of event.target.files) {
    // Make sure `file.name` matches the extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name) === false) {
      showToast('Tileset Image Error', 'Please select a valid image file (jpg, jpeg, png, gif)')

      return
    }

    const tilesetName = file.name.split('.').slice(0, -1).join('.')
    const tileset = tilesets.find((tileset) => tileset.name === tilesetName)

    if (file) {
      tileset.image = window.URL.createObjectURL(file)
    }
  }

  if (mapContainer.children.length === 0) {
    createMapBtn.removeAttribute('disabled')
  }
}
