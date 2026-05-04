function scrollToCategories() {
    document.querySelector('.section-title').scrollIntoView({ behavior: 'smooth' });
}

const gkDatabase = [
  { question: "Which animal is known as the 'King of the Jungle'?", answer: "LION! They live in families called prides and have a mighty roar." },
  { question: "What is the largest land animal on Earth?", answer: "ELEPHANT! They can weigh up to 7 tons and have amazing memory." },
  { question: "How long is a giraffe's tongue?", answer: "18 inches (45 cm)! That's longer than a ruler, used to grab leaves from tall trees." },
  { question: "Do dolphins have names for each other?", answer: "YES! Dolphins create unique whistles that act like names to call each other." },
  { question: "What is a baby kangaroo called?", answer: "A JOEY! It lives in its mother's pouch for about 6 months." },
  { question: "How do male penguins propose to females?", answer: "They give them a special PEBBLE! If she accepts, they become partners for life." },
  { question: "How do butterflies taste their food?", answer: "With their FEET! They have taste sensors on their legs." },
  { question: "How many hearts does an octopus have?", answer: "THREE HEARTS! Two pump blood to the gills, one pumps to the body." },
  { question: "How many hours a day do lions sleep?", answer: "Up to 20 HOURS! They are the laziest of the big cats." },
  { question: "What do camels store in their humps?", answer: "FAT, not water! The fat gives them energy when food is scarce." },
  { question: "How many hours a day do koalas sleep?", answer: "18-22 HOURS! They sleep so much because eucalyptus leaves give low energy." },
  { question: "How do bees communicate?", answer: "They do a special 'WAGGLE DANCE' to tell other bees where to find flowers." },
  { question: "How long can giant tortoises live?", answer: "Over 150 YEARS! Some have lived more than 200 years." },
  { question: "How many teeth can a shark grow in its lifetime?", answer: "Up to 30,000 TEETH! They constantly lose and regrow them." },
  { question: "What is the fastest fish in the ocean?", answer: "SAILFISH! It can swim up to 68 miles per hour." },
  { question: "Which bird can fly backwards?", answer: "HUMMINGBIRD! Their wings can move in a figure-8 pattern." },
  { question: "How do frogs drink water?", answer: "Through their SKIN! They absorb water like a sponge." },
  { question: "How do snakes smell?", answer: "With their TONGUE! They flick it to collect scents from the air." },
  { question: "How do bats find food in the dark?", answer: "ECHOLOCATION! They make sounds and listen for echoes." },
  { question: "What is a group of wolves called?", answer: "A PACK! They work together to hunt and protect each other." },
  { question: "What do raccoons do with their food?", answer: "They WASH it! Raccoons often dunk food in water before eating." },
  { question: "Why do peacocks show their colorful feathers?", answer: "To ATTRACT a mate! The more colorful, the better." },
  { question: "What do squirrels do to remember where they buried nuts?", answer: "They have amazing SPATIAL MEMORY! They can remember thousands of spots." },
  { question: "What do hedgehogs do when scared?", answer: "Roll into a TIGHT BALL! Their spines protect them from predators." },
  { question: "How far can a rabbit jump?", answer: "Up to 10 FEET! They have powerful back legs." },
  { question: "Which animal is the closest relative to humans?", answer: "CHIMPANZEE! We share about 98% of the same DNA." },
  { question: "What is a male gorilla called?", answer: "A SILVERBACK! They get silver hair on their backs as they age." },
  { question: "Are tigers good swimmers?", answer: "YES! Tigers love water and can swim long distances." },
  { question: "What is the fastest land animal?", answer: "CHEETAH! It can run up to 70 miles per hour." },
  { question: "Do hippos sweat blood?", answer: "NO! They sweat a red oily liquid that acts as sunscreen and medicine." },
  { question: "What is a group of rhinos called?", answer: "A CRASH! Perfect name because they can charge very fast." },
  { question: "Which animal has the strongest bite?", answer: "HIPPOPOTAMUS! Their bite force is over 1800 PSI." },
  { question: "What do deer use their antlers for?", answer: "FIGHTING other males during mating season and attracting females." },
  { question: "Are wild boars good at smelling?", answer: "EXCELLENT! They can smell food from miles away." },
  { question: "How long can a camel go without water?", answer: "Up to 7 MONTHS! They store fat and conserve water amazingly." },
  { question: "What do llamas do when angry?", answer: "SPIT! They spit at other llamas to show dominance." },
  { question: "What do goats have special in their eyes?", answer: "RECTANGULAR PUPILS! They give goats almost 360-degree vision." },
  { question: "Do sheep have good memory?", answer: "YES! Sheep can remember up to 50 other sheep faces for years." },
  { question: "Do cows have best friends?", answer: "YES! Cows get stressed when separated from their best friend." },
  { question: "Are pigs smart animals?", answer: "VERY SMART! Pigs are smarter than dogs and can solve puzzles." },
  { question: "How many teeth do adult dogs have?", answer: "42 TEETH! Puppies have 28 baby teeth first." },
  { question: "How many hours a day do cats sleep?", answer: "12-16 HOURS! Some cats sleep up to 20 hours." },
  { question: "What is a baby mouse called?", answer: "A PUP or KITTEN! They are born blind and hairless." },
  { question: "Do chipmunks have pouches in their cheeks?", answer: "YES! They can stuff their cheeks with nuts and seeds." },
  { question: "Can owls turn their heads all the way around?", answer: "ALMOST! They can turn 270 degrees (3/4 of a full circle)." },
  { question: "Which bird lays the largest egg?", answer: "OSTRICH! One ostrich egg equals about 24 chicken eggs." },
  { question: "Why are flamingos pink?", answer: "From eating SHRIMP and algae! Their food has pink pigment." },
  { question: "Do swans mate for life?", answer: "YES! Swans usually stay with the same partner their whole life." },
  { question: "Which bird can mimic human speech?", answer: "PARROT! Some parrots can learn hundreds of words." },
  { question: "How many wings does a bee have?", answer: "FOUR WINGS! Two large and two small wings." },
  { question: "Are ladybugs helpful to farmers?", answer: "YES! They eat aphids that destroy crops." },
  { question: "How many eyes do most spiders have?", answer: "EIGHT EYES! But they don't see very well." },
  { question: "Do scorpions glow in the dark?", answer: "YES! They glow blue-green under UV light." },
  { question: "How many teeth does a garden snail have?", answer: "Up to 14,000 TEETH! They are on its tongue-like radula." }
];

const totalQuestions = gkDatabase.length;
document.getElementById('totalCountDisplay').innerText = totalQuestions;

let currentIndex = 0;
let answerRevealed = false;

const emojiElement = document.getElementById('gkEmoji');
const questionNumberElement = document.getElementById('gkQuestionNumber');
const questionDetailElement = document.getElementById('gkQuestionDetail');
const answerBox = document.getElementById('gkAnswerBox');
const answerTextElement = document.getElementById('gkAnswerText');
const revealBtn = document.getElementById('gkRevealBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentIndexDisplay = document.getElementById('currentIndexDisplay');
const progressFill = document.getElementById('gkProgressFill');

if (emojiElement) {
    emojiElement.style.display = 'none';
}

function updateDisplay() {
  const qData = gkDatabase[currentIndex];
  if (emojiElement) emojiElement.textContent = ''; 
  questionNumberElement.textContent = `Q${currentIndex + 1}`;
  questionDetailElement.textContent = qData.question;
  answerTextElement.innerHTML = `<i class="fas fa-star"></i> ${qData.answer}`;
  
  currentIndexDisplay.textContent = currentIndex + 1;
  
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;
  progressFill.style.width = `${progressPercent}%`;
 
  answerBox.style.display = 'none';
  answerRevealed = false;
  
  revealBtn.innerHTML = "🔍 Show Answer ";
  revealBtn.style.background = "#ff9f4a";
}

function showAnswer() {
  if (!answerRevealed) {
    answerBox.style.display = 'block';
    answerRevealed = true;
    revealBtn.innerHTML = " Answer Shown! Next? ";
    revealBtn.style.background = "#4caf50";
  }
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % totalQuestions;
  updateDisplay();
}

function prevQuestion() {
  currentIndex = (currentIndex - 1 + totalQuestions) % totalQuestions;
  updateDisplay();
}

revealBtn.addEventListener('click', showAnswer);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextQuestion();
  } else if (e.key === 'ArrowLeft') {
    prevQuestion();
  } else if (e.key === 'Enter' || e.key === ' ') {
    showAnswer();
  }
});

updateDisplay();

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
