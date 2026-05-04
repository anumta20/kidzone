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

function speakLetter(letter, word) {
    
    stopSpeaking();
    
    if (!window.speechSynthesis) {
        console.warn("Browser doesn't support speech synthesis");
        return;
    }
    
    // Simple text: "A for Apple" only
    const speechText = `${letter} for ${word}`;
    
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    
    utterance.onstart = () => {
        isSpeaking = true;
    };
    
    utterance.onend = () => {
        isSpeaking = false;
        currentUtterance = null;
    };
    
    utterance.onerror = () => {
        isSpeaking = false;
        currentUtterance = null;
    };
    
    currentUtterance = utterance;
    speechSynth.speak(utterance);
}


document.addEventListener('DOMContentLoaded', function() {
   
    const speakerButtons = document.querySelectorAll('.speaker-btn');
    speakerButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const card = this.closest('.card');
            const letter = card.getAttribute('data-letter');
            const word = card.getAttribute('data-word');
            speakLetter(letter, word);
        });
    });
    
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(event) {
           
            if (event.target.closest('.speaker-btn')) return;
            const letter = this.getAttribute('data-letter');
            const word = this.getAttribute('data-word');
            speakLetter(letter, word);
        });
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        stopSpeaking();
    }
});

window.addEventListener('beforeunload', () => {
    if (speechSynth) {
        speechSynth.cancel();
    }
});

console.log("Alphabets page loaded - speaks only 'A for Apple', 'B for Ball' etc.");

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

document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
});