const IMGS = {
  BEDROOM: "img/extracted/bedroom-8c969949.jpg",
  BKFAST: "img/extracted/bkfast-8c969949.jpg",
  BUFFET: "img/extracted/buffet-8c969949.jpg",
  COLL_2: "img/extracted/coll_2-8c969949.jpg",
  COLL_3: "img/extracted/coll_3-8c969949.jpg",
  COLL_4: "img/extracted/coll_4-8c969949.jpg",
  FOREST: "img/extracted/forest-8c969949.jpg",
  GROUP: "img/extracted/group-8c969949.jpg",
  HIKE: "img/extracted/hike-8c969949.jpg",
  HOUSE: "img/extracted/house-8c969949.jpg",
  IKER: "img/extracted/iker-8c969949.jpg",
  KCE_1: "img/extracted/kce_1-8c969949.jpg",
  KCE_2: "img/extracted/kce_2-8c969949.jpg",
  KCE_3: "img/extracted/kce_3-8c969949.jpg",
  KCE_4: "img/extracted/kce_4-8c969949.jpg",
  KCE_5: "img/extracted/kce_5-8c969949.jpg",
  KCE_6: "img/extracted/kce_6-c6c62fb9.jpg",
  KCE_KIDS: "img/extracted/kce_kids-c6c62fb9.jpg",
  KCE_PRIERE: "img/extracted/kce_priere-c6c62fb9.jpg",
  LIVING: "img/extracted/living-8c969949.jpg",
  LUNCH: "img/extracted/lunch-8c969949.jpg",
  MEDITA: "img/extracted/medita-8c969949.jpg",
  NEPAL_GROUP: "img/extracted/nepal_group-8c969949.jpg",
  PANORAMA: "img/extracted/panorama-8c969949.jpg",
  SCREEN: "img/extracted/screen-c6c62fb9.jpg",
  SELFIE: "img/extracted/selfie-8c969949.jpg",
  TIFF2: "img/extracted/tiff2-8c969949.jpg",
  TIFF3: "img/extracted/tiff3-8c969949.jpg",
  TIFF4: "img/extracted/tiff4-8c969949.jpg",
  TIFF5: "img/extracted/tiff5-8c969949.jpg",
  WINDOW: "img/extracted/window-8c969949.jpg",
  SUNSET_POUM: "img/extracted/sunset_poum-c6c62fb9.jpg",
  PILIER_ECOLE: "img/extracted/pilier_ecole-c6c62fb9.jpg",
  PILIER_HANDICAP: "img/extracted/pilier_handicap-c6c62fb9.jpg",
  PILIER_URGENCE: "img/extracted/pilier_urgence-c6c62fb9.jpg",
  PILIER_ORPHELINAT: "img/extracted/pilier_orphelinat-c6c62fb9.jpg",
  IKER_02: "img/extracted/iker_02-c6c62fb9.jpg",
  BURGER_POUM: "img/extracted/burger_poum-8c969949.jpg",
  DEJ_POUM: "img/extracted/dej_poum-8c969949.jpg",
  INT_CO: "img/extracted/int_co-8c969949.jpg"
};

const galleryPhotos = [
  {src:'GROUP',       cap:'Un groupe engagé au service des autres'},
  {src:'HIKE',        cap:'Balade au coucher du soleil'},
  {src:'MEDITA',      cap:'Moment de ressourcement'},
  {src:'SELFIE',      cap:'Des liens qui se créent'},
  {src:'PANORAMA',    cap:'Vue depuis La Poumerole'},
  {src:'FOREST',      cap:'En pleine nature'},
  {src:'WINDOW',      cap:'Contempler, souffler'},
  {src:'BUFFET',      cap:'Le petit-déjeuner ensemble'},
  {src:'SCREEN',      cap:'Échanges au coin du feu'},
  {src:'INT_CO',      cap:'Cercle de parole'},
  {src:'BURGER_POUM', cap:'Déjeuner face à la vallée'},
  {src:'DEJ_POUM',    cap:'Petit matin partagé'},
];
const gallery = document.getElementById('gallery');
if (gallery) galleryPhotos.forEach(p => {
  const div = document.createElement('div');
  div.className = 'polaroid js-lb';
  const img = document.createElement('img'); img.src=IMGS[p.src]; img.alt=p.cap; img.loading='lazy';
  const cap = document.createElement('div'); cap.className='polaroid-cap'; cap.textContent=p.cap;
  div.appendChild(img); div.appendChild(cap);
  div.onclick = () => openLB(div);
  gallery.appendChild(div);
});

const strip = document.getElementById('poumStrip');
if (strip) ['HOUSE','LIVING','BEDROOM'].forEach(k => {
  const img = document.createElement('img'); img.src=IMGS[k]; img.alt='La Poumerole'; img.loading='lazy';
  strip.appendChild(img);
});

const projects = [
  {country:'nepal',flag:'🇳🇵',label:'Népal',labelColor:'#C85C3A',labelText:'white',img:'PILIER_ORPHELINAT',title:'Orphelinat B.I.A. — Katmandou',desc:"Accompagnement de l'orphelinat B.I.A. : nourriture, scolarité, soins médicaux et activités éducatives.",date:'2020–présent'},
  {country:'nepal',flag:'🇳🇵',label:'Népal',labelColor:'#C85C3A',labelText:'white',img:'PILIER_HANDICAP',title:'B.I.A. Handicap — Népal',desc:"Soutien au centre d'accueil pour personnes en situation de handicap : logement, formation, soins…",date:'2021–présent'},
  {country:'inde',flag:'🇮🇳',label:'Inde',labelColor:'#F5C842',labelText:'#2C1810',img:'KCE_4',title:'École de K.C.E. — Inde',desc:"Construction, mobilier, maintenance, professeurs agréés…",date:'2022–présent'},
];
function renderProjects(filter) {
  const grid = document.getElementById('projGrid'); if (!grid) return; grid.innerHTML = '';
  (filter==='all' ? projects : projects.filter(p=>p.country===filter)).forEach((p,i) => {
    const card = document.createElement('div'); card.className = 'proj-card';
    card.style.transitionDelay = (i*80)+'ms';
    card.innerHTML = '<img src="'+IMGS[p.img]+'" alt="'+p.title+'" loading="lazy" class="js-lb"><div class="proj-card-body"><span class="proj-tag" style="background:'+p.labelColor+';color:'+p.labelText+'">'+p.flag+' '+p.label+'</span><h4>'+p.title+'</h4><p>'+p.desc+'</p><div class="proj-date">'+p.date+'</div></div>';
    const im = card.querySelector('img');
    im.onclick = () => openLB(im);
    grid.appendChild(card);
  });
}
if (document.getElementById('projGrid')) renderProjects('all');
document.querySelectorAll('.proj-filter').forEach(btn => {
  btn.onclick = function(){ document.querySelectorAll('.proj-filter').forEach(b=>b.classList.remove('active')); this.classList.add('active'); renderProjects(this.dataset.filter); };
});

(function(){
  var m={'th_hero':'KCE_PRIERE','th_1':'KCE_1','th_2':'KCE_2','th_3':'KCE_3','th_kids':'KCE_KIDS','th_4':'KCE_4','th_5':'KCE_5','th_c2':'COLL_2','th_tiff3':'TIFF3','th_c4':'COLL_4'};
  function load(){Object.entries(m).forEach(function(e){var el=document.getElementById(e[0]);if(el&&IMGS[e[1]])el.src=IMGS[e[1]];});}
  var obs=new IntersectionObserver(function(en){if(en[0].isIntersecting){load();obs.disconnect();}},{threshold:0.05});
  var s=document.getElementById('impact'); if(s) obs.observe(s);
})();

let _lbState = {list: [], idx: 0};
function _lbCollect(){
  return Array.from(document.querySelectorAll('.js-lb')).map(el => {
    const img = el.tagName === 'IMG' ? el : el.querySelector('img');
    return {el, src: img && img.src ? img.src : ''};
  }).filter(x => x.src);
}
function _lbShow(){
  const cur = _lbState.list[_lbState.idx];
  if (!cur) return;
  document.getElementById('lbImg').src = cur.src;
  const c = document.getElementById('lbCounter');
  if (c) c.textContent = (_lbState.idx + 1) + ' / ' + _lbState.list.length;
}
function openLB(target){
  const list = _lbCollect();
  let idx = -1;
  if (typeof target === 'string') {
    const abs = new URL(target, location.href).href;
    idx = list.findIndex(x => x.src === abs);
  } else if (target && target.nodeType) {
    idx = list.findIndex(x => x.el === target);
    if (idx === -1) {
      const inner = target.tagName === 'IMG' ? target : target.querySelector && target.querySelector('img');
      if (inner) idx = list.findIndex(x => x.src === inner.src);
    }
  }
  if (idx === -1) idx = 0;
  _lbState = {list, idx};
  _lbShow();
  document.getElementById('lightbox').classList.add('open');
}
function lbPrev(){ if(!_lbState.list.length) return; _lbState.idx = (_lbState.idx - 1 + _lbState.list.length) % _lbState.list.length; _lbShow(); }
function lbNext(){ if(!_lbState.list.length) return; _lbState.idx = (_lbState.idx + 1) % _lbState.list.length; _lbShow(); }
function closeLB(){var _lb=document.getElementById('lightbox'); if(_lb)_lb.classList.remove('open');}

document.addEventListener('keydown', function(e){
  var _lb = document.getElementById('lightbox');
  if (!_lb || !_lb.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') { e.preventDefault(); lbPrev(); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); lbNext(); }
  else if (e.key === 'Escape') closeLB();
});

(function(){
  var lb = document.getElementById('lightbox'); if (!lb) return;
  var sx=0, sy=0, tracking=false;
  lb.addEventListener('touchstart', function(e){
    if (e.touches.length !== 1) { tracking=false; return; }
    sx = e.touches[0].clientX; sy = e.touches[0].clientY; tracking=true;
  }, {passive:true});
  lb.addEventListener('touchend', function(e){
    if (!tracking) return; tracking=false;
    var t = e.changedTouches[0];
    var dx = t.clientX - sx, dy = t.clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) lbNext(); else lbPrev();
    }
  }, {passive:true});
})();

(function(){
  var vid=document.getElementById('profileVideo'),fb=document.getElementById('videoFallback'),btn=document.getElementById('videoPlayBtn');
  if(!vid||!btn)return;
  var playing=false;
  vid.addEventListener('loadeddata',function(){if(fb)fb.style.display='none';});
  btn.onclick=function(){
    if(fb && fb.style.display!=='none'){openYtModal();return;}
    if(!playing){vid.play().then(function(){playing=true;if(fb)fb.style.display='none';btn.style.opacity='0';}).catch(function(){openYtModal();});}
    else{vid.pause();playing=false;btn.style.opacity='1';}
  };
  vid.onclick=function(){if(playing){vid.pause();playing=false;btn.style.opacity='1';}};
})();

(function(){
  var vid=document.getElementById('founderCloudVideo'),fb=document.getElementById('founderCloudFallback'),btn=document.getElementById('founderCloudPlay');
  if(!vid||!btn)return;
  var playing=false;
  vid.addEventListener('loadeddata',function(){if(fb)fb.style.display='none';});
  btn.onclick=function(){
    if(!playing){vid.play().then(function(){playing=true;if(fb)fb.style.display='none';btn.style.opacity='0';}).catch(function(){});}
    else{vid.pause();playing=false;btn.style.opacity='1';}
  };
  vid.onclick=function(){if(playing){vid.pause();playing=false;btn.style.opacity='1';}};
})();

// Hydrate feat-photo and m-card-photo from data-imgkey
document.querySelectorAll('img[data-imgkey]').forEach(function(img){
  var k=img.getAttribute('data-imgkey');
  if(IMGS[k])img.src=IMGS[k];
});

// FAQ accordeon
document.querySelectorAll('.faq-item').forEach(function(item){
  var btn = item.querySelector('.faq-q');
  if(!btn) return;
  btn.addEventListener('click', function(){
    var isOpen = item.classList.contains('open');
    // optional: close others on open
    if(!isOpen){
      document.querySelectorAll('.faq-item.open').forEach(function(o){o.classList.remove('open');var b=o.querySelector('.faq-q');if(b)b.setAttribute('aria-expanded','false');});
    }
    item.classList.toggle('open');
    btn.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
  });
});

// Formulaire séjour - construit un mailto enrichi
function submitSejourForm(ev){
  ev.preventDefault();
  var name = document.getElementById('sf-name').value.trim();
  var email = document.getElementById('sf-email').value.trim();
  var phone = document.getElementById('sf-phone').value.trim();
  var sejourSel = document.getElementById('sf-sejour');
  var sejourLabel = sejourSel.options[sejourSel.selectedIndex].text;
  var message = document.getElementById('sf-message').value.trim();
  var subject = 'Demande séjour Rejoice — ' + sejourLabel;
  var body = 'Bonjour,\n\nJe souhaite avoir des informations sur le séjour suivant :\n→ ' + sejourLabel + '\n\n';
  body += '── Mes coordonnées ──\n';
  body += 'Nom : ' + name + '\n';
  body += 'Email : ' + email + '\n';
  if(phone) body += 'Téléphone : ' + phone + '\n';
  body += '\n── Mon message ──\n' + message + '\n\n';
  body += 'Bien à vous,\n' + name;
  window.location.href = 'mailto:contact@rejoice.ngo?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  return false;
}

// Newsletter - placeholder mailto en attendant l'intégration Brevo
function submitNewsletterForm(ev){
  ev.preventDefault();
  var email = document.getElementById('nl-email').value.trim();
  if(!email) return false;
  var subject = 'Inscription newsletter Rejoice';
  var body = 'Bonjour,\n\nJe souhaite m\'inscrire à la newsletter de Rejoice pour suivre les nouvelles du terrain.\n\nMon email : ' + email + '\n\nMerci !';
  window.location.href = 'mailto:contact@rejoice.ngo?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  return false;
}

var lastScrollY = 0;
var nav = document.getElementById('mainNav');
if (nav) window.addEventListener('scroll',function(){
  var y = window.scrollY;
  nav.classList.toggle('scrolled', y > 30);
  // Masquer la nav quand on scroll vers le bas sur mobile
  if (window.innerWidth <= 768 && y > 200) {
    if (y > lastScrollY + 5) {
      nav.classList.add('hidden-mobile');
    } else if (y < lastScrollY - 5) {
      nav.classList.remove('hidden-mobile');
    }
  } else {
    nav.classList.remove('hidden-mobile');
  }
  lastScrollY = y;
},{ passive:true });

const obs = new IntersectionObserver(entries => {
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
['.m-card','.testi-card','.f-card','.pays-card','.partner-card'].forEach(sel=>{
  document.querySelectorAll(sel).forEach((el,i)=>{el.style.transitionDelay=(i*70)+'ms';el.classList.add('reveal');obs.observe(el);});
});

/* ── YOUTUBE MODAL ── */
function openYtModal(){
  var m=document.getElementById('ytModal'),f=document.getElementById('ytIframe');
  if(!m||!f)return;
  if(!f.src)f.src='https://www.youtube.com/embed/B_YjO3QzL7w?autoplay=1&rel=0';
  m.classList.add('open');m.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
function closeYtModal(){
  var m=document.getElementById('ytModal'),f=document.getElementById('ytIframe');
  if(!m)return;
  m.classList.remove('open');m.setAttribute('aria-hidden','true');
  if(f)f.src='';
  document.body.style.overflow='';
}
var _ytModal=document.getElementById('ytModal');
if(_ytModal)_ytModal.addEventListener('click',function(e){if(e.target===this)closeYtModal();});

/* ────────────────────── */

/* ── HELLOASSO IFRAME — config ──
   Pour l'iframe, HelloAsso utilise l'URL d'un FORMULAIRE de don avec /widget à la fin.
   Format : https://www.helloasso.com/associations/rejoice-63/formulaires/[SLUG]/widget
   Remplacez la valeur ci-dessous par l'URL widget de votre formulaire de don actif. */
const HA_WIDGET_URL = "https://www.helloasso.com/associations/rejoice-63/formulaires/1/widget";
const HA_FALLBACK_URL = "https://www.helloasso.com/associations/rejoice-63/accueil";

function openHaModal(){
  const m = document.getElementById('haModal');
  const f = document.getElementById('haIframe');
  const l = document.getElementById('haLoading');
  if(!f.src) f.src = HA_WIDGET_URL;
  l.style.display = 'flex';
  f.onload = () => { l.style.display = 'none'; };
  m.classList.add('open');
  m.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeHaModal(){
  const m = document.getElementById('haModal');
  m.classList.remove('open');
  m.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
/* Intercepte tous les liens helloasso.com et ouvre le modal à la place */
document.addEventListener('click', function(e){
  const a = e.target.closest('a[href*="helloasso.com/associations/rejoice"]');
  if(!a) return;
  /* Laisse le footer "Ouvrir dans un nouvel onglet" fonctionner normalement */
  if(a.closest('.ha-modal-foot')) return;
  e.preventDefault();
  openHaModal();
});
/* Fermer avec Escape ou clic sur le fond */
document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeHaModal(); closeYtModal(); } });
document.getElementById('haModal').addEventListener('click', function(e){
  if(e.target === this) closeHaModal();
});