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

<!-- HABITOS SCREEN -->
<div class="screen" id="s-habitos">
    <div class="home-hero">
        <div class="home-title">HÁBITOS<br><span>DIARIOS</span></div>
    </div>
    <div class="card">
        <div class="card-title">NO NEGOCIABLES</div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h1">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Levantarse a las 15:00</div><div class="hab-desc">Sin posponer alarma</div></div>
        </div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h2">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Entrenamiento físico</div><div class="hab-desc">Pesas o cardio intenso</div></div>
        </div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h3">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Deep Work (4h)</div><div class="hab-desc">Sin distracciones</div></div>
        </div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h4">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Lectura/Formación</div><div class="hab-desc">Mínimo 30 min</div></div>
        </div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h5">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Macro-gestión</div><div class="hab-desc">Revisar finanzas y plan</div></div>
        </div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h6">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Dieta limpia</div><div class="hab-desc">Sin azúcar ni procesados</div></div>
        </div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h7">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Sin pornografía</div><div class="hab-desc">Control mental total</div></div>
        </div>
        <div class="habit-item" onclick="toggleHab(this)" data-id="h8">
            <div class="hab-chk"></div>
            <div><div class="hab-name">Dormir 7h</div><div class="hab-desc">Higiene de sueño</div></div>
        </div>
    </div>
    <div class="card">
        <div class="card-title">PROGRESO HOY</div>
        <div class="progress-bar"><div class="progress-fill" id="hab-bar" style="width:0%"></div></div>
        <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:12px;color:var(--muted);">
            <div id="hab-done-lbl">0 completados</div>
            <div id="hab-pct-lbl">0%</div>
        </div>
    </div>
</div>

<!-- COACH SCREEN -->
<div class="screen" id="s-coach">
    <div class="home-hero">
        <div class="home-title">COACH<br><span>IA</span></div>
    </div>
    <div class="card">
        <div style="text-align:center;padding:20px 0;">
            <div style="font-size:40px;margin-bottom:10px;">🤖</div>
            <div style="font-family:'DM Serif Display';font-style:italic;color:var(--gold);margin-bottom:10px;">"La respuesta está en los datos."</div>
            <div style="font-size:13px;color:var(--muted);line-height:1.4;">
                Analizo tus patrones de hábitos, sueño y productividad para optimizar tu rendimiento.
            </div>
            <button class="btn" style="margin-top:20px;">INICIAR SESIÓN DE COACHING</button>
        </div>
    </div>
</div>

<!-- FINANZAS SCREEN -->
<div class="screen" id="s-finanzas">
    <div class="home-hero">
        <div class="home-title">ESTADO<br><span>FINANCIERO</span></div>
    </div>
    <div class="card">
        <div class="card-title">OBJETIVO MENSUAL</div>
        <div style="font-size:32px;font-family:'Bebas Neue';color:var(--white);">2.500 €</div>
        <div class="progress-bar" style="margin-top:10px;"><div class="progress-fill" style="width:65%"></div></div>
        <div style="text-align:right;font-size:11px;color:var(--muted);margin-top:4px;">65% COMPLETADO</div>
    </div>
    <div class="card">
        <div class="card-title">REGISTRAR TRANSACCIÓN</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
            <button class="btn" style="background:var(--card2);color:var(--white);border:1px solid var(--border);">GASTO</button>
            <button class="btn" style="background:var(--card2);color:var(--white);border:1px solid var(--border);">INGRESO</button>
        </div>
        <input type="number" placeholder="Cantidad (€)" style="width:100%;padding:12px;background:var(--bg);border:1px solid var(--border);color:var(--white);border-radius:8px;margin-bottom:10px;">
        <input type="text" placeholder="Concepto" style="width:100%;padding:12px;background:var(--bg);border:1px solid var(--border);color:var(--white);border-radius:8px;margin-bottom:10px;">
        <button class="btn">GUARDAR</button>
    </div>
</div>

<!-- DIARIO SCREEN -->
<div class="screen" id="s-diario">
    <div class="home-hero">
        <div class="home-title">DIARIO<br><span>PERSONAL</span></div>
    </div>
    <div class="card">
        <div class="card-title">REFLEXIÓN DEL DÍA</div>
        <textarea placeholder="¿Qué has aprendido hoy? ¿Cómo te sientes?" style="width:100%;height:150px;padding:12px;background:var(--bg);border:1px solid var(--border);color:var(--white);border-radius:8px;resize:none;font-family:'DM Sans';"></textarea>
        <button class="btn">GUARDAR ENTRADA</button>
    </div>
</div>

<!-- RUTINA SCREEN -->
<div class="screen" id="s-rutina">
    <div class="home-hero">
        <div class="home-title">RUTINA<br><span>ESTRUCTURA</span></div>
    </div>
    <div class="card">
        <div class="today-block"><div class="tb-hour">06:30</div><div><div class="badge b-gold">Familia</div><div class="tb-name">🐕 Perros + bebé</div></div></div>
        <div class="today-block"><div class="tb-hour">08:30</div><div><div class="badge b-dark">Descanso</div><div class="tb-name">💤 A dormir (6.5h)</div></div></div>
        <div class="today-block"><div class="tb-hour">15:00</div><div><div class="badge b-gold">Ritual</div><div class="tb-name">🔥 Despertar guerrero</div></div></div>
        <div class="today-block"><div class="tb-hour">15:30</div><div><div class="badge b-gold">Trabajo</div><div class="tb-name">💻 Deep Work</div></div></div>
        <div class="today-block"><div class="tb-hour">19:30</div><div><div class="badge b-dark">Familia</div><div class="tb-name">👨👩👧 Tiempo de calidad</div></div></div>
        <div class="today-block"><div class="tb-hour">21:30</div><div><div class="badge b-dark">Noche</div><div class="tb-name">🌙 Turno de noche</div></div></div>
    </div>
</div>

<!-- ROADMAP SCREEN -->
<div class="screen" id="s-roadmap">
    <div class="home-hero">
        <div class="home-title">ROADMAP<br><span>VISIÓN</span></div>
    </div>
    <div class="card">
        <div class="card-title">OBJETIVOS Q1 2026</div>
        <div class="habit-item" onclick="toggleObj(this)">
            <div class="hab-chk"></div>
            <div class="hab-name">Lanzar MVP de SaaS</div>
        </div>
        <div class="habit-item" onclick="toggleObj(this)">
            <div class="hab-chk"></div>
            <div class="hab-name">Cartera de inversión +15%</div>
        </div>
        <div class="habit-item" onclick="toggleObj(this)">
            <div class="hab-chk"></div>
            <div class="hab-name">Leer 6 libros estratégicos</div>
        </div>
    </div>
</div>

<!-- DIGITAL SCREEN -->
<div class="screen" id="s-digital">
    <div class="home-hero">
        <div class="home-title">AYUNO<br><span>DIGITAL</span></div>
    </div>
    <div class="card">
        <div class="card-title">REGLAS</div>
        <div class="today-block">
            <div><div class="badge b-dark">REDES</div><div class="tb-desc">Cero scroll infinito. Solo publicar o responder mensajes directos de negocio.</div></div>
        </div>
        <div class="today-block">
            <div><div class="badge b-dark">NOTIFICACIONES</div><div class="tb-desc">Todas desactivadas excepto llamadas de emergencia.</div></div>
        </div>
        <div class="today-block">
            <div><div class="badge b-dark">OCIO</div><div class="tb-desc">Solo consumo intencional (película/serie en familia), nada de YouTube aleatorio.</div></div>
        </div>
    </div>
</div>

<!-- INTERIOR SCREEN -->
<div class="screen" id="s-fe">
    <div class="home-hero">
        <div class="home-title">MUNDO<br><span>INTERIOR</span></div>
    </div>
    <div class="card">
        <div class="card-title">PILARES</div>
        <div class="habit-item" onclick="toggleSpirit(this)">
            <div class="sp-chk"></div>
            <div><div class="hab-name">Agradecimiento</div><div class="hab-desc">3 cosas por las que dar gracias hoy</div></div>
        </div>
        <div class="habit-item" onclick="toggleSpirit(this)">
            <div class="sp-chk"></div>
            <div><div class="hab-name">Visualización</div><div class="hab-desc">Sentir el éxito antes de que ocurra</div></div>
        </div>
        <div class="habit-item" onclick="toggleSpirit(this)">
            <div class="sp-chk"></div>
            <div><div class="hab-name">Silencio</div><div class="hab-desc">10 minutos de meditación/oración</div></div>
        </div>
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
