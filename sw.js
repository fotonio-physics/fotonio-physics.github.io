/* Φωτόνιο Quiz: service worker για να εγκαθίσταται η εφαρμογή. Δεν κρατά αντίγραφα: η σελίδα φορτώνεται πάντα από το δίκτυο.
   Στην ενεργοποίηση σβήνει ό,τι cache είχε μείνει από παλιότερες εκδόσεις. Πόρτα fotonio-physics.github.io (παλιές εγκαταστάσεις). */
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){
  e.waitUntil((self.caches?caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k)}))}):Promise.resolve()).catch(function(){}).then(function(){return self.clients.claim()}));
});
self.addEventListener('fetch',function(e){
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request.url,{cache:'no-store',credentials:'same-origin'}).then(function(r){return r.redirected?fetch(e.request):r}).catch(function(){return new Response('<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><body style="background:#0F1B2D;color:#EEF2F8;font-family:sans-serif;text-align:center;padding:40px">Χρειάζεται σύνδεση στο internet.</body>',{headers:{'Content-Type':'text/html; charset=utf-8'}})}));
  }
});
