if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/sleep-cycle/sw.js', { scope: '/sleep-cycle/' })})}