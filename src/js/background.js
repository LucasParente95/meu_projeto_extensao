let mediaRecorder;
let audioChunks = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'start-recording') {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
                mediaRecorder.start();
            })
            .catch(error => console.error('Erro ao acessar o microfone:', error));
    } else if (message.command === 'stop-recording') {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                processAudio(audioBlob);
                audioChunks = [];
            };
        }
    }
});

function processAudio(audioBlob) {
    // Aqui você pode implementar a lógica de transcrição e resumo
    console.log('Áudio capturado:', audioBlob);
}
