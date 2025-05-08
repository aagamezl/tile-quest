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

- [ ] **Collision Layers** (Block movement on specific tiles).
- [ ] **Playable Characters** Move your character with WASD or arrow keys.
- [ ] **Customizable Maps/Tilesets**
  - Load external maps
  - Load external tilesets at runtime
- [ ] **Multiplayer (WebSocket)**
  - Real-time player interactions
  - Shared map state synchronization
- [ ] **Enhanced Character Controls**
  - Sprite animation states (idle/run/jump)
  - Equipment visual effects
- [ ] **Animated Tiles** (Support Tiled’s tile animations).
- [ ] **Camera Follow** (Smoothly center view on the player).

## Try It

```sh
git clone https://github.com/aagamezl/tile-quest.git
cd tile-quest
```
