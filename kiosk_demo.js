const history = [];
const labels = {
  menu:'MAIN MENU', services:'SERVICES', 'service-detail':'SERVICES / DETAIL',
  schedule:"TODAY'S SCHEDULE", facilities:'FACILITIES', about:'ABOUT US',
  book:'BOOK A VISIT', 'book-confirm':'BOOKING CONFIRMED', contact:'CONTACT'
};

function setActive(id){
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  document.getElementById('page-' + id).classList.add('active');
  const chrome = document.getElementById('chrome');
  if(id === 'home'){ chrome.classList.add('hidden'); }
  else { chrome.classList.remove('hidden'); document.getElementById('crumbPath').textContent = ' / ' + (labels[id] || ''); }
  resetIdle();
}

function go(id){
  const current = document.querySelector('.page.active').id.replace('page-','');
  if(current !== id) history.push(current);
  setActive(id);
}
function goBack(){
  const prev = history.pop();
  setActive(prev || 'menu');
}
function goHome(){
  history.length = 0;
  setActive('home');
}

// Idle timeout: after 45s of no interaction, kiosk resets to home.
let idleTimer;
const IDLE_MS = 300000; // 5 minutes
const idleBar = document.getElementById('idleBar');

function resetIdle(){
  clearTimeout(idleTimer);
  idleBar.style.transition = 'none';
  idleBar.style.transform = 'scaleX(0)';
  requestAnimationFrame(function(){
    idleBar.style.transition = 'transform ' + IDLE_MS + 'ms linear';
    idleBar.style.transform = 'scaleX(1)';
  });
  idleTimer = setTimeout(function(){
    if(document.querySelector('.page.active').id !== 'page-home') goHome();
  }, IDLE_MS);
}
document.addEventListener('click', resetIdle);
document.addEventListener('touchstart', resetIdle);
resetIdle();
