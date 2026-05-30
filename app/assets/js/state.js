// ── ConeCoreRun App State ──────────────────────────────────────────────────
// Single source of truth for all prototype screens.
// Persona switcher updates this object; all screens read from it.

const CCR = {

  // ── ACTIVE PERSONA ──────────────────────────────
  persona: 'mike',

  // ── PERSONA DATA ────────────────────────────────
  personas: {

    new_user: {
      id: 'new_user',
      label: 'New User',
      initials: 'NU',
      firstName: 'New',
      teamName: null,
      avatarBg: '#e8e4dc',
      avatarTc: '#7a736a',
      streak: 0,
      checkins: 0,
      scoops: 0,
      badges: 0,
      rank: null,
      mode: 'solo',
      scoopers: [],
      homeBase: null,
      county: null,
      countyProgress: 0,
      countyTotal: 0,
      stateProgress: 0,
      stateTotal: 354,
      networkProgress: 0,
      networkTotal: 407,
      activeRace: null,
      nearbyLocations: [
        { name: '110 Hoosick St, Troy', dist: '0.2 mi', status: 'unvisited', bonuses: [] },
        { name: '127 Congress St, Troy', dist: '1.4 mi', status: 'unvisited', bonuses: ['loyal'] },
        { name: '487 4th St, Troy', dist: '1.8 mi', status: 'unvisited', bonuses: ['pioneer'] },
      ],
      recentActivity: [],
    },

    deb: {
      id: 'deb',
      label: 'Deb M.',
      initials: 'DM',
      firstName: 'Deb',
      teamName: 'The Queensbury Crew',
      avatarBg: '#EAF3DE',
      avatarTc: '#3B6D11',
      streak: 3,
      checkins: 8,
      scoops: 240,
      badges: 2,
      rank: 14,
      mode: 'family',
      scoopers: [
        { name: 'Emma', age: 9,  color: '#FAEEDA', tc: '#633806' },
        { name: 'Tyler', age: 14, color: '#E6F1FB', tc: '#0C447C' },
      ],
      homeBase: '402 Bay Rd, Queensbury',
      county: 'Warren Co.',
      countyProgress: 8,
      countyTotal: 14,
      stateProgress: 8,
      stateTotal: 354,
      networkProgress: 8,
      networkTotal: 407,
      activeRace: null,
      nearbyLocations: [
        { name: '402 Bay Rd, Queensbury', dist: '0.4 mi', status: 'visited', bonuses: [] },
        { name: '347 Aviation Rd, Queensbury', dist: '1.2 mi', status: 'unvisited', bonuses: [] },
        { name: '777 Quaker Rd, Queensbury', dist: '2.1 mi', status: 'unvisited', bonuses: ['pioneer'] },
      ],
      recentActivity: [
        { text: 'Checked in at 402 Bay Rd, Queensbury', time: '2 days ago', bonus: null },
        { text: 'Earned First Scoop badge', time: '5 days ago', bonus: null },
      ],
    },

    mike: {
      id: 'mike',
      label: 'Mike T.',
      initials: 'MT',
      firstName: 'Mike',
      teamName: 'Troy Road Warriors',
      avatarBg: '#FCEBEB',
      avatarTc: '#791F1F',
      streak: 12,
      checkins: 67,
      scoops: 1240,
      badges: 8,
      rank: 2,
      mode: 'solo',
      scoopers: [],
      homeBase: '110 Hoosick St, Troy',
      county: 'Warren Co.',
      countyProgress: 11,
      countyTotal: 14,
      stateProgress: 67,
      stateTotal: 354,
      networkProgress: 67,
      networkTotal: 407,
      activeRace: {
        name: 'Capital Region sprint',
        sub: 'vs. 3 others · ends in 4 days',
        place: 2,
        racers: [
          { name: 'Dave',  you: false, score: 81, color: '#85B7EB' },
          { name: 'You',   you: true,  score: 67, color: '#CE2229' },
          { name: 'Sara',  you: false, score: 50, color: '#5DCAA5' },
          { name: 'Chris', you: false, score: 23, color: '#B4B2A9' },
        ]
      },
      nearbyLocations: [
        { name: '110 Hoosick St, Troy',   dist: '0.2 mi', status: 'visited', bonuses: [] },
        { name: '9 112th St, Troy',       dist: '1.1 mi', status: 'unvisited', bonuses: ['pioneer'] },
        { name: '127 Congress St, Troy',  dist: '1.4 mi', status: 'unvisited', bonuses: ['loyal'] },
      ],
      recentActivity: [
        { text: 'Checked in at 110 Hoosick St, Troy', time: '1 hour ago',  bonus: 'loyal' },
        { text: 'Checked in at 127 Congress St',      time: '3 hours ago', bonus: 'pioneer' },
        { text: 'Earned Pioneer badge',               time: 'Yesterday',   bonus: null },
      ],
    },

    jamie: {
      id: 'jamie',
      label: 'Jamie R.',
      initials: 'JR',
      firstName: 'Jamie',
      teamName: 'Glens Falls Forever',
      avatarBg: '#E6F1FB',
      avatarTc: '#0C447C',
      streak: 0,
      checkins: 12,
      scoops: 380,
      badges: 3,
      rank: 8,
      mode: 'solo',
      scoopers: [],
      homeBase: '360 Glen St, Glens Falls',
      county: 'Warren Co.',
      countyProgress: 6,
      countyTotal: 14,
      stateProgress: 12,
      stateTotal: 354,
      networkProgress: 12,
      networkTotal: 407,
      activeRace: {
        name: 'Adirondack weekend run',
        sub: 'vs. 2 others · ends in 2 days',
        place: 1,
        racers: [
          { name: 'You',   you: true,  score: 12, color: '#185FA5' },
          { name: 'Alex',  you: false, score: 9,  color: '#B4B2A9' },
          { name: 'Sam',   you: false, score: 4,  color: '#B4B2A9' },
        ]
      },
      nearbyLocations: [
        { name: '360 Glen St, Glens Falls',    dist: '0.3 mi', status: 'visited',  bonuses: [] },
        { name: '250 Ridge St, Glens Falls',   dist: '0.8 mi', status: 'visited',  bonuses: [] },
        { name: '196 Warren St, Glens Falls',  dist: '1.1 mi', status: 'unvisited', bonuses: ['pioneer'] },
      ],
      recentActivity: [
        { text: 'Checked in at 360 Glen St, Glens Falls', time: '2 hours ago', bonus: null },
        { text: 'Checked in at 250 Ridge St',             time: '3 hours ago', bonus: null },
        { text: 'Started Adirondack weekend run',         time: '4 hours ago', bonus: null },
      ],
    }
  },

  // ── GETTERS ─────────────────────────────────────
  get p() { return this.personas[this.persona]; },

  switchPersona(id) {
    this.persona = id;
    if (typeof window.onPersonaSwitch === 'function') window.onPersonaSwitch(id);
  },

  // ── BADGE DATA ──────────────────────────────────
  allBadges: [
    { id: 'first_scoop',  label: 'First Scoop',    desc: 'First check-in ever',        icon: '🍦', color: '#FCEBEB', border: '#F09595',  personas: ['deb','mike','jamie'] },
    { id: 'pioneer',      label: 'Pioneer',         desc: 'Low-traffic location',       icon: '🌲', color: '#FAEEDA', border: '#EF9F27',  personas: ['mike','jamie'] },
    { id: 'loyal',        label: 'Loyal',           desc: 'Chose Stewart\'s',           icon: '🏆', color: '#FCEBEB', border: '#F09595',  personas: ['mike'] },
    { id: 'dairy_run',    label: 'Dairy Run',       desc: 'Dairy purchase',             icon: '🥛', color: '#E6F1FB', border: '#85B7EB',  personas: ['mike'] },
    { id: 'cannonball',   label: 'Cannonball',      desc: 'Complete a sprint',          icon: '💥', color: '#FAEEDA', border: '#EF9F27',  personas: ['mike'] },
    { id: 'county_champ', label: 'County Champ',    desc: 'Complete a county',          icon: '🏅', color: '#EAF3DE', border: '#97C459',  personas: [] },
    { id: 'state_champ',  label: 'State Champ',     desc: 'Complete a state',           icon: '⭐', color: '#EAF3DE', border: '#97C459',  personas: [] },
    { id: 'grand_champ',  label: 'Grand Champion',  desc: 'Complete the network',       icon: '👑', color: '#FAEEDA', border: '#EF9F27',  personas: [] },
  ],

  // ── REDEMPTION TIERS ────────────────────────────
  redemptions: [
    { label: 'Free coffee (any size)',     cost: 50   },
    { label: 'Free single scoop',          cost: 100  },
    { label: 'Free hand-packed pint',      cost: 200  },
    { label: 'Milk punch card (10 stamps)',cost: 400  },
    { label: 'Free ice cream cake',        cost: 1000 },
    { label: 'Grand reward — TBD',         cost: 2500 },
  ],

  // ── STORE DATA (Capital Region sample) ──────────
  stores: [
    { id:1,  name:'110 Hoosick St',    city:'Troy',         lat:42.7393, lng:-73.6796, visited_by:['mike'] },
    { id:2,  name:'127 Congress St',   city:'Troy',         lat:42.7287, lng:-73.6879, visited_by:[] },
    { id:3,  name:'487 4th St',        city:'Troy',         lat:42.7151, lng:-73.6936, visited_by:['mike'] },
    { id:4,  name:'9 112th St',        city:'Troy',         lat:42.7714, lng:-73.6792, visited_by:[] },
    { id:5,  name:'402 Bay Rd',        city:'Queensbury',   lat:43.3369, lng:-73.6532, visited_by:['deb'] },
    { id:6,  name:'347 Aviation Rd',   city:'Queensbury',   lat:43.3306, lng:-73.6973, visited_by:[] },
    { id:7,  name:'360 Glen St',       city:'Glens Falls',  lat:43.3119, lng:-73.6495, visited_by:['jamie'] },
    { id:8,  name:'250 Ridge St',      city:'Glens Falls',  lat:43.3221, lng:-73.6441, visited_by:['jamie'] },
    { id:9,  name:'196 Warren St',     city:'Glens Falls',  lat:43.3112, lng:-73.6317, visited_by:[] },
    { id:10, name:'402 Lake Ave',      city:'Saratoga Springs', lat:43.0839, lng:-73.7436, visited_by:['mike'] },
    { id:11, name:'521 Broadway',      city:'Saratoga Springs', lat:43.0852, lng:-73.7845, visited_by:['mike'] },
    { id:12, name:'1050 Western Ave',  city:'Albany',       lat:42.6741, lng:-73.8166, visited_by:['mike'] },
    { id:13, name:'204 Henry Johnson', city:'Albany',       lat:42.6633, lng:-73.7585, visited_by:[] },
    { id:14, name:'777 Quaker Rd',     city:'Queensbury',   lat:43.3150, lng:-73.6104, visited_by:[] },
    { id:15, name:'1229 Nott St',      city:'Schenectady',  lat:42.8191, lng:-73.9154, visited_by:['mike'] },
  ],

};

// ── DEV NAV SHARED COMPONENT ────────────────────────────────────────────────
// Injected into every screen. Call buildDevNav() after DOM load.

CCR.buildDevNav = function(activePage) {
  var nav = document.getElementById('dev-nav');
  if (!nav) return;

  var pages = [
    { id: 'onboarding', label: 'Onboard', file: 'onboarding.html' },
    { id: 'territory',  label: 'Territory', file: 'territory.html' },
    { id: 'home',       label: 'Home',    file: 'home.html' },
    { id: 'scan',       label: 'Scan',    file: 'scan.html' },
    { id: 'map',        label: 'Map',     file: 'map.html' },
    { id: 'races',      label: 'Races',   file: 'races.html' },
    { id: 'badges',     label: 'Badges',  file: 'badges.html' },
    { id: 'profile',    label: 'Profile', file: 'profile.html' },
  ];

  var personaOptions = Object.values(CCR.personas).map(p =>
    `<button class="dnb pnb ${CCR.persona === p.id ? 'pnb-active' : ''}"
      onclick="CCR.switchPersona('${p.id}');renderPersonaBtns()"
      id="pnb-${p.id}">${p.label}</button>`
  ).join('');

  var pageLinks = pages.map(pg =>
    `<a href="${pg.file}" class="dnb ${activePage === pg.id ? 'active' : ''}">${pg.label}</a>`
  ).join('');

  nav.innerHTML = `
    <div id="dev-pill" onclick="toggleDevNav()">DEV ▾</div>
    <div id="dev-panel">
      <div style="font-size:8px;color:rgba(255,255,255,0.35);letter-spacing:1.5px;margin-bottom:5px;">SCREENS</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:7px;">${pageLinks}</div>
      <div style="font-size:8px;color:rgba(255,255,255,0.35);letter-spacing:1.5px;margin-bottom:5px;">PERSONA</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;" id="persona-btns">${personaOptions}</div>
    </div>`;

  // Offset shell
  setTimeout(() => {
    var panel = document.getElementById('dev-panel');
    var shell = document.getElementById('shell');
    if (panel && shell) shell.style.paddingTop = (panel.offsetHeight + 2) + 'px';
  }, 50);
};

function toggleDevNav() {
  var nav = document.getElementById('dev-nav');
  nav.classList.toggle('nav-hidden');
  document.getElementById('dev-pill').textContent =
    nav.classList.contains('nav-hidden') ? 'DEV ▸' : 'DEV ▾';
  var shell = document.getElementById('shell');
  var panel = document.getElementById('dev-panel');
  if (shell && panel) {
    shell.style.paddingTop = nav.classList.contains('nav-hidden')
      ? '0' : (panel.offsetHeight + 2) + 'px';
  }
}

function renderPersonaBtns() {
  Object.values(CCR.personas).forEach(p => {
    var btn = document.getElementById('pnb-' + p.id);
    if (btn) {
      btn.classList.toggle('pnb-active', CCR.persona === p.id);
    }
  });
}

// Shared clock
CCR.startClock = function() {
  function tick() {
    var now = new Date();
    var t = now.getHours() + ':' + String(now.getMinutes()).padStart(2,'0');
    document.querySelectorAll('.status-time').forEach(el => el.textContent = t);
  }
  tick();
  setInterval(tick, 30000);
};
