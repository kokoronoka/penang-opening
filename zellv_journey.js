const years = ['2000','2007','2009','2013','2014','2026'];

const labels = {
  vision: { en: 'OUR VISION', zh: '我们的愿景' },
  'year-2000': { en: '2000 · THE BEGINNING OF A DREAM', zh: '2000 · 梦想的开始' },
  'year-2007': { en: '2007 · BRAND TRANSFORMATION', zh: '2007 · 品牌蜕变' },
  'year-2009': { en: '2009-2010 · STEADY EXPANSION & CONTINUED GROWTH', zh: '2009-2010 · 稳健拓展，持续成长' },
  'year-2013': { en: '2013 · A NEW STAGE OF GROWTH', zh: '2013 · 跨越成长' },
  'year-2014': { en: '2014 · BRAND UPGRADE', zh: '2014 · 品牌升级' },
  'year-2026': { en: '2026 · A NEW ERA OF WELLNESS', zh: '2026 · 开启 Wellness 新时代' },
  tbc: { en: 'TO BE CONTINUED', zh: '敬请期待' }
};

// ---- Language switching: every translatable string lives here, keyed to
// match a data-i18n attribute in the HTML. Reused keys (e.g. tc-2000-h3)
// drive both the timeline card and the matching year page's own heading,
// so the two never drift out of sync with each other.
const translations = {
  'status-label': { en: 'OUR JOURNEY', zh: '我们的旅程' },
  'splash-eyebrow': { en: 'Welcome To', zh: '欢迎莅临' },
  'splash-h1': { en: 'Our Journey', zh: '我们的旅程' },
  'splash-taphint': { en: 'TAP ANYWHERE TO BEGIN', zh: '点击屏幕任意处开始' },

  'vision-eyebrow': { en: 'Our Vision', zh: '我们的愿景' },
  'vision-h2': { en: 'From Beauty to Wellness, From Local to Global.', zh: '从美丽走向健康，从本地走向世界。' },
  'vision-p': { en: 'Beginning with beauty, driven by a mission for health. Moving forward, we integrate advanced technologies, precision health management and professional medical concepts to build a trusted, one-stop Wellness brand.', zh: '从美丽出发，以健康为使命。未来，我们将持续融合国际先进科技、精准健康管理与专业医疗理念，打造得信赖的一站式 Wellness 品牌。<br><br>我们相信，真正的美丽源于健康，真正的健康始于细胞。<br><br>未来，我们将继续以创新为动力，以专业为基础，以关怀为核心，陪伴更多人迈向健康、年轻、高品质的人生，并把 Wellness 的价值，从马来西亚带向世界。' },
  'hero-years': { en: 'Years', zh: '年' },
  'hero-cap-1': { en: 'of Passion.', zh: '热忱如一' },
  'hero-cap-2': { en: 'One Vision.', zh: '同一愿景' },
  'hero-cap-3': { en: 'Endless Possibilities.', zh: '无限可能' },
  'hero-closing': { en: '26 years of staying true to our original aspiration and continuously innovating — <strong>all to protect every journey towards health and beauty.</strong>', zh: '26 年坚持初心，持续创新，<strong>以专业与远见，守护每一段通往健康与美丽的旅程。</strong>' },
  'scroll-hint': { en: 'Scroll for Our Journey', zh: '向下滑动查看我们的旅程' },
  'timeline-label': { en: 'Our Journey — Tap a Year', zh: '我们的旅程 — 点选年份查看' },

  'tc-link': { en: 'View Story →', zh: '查看故事 →' },

  'tc-2000-h3': { en: 'The Beginning of a Dream', zh: '梦想的开始' },
  'tc-2000-p': { en: 'SNE Beauty House Was Established', zh: 'SNE Beauty House 成立' },
  'tc-2007-h3': { en: 'Brand Transformation', zh: '品牌蜕变' },
  'tc-2007-p': { en: 'From Representing Brands to Creating Our Own', zh: '从代理品牌，到创造品牌' },
  'tc-2009-h3': { en: 'Steady Expansion & Continued Growth', zh: '稳健拓展，持续成长' },
  'tc-2009-p': { en: 'The Ipoh & Bukit Mertajam Branches Were Established', zh: 'Ipoh 及 Bukit Mertajam 分店成立' },
  'tc-2013-h3': { en: 'A New Stage of Growth', zh: '跨越成长' },
  'tc-2013-p': { en: 'A Complete Upgrade at Gurney Plaza', zh: 'Gurney Plaza 全面升级' },
  'tc-2014-h3': { en: 'Brand Upgrade', zh: '品牌升级' },
  'tc-2014-p': { en: 'A New Location in Butterworth', zh: 'Butterworth 全新据点' },
  'tc-2026-h3': { en: 'A New Era of Wellness', zh: '开启 Wellness 新时代' },
  'tc-2026-p': { en: 'Penang Wellness Was Officially Established', zh: '槟城 Wellness 正式诞生' },

  'nav-timeline': { en: 'Timeline', zh: '时间轴' },
  'nav-return-vision': { en: 'Return to Vision', zh: '返回愿景页' },
  'nav-next': { en: 'Next', zh: '下一步' },
  'tbc-title': { en: 'To be Continued...', zh: '敬请期待...' },

  'y2000-eyebrow': { en: 'Our Journey / 2000', zh: '我们的旅程 / 2000' },
  'y2000-p1': { en: 'It all began with a passion for beauty.', zh: '一切，始于一份对美丽的热爱。' },
  'y2000-p2': { en: 'The founder established SNE Beauty House in Bukit Jambul, Penang, beginning her entrepreneurial journey by providing professional beauty services, including slimming, bust enhancement, body-shaping lingerie and eyelash services.', zh: '创办人在槟城 Bukit Jambul 创立 SNE Beauty House，以专业美容服务开启创业旅程，提供瘦身、丰胸、调型内衣、美睫等服务，并代理多项国际美容品牌，包括 MFII、Natural Push Up 及 Lanni 荷荷巴油。' },
  'y2000-p3': { en: 'The company also represented several international beauty brands, including MFII, Natural Push Up and Lanni Jojoba Oil.', zh: '' },
  'y2000-p4': { en: "In the early days, the team consisted of only two members. Yet, with an unwavering commitment to professionalism, integrity and attentive service, they earned the trust of their customers one step at a time, laying a strong foundation for the brand's future development.", zh: '创业初期，团队只有两位伙伴，却始终坚持专业、诚信与用心服务，凭着一步一脚印的努力，赢得顾客的信任，也奠定了品牌发展的根基。' },

  'y2007-eyebrow': { en: 'Our Journey / 2007', zh: '我们的旅程 / 2007' },
  'y2007-p1': { en: 'The brand was officially upgraded to Ruyi and relocated to Gurney Plaza, marking the beginning of a new chapter.', zh: '品牌正式升级为 Ruyi，并迁入 Gurney Plaza，开启全新篇章。' },
  'y2007-quote-lead': { en: 'The founder has always believed:', zh: '创办人始终相信：' },
  'y2007-quote': { en: '"Do not simply represent other people\'s brands. Create a brand of your own."', zh: '「不要只是代理别人的品牌，而要创造属于自己的品牌。」' },
  'y2007-p3': { en: 'Guided by this belief, she travelled extensively around the world to learn about advanced international technologies and health management concepts, and subsequently established several proprietary brands:', zh: '怀抱这份信念，她不断走访世界各地，学习国际先进技术与健康管理理念，并陆续创立自有品牌：' },
  'y2007-brands': { en: '• Zéll-V&nbsp;&nbsp;&nbsp;• NPU&nbsp;&nbsp;&nbsp;• BeJojoba', zh: '• ZÉLL-V&nbsp;&nbsp;&nbsp;• NPU&nbsp;&nbsp;&nbsp;• BeJojoba' },
  'y2007-p4': { en: 'At the same time, advanced sub-health screening technology was introduced, leading the brand beyond traditional beauty services and into science-based health management, opening a new direction for its development.', zh: '同时，引进先进亚健康检测科技，带领品牌从传统美容迈向科学健康管理，开启全新的发展方向。' },

  'y2009-eyebrow': { en: 'Our Journey / 2009 – 2010', zh: '我们的旅程 / 2009 – 2010' },
  'y2009-title': { en: 'Steady Expansion', zh: '稳健拓展' },
  'y2009-sub': { en: 'The Ipoh Branch Was Established', zh: 'Ipoh 分店成立' },
  'y2009-p': { en: 'The brand took its first step towards regional expansion, bringing its professional beauty services and health management philosophy to more cities, allowing more people to experience professional and comprehensive care.', zh: '品牌迈出跨区域发展的第一步，把专业美容与健康管理理念带到更多城市，让更多人享受更专业、更全面的服务。' },
  'y2010-title': { en: 'Continued Growth', zh: '持续成长' },
  'y2010-sub': { en: 'The Bukit Mertajam Branch Was Established', zh: 'Bukit Mertajam 分店成立' },
  'y2010-p': { en: 'As the brand continued to grow, its service network expanded and the team grew stronger, allowing more customers to experience professional, reliable and thoughtful health and beauty services.', zh: '随着品牌不断成长，服务网络持续扩大，团队规模日益壮大，让更多顾客体验专业、安心且有温度的健康与美丽服务。' },

  'y2013-eyebrow': { en: 'Our Journey / 2013', zh: '我们的旅程 / 2013' },
  'y2013-p1': { en: 'As the number of customers continued to increase, the Gurney Plaza branch expanded from approximately 480 square feet to approximately 2,000 square feet.', zh: '随着顾客不断增加，Gurney Plaza 分店由约 480 平方尺扩展至约 2,000 平方尺。' },
  'y2013-p2': { en: "This represented more than an expansion of space. It symbolised the growing strength of the brand and the market's strong recognition of Ruyi, while also reflecting the founder's spirit of continuous innovation and her determination to keep moving beyond boundaries.", zh: '这不仅代表空间的升级，更象征品牌实力的提升，以及市场对 Ruyi 的高度认可，也见证创办人持续创新、不断突破的发展精神。' },

  'y2014-eyebrow': { en: 'Our Journey / 2014', zh: '我们的旅程 / 2014' },
  'y2014-p1': { en: "The Bukit Mertajam branch officially relocated to a prime location in Butterworth, with comprehensive upgrades to its service environment, professional equipment and brand image, establishing a stronger foundation for the brand's future development.", zh: '武吉丁宜分店正式迁至 Butterworth 黄金地段，全面升级服务环境、专业设备及品牌形象，为品牌未来发展奠定更坚实的基础。' },

  'y2026-eyebrow': { en: 'Our Journey / 2026', zh: '我们的旅程 / 2026' },
  'y2026-p1': { en: "The Butterworth and Gurney branches were officially integrated to establish Penang Wellness, marking a new milestone in the brand's journey.", zh: 'Butterworth 与 Gurney 两家分店正式整合，成立 Penang Wellness，开启品牌发展的全新里程碑。' },
  'y2026-p2': { en: "This represents the culmination of the founder's twenty-six years of continuous learning, ongoing innovation and courage to break new ground.", zh: '这是创办人二十六年来不断学习、持续创新、勇于突破的重要成果。' },
  'y2026-p3': { en: "From a small beauty salon in Bukit Jambul to today's one-stop health centre integrating Wellness, precision health management and regenerative medicine, every step of the journey has been shaped by perseverance, conviction and vision.", zh: '从一间位于 Bukit Jambul 的小美容院，到今天融合 Wellness、精准健康管理及再生医学的一站式健康中心，每一步都承载着坚持、信念与远见。' },
  'y2026-p4': { en: 'Today, we not only help our customers pursue beauty, but also hope to accompany every individual towards a healthier, more youthful and vibrant life.', zh: '今天，我们不仅帮助顾客追求美丽，更希望陪伴每一位顾客迈向健康、年轻、充满活力的人生。' }
};

let currentLang = localStorage.getItem('zellv_lang') === 'zh' ? 'zh' : 'en';

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    const entry = translations[el.getAttribute('data-i18n')];
    if(entry) el.innerHTML = entry[currentLang];
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  const langBtn = document.getElementById('langToggle');
  if(langBtn) langBtn.textContent = currentLang === 'en' ? '中文' : 'ENGLISH';
  updateCrumbLabel();
  if(currentId() === 'tbc') tbcRenderStatic();
  if(/^year-/.test(currentId())){
    applyWordFadeForYearPage(document.getElementById('page-' + currentId()));
  }
}

// ---- word-by-word fade-in for year-page story text: rebuilds each
// data-i18n element's content (straight from the translations dict, so it's
// always correct for the current language) into one <span class="word">
// per word, with a staggered animation-delay. Since the spans are brand-new
// DOM nodes every time, the CSS animation just replays on each page entry —
// no manual animation resets needed.
function wrapWordsInNode(node){
  Array.from(node.childNodes).forEach(function(child){
    if(child.nodeType === Node.TEXT_NODE){
      const text = child.textContent;
      if(!text || !text.trim()) return;
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach(function(part){
        if(part === '') return;
        if(/^\s+$/.test(part)){
          frag.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      node.replaceChild(frag, child);
    } else if(child.nodeType === Node.ELEMENT_NODE){
      wrapWordsInNode(child);
    }
  });
}

function wordifyElement(el, baseDelayMs){
  const key = el.getAttribute('data-i18n');
  const entry = key ? translations[key] : null;
  const source = entry ? entry[currentLang] : el.innerHTML;
  if(!source) return;

  const temp = document.createElement('div');
  temp.innerHTML = source;
  wrapWordsInNode(temp);
  el.innerHTML = temp.innerHTML;

  el.querySelectorAll('.word').forEach(function(w, i){
    w.style.animationDelay = (baseDelayMs + Math.min(i * 16, 380)) + 'ms';
  });
}

function applyWordFadeForYearPage(target){
  if(!target) return;
  const nodes = Array.from(target.querySelectorAll('[data-i18n]')).filter(function(el){
    return !el.closest('.yr-nav');
  });
  nodes.forEach(function(el, idx){
    wordifyElement(el, idx * 90);
  });
}

function updateCrumbLabel(){
  const crumbPath = document.getElementById('crumbPath');
  if(!crumbPath) return;
  const id = currentId();
  const entry = labels[id];
  crumbPath.textContent = entry ? ' / ' + entry[currentLang] : '';
}

function toggleLanguage(){
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('zellv_lang', currentLang);
  applyTranslations();
}

const history = [];

function currentId(){
  return document.querySelector('.page.active').id.replace('page-', '');
}

function updateTimelineFill(id){
  const topBar = document.getElementById('topProgress');
  const topFill = document.getElementById('topProgressFill');
  document.querySelectorAll('.timeline-item').forEach(function(n){ n.classList.remove('current'); });

  const match = id.match(/^year-(\d{4})$/);
  const idx = match ? years.indexOf(match[1]) : -1;
  if(idx === -1){
    if(topBar) topBar.classList.remove('visible');
    if(topFill) topFill.style.width = '0%';
    return;
  }

  const pct = years.length === 1 ? 100 : (idx / (years.length - 1)) * 100;
  if(topFill) topFill.style.width = pct + '%';
  if(topBar) topBar.classList.add('visible');

  const item = document.querySelector('.timeline-item[data-year="' + match[1] + '"]');
  if(item) item.classList.add('current');
}

// Reveals each timeline card (fade + rise) as it scrolls into view, mirroring
// the scroll-triggered reveal from the original component but without a
// framework — plain IntersectionObserver over the static timeline items.
const timelineObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.25 });

document.querySelectorAll('.timeline-item').forEach(function(item){
  timelineObserver.observe(item);
});

function setActive(id){
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  const target = document.getElementById('page-' + id);
  target.classList.add('active');

  const chrome = document.getElementById('chrome');
  if(id === 'splash'){
    chrome.classList.add('hidden');
  } else {
    chrome.classList.remove('hidden');
    updateCrumbLabel();
  }

  updateTimelineFill(id);
  playSweep(target);
  resetIdle();

  if(id === 'vision'){
    const scroller = document.getElementById('visionScroll');
    if(scroller) scroller.scrollTop = 0;
  }

  if(/^year-/.test(id)){
    applyWordFadeForYearPage(target);
  }

  if(id === 'tbc'){
    const btn = document.getElementById('tbcReturnBtn');
    if(btn){
      btn.classList.remove('show', 'vaporizing');
      clearTimeout(tbcTimer);
      tbcTimer = setTimeout(function(){ btn.classList.add('show'); }, 2200);
    }
    cancelAnimationFrame(tbcAnimFrame);
    requestAnimationFrame(function(){ tbcRenderStatic(); });
  }
}

let tbcTimer;

// ---- "To be Continued" particle text: a vanilla Canvas port of a
// vapor/dissolve text effect. Renders the heading as sampled pixel
// particles so it can be blown apart on demand (see vaporizeAndReturn),
// rather than needing a full React/Canvas component framework.
let tbcParticles = [];
let tbcAnimFrame = null;

function tbcRenderStatic(){
  const canvas = document.getElementById('tbcCanvas');
  const wrap = document.getElementById('tbcTextWrap');
  if(!canvas || !wrap) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = wrap.getBoundingClientRect();
  if(!rect.width || !rect.height) return;

  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const entry = translations['tbc-title'];
  const text = (entry ? entry[currentLang] : 'To be Continued...').replace(/<[^>]+>/g, '');
  const fontSize = Math.min(64, Math.max(34, rect.width * 0.085)) * dpr;
  ctx.font = "700 " + fontSize + "px 'Playfair Display', serif";
  ctx.fillStyle = '#8a6c22';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const particles = [];
  const sampleRate = Math.max(1, Math.round(dpr));

  for(let y = 0; y < canvas.height; y += sampleRate){
    for(let x = 0; x < canvas.width; x += sampleRate){
      const idx = (y * canvas.width + x) * 4;
      const alpha = data[idx + 3];
      if(alpha > 10){
        particles.push({
          x: x, y: y, originalX: x, originalY: y,
          r: data[idx], g: data[idx + 1], b: data[idx + 2],
          opacity: alpha / 255,
          vx: 0, vy: 0
        });
      }
    }
  }

  tbcParticles = particles;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tbcDrawParticles(ctx, sampleRate);
}

function tbcDrawParticles(ctx, size){
  tbcParticles.forEach(function(p){
    if(p.opacity > 0){
      ctx.fillStyle = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.opacity + ')';
      ctx.fillRect(p.x, p.y, size, size);
    }
  });
}

// Blows the "To be Continued..." text apart into its sampled particles,
// fades the button out alongside it, then returns home once the dissolve
// has fully cleared (or immediately if the canvas never rendered).
function vaporizeAndReturn(){
  const canvas = document.getElementById('tbcCanvas');
  const btn = document.getElementById('tbcReturnBtn');
  if(btn){ btn.classList.remove('show'); btn.classList.add('vaporizing'); }

  if(!canvas || !tbcParticles.length){
    setTimeout(goHome, 200);
    return;
  }

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const size = Math.max(1, Math.round(dpr));

  tbcParticles.forEach(function(p){
    const angle = Math.random() * Math.PI * 2;
    const speed = (Math.random() * 1.4 + 0.6) * 2.4;
    p.vx = Math.cos(angle) * speed;
    p.vy = Math.sin(angle) * speed;
    p.fadeRate = Math.random() * 0.02 + 0.016;
  });

  const start = performance.now();
  const maxDuration = 1100;

  function frame(now){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let anyVisible = false;
    tbcParticles.forEach(function(p){
      if(p.opacity > 0){
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = Math.max(0, p.opacity - p.fadeRate);
        if(p.opacity > 0){
          anyVisible = true;
          ctx.fillStyle = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.opacity + ')';
          ctx.fillRect(p.x, p.y, size, size);
        }
      }
    });

    if(anyVisible && (now - start) < maxDuration){
      tbcAnimFrame = requestAnimationFrame(frame);
    } else {
      cancelAnimationFrame(tbcAnimFrame);
      goHome();
    }
  }
  tbcAnimFrame = requestAnimationFrame(frame);
}

window.addEventListener('resize', function(){
  if(currentId() === 'tbc') tbcRenderStatic();
});

function playSweep(target){
  const old = target.querySelector(':scope > .sweep');
  if(old) old.remove();
  const sweep = document.createElement('div');
  sweep.className = 'sweep';
  target.appendChild(sweep);
  sweep.addEventListener('animationend', function(){ sweep.remove(); });
}

function go(id){
  const current = currentId();
  if(current !== id) history.push(current);
  setActive(id);
}

// Timeline cards get a richer transition than the default page fade: a gold
// circle blooms outward from the tapped card, covers the screen, swaps the
// page underneath while hidden, then fades away to reveal it.
function goFromTimeline(id, evt){
  const x = evt.clientX;
  const y = evt.clientY;
  const size = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  ) * 2.3;

  const veil = document.createElement('div');
  veil.className = 'tl-veil';
  veil.style.left = x + 'px';
  veil.style.top = y + 'px';
  veil.style.width = size + 'px';
  veil.style.height = size + 'px';
  document.getElementById('kiosk').appendChild(veil);

  requestAnimationFrame(function(){
    requestAnimationFrame(function(){ veil.classList.add('expand'); });
  });

  veil.addEventListener('transitionend', function onExpand(e){
    if(e.propertyName !== 'transform') return;
    veil.removeEventListener('transitionend', onExpand);
    go(id);
    veil.classList.add('fade-out');
    veil.addEventListener('transitionend', function onFade(e2){
      if(e2.propertyName !== 'opacity') return;
      veil.remove();
    }, { once:true });
  }, { once:true });
}
function goBack(){
  const prev = history.pop();
  setActive(prev || 'vision');
}
function goHome(){
  history.length = 0;
  setActive('vision');
}

// Idle timeout: after 5 minutes of no interaction, kiosk resets to the splash / attract screen.
let idleTimer;
const IDLE_MS = 300000;
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
    history.length = 0;
    if(currentId() !== 'splash') setActive('splash');
  }, IDLE_MS);
}

// Ripple effect at every tap/click point.
function spawnRipple(x, y){
  const r = document.createElement('div');
  r.className = 'ripple';
  r.style.left = x + 'px';
  r.style.top = y + 'px';
  document.body.appendChild(r);
  r.addEventListener('animationend', function(){ r.remove(); });
}

document.addEventListener('click', function(e){
  spawnRipple(e.clientX, e.clientY);
  resetIdle();
});
document.addEventListener('touchstart', function(e){
  if(e.touches && e.touches[0]){
    spawnRipple(e.touches[0].clientX, e.touches[0].clientY);
  }
  resetIdle();
}, { passive: true });

updateTimelineFill('splash');
applyTranslations();
resetIdle();

// Once an inserted photo loads, shape its frame to the photo's own aspect
// ratio so it fills the frame completely — no cropping (like object-fit:cover
// alone would do) and no empty letterbox margin (like object-fit:contain
// alone would do on a mismatched frame).
// (Disabled: every image frame is now a fixed 4:3 tile — see .photo-slot in
// CSS — instead of matching each photo's own natural aspect ratio.)

// A slot with no photo provided (or one that failed to load) is hidden via
// .img-missing (see CSS) rather than shown as an empty placeholder box — so
// the remaining real photos get sized for how many actually loaded, not for
// however many slots happen to exist in the markup.
function updatePhotoGridCount(grid){
  if(!grid) return;
  const visible = grid.querySelectorAll('.photo-slot:not(.img-missing)').length;
  grid.classList.remove('count-1', 'count-2', 'count-3');
  if(visible >= 1) grid.classList.add('count-' + Math.min(visible, 3));

  // A single surviving photo always gets the big right-side treatment,
  // whether this year normally stacks photos below the text or runs them
  // side-by-side — one photo reads better large than small-and-centered.
  // Skipped for two-col (merged) slides: each half has its own single photo
  // by design, and that's not the "enlarge to fill the page" case.
  const yrContent = grid.closest('.yr-content');
  if(yrContent && !yrContent.classList.contains('two-col')){
    yrContent.classList.toggle('single-photo', visible === 1);
  }
}

document.querySelectorAll('.photo-grid').forEach(function(grid){
  updatePhotoGridCount(grid);
  grid.querySelectorAll('.photo-slot img').forEach(function(img){
    img.addEventListener('load', function(){ updatePhotoGridCount(grid); });
    img.addEventListener('error', function(){ updatePhotoGridCount(grid); });
  });
});

// Tap a journey photo to see it full-size and uncropped, since the frames
// themselves always crop to a fixed tile shape.
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src, alt){
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
}
function closeLightbox(){
  lightbox.classList.remove('open');
}

document.querySelectorAll('.photo-slot img').forEach(function(img){
  img.addEventListener('click', function(e){
    e.stopPropagation();
    if(img.closest('.photo-slot').classList.contains('img-missing')) return;
    openLightbox(img.src, img.alt);
  });
});
lightbox.addEventListener('click', closeLightbox);
