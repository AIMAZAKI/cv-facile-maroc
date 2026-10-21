const form = document.getElementById('cvForm');
const $ = (id) => document.getElementById(id);
const val = (name) => String(new FormData(form).get(name) || '').trim();
let photoDataUrl = '';
const photoInput = $('photoInput');
photoInput.addEventListener('change', () => {
  const file = photoInput.files && photoInput.files[0];
  if (!file) { photoDataUrl = ''; updatePhoto(); return; }
  if (!['image/jpeg','image/png','image/webp'].includes(file.type)) { alert('Choisissez une image JPG, PNG ou WebP.'); photoInput.value = ''; return; }
  if (file.size > 2 * 1024 * 1024) { alert('La photo doit faire 2 Mo maximum.'); photoInput.value = ''; return; }
  const reader = new FileReader();
  reader.onload = () => { photoDataUrl = String(reader.result || ''); updatePhoto(); };
  reader.onerror = () => alert('Impossible de lire cette image. Essayez une autre photo.');
  reader.readAsDataURL(file);
});
function updatePhoto() {
  const img = $('pPhoto');
  if (photoDataUrl) { img.src = photoDataUrl; img.hidden = false; }
  else { img.removeAttribute('src'); img.hidden = true; }
}
function safeText(id, value, fallback) { $(id).textContent = value || fallback; }
function updatePreview() {
  const name = val('name'), job = val('job'), email = val('email'), phone = val('phone');
  const city = val('city'), link = val('link');
  safeText('pName', name, 'Votre nom complet');
  safeText('pJob', job, 'Poste recherché');
  safeText('pContact', [email, phone, city, link].filter(Boolean).join('  ·  '), 'Email · Téléphone · Ville');
  safeText('pSummary', val('summary'), 'Votre résumé professionnel apparaîtra ici. Décrivez en quelques lignes votre expérience, vos qualités et votre objectif.');
  safeText('pExperience', val('experience'), 'Ajoutez vos expériences professionnelles dans le formulaire.');
  safeText('pEducation', val('education'), 'Ajoutez vos diplômes et formations.');
  safeText('pLanguages', val('languages'), 'Ajoutez vos langues.');
  const skills = val('skills').split(/[,،;\n]+/).map(x => x.trim()).filter(Boolean).slice(0,30);
  const skillBox = $('pSkills'); skillBox.replaceChildren();
  (skills.length ? skills : ['Vos compétences']).forEach(skill => {
    const span = document.createElement('span'); span.textContent = skill; skillBox.appendChild(span);
  });
}
form.addEventListener('input', updatePreview);
form.addEventListener('submit', (e) => { e.preventDefault(); updatePreview(); document.querySelector('.preview-panel').scrollIntoView({behavior:'smooth',block:'start'}); });
$('clearBtn').addEventListener('click', () => {
  if (confirm('Effacer toutes les informations du formulaire ?')) { form.reset(); photoDataUrl = ''; updatePhoto(); updatePreview(); }
});
$('downloadBtn').addEventListener('click', () => {
  updatePreview();
  // Browser print dialog lets the user save the CV as PDF without uploading their data.
  const oldTitle = document.title;
  document.title = (val('name') || 'Mon-CV').replace(/[^a-z0-9-_ ]/gi,'').trim().replace(/\s+/g,'-') || 'Mon-CV';
  window.print();
  setTimeout(() => { document.title = oldTitle; }, 500);
});
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => document.querySelector('.site-header nav').classList.toggle('open'));
document.querySelectorAll('.site-header nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.site-header nav').classList.remove('open')));
$('year').textContent = new Date().getFullYear();
updatePreview();
