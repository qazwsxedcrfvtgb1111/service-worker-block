self.addEventListener('fetch', e => {
  if(e.request.url.startsWith('chrome-extension://')) {
    e.respondWith(null);
  }
})