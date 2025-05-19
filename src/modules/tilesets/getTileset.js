export const getTileset = (gid, tilesets) => {
  // Sort tilesets by first gid descending (most specific first)
  const sorted = [...tilesets].sort((a, b) => b.firstgid - a.firstgid)

  for (const ts of sorted) {
    if (gid >= ts.firstgid) {
      return ts
    }
  }

  return null // Not found
}
