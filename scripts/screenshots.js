const captureWebsite = require("capture-website");

// eslint-disable-next-line no-unused-vars
const SITE_VERSION_1 = {
  url: "https://directorio-armenia-jsx69r21p.vercel.app",
  tag: "1.0",
};
const SITE_VERSION_2 = {
  url: "http://localhost:3000",
  tag: "2.0",
};
const CURRENT_SITE_VERSION = SITE_VERSION_2;
const PAGES = [
  { title: "inicio", url: "/" },
  { title: "categorias", url: "/categorias" },
  { title: "terminos-y-condiciones", url: "/terminos-y-condiciones" },
  { title: "contacto", url: "/contacto" },
  { title: "404", url: "/page-not-found" },
  { title: "category-details", url: "/categorias/regalos-y-variedades" },
  { title: "business-details", url: "/minipigs-alcancias" },
];

PAGES.forEach(page => {
  (async () => {
    await captureWebsite.file(
      `${CURRENT_SITE_VERSION.url}${page.url}?noga=true`,
      `screenshots/${CURRENT_SITE_VERSION.tag}/${page.title}.png`,
      {
        width: 1024,
        height: 768,
        fullPage: true,
        delay: 10,
        overwrite: true,
      },
    );
  })();
});
