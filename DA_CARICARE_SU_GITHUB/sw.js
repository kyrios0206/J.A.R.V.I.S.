// Jarvis: lavoratore minimo per rendere l'app installabile (i dati arrivano sempre freschi da Jarvis)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
