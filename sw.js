// chalk-quiz 发布时生成
const PREFIX = 'chalk-quiz-app ' + self.registration.scope + ' ';
const CACHE = PREFIX + "9a449779a802";
const FILES = ["assets/Bank-CM57xeh8.js","assets/Clearable-C1RSJ6vT.js","assets/Cover-DbPddQsh.js","assets/Dialog-D9_CgW8M.js","assets/Episode-Ba4IIecw.js","assets/EpisodeDetail-CUhimDWT.js","assets/Exam-BDaQGiG0.js","assets/ExamSourceSlot-Ce9ivKQ6.js","assets/FontGate-CZgyYCzh.js","assets/KaTeX_AMS-Regular-BQhdFMY1.woff2","assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2","assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2","assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2","assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2","assets/KaTeX_Main-Bold-Cx986IdX.woff2","assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2","assets/KaTeX_Main-Italic-NWA7e6Wa.woff2","assets/KaTeX_Main-Regular-B22Nviop.woff2","assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2","assets/KaTeX_Math-Italic-t53AETM-.woff2","assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2","assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2","assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2","assets/KaTeX_Script-Regular-D3wIWfF6.woff2","assets/KaTeX_Size1-Regular-mCD8mA8B.woff2","assets/KaTeX_Size2-Regular-Dy4dx90m.woff2","assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2","assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2","assets/Lines-DF80MqS9.js","assets/OriginCompare-C0uCWVKh.js","assets/QuestionForm-DBWQA678.js","assets/QuestionJudge-BUf6MLO3.css","assets/QuestionJudge-BmpDSUHE.js","assets/Review-CqvWtHDf.js","assets/Templates-m4UwFOMI.js","assets/boot-0Rc9FPgy.js","assets/clipboard-ClS8Uike.js","assets/data-aUQh1QSS.js","assets/episodes-DK2B0CZ8.js","assets/esm-C8c9O6s_.js","assets/esm-aWHK1P7D.js","assets/format-B5M5ziWT.js","assets/id3--RdcmkQO.js","assets/index-D1ZFMZFy.css","assets/index-DqRBwaBj.js","assets/jsx-runtime-DKj5X9O4.js","assets/mediabunny-aac-encoder-g70TqtsW.js","assets/mediabunny-flac-encoder-D5Qe8Ral.js","assets/mediabunny-mp3-encoder-DiIK6zGQ.js","assets/no-react-2sFJxUnr.js","assets/preload-helper-SC6m5Edp.js","assets/retype-dG9yOwRI.js","assets/rolldown-runtime-Dd_uD5pT.js","assets/views-BFk6fj8L.js","icon-180.png","./","manifest.webmanifest","sfx/chime.wav","sfx/ding.wav","sfx/tick.wav","sfx/transition.wav"];

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
