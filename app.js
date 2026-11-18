(function () {
  "use strict";
  var IMG = "https://framerusercontent.com/images/";
  var A_PATH = "M1 340 13 352 28 364 56 381 90 394 129 402 168 406 187 406 188 407 255 406 256 405 271 405 272 404 313 401 357 395 388 389 391 390 341 438 291 480 244 512 198 535 153 549 117 554 68 553 52 550 28 543 34 549 44 554 71 562 89 565 144 565 186 560 224 551 251 542 277 531 322 506 367 473 397 447 422 423 469 372 552 353 553 354 529 392 504 440 485 491 480 513 478 528 478 552 480 561 483 568 489 576 499 582 508 584 528 583 541 579 560 567 576 551 591 529 608 492 622 445 631 396 634 369 635 336 636 335 691 328 727 328 755 333 783 344 798 354 813 368 822 380 831 398 837 423 837 449 832 474 824 496 815 514 803 533 784 557 761 581 745 595 725 610 694 629 671 640 644 650 621 656 603 659 560 660 541 657 521 651 494 637 480 626 466 612 452 594 444 581 434 560 424 532 421 534 426 558 433 580 451 616 473 642 498 661 514 669 528 674 560 680 599 679 622 675 641 670 682 654 708 640 731 625 760 602 795 566 821 531 838 498 848 463 849 427 846 411 841 396 829 374 814 355 789 333 772 322 754 313 723 303 688 298 656 298 637 300 636 299 635 279 655 252 685 216 705 194 748 151 788 116 821 91 850 72 877 57 885 54 887 52 887 46 886 45 866 50 832 61 810 70 788 81 696 136 657 162 620 189 604 145 591 120 575 96 562 80 539 57 520 42 501 30 481 20 457 11 438 6 414 2 368 1 344 4 318 10 287 22 269 32 245 50 232 63 220 78 211 92 202 110 194 135 191 154 191 180 194 198 199 214 210 236 221 252 233 264 252 278 274 289 302 297 333 301 358 301 377 299 404 292 432 279 453 266 452 262 450 261 414 276 383 283 336 284 318 281 289 272 261 257 253 251 239 237 225 214 220 201 215 179 215 151 222 122 237 90 248 75 267 56 281 45 312 27 327 21 349 15 381 11 413 12 434 15 454 20 474 27 495 37 516 50 536 66 552 82 576 113 589 135 598 154 608 180 612 195 560 236 522 268 425 357 379 370 308 384 261 391 232 394 219 394 218 395 157 395 156 394 136 393 101 387 63 376 27 359ZM626 337 627 340 626 341 625 370 619 415 610 456 598 493 583 525 566 548 550 560 543 562 536 562 529 557 526 551 525 517 531 482 546 435 557 409 577 369 591 345 598 342ZM505 331 506 330 507 331 506 332ZM626 292 627 301 620 303 619 301ZM617 217 622 239 624 260 601 287 585 309 507 331 506 330 546 285 594 237ZM822 80 777 112 738 144 702 177 668 211 633 249 632 248 628 222 625 211 630 205 682 163 741 122 782 98 820 79ZM822 79 823 78 824 79 823 80Z";

  var ICON = {
    linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx=".75"/><path d="M8.25 10.5v6M11.25 10.5v6M11.25 13.13a2.63 2.63 0 0 1 5.25 0v3.37"/><circle cx="8.25" cy="7.88" r=".9" fill="currentColor" stroke="none"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4.5"/><circle cx="12" cy="12" r="3.75"/><circle cx="16.9" cy="7.1" r=".9" fill="currentColor" stroke="none"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.25h18v12.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75z"/><path d="M21 5.25 12 13.5 3 5.25"/></svg>'
  };
  var SOCIAL = [
    ["LinkedIn", "https://www.linkedin.com/in/annalisec", ICON.linkedin],
    ["Instagram", "https://www.instagram.com/annalisecdesign/", ICON.instagram],
    ["Email", "mailto:annalisekc@gmail.com", ICON.email]
  ];

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function img(id, w) { return IMG + id + (w ? "?scale-down-to=" + w : ""); }
  function srcset(id, ws) { return ws.map(function (w) { return img(id, w) + " " + w + "w"; }).join(", "); }
  var CARD_SIZES = "(max-width:809.98px) 100vw, (max-width:1199.98px) 45vw, 320px";
  function socials(cls) {
    return '<div class="' + cls + '">' + SOCIAL.map(function (s) {
      return '<a href="' + s[1] + '" aria-label="' + s[0] + '"' + (s[0] === "Email" ? "" : ' target="_blank" rel="noopener"') + '>' + s[2] + '</a>';
    }).join("") + '</div>';
  }

  // ---------- Layout ----------
  function sidebar(active) {
    var links = window.CATS.map(function (c) {
      return '<a class="nav-link' + (active === c.slug ? " is-active" : "") + '" href="/' + c.slug + '">' + esc(c.name) + '</a>';
    }).join("") + '<a class="nav-link' + (active === "photography" ? " is-active" : "") + '" href="/work/photography">PHOTOGRAPHY</a>';
    return '<nav class="sidebar">' +
      '<div class="sb-top"><a class="brand" href="/">ANNALISE COOK</a>' +
      '<button class="menu-btn" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button></div>' +
      '<div class="sb-body"><a class="meet' + (active === "about" ? " is-active" : "") + '" href="/about">MEET &amp; CONNECT &nbsp;→</a>' +
      '<div class="work"><span class="work-label">WORK</span>' + links + '</div>' +
      socials("sb-social") + '</div></nav>';
  }
  function shell(active, inner) {
    return '<div class="layout">' + sidebar(active) + '<main class="content">' + inner + '</main></div>';
  }

  // ---------- Pages ----------
  function home() {
    document.body.className = "is-home";
    return '<section class="home">' +
      '<div class="pen-a" aria-hidden="true"><svg viewBox="0 0 888 682"><path d="' + A_PATH + '" fill-rule="evenodd" pathLength="1"/></svg></div>' +
      '<div class="home-inner"><h1>ANNALISE COOK</h1>' +
      '<p class="tagline"><span>Graphic &amp; Web Designer</span><span class="sep"> | </span><span>Brand Identity, Digital &amp; Visual Design</span></p>' +
      '<a class="pill" href="/brand-identity">EXPLORE MY WORK</a>' + socials("home-social") + '</div></section>';
  }

  function card(p) {
    return '<a class="card" href="/work/' + p.slug + '"><div class="card-img">' +
      '<img src="' + img(p.cover, 1024) + '" srcset="' + srcset(p.cover, [512, 1024]) + '" sizes="' + CARD_SIZES + '" alt="' + esc(p.title) + '" loading="lazy" decoding="async">' +
      (p.hover ? '<img class="hover" src="' + img(p.hover, 1024) + '" srcset="' + srcset(p.hover, [512, 1024]) + '" sizes="' + CARD_SIZES + '" alt="" loading="lazy" decoding="async">' : "") +
      '</div><span class="card-title">' + esc(p.title) + '</span><span class="card-year">' + esc(p.year) + '</span></a>';
  }

  function category(c) {
    var items = window.PROJECTS.filter(function (p) { return p.cat === c.cat; }).sort(function (a, b) { return a.order - b.order; });
    var extra = "";
    if (c.slug === "website-design") {
      extra = '<div class="live"><h2>LIVE WEBSITE PORTFOLIO:</h2><ul>' + window.LIVE_SITES.map(function (s) {
        return '<li><span class="dot">•</span><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[0]) + '</a><span class="via">' + esc(s[2]) + '</span></li>';
      }).join("") + '</ul></div>';
    }
    return shell(c.slug, '<h1 class="cat-title">' + esc(c.name) + '</h1><div class="grid">' + items.map(card).join("") + '</div>' + extra);
  }

  function button(s) {
    if (!s.bl || !s.bu) return "";
    if (s.bo) return '<div class="btn-row"><a class="btn-outline" style="--c:' + (s.bc || "#222") + '" href="' + esc(s.bu) + '" target="_blank" rel="noopener"><span>' + esc(s.bl) + '</span></a></div>';
    return '<div class="btn-row"><a class="btn" href="' + esc(s.bu) + '" target="_blank" rel="noopener">' + esc(s.bl) + '</a></div>';
  }
  function section(s) {
    if (Array.isArray(s)) {
      var gsizes = "(max-width:809.98px) 100vw, " + Math.round(1020 / s.length) + "px";
      return '<div class="jrow">' + s.map(function (id) {
        return '<figure><img src="' + img(id, 2048) + '" srcset="' + srcset(id, [512, 1024, 2048]) + '" sizes="' + gsizes + '" data-full="' + img(id) + '" alt="" loading="lazy" decoding="async"></figure>';
      }).join("") + '</div>';
    }
    var out = "";
    if (s.b) {
      out += '<div class="text' + (s.cap ? " is-caption" : "") + '">' +
        (s.h ? '<h2 class="sec-h">' + esc(s.h) + '</h2>' : "") +
        (s.s ? '<p class="sec-s">' + esc(s.s) + '</p>' : "") +
        '<div class="body">' + s.b + '</div></div>';
    }
    if (s.si) {
      out += '<div class="side"><div class="side-img"><img src="' + img(s.si, 512) + '" alt="" loading="lazy"></div><div class="side-text">' + s.st + button(s) + '</div></div>';
    } else {
      out += button(s);
    }
    if (s.e) out += '<div class="embed' + (s.dark ? " dark" : "") + '"><iframe src="' + esc(s.e) + '" loading="lazy" allowfullscreen></iframe></div>';
    return out;
  }
  function project(p) {
    var active = p.slug === "photography" ? "photography" : (window.CATS.filter(function (c) { return c.cat === p.cat; })[0] || {}).slug;
    return shell(active, '<article class="project" id="top"><header class="proj-head"><h1 class="' + (p.smallTitle ? "cat-title" : "proj-title") + '">' + esc(p.title) + '</h1></header>' +
      '<div class="sections">' + p.sections.map(section).join("") + '</div>' +
      '<a class="back-top" href="#top">↑ &nbsp;Back to Top</a></article>');
  }

  function about() {
    var A = window.ABOUT;
    var facts = ["BFA in Graphic Design, High Point University", "Outstanding Body of Work Award, 2025–2026", "Creative Quarterly 83 Winner", "Graphic &amp; Web Designer at Develomark", "2+ Years of Creative Experience"];
    var roman = ["I.", "II.", "III.", "IV.", "V."];
    var logos = A.logos.map(function (l) { return '<li><img src="' + img(l, 512) + '" alt="" loading="lazy"></li>'; }).join("");
    var tools = A.tools.map(function (t) {
      return Array.isArray(t) ? '<span class="tool tool-text" style="background:' + t[1] + ';color:' + t[2] + '">' + t[0] + '</span>'
        : '<img class="tool" src="' + img(t, 512) + '" alt="" loading="lazy">';
    }).join("");
    var recs = A.recs.map(function (r) {
      return '<div class="rec"><div class="rec-head"><img src="' + img(r.img, 512) + '" alt="" loading="lazy"><div><b>' + esc(r.name) + '</b><span>' + esc(r.role) + '</span><small>' + esc(r.meta) + '</small></div></div>' +
        '<p>' + esc(r.text) + '</p><a class="more" href="https://www.linkedin.com/in/annalisec/" target="_blank" rel="noopener">READ MORE &nbsp;→</a></div>';
    }).join("");
    return shell("about", '<div class="about">' +
      '<div class="about-top"><div class="portrait"><img src="' + img(A.portrait, 1024) + '" alt="Portrait of Annalise Cook"></div>' +
      '<div class="about-intro"><h1>ABOUT ME</h1><p>Hello! I’m Annalise Cook, a graphic designer and digital marketing professional passionate about building brands, creating engaging visual experiences, and bringing ideas to life through thoughtful design.</p>' +
      '<ol class="facts">' + facts.map(function (f, i) { return '<li><span>' + roman[i] + '</span>' + f + '</li>'; }).join("") + '</ol></div></div>' +
      '<h3 class="label">BRANDS &amp; CLIENTS</h3><div class="ticker"><ul>' + logos + logos + '</ul></div>' +
      '<div class="story"><h3 class="label">MY STORY</h3><div><p>I’m Annalise Cook, a graphic and digital designer with a passion for creating thoughtful brands and meaningful digital experiences.</p>' +
      '<p>With a BFA in Graphic Design and experience spanning brand identity, web design, UX/UI, and digital marketing, I bring both creative thinking and a strategic perspective to every project.</p>' +
      '<p>My work combines visual storytelling, thoughtful design, and an understanding of how people interact with brands. From building identities from the ground up to designing responsive websites and marketing campaigns, I enjoy bringing ideas to life across every touchpoint.</p>' +
      '<a class="underline-link" href="/brand-identity">EXPLORE MY WORK &nbsp;→</a></div></div>' +
      '<h3 class="label">RECOMMENDATIONS</h3><div class="recs">' + recs + '</div>' +
      '<h3 class="label">TOOLS I WORK WITH</h3><div class="tools">' + tools + '</div>' +
      '<div class="contact" id="contact"><div><span>CONTACT</span><p>Thanks for stopping by — I’d love to connect.</p></div>' +
      '<a href="mailto:annalisekc@gmail.com">ANNALISEKC@GMAIL.COM &nbsp;→</a></div></div>');
  }

  // ---------- Router ----------
  function render(path) {
    path = path.replace(/\/index\.html$/, "").replace(/\/+$/, "") || "/";
    var html, title = "Annalise Cook — Graphic & Web Designer";
    document.body.className = "";
    if (path === "/") html = home();
    else if (path === "/about") { html = about(); title = "About — Annalise Cook"; }
    else {
      var c = window.CATS.filter(function (x) { return "/" + x.slug === path; })[0];
      var m = path.match(/^\/work\/([^/]+)$/);
      var p = m && window.PROJECTS.filter(function (x) { return x.slug === m[1]; })[0];
      if (c) { html = category(c); title = c.name.charAt(0) + c.name.slice(1).toLowerCase() + " — Annalise Cook"; }
      else if (p) { html = project(p); title = p.title + " — Annalise Cook"; }
      else html = shell("", '<h1 class="cat-title">PAGE NOT FOUND</h1><p class="nf"><a class="underline-link" href="/">BACK HOME &nbsp;→</a></p>');
    }
    document.getElementById("app").innerHTML = html;
    document.title = title;
    setup();
  }

  function setup() {
    var rows = document.querySelectorAll(".jrow figure img");
    Array.prototype.forEach.call(rows, function (im) {
      function fit() { if (im.naturalWidth) im.parentNode.style.flex = (im.naturalWidth / im.naturalHeight) + " 1 0%"; }
      if (im.complete) fit(); else im.addEventListener("load", fit);
    });
    var btn = document.querySelector(".menu-btn");
    if (btn) btn.addEventListener("click", function () {
      var nav = document.querySelector(".sidebar"); var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  // Lightbox for project images
  var lb = { list: [], i: 0, el: null };
  function showLb() {
    if (!lb.el) {
      lb.el = document.createElement("div"); lb.el.className = "lightbox";
      lb.el.innerHTML = '<img alt=""><button class="lb-x" aria-label="Close">×</button><button class="lb-p" aria-label="Previous">‹</button><button class="lb-n" aria-label="Next">›</button><span class="lb-c"></span>';
      document.body.appendChild(lb.el);
      lb.el.addEventListener("click", function (e) {
        if (e.target.classList.contains("lb-p")) step(-1);
        else if (e.target.classList.contains("lb-n")) step(1);
        else if (e.target.tagName !== "IMG") closeLb();
      });
    }
    lb.el.querySelector("img").src = lb.list[lb.i];
    lb.el.querySelector(".lb-c").textContent = (lb.i + 1) + " / " + lb.list.length;
    lb.el.classList.add("on"); document.documentElement.style.overflow = "hidden";
  }
  function step(d) { lb.i = (lb.i + d + lb.list.length) % lb.list.length; showLb(); }
  function closeLb() { if (lb.el) lb.el.classList.remove("on"); document.documentElement.style.overflow = ""; }
  document.addEventListener("keydown", function (e) {
    if (!lb.el || !lb.el.classList.contains("on")) return;
    if (e.key === "Escape") closeLb(); else if (e.key === "ArrowRight") step(1); else if (e.key === "ArrowLeft") step(-1);
  });

  document.addEventListener("click", function (e) {
    var im = e.target.closest && e.target.closest(".jrow img");
    if (im) {
      var all = Array.prototype.slice.call(document.querySelectorAll(".jrow img"));
      lb.list = all.map(function (x) { return x.getAttribute("data-full"); });
      lb.i = all.indexOf(im); showLb(); return;
    }
    var a = e.target.closest && e.target.closest("a");
    if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var href = a.getAttribute("href");
    if (href === "#top") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    if (!href || href.charAt(0) !== "/") return;
    e.preventDefault();
    if (href !== location.pathname) history.pushState(null, "", href);
    render(href); window.scrollTo(0, 0);
  });
  window.addEventListener("popstate", function () { render(location.pathname); });

  render(location.pathname);
})();
