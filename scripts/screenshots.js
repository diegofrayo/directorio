const captureWebsite = require("capture-website");
const sharp = require("sharp");

const CURRENT_SITE_VERSION = {
  url: "http://localhost:3000",
  tag: "2.0",
};
const PAGES = [
  { title: "inicio", url: "/" },
  { title: "categorias", url: "/categorias" },
  { title: "terminos-y-condiciones", url: "/terminos-y-condiciones" },
  { title: "contacto", url: "/contacto" },
  { title: "404", url: "/page-not-found" },
  { title: "category-details", url: "/categorias/regalos-y-variedades" },
  { title: "business-details", url: "/minipigs-alcancias" },
];

setTimeout(async () => {
  try {
    const generateScreenshots = function generateScreenshots() {
      return PAGES.reduce((p, page) => {
        return p.then(() =>
          captureWebsite.file(
            `${CURRENT_SITE_VERSION.url}${page.url}?noga=true`,
            `screenshots/temp/${CURRENT_SITE_VERSION.tag}/${page.title}.png`,
            {
              width: 1024,
              height: 768,
              fullPage: true,
              delay: 10,
              overwrite: true,
            },
          ),
        );
      }, Promise.resolve());
    };

    await generateScreenshots();

    await Promise.all(
      PAGES.map(page => {
        return sharp(`screenshots/temp/${CURRENT_SITE_VERSION.tag}/${page.title}.png`)
          .resize(1024, 768)
          .toFile(`screenshots/${CURRENT_SITE_VERSION.tag}/${page.title}.png`);
      }),
    );
  } catch (e) {
    console.log(e);
  }
}, 1000);
