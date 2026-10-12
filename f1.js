function toBase64(str) {
  // version front qui gère é è à etc.
  return btoa(unescape(encodeURIComponent(str)));
}
