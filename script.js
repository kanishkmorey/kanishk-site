// Paginator: slides a .track of .page lists inside a .viewport
document.querySelectorAll('[data-pager]').forEach(function (root) {
  var track = root.querySelector('.track');
  var pages = Array.prototype.slice.call(track.children);
  var prev = root.querySelector('.arrow.prev');
  var next = root.querySelector('.arrow.next');
  var dotsWrap = root.querySelector('.dots');
  var current = 0;

  // Build one dot per page
  pages.forEach(function (_, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'dot';
    b.setAttribute('aria-label', 'Page ' + (i + 1));
    b.appendChild(document.createElement('span'));
    b.addEventListener('click', function () { go(i); });
    dotsWrap.appendChild(b);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function go(i) {
    current = Math.max(0, Math.min(pages.length - 1, i));
    track.style.transform = 'translateX(-' + current * 100 + '%)';
    pages.forEach(function (p, k) {
      var hidden = k !== current;
      p.setAttribute('aria-hidden', hidden ? 'true' : 'false');
      if (hidden) p.setAttribute('inert', ''); else p.removeAttribute('inert');
    });
    dots.forEach(function (d, k) {
      if (k === current) d.setAttribute('aria-current', 'page'); else d.removeAttribute('aria-current');
    });
    prev.disabled = current === 0;
    next.disabled = current === pages.length - 1;
  }
  prev.addEventListener('click', function () { go(current - 1); });
  next.addEventListener('click', function () { go(current + 1); });
  if (pages.length < 2) root.querySelector('.pager').hidden = true;
  go(0);
});
