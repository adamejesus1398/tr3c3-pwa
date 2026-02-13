// SERVICE WORKER REGISTRATION
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { }));
}

// Initialize app after DOM loaded
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    loadHTML();
    initDateTime();
    initMotivators();
    loadData();
}

function loadHTML() {
    const app = document.getElementById('app');
    app.innerHTML = `
<!-- HOME SCREEN -->
<div class="screen active" id="s-home">
  <div class="home-hero fade-in">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <svg width="100" height="28" viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="4" x2="16" y2="4" stroke="#f5f0e8" stroke-width="2.8" stroke-linecap="square"/>
        <line x1="9" y1="4" x2="9" y2="26" stroke="#f5f0e8" stroke-width="2.8" stroke-linecap="square"/>
        <line x1="22" y1="4" x2="22" y2="26" stroke="#f5f0e8" stroke-width="2.8" stroke-linecap="square"/>
        <path d="M22 4 L31 4 L31 14 L22 14" stroke="#f5f0e8" stroke-width="2.8" fill="none" stroke-linecap="square" stroke-linejoin="miter"/>
        <line x1="28" y1="14" x2="33" y2="26" stroke="#f5f0e8" stroke-width="2.8" stroke-linecap="square"/>
        <path d="M40 4 L51 4 L51 14 L40 14" stroke="#f5c400" stroke-width="2.8" fill="none" stroke-linecap="square" stroke-linejoin="miter"/>
        <path d="M40 26 L51 26 L51 14" stroke="#f5c400" stroke-width="2.8" fill="none" stroke-linecap="square" stroke-linejoin="miter"/>
        <path d="M62 4 L58 4 Q57 4 57 5 L57 25 Q57 26 58 26 L62 26" stroke="#f5f0e8" stroke-width="2.8" fill="none" stroke-linecap="square" stroke-linejoin="miter"/>
        <path d="M69 4 L80 4 L80 14 L69 14" stroke="#f5c400" stroke-width="2.8" fill="none" stroke-linecap="square" stroke-linejoin="miter"/>
        <path d="M69 26 L80 26 L80 14" stroke="#f5c400" stroke-width="2.8" fill="none" stroke-linecap="square" stroke-linejoin="miter"/>
      </svg>
      <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--muted)" id="home-date"></div>
    </div>
    <div class="home-greeting" id="greeting">Buenas tardes</div>
    <div class="home-title">HOLA,<br><span>GUERRERO</span></div>
    <div class="home-quote">"El árbol más fuerte creció del suelo más oscuro."</div>
  </div>
  <div class="stats-grid fade-in">
    <div class="stat-box"><div class="stat-num" id="s-habits">0/8</div><div class="stat-lbl">Hábitos</div></div>
    <div class="stat-box"><div class="stat-num" id="s-streak">0</div><div class="stat-lbl">Racha</div></div>
    <div class="stat-box"><div class="stat-num" id="s-wins">0</div><div class="stat-lbl">Victorias</div></div>
  </div>
  <div class="motivator fade-in">
    <div class="motivator-emoji">👶</div>
    <div class="motivator-text" id="motivator-txt">Tu hijo está mirando. No al que eres hoy — al que estás eligiendo ser.</div>
  </div>
  <div class="card fade-in">
    <div class="card-title">⏱ TU DÍA HOY</div>
    <div class="today-block"><div class="tb-hour">06:30</div><div><div class="badge b-gold">Familia</div><div class="tb-name">🐕 Perros + bebé</div><div class="tb-desc">Paseo · Biberón · Guardería</div></div></div>
    <div class="today-block"><div class="tb-hour">08:30</div><div><div class="badge b-dark">Descanso</div><div class="tb-name">💤 A dormir</div><div class="tb-desc">6,5h mínimo · Sin móvil en cama</div></div></div>
    <div class="today-block"><div class="tb-hour">15:00</div><div><div class="badge b-gold">Ritual</div><div class="tb-name">🔥 Despertar</div><div class="tb-desc">Ritual 10 min · Perros · Intención</div></div></div>
    <div class="today-block"><div class="tb-hour">15:30</div><div><div class="badge b-gold">Trabajo</div><div class="tb-name">💻 Bloque productivo</div><div class="tb-desc">IA · Automatizaciones · Roadmap</div></div></div>
    <div class="today-block"><div class="tb-hour">16:30</div><div><div class="badge b-dark">Familia</div><div class="tb-name">👨👩👧 Bebé + familia</div><div class="tb-desc">Presente de verdad · Ejercicio</div></div></div>
    <div class="today-block"><div class="tb-hour">21:30</div><div><div class="badge b-dark">Noche</div><div class="tb-name">🌙 Jornada nocturna</div><div class="tb-desc">Formación · Espiritualidad · Trading</div></div></div>
  </div>
</div>

<!-- NAVIGATION -->
<nav>
  <button class="nav-btn active" onclick="go('home',this)"><span class="nav-icon">🏠</span><span class="nav-lbl">Inicio</span></button>
  <button class="nav-btn" onclick="go('habitos',this)"><span class="nav-icon">✅</span><span class="nav-lbl">Hábitos</span></button>
  <button class="nav-btn" onclick="go('coach',this)"><span class="nav-icon">🤖</span><span class="nav-lbl">Coach</span></button>
  <button class="nav-btn" onclick="go('finanzas',this)"><span class="nav-icon">💰</span><span class=" nav-lbl">Finanzas</span></button>
  <button class="nav-btn" onclick="go('diario',this)"><span class="nav-icon">📓</span><span class="nav-lbl">Diario</span></button>
  <button class="nav-btn" onclick="go('rutina',this)"><span class="nav-icon">⏱</span><span class="nav-lbl">Rutina</span></button>
  <button class="nav-btn" onclick="go('roadmap',this)"><span class="nav-icon">🚀</span><span class="nav-lbl">Roadmap</span></button>
  <button class="nav-btn" onclick="go('digital',this)"><span class="nav-icon">📵</span><span class="nav-lbl">Digital</span></button>
  <button class="nav-btn" onclick="go('fe',this)"><span class="nav-icon">✨</span><span class="nav-lbl">Interior</span></button>
</nav>
`;
}

// DATE & TIME
var NOW, DIAS, MESES, MESES_L;

function initDateTime() {
    NOW = new Date();
    DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    MESES_L = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    var H = NOW.getHours();
    var greetEl = document.getElementById('greeting');
    if (greetEl) {
        greetEl.textContent = H >= 5 && H < 14 ? 'Buenos días' : H >= 14 && H < 21 ? 'Buenas tardes' : 'Buenas noches';
    }

    var dateEl = document.getElementById('home-date');
    if (dateEl) {
        dateEl.textContent = DIAS[NOW.getDay()] + ' ' + NOW.getDate() + ' ' + MESES[NOW.getMonth()];
    }
}

// NAVIGATION
function go(s, btn) {
    document.querySelectorAll('.screen').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(x => x.classList.remove('active'));

    var screen = document.getElementById('s-' + s);
    if (screen) {
        screen.classList.add('active');
        btn.classList.add('active');
        screen.scrollTop = 0;
    }
}

// MOTIVATORS
var MOTIVATORS = [
    "Tu hijo está mirando. No al que eres hoy — al que estás eligiendo ser.",
    "El golpe del trading no te definió. Cómo te levantas, sí.",
    "Un 1% mejor cada día. En un año serás otro.",
    "La disciplina es libertad. El caos es la verdadera prisión.",
    "Cada hábito completado dice: soy alguien que cumple.",
    "Tu primer cliente ya existe. Solo falta la conversación.",
    "No necesitas motivación. Necesitas un sistema. Y lo tienes."
];
var mIdx = 0;

function initMotivators() {
    setInterval(function () {
        mIdx = (mIdx + 1) % MOTIVATORS.length;
        var el = document.getElementById('motivator-txt');
        if (el) {
            el.style.opacity = 0;
            setTimeout(function () {
                el.textContent = MOTIVATORS[mIdx];
                el.style.opacity = 1;
            }, 300);
        }
    }, 9000);
}

// HABITS
var habDone = {};

function toggleHab(el) {
    var id = el.dataset.id;
    if (habDone[id]) {
        delete habDone[id];
        el.classList.remove('done');
        el.querySelector('.hab-chk').textContent = '';
    } else {
        habDone[id] = true;
        el.classList.add('done');
        el.querySelector('.hab-chk').textContent = '✓';
    }
    updateHabStats();
    saveData();
}

function updateHabStats() {
    var n = Object.keys(habDone).length, t = 8, p = Math.round(n / t * 100);
    var doneEl = document.getElementById('hab-done-lbl');
    var pctEl = document.getElementById('hab-pct-lbl');
    var barEl = document.getElementById('hab-bar');
    var statsEl = document.getElementById('s-habits');
    var winsEl = document.getElementById('s-wins');

    if (doneEl) doneEl.textContent = n + ' completados';
    if (pctEl) pctEl.textContent = p + '%';
    if (barEl) barEl.style.width = p + '%';
    if (statsEl) statsEl.textContent = n + '/' + t;
    if (winsEl) winsEl.textContent = n;
}

// ROUTINE BLOCKS
function toggleBlock(b) { b.classList.toggle('open'); }
function togglePhase(b) { b.classList.toggle('open'); }

// OBJECTIVES
function toggleObj(el) {
    el.classList.toggle('done');
    var chk = el.querySelector('.obj-chk') || el.querySelector('.sp-chk') || el.querySelector('.tcheck');
    if (chk) chk.textContent = el.classList.contains('done') || el.classList.contains('chk') ? '✓' : '';
}

function toggleSpirit(el) {
    el.classList.toggle('done');
    var chk = el.querySelector('.sp-chk');
    if (chk) chk.textContent = el.classList.contains('done') ? '✓' : '';
}

function chkToggle(el) {
    el.classList.toggle('chk');
    var chk = el.querySelector('.tcheck');
    if (chk) chk.textContent = el.classList.contains('chk') ? '✓' : '';
}

// DATA PERSISTENCE
function saveData() {
    try {
        localStorage.setItem('tr3c3_data', JSON.stringify({
            habits: habDone,
            transactions: txs || [],
            journalEntries: journalEntries || [],
            goalAmt: goalAmt || 300
        }));
    } catch (e) {
        console.error('Error saving data:', e);
    }
}

function loadData() {
    try {
        var data = JSON.parse(localStorage.getItem('tr3c3_data') || '{}');
        habDone = data.habits || {};
        txs = data.transactions || [];
        journalEntries = data.journalEntries || [];
        goalAmt = data.goalAmt || 300;
        updateHabStats();
    } catch (e) {
        console.error('Error loading data:', e);
    }
}

// FINANCES
var txs = [], txType = 'gasto', txCat = '🏠 Casa', goalAmt = 300;

// JOURNAL
var journalEntries = [];
var currentMood = '😐';

// Make functions globally available
window.go = go;
window.toggleHab = toggleHab;
window.toggleBlock = toggleBlock;
window.togglePhase = togglePhase;
window.toggleObj = toggleObj;
window.toggleSpirit = toggleSpirit;
window.chkToggle = chkToggle;
