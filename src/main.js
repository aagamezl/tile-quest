import { defineEvents } from './modules/maps/defineEvents.js'
import { activeZoomControls } from './modules/maps/eventsHandler.js'

export const mapContainer = document.querySelector('#mapContainer')
export const createMapBtn = document.querySelector('#createMapBtn')
export const destroyMapBtn = document.querySelector('#destroyMapBtn')
export const toggleGridBtn = document.querySelector('#toggleGridBtn')
export const loadMapBtn = document.querySelector('#loadMapBtn')
export const loadMapForm = document.querySelector('#loadMapForm')
export const mapFileUpload = document.querySelector('#mapFileUpload')

// Initially disable zoom controls
activeZoomControls(false)

defineEvents()
