// Sähköposti kootaan selaimessa, jotta roskapostirobotit eivät löydä sitä HTML:stä.
document.querySelectorAll('[data-mail]').forEach(function (el) {
  var addr = el.getAttribute('data-mail').replace(' (at) ', '@');
  el.href = 'mailto:' + addr;
  if (el.hasAttribute('data-show')) el.textContent = addr;
});
