// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// PWA installation functionality
let deferredPrompt;

// window.addEventListener('beforeinstallprompt', event => {
//     event.preventDefault();
//     deferredPrompt = event;

//     const installBtn = document.getElementById('installBtn');
//     installBtn.style.display = 'block';

//     installBtn.addEventListener('click', () => {
//         deferredPrompt.prompt();
//         deferredPrompt.userChoice.then(choiceResult => {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('PWA installed');
//             }
//             deferredPrompt = null;
//         });
//     });
// });

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(err => console.error('Service Worker registration failed:', err));
}
