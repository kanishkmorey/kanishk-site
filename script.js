// Paginator: slides a .track of .page lists inside a .viewport
document.querySelectorAll('[data-pager]').forEach(function (root) {
  var track = root.querySelector('.track');
  var pages = Array.prototype.slice.call(track.children);
  var pager = root.querySelector('.pager');
  if (pages.length < 2) { pager.hidden = true; return; }

  var prev = pager.querySelector('.arrow.prev');
  var next = pager.querySelector('.arrow.next');
  var dotsWrap = pager.querySelector('.dots');
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
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key === 'ArrowLeft') go(current - 1);
    if (e.key === 'ArrowRight') go(current + 1);
  });
  go(0);
});

// Article helpers: all automatic from plain Markdown, nothing to configure
(function () {
  var prose = document.querySelector('.prose');

  if (prose) {
    // Open links to other sites in a new tab
    prose.querySelectorAll('a[href^="http"]').forEach(function (a) {
      if (a.hostname !== location.hostname) { a.target = '_blank'; a.rel = 'noopener'; }
    });

    // Images with a title -> captioned figure:  ![alt text](/images/x.jpg "Caption")
    prose.querySelectorAll('img[title]').forEach(function (img) {
      var caption = img.getAttribute('title');
      if (!caption) return;
      img.removeAttribute('title');
      var fig = document.createElement('figure');
      fig.className = 'prose-fig';
      var p = img.parentNode;
      var alone = p.tagName === 'P' && p.children.length === 1 && !p.textContent.trim();
      (alone ? p : img).replaceWith(fig);
      fig.appendChild(img);
      var fc = document.createElement('figcaption');
      fc.textContent = caption;
      fig.appendChild(fc);
    });

    // Wide tables scroll sideways instead of breaking the page
    prose.querySelectorAll('table').forEach(function (t) {
      var w = document.createElement('div');
      w.className = 'table-wrap';
      t.replaceWith(w);
      w.appendChild(t);
    });

    // Code blocks: language label + copy button
    prose.querySelectorAll('div.highlighter-rouge').forEach(function (block) {
      var m = /language-([\w+#-]+)/.exec(block.className);
      var lang = m && m[1] !== 'plaintext' ? m[1] : '';
      var bar = document.createElement('div');
      bar.className = 'code-bar';
      var label = document.createElement('span');
      label.textContent = lang;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = 'Copy';
      btn.addEventListener('click', function () {
        var text = block.querySelector('pre').innerText;
        var done = function () {
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
        };
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(done, function () {});
        } else {
          var ta = document.createElement('textarea');
          ta.value = text; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); done(); } catch (e) {}
          document.body.removeChild(ta);
        }
      });
      bar.appendChild(label);
      bar.appendChild(btn);
      block.insertBefore(bar, block.firstChild);
    });

    // "#" link next to headings so a section can be linked to
    prose.querySelectorAll('h2[id], h3[id]').forEach(function (h) {
      var a = document.createElement('a');
      a.className = 'anchor';
      a.href = '#' + h.id;
      a.setAttribute('aria-label', 'Link to this section');
      a.textContent = '#';
      h.appendChild(a);
    });
  }

  // "Back to top": the page scrolls inside .scroll, not the window
  document.querySelectorAll('.to-top').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var s = document.querySelector('.scroll');
      if (s) s.scrollTo({ top: 0 });
    });
  });
})();
