/* Φωτόνιο: απλός service worker για να μπορεί να εγκατασταθεί η εφαρμογή. Δεν κρατά αντίγραφα. */
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(function(){return new Response('<meta charset="utf-8"><body style="background:#0F1B2D;color:#EEF2F8;font-family:sans-serif;text-align:center;padding:40px">Χρειάζεται σύνδεση στο internet για να παίξεις.</body>',{headers:{'Content-Type':'text/html; charset=utf-8'}})}));
  }
});
