import { handleTilesetImagesUpload } from './eventHandlers.js'

export const createTilesetFileUpload = (tilesets) => {
  const wrapper = document.createElement('div')
  wrapper.id = 'tilesetUpload'
  wrapper.className = 'mb-3'

  const fieldset = document.createElement('fieldset')
  fieldset.className = 'border p-3'

  const title = document.createElement('legend')
  title.textContent = `Map Tilesets 0/${tilesets.length}`
  fieldset.appendChild(title)

  const label = document.createElement('label')
  label.className = 'form-label'
  label.setAttribute('for', 'tilesetImagesUpload')
  label.textContent = 'Images'

  const input = document.createElement('input')
  input.className = 'form-control'
  input.type = 'file'
  input.multiple = true
  input.id = 'tilesetImagesUpload'
  input.accept = 'image/png, image/jpeg, image/gif'
  input.addEventListener('change', (event) => handleTilesetImagesUpload(event, tilesets))

  fieldset.appendChild(label)
  fieldset.appendChild(input)

  wrapper.appendChild(fieldset)

  return wrapper
}
