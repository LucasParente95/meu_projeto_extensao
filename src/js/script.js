document.addEventListener('DOMContentLoaded', function() {
    let startButton = document.getElementById('start');
    let stopButton = document.getElementById('stop');
    let statusDisplay = document.getElementById('status');
    let summaryDisplay = document.getElementById('summary');

    let mediaRecorder;
    let audioChunks = [];

    function startAudioCapture() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                statusDisplay.textContent = "Status: Capturando áudio...";

                mediaRecorder.addEventListener('dataavailable', event => {
                    audioChunks.push(event.data);
                });

                mediaRecorder.addEventListener('stop', () => {
                    const audioBlob = new Blob(audioChunks);
                    audioChunks = [];

                    generateSummary(audioBlob);
                });
            })
            .catch(error => {
                console.error("Erro ao capturar áudio:", error);
                statusDisplay.textContent = "Status: Erro ao capturar áudio.";
            });
    }

    function stopAudioCapture() {
        if (mediaRecorder && mediaRecorder.state === "recording") {
            mediaRecorder.stop();
            statusDisplay.textContent = "Status: Captura de áudio finalizada.";
        }
    }

    function generateSummary(audioBlob) {
        const fakeSummary = "Resumo gerado automaticamente a partir do áudio capturado.";
        summaryDisplay.textContent = fakeSummary;
    }

    startButton.addEventListener('click', startAudioCapture);
    stopButton.addEventListener('click', stopAudioCapture);
});
