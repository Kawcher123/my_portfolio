'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e62232ec2222c25cfa34a2964ee35d02",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "ac7fd7e65f1ec36c3622d4182712382e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "9433af0324249d455008201fff96be71",
"assets/NOTICES": "cd499eee3dcad5a3dd2bd71f89be404c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c6bc1846ab932b850496178ee8ef6fd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e01b5b8d1585b75324c305679ef5b1ff",
"assets/fonts/MaterialIcons-Regular.otf": "c9326d3cabc25d40a4b18874d2329461",
"assets/assets/images/certficate_icons/hackerrank.png": "15d483d0097a1fec89e2bc2e7a866066",
"assets/assets/images/certficate_icons/python.png": "02fcfda12a1a76a15bb0940993edef29",
"assets/assets/images/certficate_icons/nptel.png": "a071bdb8bc7fa68f901f9768ff149696",
"assets/assets/images/certficate_icons/mysql.png": "a97fd6c8e066250131fab03239865a63",
"assets/assets/images/certficate_icons/udemy.png": "c6d241a824e417c2e195bb2eba0671cb",
"assets/assets/images/certficate_icons/dbms.png": "ea40e323488f692b70bc8b6963654cfb",
"assets/assets/images/certficate_icons/ml.png": "81be140f4c8b6f6655c78baaaf3bd821",
"assets/assets/images/certficate_icons/coincent.png": "f97a1835abf9695639cef76264825eec",
"assets/assets/images/projects/Simulator%2520Screen%2520Shot%2520-%2520iPhone%25208%2520-%25202022-03-05%2520at%252018.30.31.png": "ef7bbc8f0f94ad523de5a4ae778e2309",
"assets/assets/images/projects/arna.webp": "b4bcae8492ef7e081b2efc88895ea866",
"assets/assets/images/projects/biponi.jpeg": "69551186bd243c5587745f294f449019",
"assets/assets/images/projects/ipdc.webp": "a216b016e652092fa8d3793d1dd2c91c",
"assets/assets/images/projects/payplus1.webp": "727bcddcda6469447cc87f4b45e04a05",
"assets/assets/images/projects/tech.jpeg": "1dbee4a5b84c8c4beb5fbc24ab091a1b",
"assets/assets/images/projects/pos3.png": "7f7b69e7264b8409ad7b853be81f75db",
"assets/assets/images/projects/wmo.jpeg": "962867cfd81f3cee4d975b5b78dd1bda",
"assets/assets/images/projects/msp.png": "73ca784e7c0f681abca4df53f9aeff5c",
"assets/assets/images/projects/pos4.png": "1a7a9138fb175a057cc2a68835de4711",
"assets/assets/images/projects/talk.png": "c2bed36fbf6d19a130df3107e6f93975",
"assets/assets/images/projects/pos2.jpeg": "a2569fed808eb2adb3aa1979126b8e4c",
"assets/assets/images/projects/kmd.jpeg": "2a1b8c066a00df1a39993e38791a5142",
"assets/assets/images/projects/plagit.webp": "89ed1893d80d9db18df00f25756efaab",
"assets/assets/images/projects/pos.jpeg": "1e25986ecefcc346607f42cf7f2db2a0",
"assets/assets/images/projects/othithee.webp": "4e4739b9c03392d111c343c0de7d9241",
"assets/assets/images/projects/topup.png": "e30ca43b5e13c807bcc7cb55f0a15a39",
"assets/assets/images/projects/hrms.png": "ff6f0a00e77df7b98532a0949f8f384e",
"assets/assets/images/projects/shop.png": "41fe013eb9f832349641211c2c94e370",
"assets/assets/images/projects/early.png": "7b7fe7a775e3454b4bf086cffbf9a5db",
"assets/assets/images/projects/ThreeD-4.jpg": "646275bbd5e13a0b6a4ecf6f239e3f62",
"assets/assets/images/projects/ThreeD-5.jpg": "47a5f255f7386320378b3644b64231db",
"assets/assets/images/projects/food.png": "321aea140d145ca356c91323ab277f7c",
"assets/assets/images/projects/ThreeD-2.jpg": "585f2225d63ecd517781185a88d9257e",
"assets/assets/images/projects/UX-1.png": "bb5eb55e847b7e2d9d4d5ba58839f3d9",
"assets/assets/images/projects/ThreeD-3.jpg": "8c41a952fd4dd2b8e9b39b78fed4c9e7",
"assets/assets/images/projects/ThreeD-1.jpg": "22d9c15d25dec1cac5b63669925cb059",
"assets/assets/images/projects/home_service.jpeg": "babb7a1e6d955a6519a5c1027f0d20bb",
"assets/assets/images/projects/UX-3.png": "f78fd6dc3b7164516cec59d07a95c4c0",
"assets/assets/images/projects/UX-2.png": "6e3b0eb5b713016bf573b71b9ad5ad35",
"assets/assets/images/projects/dd.png": "34d7033993fb4760a65130681f8eabe2",
"assets/assets/images/projects/Simulator%2520Screen%2520Shot%2520-%2520iPhone%25208%2520-%25202022-03-05%2520at%252018.34.13.png": "0ea161de56237f2aebb3e543fbf093b6",
"assets/assets/images/projects/bengal.webp": "43686195edf8a3bad762a85c48168abb",
"assets/assets/images/projects/payplus2.webp": "70bd97fbee12b948fac149855157d5fc",
"assets/assets/images/projects/runner.jpg": "40406a94e82d37f772254d69cf288a99",
"assets/assets/images/projects/chatbot.png": "e0ef9a35d8a765e6c7aaf4fb617c6eb9",
"assets/assets/images/certificate_b.png": "551630c26169adad5803629fe8f4b148",
"assets/assets/icons/resume.svg": "65bdfe4a7bfa05418cb8e7781e7b6aed",
"assets/assets/icons/face.svg": "3919bc724bd28e89ce7f8b8e002257f1",
"assets/assets/icons/experiences.svg": "3e66e222e3af183c13200f8c9e265d4c",
"assets/assets/icons/home.svg": "9aa5deb83574ceeabf80ca20c8bf20c6",
"assets/assets/icons/github.svg": "8e7a40be4caed4cc35a879453c1ca8a5",
"assets/assets/icons/projects.svg": "5758a560d57c8719d36d11fb3025ecdb",
"assets/assets/icons/mail.svg": "82a63ac7f548ce4ab3c23cdee622e985",
"assets/assets/icons/down_arrow.svg": "2fb2b9be53c7dbddfa1a7d89a53d0867",
"assets/assets/icons/google.svg": "401eb1b0de38c2f8ff850f1fa4b925c6",
"assets/assets/icons/hacker.svg": "4023e48ef7183347734849d303551b95",
"assets/assets/icons/about.svg": "de3e736336e10b23467a1295c32ca518",
"assets/assets/icons/artstation.svg": "363e24bed29d84b7daeab0574a670768",
"assets/assets/icons/up_arrow.svg": "4c5dc7ca8e28f37999433f32b13f2533",
"assets/assets/icons/linkedin.svg": "e18bfcc65e0f712b616e97b0734a4855",
"assets/assets/icons/twitter.svg": "3a6935b000aab1388ea9a076604c7530",
"assets/assets/icons/skills_icons/Figma.svg": "e4d477f4b50ca750010cc10c5a5bbb53",
"assets/assets/icons/skills_icons/js.svg": "61deeb1e557dc853b214794ca7aac6c5",
"assets/assets/icons/skills_icons/firebase.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/icons/skills_icons/github.svg": "c7f4f8cd4e1d67c295179575eab41e59",
"assets/assets/icons/skills_icons/cpp.svg": "797c85b510ba6603dd20d35aed8d4089",
"assets/assets/icons/skills_icons/pandas.svg": "feca049160d5b9b10dcf7d308aa983dc",
"assets/assets/icons/skills_icons/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/icons/skills_icons/python.svg": "a1872cef0fb917ddf4d387e298d9f160",
"assets/assets/icons/skills_icons/git.svg": "fee6952807afc03e375b8917c273c6ad",
"assets/assets/icons/skills_icons/ts.svg": "ff4498abb0731f3185e2f70d8bbbf146",
"assets/assets/icons/skills_icons/laravel.svg": "82639bcdcf4afbefaebfed38a7c7fab4",
"assets/assets/icons/skills_icons/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/icons/skills_icons/adobe_xd.svg": "940cad71d6f2ee228975efa29e9eda77",
"assets/assets/icons/skills_icons/blender.svg": "85fee1db0cfb4438919d226da5060359",
"assets/assets/icons/skills_icons/lightroom.svg": "11fc2a6c8fb06f925d7b00b0303d92b0",
"assets/assets/icons/skills_icons/photoshop.svg": "52d9809c01882f8e6c9227cfb0d77b32",
"assets/assets/icons/skills_icons/nestjs.svg": "5c4abe6acda0c2da09285cf03ec25ab0",
"assets/assets/icons/skills_icons/react.svg": "23df46d7660cbb370df4a6d2d2a32c54",
"assets/assets/icons/skills_icons/canva.svg": "b79103b2f10105fe2f09f30346a0b9dd",
"assets/assets/icons/skills_icons/django.svg": "e6e3f5dc7c199f384e5814c97a683578",
"assets/assets/icons/skills_icons/mysql.svg": "99d08f9e2966e406024b603a51460338",
"assets/assets/icons/skills_icons/davinci.svg": "d945aa8a1f6632d4d061c46ed538d923",
"assets/assets/icons/skills_icons/numpy.svg": "d7a842a43d69c1559e9500b43fb3ab40",
"assets/assets/icons/behance.svg": "a0b7da6868ffd35691a2c9ca85912605",
"assets/assets/memoji.png": "b24c6f07299e5ead4601eb3157432e6a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
