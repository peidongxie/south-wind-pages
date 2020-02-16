/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "77a37bb2418b0c3a32deac2541255ffc"
  },
  {
    "url": "assets/css/0.styles.ee44c927.css",
    "revision": "8252ed4fd711cd424f0bd788b3e588aa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ee4ec682.js",
    "revision": "4ec5b6f97e2f2e19048b8edbf9d8d1e6"
  },
  {
    "url": "assets/js/11.93c00f58.js",
    "revision": "8a601ff26db048f4036361e575c2c60a"
  },
  {
    "url": "assets/js/12.fe723a44.js",
    "revision": "f481a100c4ccef2cfd9004f284f2e8ab"
  },
  {
    "url": "assets/js/13.afa194d0.js",
    "revision": "a01965d9fd16576db3c2609171c5e21d"
  },
  {
    "url": "assets/js/14.6c48ab60.js",
    "revision": "1e758a562ebad30dcc2fe80256116bab"
  },
  {
    "url": "assets/js/15.a519fde0.js",
    "revision": "130720e9f5414b53a9b88d62601f8b35"
  },
  {
    "url": "assets/js/16.c4129715.js",
    "revision": "6e24da198d660d89e6bcd19b507f9779"
  },
  {
    "url": "assets/js/17.b484de96.js",
    "revision": "f04fa8f267331c703f9f78e9c857c8dd"
  },
  {
    "url": "assets/js/18.6f10d3f4.js",
    "revision": "d5a14d3aad1f167a81b99c93210038cd"
  },
  {
    "url": "assets/js/19.35738999.js",
    "revision": "ce203f559dee0443d89cc2826cca9f3b"
  },
  {
    "url": "assets/js/2.6bb8b568.js",
    "revision": "25486762aecdab2184caac10d4f82b92"
  },
  {
    "url": "assets/js/20.87a39c62.js",
    "revision": "9d0432aefc028308de60227c6367c14d"
  },
  {
    "url": "assets/js/21.03cbf919.js",
    "revision": "203443084c11b15461403950ff3ac89e"
  },
  {
    "url": "assets/js/22.a4159c86.js",
    "revision": "9884110f2bc4e1e3df6dd77e51e3b5f0"
  },
  {
    "url": "assets/js/23.ccbb77c5.js",
    "revision": "fbf2f607f020f4669b9149be76c95ba3"
  },
  {
    "url": "assets/js/24.9a074adc.js",
    "revision": "c8005c7fe5c9adc4da0252dcd705075e"
  },
  {
    "url": "assets/js/25.39aa7dd8.js",
    "revision": "62b599b4bf7e12cb654d9f4b4eb52772"
  },
  {
    "url": "assets/js/26.1e0b8a0c.js",
    "revision": "e024cf547b31d1910e1e5b21cc24c8a3"
  },
  {
    "url": "assets/js/27.24185f63.js",
    "revision": "4b95ede7283c1b4f7cb2c73ddda3aed5"
  },
  {
    "url": "assets/js/28.4d70f612.js",
    "revision": "c64b976b6311a1f036cf9f4eae086c68"
  },
  {
    "url": "assets/js/3.2ed336dd.js",
    "revision": "5009fc47cedc2d42787df2141c7f080c"
  },
  {
    "url": "assets/js/4.1d7e5458.js",
    "revision": "a3c03fb14fe040d4f7739344803f9202"
  },
  {
    "url": "assets/js/5.bc19cafd.js",
    "revision": "07e445b13348102a5b7aeaac137ed6dd"
  },
  {
    "url": "assets/js/6.9fe10581.js",
    "revision": "dd68a0bb1f485b50187bcce1b45f4f3c"
  },
  {
    "url": "assets/js/7.46872c10.js",
    "revision": "d3c578f86be5d6d5f2e627ef7ad5116d"
  },
  {
    "url": "assets/js/8.0022ff84.js",
    "revision": "af386cb6d94f34d6791e3a525789af56"
  },
  {
    "url": "assets/js/9.833fab9a.js",
    "revision": "9fb56b5cc87234b1795037f5c6bdbab5"
  },
  {
    "url": "assets/js/app.7d4dadb9.js",
    "revision": "fa4f739cf977ba45d5ad07f94fd18ea0"
  },
  {
    "url": "courses/biology.html",
    "revision": "3286a1611878e1337a14b5877ade78d3"
  },
  {
    "url": "courses/computer.html",
    "revision": "58d8a914b753b476f686b20d63e36ca6"
  },
  {
    "url": "courses/debate.html",
    "revision": "5dadc3168df17237e8391b5103f4ba75"
  },
  {
    "url": "courses/earth.html",
    "revision": "afbd53c982cca636eafced12cc33545c"
  },
  {
    "url": "courses/economics.html",
    "revision": "46147e2523fa39482ba35df782a387b0"
  },
  {
    "url": "courses/game.html",
    "revision": "01e805e9e16027c55bf74ec42b6a0a60"
  },
  {
    "url": "courses/index.html",
    "revision": "fb15207aff7b5fc1bdf92e198e7d6ef4"
  },
  {
    "url": "courses/korean.html",
    "revision": "a461cf93a7ad84a8d59b955bad58340d"
  },
  {
    "url": "courses/math.html",
    "revision": "80a18ba135123a9e8ef56a48ff31eae7"
  },
  {
    "url": "courses/physics.html",
    "revision": "66e05a7783286762642f6e854ec32c75"
  },
  {
    "url": "courses/read-and-write.html",
    "revision": "7229a401e2d1ec73a117b6fda78ff03e"
  },
  {
    "url": "courses/russia.html",
    "revision": "f5250b144f57ca072ea94c7ec1e3f566"
  },
  {
    "url": "courses/science-fiction.html",
    "revision": "2db4b190a4ac813671b13ed9472edf9a"
  },
  {
    "url": "details/commonweal.html",
    "revision": "b18d3bf4575d445d2967512516721ed1"
  },
  {
    "url": "details/entrepreneurship.html",
    "revision": "1c0a3b1137205bc09c5b01172786cb64"
  },
  {
    "url": "details/practicality.html",
    "revision": "05be3c467e5c0b10782e41350532f2b5"
  },
  {
    "url": "details/summary.html",
    "revision": "8c18d0142c75498716ce9e446e7d9137"
  },
  {
    "url": "details/team.html",
    "revision": "defcd6ae79fe79298565f798ee079aea"
  },
  {
    "url": "glimpses/index.html",
    "revision": "32df0a033e00bfa10b0237421e6e7918"
  },
  {
    "url": "help.html",
    "revision": "4903cc989c58fdc9805cf47a2935ae36"
  },
  {
    "url": "img/answer.jpg",
    "revision": "619025c6bb73fe1fb4bd490d2101b8f7"
  },
  {
    "url": "img/architecture.png",
    "revision": "620d009fcead556914d64640adf7580e"
  },
  {
    "url": "img/ceremony.jpg",
    "revision": "269b0154d264349947c6c7d422683c2d"
  },
  {
    "url": "img/class.jpg",
    "revision": "7b23b5e3976f035efab90fda6687e4d2"
  },
  {
    "url": "img/internet+.png",
    "revision": "d3a54d7a2506ff890737b5685a64563c"
  },
  {
    "url": "img/logo/logo-with-name-128.png",
    "revision": "f8ae6273c87ab9abf5bcb6edb511fad2"
  },
  {
    "url": "img/logo/logo-with-name-192.png",
    "revision": "64102547c61ff7f8b040ff8a7c5efd5e"
  },
  {
    "url": "img/logo/logo-with-name-256.png",
    "revision": "ccb0ac0e309d89d98d415753e9affe2d"
  },
  {
    "url": "img/logo/logo-with-name-32.png",
    "revision": "c6426761e9024b91397591c3d0a7c90a"
  },
  {
    "url": "img/logo/logo-with-name-48.png",
    "revision": "78e77a759e3ff5c7d03a2679d7ca7a20"
  },
  {
    "url": "img/logo/logo-with-name-64.png",
    "revision": "98ca2745aa8c7ec00aad9b59c2672a89"
  },
  {
    "url": "img/logo/logo-with-name-96.png",
    "revision": "ca2ff1304f165c2df17fb50428fd005b"
  },
  {
    "url": "img/logo/logo-with-name.png",
    "revision": "d4300dd8106566579e79e6e44ab8fb3f"
  },
  {
    "url": "img/logo/logo-without-name-128.png",
    "revision": "18533bb6617b02ae32c47ee27a1e09fb"
  },
  {
    "url": "img/logo/logo-without-name-192.png",
    "revision": "2495bef175d2a74a863e56edd0eb9a53"
  },
  {
    "url": "img/logo/logo-without-name-256.png",
    "revision": "049d2f52149b716c5ad8b8c309769539"
  },
  {
    "url": "img/logo/logo-without-name-32.png",
    "revision": "49de81f745097a8260468f7ef2f3a422"
  },
  {
    "url": "img/logo/logo-without-name-48.png",
    "revision": "f7c48fc131d89968c6188644acd7af8c"
  },
  {
    "url": "img/logo/logo-without-name-64.png",
    "revision": "2cfb40fb6b811673d88023888194adc1"
  },
  {
    "url": "img/logo/logo-without-name-96.png",
    "revision": "09a5f0bdea418a8b87614e7080b78a2a"
  },
  {
    "url": "img/logo/logo-without-name.png",
    "revision": "d19b42cc849b4891ee7d412ac929c4b2"
  },
  {
    "url": "img/mode.png",
    "revision": "22c2a91061876e0cad9f006652ab1830"
  },
  {
    "url": "img/operation.png",
    "revision": "f79fc2715818d203b2f1e8fd52eeda57"
  },
  {
    "url": "img/teaching.png",
    "revision": "eed163eb6ad57c5eb7488e115e1b442b"
  },
  {
    "url": "img/website.png",
    "revision": "ae8cfb790e3faa53bd72f052debf26a7"
  },
  {
    "url": "index.html",
    "revision": "846d2a102ec2012eefc580f194f5004c"
  },
  {
    "url": "js/jump.js",
    "revision": "b63f986233ca7dc21c55699e5f801081"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
