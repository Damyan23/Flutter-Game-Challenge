'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "525314c57014268a0e238d555cccda9e",
".git/config": "0cf05b0ec9a4236c5cb97684407f9e09",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "397cabe11ea37b2cc782e8e6541fbe31",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63104358cf5ca78c421c17e4da8954a8",
".git/logs/refs/heads/main": "7657cdedc01f8334e2e23d291e52a0ef",
".git/logs/refs/remotes/origin/main": "e6f902bc1d6adad530ea75be7fee0383",
".git/objects/00/eb1f8b690f5ae57a8652d9f18af98d4fab0eae": "be779a9364c82dadf99a68b7a9633c09",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/07/b0cb07234089d54d079b467f3fd8682385a750": "01a5a684ace11a5295ffa05f1ace3d8b",
".git/objects/09/a6d023a59a318f36e123cfecd633122269c09f": "c311c2e51aa44aa588b363578a8ebf18",
".git/objects/0d/8ff532306ce10e64f973babd55499494cc209b": "4cc8944c63ea3e236fe06af01270b3a2",
".git/objects/13/81ce5d438a5ba5e200ba6708bf2d30f1ff9f13": "28e3f07b711c49acfa6e8f86b6b387c9",
".git/objects/17/da563aaf48857867c26962039eb5e78aa93c06": "0d98b1750d22c760a5e50499a9bd91cb",
".git/objects/17/de9436685476a4b52b13c2027bed33f009eb95": "258e657dc575bd87ee9a034606e5d755",
".git/objects/19/1d8ab63c79b59e6359ae89b6d38a7793dd083e": "050f06ddfe15400813fff4df3074dc40",
".git/objects/1e/3036da4f8f842e1cef7ece334df6a4e27b7b49": "9d8635a0c70837804e60d2053b57243d",
".git/objects/24/2daf4da2e3c68c7e101fda21cf191d65be626d": "1347cc6ead97eedbed4254aec3a1fe5f",
".git/objects/27/bf21cac14256d3a76eb6e43655b5df1f7f6626": "2de3960e1fb97556e7d37cc2c349f011",
".git/objects/2d/9a70d41c94c49d5ad9fad061bd4c8f25e9256c": "1883b6d63f837796209714f120d16776",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/c2aeb2c14ea24a5a297ed1cea44a2b78d54b90": "8b5ee462ffdc9f6108a3dc56b1620480",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/210db2fc5bccdcc96b910c2a70fe9af16589a1": "6ed3c10d8eb0ef8702c4fe34166df1de",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/360b14d9fec1382e6c37bfc35cf272c1bd41f0": "df546a3fe176049541657d20e0b5015d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/80fede6a701531eff18a017f1cdc1f8bf96007": "ef58cbacb89f56d746c3c2efc7a10c63",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/df77b06aca5e7eb6b2fdbe237f11c81b0a13ae": "f6bcc9f5ecc9fb3dafee1673537ff43f",
".git/objects/59/288ee88eb640ea2b4e97aaf4e77dba8c7cc7e2": "a0428b39645bb0b62534b2a90ea97878",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/8a18bec2204b1610bde9ad7aac80e1abf4c91d": "7c8030b0c9225c3324dc1d80b40fdd32",
".git/objects/68/9d929b25fc226a93c9ae9c6b6b693cc52bfb25": "9302a9aa13faef12fadd7d646b4e5ff5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/d27814d7841a4433fe9d106752a5a4f99b3fe6": "b769423d609c4a7ae6d4b8ddb3246083",
".git/objects/7e/7323cdd0cca768d2fb57a15a36e4f642b717df": "9f24baaff52ac052247e644185267c7c",
".git/objects/80/5097f840a648503e1de93e28e46969f9da1dd3": "d65aa6b2522aadf4c2bc51952cec753b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/f2d7e30afc38db21942dec40f0a22d4369c622": "30b008baee2074093a0c0d90e3648b36",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/efa8349a8c4e9d2c29c82f5f80a7d5c11eef87": "0eeba30dc20f17298f6d68c5d35d8bb4",
".git/objects/95/4a3dfb69469dfe49448e825f84501309a05b98": "cf5423532499f81f9986a2b7e8b3994a",
".git/objects/97/eca32e14af61f46a6e46835c88c6a4f3a564bc": "c5f0bad836d80630570cafb1ae96095f",
".git/objects/99/b8abf3562dd764cf8044fc29869b980b484ecf": "d9b8f80ce7e63b8a7ac66cd4be87855a",
".git/objects/9f/d03aaf2868a4a853ac66b2538454378d25e9f7": "f4353028fc0d1b5e1edbc2f2b04f7da1",
".git/objects/a0/39a5c7509ed3bc478a04d59c501a5043ac354f": "a3b7ce82578205e10f76fe7c4992d0fb",
".git/objects/a1/d997074634e851a466beed6c24b98d82a3b1f5": "4e6e1bfebf3ca11c72586f665478f5b2",
".git/objects/a4/40fcbe3f8a60281826f6b29859bea693842b3e": "6ee7dc0150492129d6b87eb33abe5e7a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/633197ac9ac85869ae774a847b49685ceeb1fb": "8718650aea289adbe3f40600a966bf5b",
".git/objects/ab/15546a28134290317499da0942af1ec0ff27c5": "890f8d6afc18c57a1269c68c0e6c56fa",
".git/objects/ae/1606abcce6940f214801384e2a76fbca141faa": "719a1f8b251d5d809e2118baa3701280",
".git/objects/ae/ca7a4c71677979fa7c348903e40f08d0bc48d1": "cd157ebfb964c9a79d3aecc092442c2e",
".git/objects/b2/f5edabe4f06aa69ff57f4897a6d818795ad4d1": "4108fc6b3b379af4c5e72f2f48c94686",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6815b6fd2f9723dd88b8bec6a89318badac6a7": "7884030dfc2d356debf73000060f138b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d0/8f0f1872a19e9c313fed20eb357196e2a47c0e": "0664f2c02434f19a2971a8eeaf458232",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/9e71ed1c7b24d5377cc9a0d0aeae552243aa03": "f46ec011d8fa0093747138f41d7fe184",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/b0ec263f99bc7943f8ae0f59423ecbecf10f7e": "10324efa8cb7f718a5b19e295a54b491",
".git/objects/f9/bfab42c21956fe2108e79c9fad94a3dd0c20d3": "773e0325226e26952fac1457be1cea6a",
".git/refs/heads/main": "fa737c3ed504e793398a5983c9dc225c",
".git/refs/remotes/origin/main": "fa737c3ed504e793398a5983c9dc225c",
"assets/AssetManifest.bin": "c67757d09862ac12974cfe6a8a6b906d",
"assets/AssetManifest.bin.json": "f2a39b270a0c18d44d2151b70e057a62",
"assets/AssetManifest.json": "fb34d22408befb24d6da01b2a9b63735",
"assets/assets/audio/20%2520Gauge%2520Single%2520Isolated.mp3": "53c5b6f55586d3c9b0c8eabfc463d957",
"assets/assets/audio/DIRT%2520-%2520Walk%25201.wav": "bfaeb1f4caeddc67189f104bf51493b5",
"assets/assets/audio/Falcon_133%2520BPM_Full.wav": "68382287816fdd57956f539e2a935f25",
"assets/assets/audio/SE-Collision_03.ogg": "b9be200b62ae058b757bf08a5a657d97",
"assets/assets/images/bullet.png": "c989b5da7a9aa53795597fdc3b4a86db",
"assets/assets/images/crosshair.png": "ac0de1450e6bbcc6c58c1de5a58a372e",
"assets/assets/images/enemies/mage_attack.png": "3c42c24659fffbcdd4702047eec7e135",
"assets/assets/images/enemies/mage_walk.png": "acd526b579835db334190e762e3e62a2",
"assets/assets/images/enemies/mele_enemy.png": "322bbea8969c753a343665f2356b1c5c",
"assets/assets/images/enemy_bullet.png": "012a7592fe2338e70a7735b37958b6c9",
"assets/assets/images/gun.png": "d457bb524763cf2ee60955cc4a32a21e",
"assets/assets/images/heart.png": "adc9cba1cb9de2467baa5f1c93f04c5a",
"assets/assets/images/icons/attack_damage.png": "1bcd9455117806ba2cb78069ec240c72",
"assets/assets/images/icons/attack_speed.png": "173b19cc967eccab60ac3c79203c7362",
"assets/assets/images/icons/move_speed.png": "efabc5efbabd38680b3d9b79d0379072",
"assets/assets/images/ImpactMedium2.png": "beefa555d35a702409eede83972d9633",
"assets/assets/images/Player%2520Hit%252048%2520x%252048.png": "3aba2bd8a613c780033895975b57bef8",
"assets/assets/images/Player%2520Idle%252048%2520x%252048.png": "42c94944d32a8e916ef8f5a749d157c0",
"assets/assets/images/Player%2520Run%252048%2520x%252048.png": "b60d643bc23f428ba057d48a13352cbd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "72c63a97c96eb8f99498bdf5772ad707",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "47ccbcccd952c01801ca2162d2676d8d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "173d8aa290b3667b61175379577dee7c",
"/": "173d8aa290b3667b61175379577dee7c",
"main.dart.js": "c7ffc8911d35eda54c096bb834cf22c7",
"manifest.json": "ef826f278bb0002812fd15fc04c945d9",
"version.json": "3753b5fb0830a559fa5a26ecee743b65"};
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
