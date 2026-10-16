// Sähköposti kootaan selaimessa, jotta roskapostirobotit eivät löydä sitä HTML:stä.
document.querySelectorAll('[data-mail]').forEach(function (el) {
  var addr = el.getAttribute('data-mail').replace(' (at) ', '@');
  el.href = 'mailto:' + addr;
  if (el.hasAttribute('data-show')) el.textContent = addr;
});

// Näytön asetukset: tekstikoko ja korkea kontrasti. Valinta muistetaan tässä selaimessa.
(function () {
  var root = document.documentElement;
  var sizes = [100, 125, 150];
  var names = ['normaali', 'suuri', 'erittäin suuri'];
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var size = parseInt(load('tekstikoko'), 10) || 0;
  var high = load('kontrasti') === '1';
  function apply() {
    root.style.fontSize = sizes[size] + '%';
    if (high) root.setAttribute('data-contrast', 'high'); else root.removeAttribute('data-contrast');
  }
  apply();

  var bar = document.createElement('div');
  bar.className = 'a11y';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', 'Näytön asetukset');
  var b1 = document.createElement('button');
  b1.type = 'button';
  var b2 = document.createElement('button');
  b2.type = 'button';
  b2.textContent = 'Korkea kontrasti';
  function label() {
    b1.textContent = 'Tekstikoko: ' + names[size];
    b1.setAttribute('aria-label', 'Tekstikoko: ' + names[size] + '. Vaihda tekstikokoa.');
    b2.setAttribute('aria-pressed', high ? 'true' : 'false');
  }
  label();
  b1.addEventListener('click', function () { size = (size + 1) % sizes.length; save('tekstikoko', size); apply(); label(); });
  b2.addEventListener('click', function () { high = !high; save('kontrasti', high ? '1' : '0'); apply(); label(); });
  bar.appendChild(b1);
  bar.appendChild(b2);
  var skip = document.querySelector('.skip');
  skip.parentNode.insertBefore(bar, skip.nextSibling);
})();
