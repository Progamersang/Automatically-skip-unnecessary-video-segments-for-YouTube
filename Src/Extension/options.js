document.getElementById('saveOptions').addEventListener('click', function() {
  const skipSummary = document.getElementById('skipSummary').checked;
  const skipSponsor = document.getElementById('skipSponsor').checked;
  const skipEnd = document.getElementById('skipEnd').checked;
  const skipImportant = document.getElementById('skipImportant').checked;
  const skipInteractions = document.getElementById('skipInteractions').checked;
  const skipExtraScenes = document.getElementById('skipExtraScenes').checked;

  // Save settings to storage
  chrome.storage.sync.set({
    config: {
      skipSummary,
      skipSponsor,
      skipEnd,
      skipImportant,
      skipInteractions,
      skipExtraScenes
    }
  });
});