let memory = 0;
let historyLog = document.getElementById("history");

// Sound effect setup
const clickSound = new Audio('clickaudio1.wav');

function playSound() {
    clickSound.play();
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function appendToDisplay(value) {
    playSound();
    document.getElementById("result").value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        result = Math.round(result * 100) / 100; // Rounds to 2 decimal places
        document.getElementById("result").value = result;

        // Add result animation (if you want)
        document.querySelector('.display').classList.add('show-result');
        setTimeout(() => {
            document.querySelector('.display').classList.remove('show-result');
        }, 300);

        // Add to history
        let historyItem = document.createElement("div");
        historyItem.textContent = `Result: ${result}`;
        historyLog.prepend(historyItem);
    } catch (error) {
        alert("Invalid calculation");
    }
}

function toggleMode() {
    isScientificMode = !isScientificMode;
    document.querySelector('.scientific-buttons').style.display = isScientificMode ? 'block' : 'none';
    document.querySelector('.mode-toggle').textContent = isScientificMode ? 'Switch to Standard' : 'Switch to Scientific';
}

function backspace() {
    playSound();
    let display = document.getElementById("result").value;
    document.getElementById("result").value = display.slice(0, -1);
}

function memoryStore() {
    memory += parseFloat(document.getElementById("result").value) || 0;
    clearDisplay();
}

function memoryRecall() {
    document.getElementById("result").value = memory;
}

function memoryClear() {
    memory = 0;
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById("result").value) || 0;
    clearDisplay();
}

function toggleTheme() {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        result = Math.round(result * 100) / 100;
        document.getElementById("result").value = result;

        // Add result animation
        document.querySelector('.display').classList.add('show-result');
        setTimeout(() => {
            document.querySelector('.display').classList.remove('show-result');
        }, 300);

        // Add to history
        let historyItem = document.createElement("div");
        historyItem.textContent = `Result: ${result}`;
        historyLog.prepend(historyItem);
    } catch (error) {
        alert("Invalid calculation");
    }
}

let isScientificMode = false; // Track current mode

function toggleMode() {
    isScientificMode = !isScientificMode;
    document.querySelector('.scientific-buttons').style.display = isScientificMode ? 'block' : 'none';
    document.querySelector('.mode-toggle').textContent = isScientificMode ? 'Switch to Standard' : 'Switch to Scientific';
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        result = Math.round(result * 100) / 100; // Rounds to 2 decimal places
        document.getElementById("result").value = result;

        // Add result animation
        document.querySelector('.display').classList.add('show-result');
        setTimeout(() => {
            document.querySelector('.display').classList.remove('show-result');
        }, 300);

        // Add to history
        let historyItem = document.createElement("div");
        historyItem.textContent = `Result: ${result}`;
        historyLog.prepend(historyItem);
    } catch (error) {
        alert("Invalid calculation");
    }
}

function toggleMode() {
    const scientificButtons = document.querySelector('.scientific-buttons');
    if (scientificButtons.style.display === 'none') {
        scientificButtons.style.display = 'flex'; // Show buttons
    } else {
        scientificButtons.style.display = 'none'; // Hide buttons
    }
}
