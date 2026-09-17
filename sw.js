self.addEventListener('fetch', function(event) {
  // 简单的离线缓存逻辑，让浏览器识别为PWA
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
