
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;

function stopSpeaking() {
    if (speechSynth.speaking || isSpeaking) {
        speechSynth.cancel();
        isSpeaking = false;
    }
    if (currentUtterance) {
        currentUtterance = null;
    }
}

function speakColor(name) {
    stopSpeaking();

    if (!window.speechSynthesis) {
        console.warn("Browser doesn't support speech synthesis");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(name);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    utterance.onstart = () => { isSpeaking = true; };
    utterance.onend = () => { isSpeaking = false; currentUtterance = null; };
    utterance.onerror = () => { isSpeaking = false; currentUtterance = null; };

    currentUtterance = utterance;
    speechSynth.speak(utterance);
}

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.speaker-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const card = this.closest('.color-card');
            speakColor(card.getAttribute('data-color'));
        });
    });

    document.querySelectorAll('.color-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.closest('.speaker-btn')) return;
            speakColor(this.getAttribute('data-color'));
        });
    });

});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') stopSpeaking();
});

window.addEventListener('beforeunload', () => {
    if (speechSynth) speechSynth.cancel();
});

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

mobileMenuToggle.addEventListener('click', function () {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});