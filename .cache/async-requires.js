// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-coming-js": () => import("../src/pages/coming.js" /* webpackChunkName: "component---src-pages-coming-js" */),
  "component---src-pages-deals-js": () => import("../src/pages/deals.js" /* webpackChunkName: "component---src-pages-deals-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-ivst-js": () => import("../src/pages/ivst.js" /* webpackChunkName: "component---src-pages-ivst-js" */),
  "component---src-pages-movein-js": () => import("../src/pages/movein.js" /* webpackChunkName: "component---src-pages-movein-js" */)
}

