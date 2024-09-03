document.getElementById('start-recording').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: 'start-recording' });
    document.getElementById('status').textContent = 'Gravando...';
    document.getElementById('start-recording').disabled = true;
    document.getElementById('stop-recording').disabled = false;
});

document.getElementById('stop-recording').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: 'stop-recording' });
    document.getElementById('status').textContent = 'Parado. Processando resumo...';
    document.getElementById('start-recording').disabled = false;
    document.getElementById('stop-recording').disabled = true;
<<<<<<< Updated upstream
});
=======
});
>>>>>>> Stashed changes
