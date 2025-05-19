# TileQuest 🎮🖥️

**TileQuest** is a lightweight HTML5/CSS/JavaScript engine for rendering Tiled maps (`.tmx`/`.json`) with keyboard-controlled character movement. It supports multi-layer maps, embedded tilesets, and smooth player navigation.

## Features

* **Tiled Map Integration** – Loads maps exported from [Tiled Map Editor](https://www.mapeditor.org/).
* **Multi-Layer Rendering** – Draws stacked layers (terrain, objects, decorations).
* **Embedded Tilesets** – Requires tileset metadata embedded in the map file.

## How It Works

Parses Tiled maps, renders layers onto The DOM, and handles player movement using the keyboard.

## Play Live Demo 🚀
A live version is available! [Try TileQuest](https://aagamezl.github.io/tile-quest/)

## Planned Improvements

- [ ] **Collision Detection** (Block movement on specific tiles).
- [ ] **Playable Characters** Move your character with WASD or arrow keys.
- [ ] **Customizable Maps/Tilesets**
  - [x] Load external maps
  - [x] Load external tilesets at runtime
- [ ] **Multiplayer (WebSocket)**
  - Real-time player interactions
  - Shared map state synchronization
- [ ] **Enhanced Character Controls**
  - Sprite animation states (idle/run/jump)
  - Equipment visual effects
- [ ] **Animated Tiles** (Support Tiled’s tile animations).
- [ ] **Camera Follow** (Smoothly center view on the player).

## Try It

1. Clone the repository:
```sh
git clone https://github.com/aagamezl/tile-quest.git
cd tile-quest
```

2. Install dependencies:
```sh
npm install
```

## Development

Start the development server:
```sh
npm run start:dev
```

This will start a local development server with hot-reload enabled. Open your browser to `http://localhost:5173` to view the application.

## Production Build

To build for production:
```sh
npm run build
```

This will create a production-ready build in the `dist` directory. You can then serve the contents of the `dist` directory using any web server.

To preview the production build locally:
```sh
npm run preview
```

This will start a local server to preview the production build.

## Assets

Here are the assets used in this project:

- [map.tmj](assets/map.tmj) - Tiled map file
- [barrel.png](assets/tileset/barrel.png) - Barrel tile texture
- [dirt.png](assets/tileset/dirt.png) - Dirt tile texture
- [grass.png](assets/tileset/grass.png) - Grass tile texture
- [house.png](assets/tileset/house.png) - House tile texture
- [signs.png](assets/tileset/signs.png) - Signs tile texture
- [treetop.png](assets/tileset/treetop.png) - Tree top tile texture
- [trunk.png](assets/tileset/trunk.png) - Tree trunk tile texture
