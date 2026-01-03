// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((reg) => {
        console.log('Service Worker registered successfully:', reg);
      })
      .catch((err) => {
        console.log('Service Worker registration failed:', err);
      });
  });
}
