// Send a message to the background script to request friendly links.
chrome.runtime.sendMessage({ action: 'highlightLinks' }, (response) => {
  if (response.action === 'highlightLinks') {
    // Get the array of friendly links from the response.
    const friendlyLinks = response.linksToHighlight;
	
	console.log('Friendly users loaded:', friendlyLinks);
	const isYouTube = window.location.hostname.includes('youtube.com');

    // Highlight the friendly links on the webpage.
    friendlyLinks.forEach((link) => {
      const elements = document.querySelectorAll(`a[href*="${link}"]`);
	  
      elements.forEach((element) => {
        element.style.color = 'green !important';
		console.log("Changed colour");
      });
    });
  }
});
