const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/404.js"))),
  "component---src-pages-about-index-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/about/index.js"))),
  "component---src-pages-coming-index-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/coming/index.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/contact/thanks.js"))),
  "component---src-pages-deals-index-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/deals/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/index.js"))),
  "component---src-pages-ivst-index-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/ivst/index.js"))),
  "component---src-pages-movein-index-js": hot(preferDefault(require("/Users/shuolintian/Desktop/sweethome/src/pages/movein/index.js")))
}

