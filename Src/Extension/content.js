// Change the server URL where data is sent
const SERVER_URL = 'https://your-server.com/api/skip-segments';

const config = {
  skipIntro: false,
  skipAds: false,
  skipSummary: false,
  skipSponsor: false,
  skipEnd: false,
  skipImportant: false,
  skipInteractions: false,
  skipExtraScenes: false,
  skips: [] // List of segments to skip from user input
};

function handleVideo() {
  // Handle skipping ads
  if (config.skipAds) {
    const skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
      skipButton.click();
    }
  }

  // Handle skipping other segments based on configuration and user data sent
  // Example: Skip segments without music
  if (config.skipExtraScenes) {
    const video = document.querySelector('video');
    if (video && !video.src.includes('music')) {
      video.currentTime += 10; // Skip 10 seconds if there is no music
    }
  }

  // Similar handling for other skip types
}

function updateConfig(newConfig) {
  Object.assign(config, newConfig);
}

function sendSkipsToServer() {
  fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(config.skips),
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
}

chrome.storage.sync.get('config', function(data) {
  if (data.config) {
    updateConfig(data.config);
  }
});

setInterval(handleVideo, 1000);

// Send segments to skip to the server when user configuration changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.config) {
    sendSkipsToServer();
  }
});