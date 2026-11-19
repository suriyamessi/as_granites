"use strict";

const photos = {
  hero: "assets/kitchen.svg",
  interior: "assets/kitchen.svg",
  bathroom: "assets/bathroom.svg",
  exterior: "assets/architecture.svg",
  detail: "assets/architecture.svg"
};
const arrow = '<span aria-hidden="true">&nearr;</span>';
const brand = `<a class="brand" href="index.html" aria-label="A.S. Granites home">
  <svg class="brand-mark" viewBox="0 0 46 48" fill="none" aria-hidden="true"><path d="M3 42 21 5h6l17 37H3Z" stroke="currentColor" stroke-width="1.5"/><path d="m13 34 11-23 11 23M17 27h14M4 42l14-8h17" stroke="currentColor" stroke-width="1.5"/></svg>
  <span>A.S. GRANITES<small>MANUFACTURERS &amp; EXPORTERS</small></span></a>`;
const address = "9/28-A, Ondiveeranur, Marakottai (Po), Kadayampatty (Tk), Salem (Dt) – 636 451, Tamil Nadu, India.";
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("9/28-A, Ondiveeranur, Marakottai, Kadayampatty, Salem – 636 451")}`;
const stones = [
  { name: "Absolute Black", type: "DEEP. PURE. TIMELESS.", texture: "absolute" },
  { name: "Black Galaxy", type: "A TOUCH OF NATURAL BRILLIANCE.", texture: "galaxy" },
  { name: "Steel Grey", type: "UNDERSTATED. EXTRAORDINARY.", texture: "steel" },
  { name: "Black Pearl", type: "CHARACTER IN EVERY DETAIL.", texture: "pearl" }
];
const edges = [
  ["Half Bullnose", "M8 16H90Q115 16 115 41V74H8Z"],
  ["Full Bullnose", "M8 16H91C132 16 132 74 91 74H8Z"],
  ["Bevel", "M8 16H91L116 41V74H8Z"],
  ["Ogee", "M8 16H88C88 43 116 25 116 53V74H8Z"],
  ["DuPont", "M8 16H87V31C87 50 116 38 116 59V74H8Z"],
  ["Waterfall", "M8 16H112V74H88V39H8Z"],
  ["Rock Pitch", "M8 16H108L115 25 106 34 118 46 108 57 115 74H8Z"]
];

document.getElementById("site-header").innerHTML = `
  <div class="topbar"><div class="container"><span>The Expert in Granite <i></i> Special Quality in Export</span><a href="tel:+919442248282">Talk to our team <span aria-hidden="true">↗</span> +91 94422 48282</a></div></div>
  <header class="site-header"><div class="container header-inner">${brand}
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation"><span></span><span></span></button>
    <nav id="site-nav" aria-label="Main navigation">
      <a href="#about">About</a><a href="#products">Products</a><a href="#edges">Edges</a><a href="#quality">Quality</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
    </nav><a class="button button-dark header-cta" href="#contact">Get a Quote ${arrow}</a>
  </div></header>`;

document.getElementById("main").innerHTML = `
  <section class="hero" aria-labelledby="hero-title">
    <img class="hero-image" src="${photos.hero}" alt="Architectural interior with a natural stone kitchen island" fetchpriority="high">
    <div class="hero-shade"></div>
    <div class="container hero-content">
      <p class="eyebrow light"><span></span> NATURE'S ART. OUR CRAFT.</p>
      <h1 id="hero-title">The Excellence<br>of <em>Granite.</em></h1>
      <p class="hero-subtitle">Premium Granite Manufacturer &amp; Global Exporter</p>
      <p class="hero-description">Manufacturers and exporters of premium-quality black granite, crafted to elevate interiors, exteriors, and architectural spaces.</p>
      <div class="hero-actions"><a class="button button-gold" href="#products">View Granite Colours ${arrow}</a><a class="text-link" href="#contact">Get a Quote <span aria-hidden="true">↗</span></a></div>
    </div>
    <div class="hero-bottom container"><span>CRAFTED IN SALEM. CHOSEN WORLDWIDE.</span><a href="#about">Discover the difference <span aria-hidden="true">↓</span></a></div>
    <span class="hero-image-note">Illustrative architectural inspiration</span>
  </section>
  <div class="trust-strip"><div class="container"><p><span class="trust-icon">◇</span> Premium Natural Stone</p><p><span class="trust-icon">✧</span> Precision in Every Finish</p><p><span class="trust-icon">◎</span> Export-Quality Standards</p><p><span class="trust-icon">↗</span> From India to the World</p></div></div>

  <section class="section container about" id="about">
    <div class="about-visual"><img src="${photos.interior}" alt="Natural stone surfaces in a contemporary kitchen" loading="lazy"><div class="established"><strong>2020</strong><span>THE BEGINNING OF<br>OUR STONE STORY</span></div><span class="image-caption">INSPIRED BY NATURE. PERFECTED BY CRAFT.</span></div>
    <div class="about-copy"><p class="eyebrow">01 / OUR STORY</p><h2>A vision set<br>in <em>stone.</em></h2><p class="section-kicker">Our Vision · Established in 2020 in Tamil Nadu.</p>
      <p>At A.S. Granites, our vision is to become a trusted and leading name in the interior design and architecture industry by offering the most exquisite, regal, and high-quality granites and marbles.</p>
      <p>We deliver products that embody elegance and durability, combining deep knowledge of natural resources with advanced technological expertise, while upholding the highest standards of safety and environmental responsibility.</p>
      <details class="story-details"><summary>More about our vision <span aria-hidden="true">+</span></summary><p>We believe a truly remarkable structure begins with inspiration, is shaped through precision, and ultimately stands as a timeless masterpiece.</p><p>Our mission is to source only the finest materials, highlighting their natural beauty and showcasing craftsmanship in every detail.</p><p>We aim to be a dependable supplier – valued not only for product quality but for our unwavering reliability and integrity.</p></details>
      <a class="underlined-link" href="#manufacturing">Discover our craftsmanship ${arrow}</a>
    </div>
  </section>

  <section class="collection section" id="products"><div class="container">
    <div class="section-heading"><div><p class="eyebrow">02 / THE COLLECTION</p><h2>One stone.<br><em>Endless possibilities.</em></h2></div><div class="heading-aside"><h3>Granite Colours</h3><p>Our range of premium black granites.<br>Natural character. Exceptional presence.</p><a class="underlined-link" href="#contact">Find your perfect stone ${arrow}</a></div></div>
    <div class="product-grid">${stones.map((stone, index) => `<button class="product-card" type="button" data-stone="${index}" aria-label="Explore ${stone.name}"><span class="stone-swatch ${stone.texture}" role="img" aria-label="Illustrative ${stone.name} texture"><span class="product-number">0${index + 1}</span><span class="product-arrow" aria-hidden="true">↗</span></span><span class="product-name">${stone.name}</span><span class="product-tag">${stone.type}</span></button>`).join("")}</div>
    <p class="collection-note"><span aria-hidden="true">✧</span> Every slab is unique. Explore the beauty only nature can create.</p><p class="asset-note">Illustrative colour selections and textures. Contact us for confirmed collections, current slab photographs and availability.</p>
  </div></section>

  <section class="section container applications" id="applications">
    <div class="section-heading"><div><p class="eyebrow">03 / DESIGNED FOR LIVING</p><h2>Beautiful within.<br><em>Remarkable beyond.</em></h2></div><div class="heading-aside"><h3>Interior &amp; Exterior Granites</h3><p>Strength, luxury and lasting elegance – indoors and out.</p></div></div>
    <div class="application-grid"><article class="application-card"><img src="${photos.bathroom}" alt="Inspiration for granite bathroom flooring and bathroom walls" loading="lazy"><div class="application-text"><span class="eyebrow light">REFINED LIVING</span><h3>Interior Granites</h3><p>Elevate your spaces with the timeless beauty of granite. Our premium selections bring durability, luxury and natural charm to interiors – perfect for sophisticated kitchens, bathrooms, floors and accent walls.</p><span class="application-categories">Kitchen countertops · Bathroom flooring · Bathroom walls</span><a href="#contact" aria-label="Enquire about interior granites">${arrow}</a></div></article>
    <article class="application-card"><img src="${photos.exterior}" alt="Architectural inspiration for exterior facades and wall cladding" loading="lazy"><div class="application-text"><span class="eyebrow light">ENDURING IMPRESSIONS</span><h3>Exterior Granites</h3><p>Enhance outdoor spaces with our rugged and refined exterior granite. Ideal for facades, pavements and landscapes – offering unmatched strength, weather resistance and lasting elegance in every architectural detail.</p><span class="application-categories">Exterior facades · Wall cladding</span><a href="#contact" aria-label="Enquire about exterior granites">${arrow}</a></div></article></div>
    <p class="asset-note">Architectural imagery is illustrative and does not depict completed A.S. Granites projects.</p>
  </section>

  <section class="manufacturing section" id="manufacturing"><div class="container"><div class="section-heading"><div><p class="eyebrow light">04 / CRAFTED WITH PURPOSE</p><h2>Local expertise.<br><em>Global standards.</em></h2></div><div class="heading-aside"><h3>Manufacturing &amp; Export</h3><p>From our Salem unit to your project – made with precision, supplied with reliability.</p></div></div>
    <p class="manufacturing-intro">Expertly processed and finished in Salem, Tamil Nadu, we deliver exceptional quality, precision, and durability to customers across global markets.</p>
    <div class="manufacturing-grid"><article><span class="line-icon" aria-hidden="true">⌑</span><h3>Manufacturing</h3><p>Granite slabs processed and finished in-house with uniform polishing (+95 gloss on black slabs) and evenly brushed flaming, finished to your required edge profile.</p></article><article><span class="line-icon" aria-hidden="true">◇</span><h3>Export Quality</h3><p>Special quality in export – every slab is held to our quality standards for gloss, finish and thickness, so shipments arrive consistent and project-ready.</p></article><article><span class="line-icon" aria-hidden="true">↗</span><h3>Dependable Supply</h3><p>We aim to be a dependable supplier for importers, builders, architects and interior designers – valued for reliability and integrity.</p></article></div>
  </div></section>

  <section class="section container edges-section" id="edges"><div class="section-heading"><div><p class="eyebrow">05 / THE FINISHING TOUCH</p><h2>Excellence in<br><em>every edge.</em></h2></div><div class="heading-aside"><h3>Edge Profiles</h3><p>Explore our range of professionally finished granite edge profiles.</p></div></div>
    <div class="edge-grid">${edges.map(([name, path]) => `<article class="edge-card"><svg viewBox="0 0 140 95" role="img" aria-label="${name} edge cross-section"><defs><pattern id="grain-${name.replaceAll(" ", "-")}" width="7" height="7" patternUnits="userSpaceOnUse"><rect width="7" height="7" fill="#343733"/><circle cx="2" cy="3" r=".6" fill="#85847c"/></pattern></defs><path d="${path}" fill="url(#grain-${name.replaceAll(" ", "-")})" stroke="#96978c" stroke-width="1.3"/><path d="M8 22H78" stroke="#77796f" stroke-width=".6"/></svg><h3>${name}</h3></article>`).join("")}<a class="edge-card custom-edge" href="#contact"><span aria-hidden="true">+</span><h3>Your vision.<br>Your edge.</h3><small>Other custom edge profiles ${arrow}</small></a></div>
  </section>

  <section class="quality section" id="quality"><div class="container quality-layout"><div><p class="eyebrow">06 / NO COMPROMISES</p><h2>Quality you see.<br><em>Trust you feel.</em></h2><h3 class="section-kicker">Quality Control</h3><p>Special quality in export, checked slab by slab.</p><a class="underlined-link" href="#contact">Discuss your requirements ${arrow}</a></div><div class="quality-list"><article><span>01</span><div><h3>Polishing</h3><p>Uniform throughout the slabs. For black slabs, polishing of +95 on the gloss meter.</p></div><strong>95+<small>GLOSS</small></strong></article><article><span>02</span><div><h3>Flaming</h3><p>Uniform throughout the slabs and brushed evenly after flaming.</p></div><span class="quality-check" aria-label="Checked">✓</span></article><article><span>03</span><div><h3>Thickness</h3><p>Standard thickness, precisely maintained.</p></div><strong>20<small>MM</small></strong></article></div></div></section>

  <section class="section container gallery-section" id="gallery"><div class="section-heading"><div><p class="eyebrow">07 / A CLOSER LOOK</p><h2>The stone.<br><em>The story.</em></h2></div><div class="heading-aside"><h3>Gallery</h3><p>Photos and videos of our slabs, factory and completed work.</p><div class="gallery-filters" role="group" aria-label="Filter gallery">${["All", "Photos", "Videos"].map((filter, i) => `<button type="button" data-filter="${filter}" aria-pressed="${i === 0}">${filter}</button>`).join("")}</div></div></div>
    <div class="gallery-grid" id="gallery-grid">
      ${[[photos.interior, "Interior inspiration", "Kitchen countertops"], [photos.detail, "Architectural details", "Natural material inspiration"], [photos.bathroom, "Refined surfaces", "Bathroom walls and flooring"]].map(([src, title, caption]) => `<button class="gallery-item" type="button" data-gallery-image="${src}" data-title="${title}"><img src="${src}" alt="${caption}" loading="lazy"><span>${title}<span aria-hidden="true">↗</span></span></button>`).join("")}
    </div><p id="gallery-status" class="asset-note" role="status">Illustrative inspiration photos. Original slab, factory, manufacturing and completed-project media will be added when supplied.</p>
  </section>

  <section class="contact-section section" id="contact"><div class="container"><div class="section-heading"><div><p class="eyebrow light">08 / LET'S BUILD SOMETHING TIMELESS</p><h2>Your next masterpiece<br><em>starts here.</em></h2></div><div class="heading-aside"><h3>Contact Us</h3><p>Send your requirement – we'll reply with slab details and pricing.</p></div></div>
    <div class="contact-grid"><div class="contact-details"><h3>A.S. Granites</h3><p class="contact-label">VISIT OUR UNIT</p><address>${address}</address><a class="map-link" href="${maps}" target="_blank" rel="noopener noreferrer">Open in Google Maps ${arrow}</a><div class="contact-methods"><div><p class="contact-label">CALL US</p><a href="tel:+919442248282">+91 94422 48282</a><a href="tel:+916383918182">+91 63839 18182</a></div><div><p class="contact-label">WRITE TO US</p><a href="mailto:asgranites@support.com">asgranites@support.com</a></div></div><p class="gst">GSTIN: 33AUTPA9560G2ZE<br>GSTIN: 33PHKPS0609R1ZF</p></div>
    <form class="enquiry-form"><h3>Quick Enquiry</h3><label for="enquiry-name">Your Name</label><input id="enquiry-name" name="name" autocomplete="name" placeholder="How should we address you?" maxlength="100" required><label for="enquiry-message">Granite Colour / Quantity / Destination</label><textarea id="enquiry-message" name="message" rows="3" placeholder="Tell us a little about your requirement..." maxlength="3000" required></textarea><p class="form-hint">Choose a number to continue your enquiry on WhatsApp.<br>Your message is only sent when you send it in WhatsApp.</p><div class="whatsapp-actions"><button class="button button-gold" type="submit" name="phone" value="919442248282"><span aria-hidden="true">◉</span> +91 94422 48282 ${arrow}</button><button class="button button-outline" type="submit" name="phone" value="916383918182">+91 63839 18182 ${arrow}</button></div><p class="form-status" role="status"></p><a class="whatsapp-ready" target="_blank" rel="noopener noreferrer" hidden>Continue to WhatsApp ${arrow}</a></form></div>
  </div></section>
  <dialog class="image-dialog" aria-label="Collection details"><button class="dialog-close" type="button" aria-label="Close dialog">×</button><div class="dialog-content"></div></dialog>`;

document.getElementById("site-footer").innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-top">${brand}<p>The Expert in Granite.<br><em>Special Quality in Export.</em></p><a href="#main" class="back-top">Back to top <span aria-hidden="true">↑</span></a></div><div class="footer-details"><p>Granite Manufacturers &amp; Exporters<br>${address}</p><p><a href="tel:+919442248282">+91 94422 48282</a> · <a href="tel:+916383918182">+91 63839 18182</a><br><a href="mailto:asgranites@support.com">asgranites@support.com</a></p><p>GSTIN: 33AUTPA9560G2ZE<br>GSTIN: 33PHKPS0609R1ZF</p></div><div class="footer-bottom"><span>© A.S. Granites. All rights reserved.</span><span>Natural stone. Timeless possibilities.</span><a href="mailto:asgranites@support.com?subject=Admin%20access%20enquiry">Admin ${arrow}</a></div></div></footer>`;

const menu = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open navigation");
  nav.classList.remove("is-open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
document.addEventListener("click", event => { if (!event.target.closest(".site-header")) closeMenu(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") { closeMenu(); menu.focus(); }
});
matchMedia("(min-width: 901px)").addEventListener("change", closeMenu);

const dialog = document.querySelector("dialog");
const dialogContent = dialog.querySelector(".dialog-content");
document.querySelectorAll("[data-stone]").forEach(button => button.addEventListener("click", () => {
  const stone = stones[Number(button.dataset.stone)];
  dialogContent.innerHTML = `<div class="dialog-swatch stone-swatch ${stone.texture}" role="img" aria-label="Illustrative ${stone.name} texture"></div><div class="dialog-copy"><p class="eyebrow">NATURAL STONE COLLECTION</p><h2>${stone.name}</h2><p>Illustrative colour selection. Natural stone patterns vary by slab. Ask our team for confirmed availability, current slab photographs, finish options and pricing.</p><p>Standard thickness: 20 mm. Professionally finished edge profiles available.</p><a class="button button-dark product-enquiry" href="#contact">Enquire about this stone ${arrow}</a></div>`;
  dialog.showModal();
  dialogContent.querySelector(".product-enquiry").addEventListener("click", () => {
    document.getElementById("enquiry-message").value = `I am interested in ${stone.name}.\nQuantity: \nDestination: `;
    document.getElementById("enquiry-message").dispatchEvent(new Event("input"));
    dialog.close();
  });
}));
document.querySelectorAll("[data-gallery-image]").forEach(button => button.addEventListener("click", () => {
  dialogContent.replaceChildren();
  const img = document.createElement("img");
  img.src = button.dataset.galleryImage;
  img.alt = button.dataset.title;
  const caption = document.createElement("p");
  caption.className = "dialog-caption";
  caption.textContent = `${button.dataset.title} · Illustrative architectural inspiration`;
  dialogContent.append(img, caption);
  dialog.showModal();
}));
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => { document.body.style.overflow = ""; });
new MutationObserver(() => { document.body.style.overflow = dialog.open ? "hidden" : ""; }).observe(dialog, { attributes: true, attributeFilter: ["open"] });

document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach(filter => filter.setAttribute("aria-pressed", String(filter === button)));
  const videos = button.dataset.filter === "Videos";
  document.getElementById("gallery-grid").hidden = videos;
  document.getElementById("gallery-status").textContent = videos
    ? "Factory and slab videos have not been supplied yet. Contact our team to request current product videos."
    : "Illustrative inspiration photos. Original slab, factory, manufacturing and completed-project media will be added when supplied.";
}));

const form = document.querySelector(".enquiry-form");
const readyLink = form.querySelector(".whatsapp-ready");
form.addEventListener("input", event => {
  event.target.setCustomValidity("");
  readyLink.hidden = true;
  form.querySelector(".form-status").textContent = "";
});
form.addEventListener("submit", event => {
  event.preventDefault();
  for (const field of [form.elements.name, form.elements.message]) {
    field.setCustomValidity(field.value.trim() ? "" : "Please complete this field.");
  }
  if (!form.reportValidity()) return;
  const phone = event.submitter?.value === "916383918182" ? "916383918182" : "919442248282";
  const text = `Hello A.S. Granites,\n\nMy name is ${form.elements.name.value.trim()}.\n${form.elements.message.value.trim()}`;
  readyLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  readyLink.hidden = false;
  form.querySelector(".form-status").textContent = "Your enquiry is ready. Continue below to review and send it in WhatsApp.";
  readyLink.focus();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    nav.querySelectorAll("a").forEach(link => {
      if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-15% 0px -65% 0px" });
document.querySelectorAll("#about, #products, #edges, #quality, #gallery, #contact").forEach(section => observer.observe(section));

const initialSection = location.hash || ({ contact: "#contact", gallery: "#gallery" }[document.body.dataset.page]);
if (initialSection) {
  const section = document.getElementById(initialSection.slice(1));
  if (section) requestAnimationFrame(() => section.scrollIntoView({ behavior: "instant" }));
}
