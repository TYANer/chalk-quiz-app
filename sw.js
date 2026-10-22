// chalk-quiz 发布时生成
const PREFIX = 'chalk-quiz-app ' + self.registration.scope + ' ';
const CACHE = PREFIX + "b3314268b019";
const FILES = ["assets/Bank-K-xeCKnO.js","assets/Clearable-CPidONQe.js","assets/Cover-BDbcogmQ.js","assets/Dialog-D9_CgW8M.js","assets/Episode-DeWMVmGl.js","assets/EpisodeDetail-j_Xd8iuA.js","assets/Exam-D1eKFvVW.js","assets/ExamSourceSlot-DBQk50zD.js","assets/FontGate-bmW_d1Dw.js","assets/KaTeX_AMS-Regular-BQhdFMY1.woff2","assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2","assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2","assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2","assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2","assets/KaTeX_Main-Bold-Cx986IdX.woff2","assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2","assets/KaTeX_Main-Italic-NWA7e6Wa.woff2","assets/KaTeX_Main-Regular-B22Nviop.woff2","assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2","assets/KaTeX_Math-Italic-t53AETM-.woff2","assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2","assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2","assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2","assets/KaTeX_Script-Regular-D3wIWfF6.woff2","assets/KaTeX_Size1-Regular-mCD8mA8B.woff2","assets/KaTeX_Size2-Regular-Dy4dx90m.woff2","assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2","assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2","assets/Lines-DF80MqS9.js","assets/OriginCompare-D6pSMhKd.js","assets/QuestionForm-A-KAt0KC.js","assets/QuestionJudge-3Xd5uVBD.js","assets/QuestionJudge-BUf6MLO3.css","assets/Review-CnnpZXi6.js","assets/Templates-BIaJLz8_.js","assets/boot-EQ9BeJMl.js","assets/clipboard-ClS8Uike.js","assets/data-CBg6yGqx.js","assets/episodes-BdvxDorA.js","assets/esm-CCS0M-4b.js","assets/esm-CUVfO3M5.js","assets/format-B5M5ziWT.js","assets/id3-DhLQXHHS.js","assets/index-B6fhzZGX.js","assets/index-D1ZFMZFy.css","assets/jsx-runtime-DKj5X9O4.js","assets/mediabunny-aac-encoder-DJrU4bQw.js","assets/mediabunny-flac-encoder-BnItZ24x.js","assets/mediabunny-mp3-encoder-Buh12Klw.js","assets/no-react-2sFJxUnr.js","assets/preload-helper-SC6m5Edp.js","assets/retype-dG9yOwRI.js","assets/rolldown-runtime-Dd_uD5pT.js","assets/views-CNR7vlBC.js","icon-180.png","./","manifest.webmanifest","sfx/chime.wav","sfx/ding.wav","sfx/tick.wav","sfx/transition.wav"];

self.addEventListener('install', (event) => {
  // 绕过浏览器的 HTTP 缓存，存进来的一定是这一版的文件
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k)))));
});

// 新版本装好后先等着，页面上点了「换上新版本」才接手，不在用着的时候换掉代码
self.addEventListener('message', (event) => {
  if (event.data === 'skip-waiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;
  // 路由在 # 后面、开关在查询参数里，打开哪一页都是同一个首页
  const key = request.mode === 'navigate' ? new Request('./') : request;
  event.respondWith(caches.open(CACHE).then((cache) => cache.match(key)).then((hit) => hit || fetch(request)));
});
