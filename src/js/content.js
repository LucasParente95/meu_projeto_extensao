chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'highlight-text') {
        const selectedText = window.getSelection().toString();
        alert(`Texto destacado: ${selectedText}`);
    }
});
