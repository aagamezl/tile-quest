import { defineEvents } from './modules/maps/defineEvents.js'
import { activeZoomControls } from './modules/maps/eventsHandler.js'
import { SpriteManager } from './modules/sprites/spriteManager.js'
import './modules/sprites/spriteStyles.css'

export const mapContainer = document.querySelector('#mapContainer')
export const createMapBtn = document.querySelector('#createMapBtn')
export const destroyMapBtn = document.querySelector('#destroyMapBtn')
export const toggleGridBtn = document.querySelector('#toggleGridBtn')
export const loadMapBtn = document.querySelector('#loadMapBtn')
export const loadMapForm = document.querySelector('#loadMapForm')
export const mapFileUpload = document.querySelector('#mapFileUpload')
export const spriteFileUpload = document.querySelector('#spriteFileUpload')
export const spritePreviewContainer = document.querySelector('#spritePreviewContainer')

// Initialize sprite manager
export const spriteManager = new SpriteManager()

// Sprite upload handler
spriteFileUpload.addEventListener('change', async (e) => {
  const files = e.target.files
  for (const file of files) {
    try {
      await spriteManager.addSprite(file)
    } catch (error) {
      console.error(`Error loading sprite ${file.name}:`, error)
    }
  }
  spriteManager.createPreview()
})

// Initially disable zoom controls
activeZoomControls(false)

defineEvents()
