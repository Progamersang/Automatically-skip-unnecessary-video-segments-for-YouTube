document.getElementById('save').addEventListener('click', function() {
    const skipIntro = document.getElementById('skipIntro').checked;
    const skipAds = document.getElementById('skipAds').checked;
    
    // Save settings to storage
    chrome.storage.sync.set({
      config: {
        skipIntro,
        skipAds,
        // Add other settings here
      }
    });
  });