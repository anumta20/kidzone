const fromTable = 2;
const toTable = 10;

const tablesContainer = document.getElementById('tablesContainer');

function generateAllTables() {
    tablesContainer.innerHTML = '';
    
    for (let table = fromTable; table <= toTable; table++) {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';
        
        let tableContent = '';
        for (let i = 1; i <= 10; i++) {
            tableContent += `${table} × ${i} = ${table * i}<br>`;
        }
        
        col.innerHTML = `
            <div class="table-card">
                <div class="table-icon">🔢</div>
                <h3>Table of ${table}</h3>
                <div class="table-content">
                    ${tableContent}
                </div>
            </div>
        `;
        
        tablesContainer.appendChild(col);
    }
}
document.getElementById('generateBtn').addEventListener('click', function() {
    let num = parseInt(document.getElementById('userNumber').value);
    let outputDiv = document.getElementById('tableOutput');
    
    if (isNaN(num) || num < 1) {
        outputDiv.innerHTML = `<div class="output-card" style="background:#ffe0e0;">
            <h3> Oops!</h3>
            <p>Please enter a valid number</p>
        </div>`;
        return;
    }
    
    let tableHtml = `<div class="output-card">
        <h3>📊 Table of ${num} 📊</h3>
        <p>`;
    
    for(let i = 1; i <= 10; i++) {
        tableHtml += `${num} × ${i} = ${num * i}<br>`;
    }
    
    tableHtml += `</p></div>`;
    
    outputDiv.innerHTML = tableHtml;

    localStorage.setItem('lastTable', tableHtml);
    localStorage.setItem('lastNumber', num);
});

document.getElementById('userNumber').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('generateBtn').click();
    }
});

generateAllTables();

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


// Load saved result when page opens
window.addEventListener('load', function () {
    const savedResult = localStorage.getItem('calcResult');

    if (savedResult) {
        document.getElementById('calcResult').innerHTML = savedResult;
    }
});

document.getElementById('calcPlus').addEventListener('click', function() {
    calculate('add');
});

document.getElementById('calcMinus').addEventListener('click', function() {
    calculate('sub');
});

function calculate(op) {
    const a = parseFloat(document.getElementById('calcNum1').value);
    const b = parseFloat(document.getElementById('calcNum2').value);
    const resultDiv = document.getElementById('calcResult');

    if (isNaN(a) || isNaN(b)) {
        resultDiv.innerHTML = `<div class="calc-output error">⚠️ Enter numbers first!</div>`;
        return;
    }

    let ans, symbol;

    if (op === 'add') {
        ans = a + b;
        symbol = '+';
    }

    if (op === 'sub') {
        ans = a - b;
        symbol = '−';
    }

    const outputHTML = `
        <div class="calc-output success">
            ${a} ${symbol} ${b} = <span>${ans}</span>
        </div>
    `;

    resultDiv.innerHTML = outputHTML;

   
    localStorage.setItem('calcResult', outputHTML);
}
window.addEventListener('load', function () {
    const savedTable = localStorage.getItem('lastTable');
    const savedNumber = localStorage.getItem('lastNumber');

    if (savedTable) {
        document.getElementById('tableOutput').innerHTML = savedTable;
    }

    if (savedNumber) {
        document.getElementById('userNumber').value = savedNumber;
    }
});