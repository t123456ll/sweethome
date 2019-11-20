const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/src/pages/index.js"))),
  "component---src-pages-ivst-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/src/pages/ivst.js"))),
  "component---src-pages-movein-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/src/pages/movein.js"))),
  "component---src-pages-coming-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/src/pages/coming.js"))),
  "component---src-pages-deals-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/src/pages/deals.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/cindyzheng/Desktop/sweethome/src/pages/about.js")))
}

