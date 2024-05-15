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
    "revision": "6d2b24178d5e037adb9e4583847c97c6"
  },
  {
    "url": "assets/css/0.styles.e7d24e83.css",
    "revision": "20bef02b3bb64ce20bb670124d334b59"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/icons/book128.png",
    "revision": "e03bce58b3353711a122dd63fee72c85"
  },
  {
    "url": "assets/icons/cursor.svg",
    "revision": "40f7b6749403b1fd195b162b1f72c373"
  },
  {
    "url": "assets/icons/cursor2.svg",
    "revision": "54f571864246c5bedb3f360015863481"
  },
  {
    "url": "assets/icons/portrait128.png",
    "revision": "57e2493c9a6579716af6f2b483a872ad"
  },
  {
    "url": "assets/icons/portrait128.svg",
    "revision": "ebf6206464e9adb2f64bb4b91e481616"
  },
  {
    "url": "assets/img/activated.3b8aa9a7.png",
    "revision": "3b8aa9a7db151aad57f3a6cfc88b1bf5"
  },
  {
    "url": "assets/img/baselineshezhi.f65f4d1b.png",
    "revision": "f65f4d1be70dccb85ea3645066cae699"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.svg",
    "revision": "d2b691f8015995aa9fca3e66a7d84565"
  },
  {
    "url": "assets/img/bgimg.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/bibao.7cafb04e.jpg",
    "revision": "7cafb04e11a7c7003bdf77dbec76dece"
  },
  {
    "url": "assets/img/borderjiexi.a3754cad.png",
    "revision": "a3754cad0f0911c3ec80c5309c886dd5"
  },
  {
    "url": "assets/img/borderjiexi2.cbf5216d.png",
    "revision": "cbf5216d5ce08e03f4a7e47ee659f4fa"
  },
  {
    "url": "assets/img/canvasfillguize.a86b06a4.png",
    "revision": "a86b06a4512d32529008b073c4d06e72"
  },
  {
    "url": "assets/img/class.02a2d5a6.png",
    "revision": "02a2d5a61160f4f7b5d2ed7c01002656"
  },
  {
    "url": "assets/img/closure.75a1d8c9.png",
    "revision": "75a1d8c978da0a803340013c5cfb127a"
  },
  {
    "url": "assets/img/computed2.765c69c0.png",
    "revision": "765c69c01300fa2dddb09c3eac2b582d"
  },
  {
    "url": "assets/img/computed3.64288fb9.png",
    "revision": "64288fb90231b884ffc72ffc7afa23e4"
  },
  {
    "url": "assets/img/created.5fa860d5.png",
    "revision": "5fa860d537162cede28875e52a43951f"
  },
  {
    "url": "assets/img/cubicbezier.100b3d48.png",
    "revision": "100b3d48ad09fc2625a98163f53aa3f4"
  },
  {
    "url": "assets/img/data.f9401aca.png",
    "revision": "f9401acae5a5d3efe56ca0620bb6ee9f"
  },
  {
    "url": "assets/img/emitjiexi.3692f8a2.png",
    "revision": "3692f8a237a3f83dfaa06022e1be27dd"
  },
  {
    "url": "assets/img/flexflow.e332dfab.png",
    "revision": "e332dfab72fa8d9b56b6451561efc323"
  },
  {
    "url": "assets/img/flexflow2.a236e6d0.png",
    "revision": "a236e6d0b4c8b4d9086d2528b3a02e8a"
  },
  {
    "url": "assets/img/flexgrow1.379643a9.png",
    "revision": "379643a9a30c4730cb4908e6e9ae912a"
  },
  {
    "url": "assets/img/flexgrow2.7641413c.png",
    "revision": "7641413cdd734810e5e1f0cbaf8c7c04"
  },
  {
    "url": "assets/img/flexhezi.61d9e392.png",
    "revision": "61d9e39213d0f7fb59f3b8ff79867293"
  },
  {
    "url": "assets/img/flexshrink.6e740f4a.png",
    "revision": "6e740f4aabd931a2d99b91516b407fd8"
  },
  {
    "url": "assets/img/flexshrink2.81fec994.png",
    "revision": "81fec994397743680397a974eb5728a3"
  },
  {
    "url": "assets/img/flexwrapwrap.6e19a167.png",
    "revision": "6e19a1670c71dd943ebf2df37dbfbeed"
  },
  {
    "url": "assets/img/flexwrapwrapreverse.e31084d7.png",
    "revision": "e31084d71c7a1c7de5988bf3542b5211"
  },
  {
    "url": "assets/img/forkwenti.ae5810de.png",
    "revision": "ae5810de783bcdbe30f7305e685f68f0"
  },
  {
    "url": "assets/img/freeze.2dcab307.png",
    "revision": "2dcab307c86b75885aafdb9f1d4aad4f"
  },
  {
    "url": "assets/img/functionprototype.cd394bd2.png",
    "revision": "cd394bd22e3d2b51f7453c661f3ea6ab"
  },
  {
    "url": "assets/img/github.jpeg",
    "revision": "07de3f2bb27410017ae46012634d4ab2"
  },
  {
    "url": "assets/img/hard.b81ae310.png",
    "revision": "b81ae3109167da3156fddd1f0ae18709"
  },
  {
    "url": "assets/img/HEAD.371cee17.png",
    "revision": "371cee1793f7fb9d2178316854fa0997"
  },
  {
    "url": "assets/img/hongrenwu.bdbd178d.png",
    "revision": "bdbd178d4d2edba4d41e382a6f020bb6"
  },
  {
    "url": "assets/img/hookyuanli.c36dade5.jpg",
    "revision": "c36dade592adc7c618fe385407fb43a3"
  },
  {
    "url": "assets/img/hookyuanli2.490252fb.jpg",
    "revision": "490252fb64d945b8af02aaece31115a5"
  },
  {
    "url": "assets/img/http2.0.ba083eac.png",
    "revision": "ba083eacd22df58b22091d9735c2392b"
  },
  {
    "url": "assets/img/importxiaoguo.0518b9ee.png",
    "revision": "0518b9ee24acab4710eb8c07e31db887"
  },
  {
    "url": "assets/img/jichengshuxing.aed503ee.png",
    "revision": "aed503ee1ced5a12d0d6b91824d7b9ea"
  },
  {
    "url": "assets/img/jichengyuanxingshuxing.a674ec29.png",
    "revision": "a674ec293a0c7066107d250c262ceb50"
  },
  {
    "url": "assets/img/jinchengzhuangtai.28238eda.png",
    "revision": "28238edaa9df997e07e17cdb8badd33d"
  },
  {
    "url": "assets/img/jiugouzi.ec4edfd7.jpeg",
    "revision": "ec4edfd7ac11c595606aa1ce48a2a4fe"
  },
  {
    "url": "assets/img/jubuzujian.1d3c819e.png",
    "revision": "1d3c819e939963efd6b96e4e7d3ba28e"
  },
  {
    "url": "assets/img/lanjiazaihou.65ca0f08.png",
    "revision": "65ca0f08f2a2cb9fdddc0984c9ba1ea1"
  },
  {
    "url": "assets/img/lanjiazaiqian.57851da3.png",
    "revision": "57851da31905edb3a143046c37193e3d"
  },
  {
    "url": "assets/img/leetcode.png",
    "revision": "883f5766ca6938c024380bbe9934a11b"
  },
  {
    "url": "assets/img/left.png",
    "revision": "59cdcbe8184dc4d78169e56f83ead010"
  },
  {
    "url": "assets/img/leifangfa.29ec894a.png",
    "revision": "29ec894a54bbef02b0c8963258d04dc8"
  },
  {
    "url": "assets/img/lifecycle.6f2c97f0.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "assets/img/mixed.030485c2.png",
    "revision": "030485c2968a3f54f486af142fd04434"
  },
  {
    "url": "assets/img/mixin.4e95c240.png",
    "revision": "4e95c240fccd2e760d6b082ce833f702"
  },
  {
    "url": "assets/img/mount.8c89de35.png",
    "revision": "8c89de35ca9df41c26c27d2bfdba7ab7"
  },
  {
    "url": "assets/img/musicplay.svg",
    "revision": "e2573aba93ca664bc162bd5446afa01b"
  },
  {
    "url": "assets/img/musicstop.svg",
    "revision": "cce94fe4fd6fa89bb830a16db7223f55"
  },
  {
    "url": "assets/img/nodedaili.c199f122.png",
    "revision": "c199f122a0ed300963005c4ee6fa5817"
  },
  {
    "url": "assets/img/objectcreate.74bdf9de.png",
    "revision": "74bdf9de03c96f117af82f7d8187817f"
  },
  {
    "url": "assets/img/portrait.jpg",
    "revision": "87b5477e7cbef464316ae57457c44dd8"
  },
  {
    "url": "assets/img/previousprototype1.4ceb3e42.png",
    "revision": "4ceb3e42538bf4b0700075d9ec3e3f9d"
  },
  {
    "url": "assets/img/previousprototype2.e20c6e1c.png",
    "revision": "e20c6e1c6752aad558e57275dc2358b6"
  },
  {
    "url": "assets/img/previousprototype3.be4aa9b3.png",
    "revision": "be4aa9b310fce41686bb77ef4c966e81"
  },
  {
    "url": "assets/img/promiseresolve.490ff241.png",
    "revision": "490ff241e796e99132fd731541e4e626"
  },
  {
    "url": "assets/img/promiseresolve2.2aec4bfc.png",
    "revision": "2aec4bfcf07c45ee7c6e8ee902b0f944"
  },
  {
    "url": "assets/img/promisestatus.bfa42ae7.png",
    "revision": "bfa42ae70fc83bd9b5710b3e029ecf8f"
  },
  {
    "url": "assets/img/props1.440739c4.png",
    "revision": "440739c439b9fa104d28e2d424a498ab"
  },
  {
    "url": "assets/img/props15.1c603289.png",
    "revision": "1c6032896597ab470ba6f97b64bbe43f"
  },
  {
    "url": "assets/img/props2.06e9229f.png",
    "revision": "06e9229f3aeb5556dd70eafe7d5e6adc"
  },
  {
    "url": "assets/img/props4.75c6c01e.png",
    "revision": "75c6c01e3caf3b358d394a8dcebe9878"
  },
  {
    "url": "assets/img/props7.cf945442.png",
    "revision": "cf9454426d80c60f32af82f96b8ae02b"
  },
  {
    "url": "assets/img/prototype.09ab9d4e.png",
    "revision": "09ab9d4e146c33210c546e45e82ba084"
  },
  {
    "url": "assets/img/prototypetop.f6f6e8ea.png",
    "revision": "f6f6e8ea35c4746ac0dc8189dc6999e9"
  },
  {
    "url": "assets/img/pullrequest.2c1df609.png",
    "revision": "2c1df6092782aba31a3b4f1600256a49"
  },
  {
    "url": "assets/img/qicengmoxing.7fa23753.png",
    "revision": "7fa23753cce70267827084ae972d6b27"
  },
  {
    "url": "assets/img/qq.jpeg",
    "revision": "819c5f35686294fb41e7e98c6ba25224"
  },
  {
    "url": "assets/img/quanbuprops.eff6e115.png",
    "revision": "eff6e11517626aadd2105cbd9fe91185"
  },
  {
    "url": "assets/img/rebase.b146b14f.png",
    "revision": "b146b14fe1399eee812ecd37e32d3ff2"
  },
  {
    "url": "assets/img/redux.4afb4200.png",
    "revision": "4afb420026a7eb530db1e19fcc20639a"
  },
  {
    "url": "assets/img/revert.903a6cc0.png",
    "revision": "903a6cc0e85b3128e909859969873a6f"
  },
  {
    "url": "assets/img/right.png",
    "revision": "606d8905b275f4ee3e31bc094dec6bfa"
  },
  {
    "url": "assets/img/rotate3dshiliang.4d876670.png",
    "revision": "4d876670dfe86fd2fa953f82031677a1"
  },
  {
    "url": "assets/img/router0.7711063f.png",
    "revision": "7711063f6f97abf1bcf2fcbcdf19ca15"
  },
  {
    "url": "assets/img/sanciwoshou.1bdd7bd6.png",
    "revision": "1bdd7bd6297434d1af83a54a890b9d44"
  },
  {
    "url": "assets/img/scope.a9e3b01b.png",
    "revision": "a9e3b01b2c48a785bf05b48ee3087575"
  },
  {
    "url": "assets/img/shadowzhengxiafang.6dcbc262.png",
    "revision": "6dcbc262cda8b61f413b4336b73f4c5b"
  },
  {
    "url": "assets/img/shijianmaopao.ae05e45c.png",
    "revision": "ae05e45c31a23ef62a8aff58f6c1c3ff"
  },
  {
    "url": "assets/img/shitishuxing.139552d4.png",
    "revision": "139552d4dc93584f4523e1e35caee2ba"
  },
  {
    "url": "assets/img/sicihuishou.e52c3974.png",
    "revision": "e52c39749d451cd18e3989683df4f487"
  },
  {
    "url": "assets/img/slotchuanzhi.e6334087.png",
    "revision": "e63340872ed29c84aa0984031f728089"
  },
  {
    "url": "assets/img/slotzuoyongyu.b05cf6ce.png",
    "revision": "b05cf6ce3520be519e501702719e59ab"
  },
  {
    "url": "assets/img/snapshot.png",
    "revision": "8a99b3822d30a6f05517ba9b2f255188"
  },
  {
    "url": "assets/img/socketfuwuduan.004fabfa.png",
    "revision": "004fabfa9681fe8a1caeabff74341a26"
  },
  {
    "url": "assets/img/socketkehuduan.db8cb0b1.png",
    "revision": "db8cb0b176f38f44fe7f0481e8512b25"
  },
  {
    "url": "assets/img/soft.0a1887e2.png",
    "revision": "0a1887e29a0e1d620eac303c71c14136"
  },
  {
    "url": "assets/img/spacebetween.974b6ef3.png",
    "revision": "974b6ef37f08758e246c26f26b2dcb34"
  },
  {
    "url": "assets/img/spacebetween2.e33f1721.png",
    "revision": "e33f17212792f35532e8293aa80d788e"
  },
  {
    "url": "assets/img/stash.bb16a21d.png",
    "revision": "bb16a21d2c9c3601e953dec992ca83f1"
  },
  {
    "url": "assets/img/targetmap.85f1946b.png",
    "revision": "85f1946bea8059be29f67d55ee8bb8f8"
  },
  {
    "url": "assets/img/textindent.9c5e20f7.png",
    "revision": "9c5e20f7de287e48a4d98fcbe4f12983"
  },
  {
    "url": "assets/img/textshadowduoge.26a5b476.png",
    "revision": "26a5b476ab01f3e6d17946c2446417ac"
  },
  {
    "url": "assets/img/textshadowzuoshang.8cb467e6.png",
    "revision": "8cb467e6b3e1d476617798af6b4670e4"
  },
  {
    "url": "assets/img/thinking.f1b4044e.png",
    "revision": "f1b4044ef2b930e4e3a18a48959597d8"
  },
  {
    "url": "assets/img/timestempanli.45c06818.png",
    "revision": "45c0681857935a51dadc96f47af3e8fb"
  },
  {
    "url": "assets/img/transformorigin.c66cbfd8.png",
    "revision": "c66cbfd8db850785c9f7ac0030994d41"
  },
  {
    "url": "assets/img/v-bind.36dca9ab.png",
    "revision": "36dca9ab4661dd40dba06bbbdca8ea3b"
  },
  {
    "url": "assets/img/v-pre.21ecf119.png",
    "revision": "21ecf119f4f023e32c7e376d6d71ee83"
  },
  {
    "url": "assets/img/v-show.c5954cfd.png",
    "revision": "c5954cfdcd12e79b672fe2602a793eaa"
  },
  {
    "url": "assets/img/v-slot.3d9612dc.png",
    "revision": "3d9612dce74aa0eae76884e0d6ee325a"
  },
  {
    "url": "assets/img/v-text.384c5037.png",
    "revision": "384c5037680f4fff0c1c65c6d54cdd88"
  },
  {
    "url": "assets/img/vscodezidingyi.b90b3332.png",
    "revision": "b90b3332cba46279946fa31da2df949a"
  },
  {
    "url": "assets/img/vscodezidingyi2.791c4a51.png",
    "revision": "791c4a5166a8d70af09df88694744294"
  },
  {
    "url": "assets/img/vue3yuanli.9da0e733.png",
    "revision": "9da0e733bdd00fd93ce2e58ae88b02ec"
  },
  {
    "url": "assets/img/wechat.jpeg",
    "revision": "b838818de1e21d404926bfff8f0fccf9"
  },
  {
    "url": "assets/img/whitespacenormal.7aa8541a.png",
    "revision": "7aa8541a06916a50ff5f29f5cb11bf85"
  },
  {
    "url": "assets/img/whitespacenowrap.2277d67c.png",
    "revision": "2277d67cf981979879b9e90afbe8fcf7"
  },
  {
    "url": "assets/img/whitespacepre.153d4cf5.png",
    "revision": "153d4cf5b24125c52698b39b577315b0"
  },
  {
    "url": "assets/img/whitespacepreline.2ac1f3cb.png",
    "revision": "2ac1f3cb722194ae71710bf8cb280c9b"
  },
  {
    "url": "assets/img/whitespaceprewrap.f910f004.png",
    "revision": "f910f00472ea593ffb39eff9a5228d63"
  },
  {
    "url": "assets/img/workermessage.74d40119.png",
    "revision": "74d40119cf9fa2ebc543ece6f90f34fb"
  },
  {
    "url": "assets/img/writablefalse.ab523908.png",
    "revision": "ab523908e7c2d31ac6c8a28a128ae223"
  },
  {
    "url": "assets/img/xianfahouzhi.461efd62.png",
    "revision": "461efd62b6afc4809e858b14d6a7becb"
  },
  {
    "url": "assets/img/xingouzi.e352b0bf.png",
    "revision": "e352b0bfa574f60c5a68d93423c74ccf"
  },
  {
    "url": "assets/img/yuanxingshuxing.dcd30ced.png",
    "revision": "dcd30ced7fd28afed72e3c9a77364538"
  },
  {
    "url": "assets/img/zizujian.665f50c6.png",
    "revision": "665f50c68a5ddebbc2d3f51cae45faa1"
  },
  {
    "url": "assets/img/zujianchuancan.c270d5be.png",
    "revision": "c270d5be259c059d8b73b84e4f62a3bd"
  },
  {
    "url": "assets/img/zujianclass.bc424009.png",
    "revision": "bc4240098d9a8026832fd420fb94cf6a"
  },
  {
    "url": "assets/img/zuoyongyulian.8173eb55.jpeg",
    "revision": "8173eb55fa135e9cf64f3eb518097816"
  },
  {
    "url": "assets/js/1.ed0c8e21.js",
    "revision": "cbe5adb864e5932274de804bbf507663"
  },
  {
    "url": "assets/js/10.59d82628.js",
    "revision": "d79569aae462b8d0cb07f18124d0125d"
  },
  {
    "url": "assets/js/100.cd537b9c.js",
    "revision": "6eb39d3974bd27bb4da92340ea457edb"
  },
  {
    "url": "assets/js/101.9bfa05a1.js",
    "revision": "aa1c494897b8dd3a1b9e107bce121d86"
  },
  {
    "url": "assets/js/102.b9422d2a.js",
    "revision": "b498ab5d3b888bf765942c7c7de93f17"
  },
  {
    "url": "assets/js/103.52709b4f.js",
    "revision": "8789c17735e86e868ce7a1258e288298"
  },
  {
    "url": "assets/js/104.ef1e0884.js",
    "revision": "0e1ee704df25364b63bd693634a37d49"
  },
  {
    "url": "assets/js/105.558c158e.js",
    "revision": "f3a4b322cef350b4793e1c03c361d329"
  },
  {
    "url": "assets/js/106.3586965b.js",
    "revision": "0900453b9484cb492acdb76757ca459e"
  },
  {
    "url": "assets/js/107.0c9c41c8.js",
    "revision": "5da5326aa40e972f50fd6a8dfab52c8b"
  },
  {
    "url": "assets/js/108.ced4c55c.js",
    "revision": "e391ceee61eb86aaef2e1a446428fd7a"
  },
  {
    "url": "assets/js/109.083b7a80.js",
    "revision": "41577bc76beab55b6a04e3ffe9876509"
  },
  {
    "url": "assets/js/11.d7d77c21.js",
    "revision": "0a345fc3694d44ae654433ee39baf18d"
  },
  {
    "url": "assets/js/110.df3c9a82.js",
    "revision": "51bcc7106efdd3212d516e2e317aac7b"
  },
  {
    "url": "assets/js/111.9565ef48.js",
    "revision": "858305d031f672a60dd89e1c23c90d03"
  },
  {
    "url": "assets/js/112.8ea6129d.js",
    "revision": "3e89d07f29535c4c0f3a829e2505ff83"
  },
  {
    "url": "assets/js/113.59fbf4d3.js",
    "revision": "036e255b043edc77361b82adb0e87698"
  },
  {
    "url": "assets/js/114.b5be4103.js",
    "revision": "3210fe7b2a29c41ede842b91530502a3"
  },
  {
    "url": "assets/js/115.81c15bf1.js",
    "revision": "d21df2452336ebb47ef40a05adb64b78"
  },
  {
    "url": "assets/js/116.73a9c33e.js",
    "revision": "a5e215133382c08cdbea019298d2a65d"
  },
  {
    "url": "assets/js/117.5185308c.js",
    "revision": "11ea9bf6bb8dcdd33a6c21ae1e55e746"
  },
  {
    "url": "assets/js/118.55fde4eb.js",
    "revision": "f7a6db6d665b6542406dfad6f1ee6047"
  },
  {
    "url": "assets/js/119.532fdee5.js",
    "revision": "22f900a906e542061da5df443ed310f1"
  },
  {
    "url": "assets/js/12.372b0a7c.js",
    "revision": "1415d8561ba78b0f0675d1c7bb347602"
  },
  {
    "url": "assets/js/120.5d3c1e13.js",
    "revision": "d08d427278c4bea9b869ae4f704ce15d"
  },
  {
    "url": "assets/js/121.1020df71.js",
    "revision": "d61e5a8a51aa8002bc5c0186adb988f2"
  },
  {
    "url": "assets/js/122.181a0f35.js",
    "revision": "a4abffc6a4acd2ba6be8a411a387c62f"
  },
  {
    "url": "assets/js/123.881f3d2e.js",
    "revision": "eba64c5f6e3387b18c28fca99b0e869a"
  },
  {
    "url": "assets/js/124.12b7b295.js",
    "revision": "29d5a348bcb71619970e156169f0c7c4"
  },
  {
    "url": "assets/js/125.07b8a4ed.js",
    "revision": "1fcb1e89e615814e1c79eb079b12d267"
  },
  {
    "url": "assets/js/126.81ba89c1.js",
    "revision": "e45a32e99e1a7ede29fc8de8580fd2dd"
  },
  {
    "url": "assets/js/127.a876b565.js",
    "revision": "4301402a9dee985a292f5280e49c64c5"
  },
  {
    "url": "assets/js/128.0610b448.js",
    "revision": "18ef9605bfea41e5138303ce2130d05e"
  },
  {
    "url": "assets/js/129.c46960fc.js",
    "revision": "c6a9e387aa7266668fa4e2a3324fc38d"
  },
  {
    "url": "assets/js/13.596dfc1f.js",
    "revision": "a864390a62681487a5df408d3b93b77c"
  },
  {
    "url": "assets/js/130.ceba2c8c.js",
    "revision": "a871c94b84f1a67f47741fd9e544c270"
  },
  {
    "url": "assets/js/131.754f6f6b.js",
    "revision": "0e68aed585cdbfa9459320b5093f7370"
  },
  {
    "url": "assets/js/132.59d8e864.js",
    "revision": "104537ef8170716e7aa5ca881dd0c17a"
  },
  {
    "url": "assets/js/133.f7299884.js",
    "revision": "b656829295cb01da5a44e40c40c3faf3"
  },
  {
    "url": "assets/js/134.bdc0e725.js",
    "revision": "e35508f1dc34493cc8318bf586556499"
  },
  {
    "url": "assets/js/135.92040c2a.js",
    "revision": "4b7d1c6ff8e8ccab5041cf458192ee2b"
  },
  {
    "url": "assets/js/136.6bc9f695.js",
    "revision": "ef19dea5c48695b09621c0ed31b0db80"
  },
  {
    "url": "assets/js/137.b47f76cd.js",
    "revision": "e1699ae340215e9e943489ee52f88736"
  },
  {
    "url": "assets/js/138.c6090fe9.js",
    "revision": "80912acc2ca62b6fb79e1e33dcd9ae4d"
  },
  {
    "url": "assets/js/139.01207168.js",
    "revision": "79a78dddfe72413c29f0d7c82374bea3"
  },
  {
    "url": "assets/js/14.b8a65e08.js",
    "revision": "27a4c1a9547cf7ef780316095d7fbf3b"
  },
  {
    "url": "assets/js/140.548f6080.js",
    "revision": "298df78e306bbc70c55145ce5c5cba00"
  },
  {
    "url": "assets/js/141.e165b59a.js",
    "revision": "ba7e88cf27e91a9d853980cfc2810c74"
  },
  {
    "url": "assets/js/142.a57c86a7.js",
    "revision": "4d3459abc3b1d3419f937999a395f264"
  },
  {
    "url": "assets/js/143.b35feed4.js",
    "revision": "eb4823177734ad37a56d8561ac0c2d29"
  },
  {
    "url": "assets/js/144.5163fe2b.js",
    "revision": "e3d10b3f670eba32dc6e8e810de79b17"
  },
  {
    "url": "assets/js/145.b0242744.js",
    "revision": "db398e61b02219ece0753ef93ee286e3"
  },
  {
    "url": "assets/js/146.6d9d99ba.js",
    "revision": "2600d2cec99740c1ada389baf6356bbf"
  },
  {
    "url": "assets/js/147.3dd0f319.js",
    "revision": "6806bf5a88cfb8506b402bf6ab550f40"
  },
  {
    "url": "assets/js/148.5bb7cd39.js",
    "revision": "706b4e4c737f88f9bd0dcead7fca303a"
  },
  {
    "url": "assets/js/149.e120d9ed.js",
    "revision": "1ddfebb1b69a52d4a48adbe48ce1204e"
  },
  {
    "url": "assets/js/15.5145ce9d.js",
    "revision": "37461e53ba48a3d35a5879cea290e11b"
  },
  {
    "url": "assets/js/150.40e614ed.js",
    "revision": "7e9ea6d42cc7950bc98e0d3051eecc7d"
  },
  {
    "url": "assets/js/151.6b2fef29.js",
    "revision": "d12e53620adc5f7bc2c0fb3ddfadb0c1"
  },
  {
    "url": "assets/js/152.bfe577b5.js",
    "revision": "3fc4490ee99e9cff37cae087ddb9ecfd"
  },
  {
    "url": "assets/js/153.fd869a09.js",
    "revision": "ea694d7acdbf31fcf7f7c12bb33c4b4e"
  },
  {
    "url": "assets/js/154.53be91fa.js",
    "revision": "3d7736c85f95b915fa308270bc2ba3a2"
  },
  {
    "url": "assets/js/155.dae419e3.js",
    "revision": "24fa6a94bcc19c3b060bb073fc0f402f"
  },
  {
    "url": "assets/js/156.2d775e53.js",
    "revision": "97765bde7f066dac3652f63c59535fd4"
  },
  {
    "url": "assets/js/157.4f89b176.js",
    "revision": "e322696b8af5cd506f913fc2d2954cda"
  },
  {
    "url": "assets/js/158.4860a2e8.js",
    "revision": "e4f89c148560dff8e5a7386bf96f7997"
  },
  {
    "url": "assets/js/159.a901de1a.js",
    "revision": "0c5ba82353666f0c02f9533283ed1bf8"
  },
  {
    "url": "assets/js/16.ea9f9f3e.js",
    "revision": "34e8a581e3e8d95092e94819a7afdc0e"
  },
  {
    "url": "assets/js/160.de5f4ae6.js",
    "revision": "14470a69732e16a78a3960d8b6c3f960"
  },
  {
    "url": "assets/js/161.cd566b26.js",
    "revision": "fd406e16a8eb5141879a93be0516011f"
  },
  {
    "url": "assets/js/162.28555014.js",
    "revision": "cd5f436ef73e0bc55300184e24cdf4ec"
  },
  {
    "url": "assets/js/163.83683e71.js",
    "revision": "6e29c528872ef431547692974f0c3463"
  },
  {
    "url": "assets/js/164.95f9af62.js",
    "revision": "3fb7a63a594fc306c1cf4934837a4c6a"
  },
  {
    "url": "assets/js/165.11f44cff.js",
    "revision": "42938d2c40609ff08e9f4d078a123af4"
  },
  {
    "url": "assets/js/166.1d71d9b0.js",
    "revision": "4e030b99e776e73aab64adb341478fd4"
  },
  {
    "url": "assets/js/167.bb653f2a.js",
    "revision": "8bba31350e01877ec0ebd5989f678b5b"
  },
  {
    "url": "assets/js/168.ef70999f.js",
    "revision": "66ccb5c38b053be07e3d3c342c0825bb"
  },
  {
    "url": "assets/js/169.4ddb44f6.js",
    "revision": "9756e4e18aadd6717611db2dad5c535d"
  },
  {
    "url": "assets/js/17.4f9c2ebb.js",
    "revision": "99eb957f1048a18753ea52bc4f7d6188"
  },
  {
    "url": "assets/js/170.00eb76b8.js",
    "revision": "f576a9fc31c3777b9525ef00cb604f81"
  },
  {
    "url": "assets/js/171.fbc8dbbc.js",
    "revision": "58c5595945b64b585d25df00db046c3d"
  },
  {
    "url": "assets/js/172.b81e0403.js",
    "revision": "1bb79ca28c7fdd8c56f80af90f0474dd"
  },
  {
    "url": "assets/js/173.7071edf6.js",
    "revision": "65fd5ee6074398bfcc89e6de9c53d1d2"
  },
  {
    "url": "assets/js/174.2e91fbc5.js",
    "revision": "e76fbfaf2fc7fc43bc1132ab2aeed06d"
  },
  {
    "url": "assets/js/175.d88561b2.js",
    "revision": "82b9516779ee01950acc0942e68010bd"
  },
  {
    "url": "assets/js/176.61f42080.js",
    "revision": "56d560f68251da17e50506ac376d994a"
  },
  {
    "url": "assets/js/177.495e07e9.js",
    "revision": "229d066efa369e98d48a82db698237d7"
  },
  {
    "url": "assets/js/178.7783af0f.js",
    "revision": "ba6b1b7b73c6de68ea5ca329b3be60eb"
  },
  {
    "url": "assets/js/179.195f057c.js",
    "revision": "e1fe4a234fd76b2676d998e57bccd8b0"
  },
  {
    "url": "assets/js/18.3065156e.js",
    "revision": "aec7be00f0de77d9ee57005d1eb163f2"
  },
  {
    "url": "assets/js/180.6755a87c.js",
    "revision": "303a01a723d49e1f771f506c0e5cb372"
  },
  {
    "url": "assets/js/181.0962798e.js",
    "revision": "96aaefbd294f4bc0388f1693a41c1989"
  },
  {
    "url": "assets/js/182.798708be.js",
    "revision": "29ecb2eb67488b472d0e263fc51a25ce"
  },
  {
    "url": "assets/js/183.d5554299.js",
    "revision": "8303bfddf362d6e7e24db05e082be839"
  },
  {
    "url": "assets/js/184.403e6aaa.js",
    "revision": "448bee5d74085a6ed9e2f7fe98c7cca9"
  },
  {
    "url": "assets/js/185.597658ab.js",
    "revision": "5d3aea11f4233f79d736872471c601c7"
  },
  {
    "url": "assets/js/186.c315513c.js",
    "revision": "64671bfb7f07465366f1b45e0a8f3327"
  },
  {
    "url": "assets/js/187.f108906b.js",
    "revision": "53c032cf5f825e90e6eb4bb3ef5cd9c3"
  },
  {
    "url": "assets/js/188.ad61aa8d.js",
    "revision": "12268de69ed8a012951e92efa399ec0f"
  },
  {
    "url": "assets/js/189.f90c9b35.js",
    "revision": "8af029cdc97566316c19fe4e15403e41"
  },
  {
    "url": "assets/js/19.b619c8dc.js",
    "revision": "66eeefae26f0ffb0b5c07aa075c1ad56"
  },
  {
    "url": "assets/js/190.904c2a14.js",
    "revision": "46019dd3c7f0305621b61c5bfd0b4e22"
  },
  {
    "url": "assets/js/191.c16335cb.js",
    "revision": "4bd26fd619b7e5e956f8042242ab8b9c"
  },
  {
    "url": "assets/js/192.9ad8035d.js",
    "revision": "d81877741d9322da07e637937394741f"
  },
  {
    "url": "assets/js/193.3efe53ae.js",
    "revision": "521438e37ed9271d9df3d1faeaa7f9fc"
  },
  {
    "url": "assets/js/194.00b5695a.js",
    "revision": "1bd3d3938ef1597ddd5b190729a30453"
  },
  {
    "url": "assets/js/195.27668ca4.js",
    "revision": "f6e4afc170d4475fbd9b0b52db188828"
  },
  {
    "url": "assets/js/196.3a388a9a.js",
    "revision": "edf998089431ee15e1c80151a68e79a7"
  },
  {
    "url": "assets/js/197.9cb20940.js",
    "revision": "fc7f4bc382e75875c7cb6ff0a255c002"
  },
  {
    "url": "assets/js/198.39c47fb0.js",
    "revision": "c1368ee0d1d85403d39ab30fd0153a32"
  },
  {
    "url": "assets/js/199.7995e565.js",
    "revision": "fd3944a528ce2bec5c73e879e8ae53a6"
  },
  {
    "url": "assets/js/20.5bb16d81.js",
    "revision": "23cbe8374bbcadd570622246c32eda3b"
  },
  {
    "url": "assets/js/200.66845f44.js",
    "revision": "cc9792d92799a0bb136c06870980b5c3"
  },
  {
    "url": "assets/js/201.cbe65520.js",
    "revision": "6618015147ba53a2eb950081d85250bb"
  },
  {
    "url": "assets/js/202.27b044f0.js",
    "revision": "0437ee13b4181db973c0a3e0b7a0416e"
  },
  {
    "url": "assets/js/203.45ce3ace.js",
    "revision": "eb697820dc7c47d6f2c02ce1b9aa2ca0"
  },
  {
    "url": "assets/js/204.d13e1bec.js",
    "revision": "2e98e20d1edb9f14ef84a5e03e1f9e8d"
  },
  {
    "url": "assets/js/205.bdf309d7.js",
    "revision": "3971494521c800348da6afe8eb2522bb"
  },
  {
    "url": "assets/js/206.7c4dd0c6.js",
    "revision": "9b7edec6d847f8722f648ef18a92f6c3"
  },
  {
    "url": "assets/js/21.447f8f51.js",
    "revision": "b2e23bcdbcb3ca64c7ba97fd2420a27c"
  },
  {
    "url": "assets/js/22.672124b7.js",
    "revision": "ee04159df94e92edfae318cac477bf93"
  },
  {
    "url": "assets/js/23.435d9e47.js",
    "revision": "8419495d9b79fe7e48c9d6e658b073ce"
  },
  {
    "url": "assets/js/24.f51ac369.js",
    "revision": "66f10468bea896ed5d556e1141ae10d6"
  },
  {
    "url": "assets/js/25.78fafe60.js",
    "revision": "a13075651b989e21fb904bb59b97c222"
  },
  {
    "url": "assets/js/26.2c973286.js",
    "revision": "d9e573cfd614d2ad9ee3a10a113b6e7d"
  },
  {
    "url": "assets/js/27.08527b62.js",
    "revision": "e65d17dd1aa3f0c1f32f3ccaf374e7a7"
  },
  {
    "url": "assets/js/28.d12e2334.js",
    "revision": "e57161f446f5ea80b4f5ff25a3ad9c79"
  },
  {
    "url": "assets/js/29.16693b2c.js",
    "revision": "90ad93e66458a64155fe792069b965f9"
  },
  {
    "url": "assets/js/3.547cf022.js",
    "revision": "f82de59cacc020252784e45f2d0eaea2"
  },
  {
    "url": "assets/js/30.ce236118.js",
    "revision": "db2fa0f68644c256ab4000d648e39ab2"
  },
  {
    "url": "assets/js/31.d25e969e.js",
    "revision": "a039fc0f5e2dcdc6901f285cb43ef9fc"
  },
  {
    "url": "assets/js/32.9d70842b.js",
    "revision": "f622bc5054acee0bedf9b226ff8ae4b2"
  },
  {
    "url": "assets/js/33.bdeb0ea7.js",
    "revision": "774420862960c68f1ae6a8a5a7c4cf3f"
  },
  {
    "url": "assets/js/34.2f9a1bef.js",
    "revision": "561e662ba522bcf6a00bba50c080b0d5"
  },
  {
    "url": "assets/js/35.96c24ec4.js",
    "revision": "db75d38b314603a5311feeea93fafdc1"
  },
  {
    "url": "assets/js/36.ec817356.js",
    "revision": "25f938e1a3cf1503a9058deed2c23a18"
  },
  {
    "url": "assets/js/37.b40f7c82.js",
    "revision": "d4d0862d269255363656615804986bac"
  },
  {
    "url": "assets/js/38.d9222942.js",
    "revision": "b84b5c9e0fab5fdfda6de0e7aac6e3cd"
  },
  {
    "url": "assets/js/39.f07d2532.js",
    "revision": "5f9e32fe2d63b72dbad89df11a373b29"
  },
  {
    "url": "assets/js/4.b1e3072e.js",
    "revision": "64ee32b0eb25d6927674b3daa6b381f6"
  },
  {
    "url": "assets/js/40.d088221d.js",
    "revision": "c60b7bae3542f839c03dff1677c52773"
  },
  {
    "url": "assets/js/41.57666b37.js",
    "revision": "9229867f2c242bdb5bfd3d761a71f213"
  },
  {
    "url": "assets/js/42.534a52c5.js",
    "revision": "f31ed5b6675cb11491f4f070b5296e93"
  },
  {
    "url": "assets/js/43.4039959c.js",
    "revision": "f0c5ccfbabbd7e153cb99bfc67a6cb43"
  },
  {
    "url": "assets/js/44.000b27fc.js",
    "revision": "0ba989f8736eea93e32a40c0ab40361c"
  },
  {
    "url": "assets/js/45.873e5a01.js",
    "revision": "e31c9429f8183e170a33468c51b69b23"
  },
  {
    "url": "assets/js/46.266bf9fc.js",
    "revision": "dfe64ae8c360d62b9e72f6595f79489a"
  },
  {
    "url": "assets/js/47.1ad48aa8.js",
    "revision": "ffbf6e2260a981342e081aecd5bb23c7"
  },
  {
    "url": "assets/js/48.7f5b8b4e.js",
    "revision": "9fe78fb2413e6ebecd410fd16086d7f4"
  },
  {
    "url": "assets/js/49.5d5c8154.js",
    "revision": "19dc1468f5b7c28c68d7f5bfc93c2d21"
  },
  {
    "url": "assets/js/5.3d3719af.js",
    "revision": "701fd791bb90219c477f0aa0745dcdb9"
  },
  {
    "url": "assets/js/50.b78eeb45.js",
    "revision": "1ef26bf3c1d5c050832e3db35082517b"
  },
  {
    "url": "assets/js/51.71e0b0ef.js",
    "revision": "5d6618762f87b6bc87f81548933a1823"
  },
  {
    "url": "assets/js/52.9a1553da.js",
    "revision": "3d0a20ffcaf16719b6b3d652bd691109"
  },
  {
    "url": "assets/js/53.b3faa1c6.js",
    "revision": "e901ece70ec73836cb85bc43498205f0"
  },
  {
    "url": "assets/js/54.03a107bd.js",
    "revision": "55f75af35ce66eead6b9aef21b9d1c4a"
  },
  {
    "url": "assets/js/55.5e203601.js",
    "revision": "81376a8394ab052e95b5a37d4c1c7a63"
  },
  {
    "url": "assets/js/56.0689fd8d.js",
    "revision": "1ed035f9e55020e58de74ce4e4de7530"
  },
  {
    "url": "assets/js/57.391079c2.js",
    "revision": "008b8602e79e11d065ce877e8d98d120"
  },
  {
    "url": "assets/js/58.71b4914c.js",
    "revision": "cd0c526e28fb38856dfcd91fd9affef9"
  },
  {
    "url": "assets/js/59.e3ed59b0.js",
    "revision": "bb4b58c63c48a02185554406cffebc8f"
  },
  {
    "url": "assets/js/6.89223d8f.js",
    "revision": "b5af6e7f293feecff774f087af6d452e"
  },
  {
    "url": "assets/js/60.c31c08d1.js",
    "revision": "4e155ba57134e4c318e4cb584f40502e"
  },
  {
    "url": "assets/js/61.550d8fd3.js",
    "revision": "6cc4b6d723546483fdfeb2c1a920f017"
  },
  {
    "url": "assets/js/62.28fe147c.js",
    "revision": "aaca366c9f6327bda52c91c3027e63b4"
  },
  {
    "url": "assets/js/63.7e5c257f.js",
    "revision": "14a992fb81cbca21279b7848c6da8f3c"
  },
  {
    "url": "assets/js/64.04620986.js",
    "revision": "6f0428718190f99e9df04db69b2614a3"
  },
  {
    "url": "assets/js/65.042735f0.js",
    "revision": "545ba01181cb007145f6f04a88457518"
  },
  {
    "url": "assets/js/66.d7e91946.js",
    "revision": "abaef5e1f6acfa5efb87b37f9ef06bc3"
  },
  {
    "url": "assets/js/67.1e27ae19.js",
    "revision": "820b0a447e653ba27ccb9233f0abe830"
  },
  {
    "url": "assets/js/68.685ca4cc.js",
    "revision": "fe3a65486d885c31ecac63e484ccfe8e"
  },
  {
    "url": "assets/js/69.2c629155.js",
    "revision": "7f85d9535227ab35eb4f56dfef366cf1"
  },
  {
    "url": "assets/js/7.cf26609f.js",
    "revision": "f32e9cbde4f9bd4d26cf3543e96ecf88"
  },
  {
    "url": "assets/js/70.1b707a50.js",
    "revision": "8b7c723cde77facbbd266c3f163ecb0b"
  },
  {
    "url": "assets/js/71.5a4dafc2.js",
    "revision": "07fea59d2155618a46e9d0251847fb01"
  },
  {
    "url": "assets/js/72.81e51c1f.js",
    "revision": "6b91a9b420e91cf6ad49cef74bf20685"
  },
  {
    "url": "assets/js/73.d9a27b91.js",
    "revision": "1404ee8a22f127ca6757b7e861d25715"
  },
  {
    "url": "assets/js/74.24f2f1ba.js",
    "revision": "8af3945bd3841f46f00009e68f5e6edd"
  },
  {
    "url": "assets/js/75.d2400e9c.js",
    "revision": "2c17aa56c31754fb2a6cf41b9fe91bc0"
  },
  {
    "url": "assets/js/76.8fc9ca6d.js",
    "revision": "8e41150c34655a7658b0a29c402487c8"
  },
  {
    "url": "assets/js/77.710595ab.js",
    "revision": "1b4a1dc8791c7e6b10d484c0113e38ff"
  },
  {
    "url": "assets/js/78.4ecade39.js",
    "revision": "180fdcccbbc0a472e5b0607b7a368f22"
  },
  {
    "url": "assets/js/79.45155e57.js",
    "revision": "c18b21afe8d5adaaa076436a06d69942"
  },
  {
    "url": "assets/js/8.cfb7f703.js",
    "revision": "cf1cb9f2ff37be65a5f7b72181910d64"
  },
  {
    "url": "assets/js/80.2a0e9430.js",
    "revision": "4fb809ed3789f86af1392b7bc093fa27"
  },
  {
    "url": "assets/js/81.509370d5.js",
    "revision": "3efa74cb73324ecf375a6255ef03a559"
  },
  {
    "url": "assets/js/82.dc00f271.js",
    "revision": "ef3d4afaf7b4b2e347087b7e966df71f"
  },
  {
    "url": "assets/js/83.df363604.js",
    "revision": "455e96b146eb9ce3835187f27dedb7e6"
  },
  {
    "url": "assets/js/84.064f8681.js",
    "revision": "db0d6c03e6b3055b95b6e4cf073fef95"
  },
  {
    "url": "assets/js/85.f67d8263.js",
    "revision": "b810bc6adcdb64bbce2c14499f8cc16d"
  },
  {
    "url": "assets/js/86.ff603ed5.js",
    "revision": "7675c33e3f9c37b562e2b61b35f06d9b"
  },
  {
    "url": "assets/js/87.3bd64cf0.js",
    "revision": "9ade99129e054763d62f679ecd2bf176"
  },
  {
    "url": "assets/js/88.4dbfe7cf.js",
    "revision": "947e4446fc35b9cec691f2df3df32644"
  },
  {
    "url": "assets/js/89.5044b4a8.js",
    "revision": "a27c0062bcc11d3dc899e7899a81914f"
  },
  {
    "url": "assets/js/9.6f91c2e9.js",
    "revision": "f6eac53fcaa663b747bb3fce6803d8ac"
  },
  {
    "url": "assets/js/90.cc4a271c.js",
    "revision": "35833f4c69bc14cda00b2af13231cd5d"
  },
  {
    "url": "assets/js/91.103ea3d9.js",
    "revision": "6a7349d5a8fd6bb3d992a23acdee7140"
  },
  {
    "url": "assets/js/92.9b1df87b.js",
    "revision": "ef19c137aba2d40fa716c013d29c569d"
  },
  {
    "url": "assets/js/93.f2ce41fe.js",
    "revision": "de2df969e7c2f066749c3b34878688cf"
  },
  {
    "url": "assets/js/94.291e93a4.js",
    "revision": "144755efa4a49b345ab6e1c99c9e5aab"
  },
  {
    "url": "assets/js/95.c9e1c6fd.js",
    "revision": "af153d8e52e5b511b2018121d9cd6dd2"
  },
  {
    "url": "assets/js/96.29101bb0.js",
    "revision": "f68cbed4a09788f52297f5f0f44f151a"
  },
  {
    "url": "assets/js/97.0686025a.js",
    "revision": "467e48dd0276e331748233cb981d14d7"
  },
  {
    "url": "assets/js/98.a9b42dbb.js",
    "revision": "f3147c40dd32585205e5c5a6570a73d7"
  },
  {
    "url": "assets/js/99.ac9b59cf.js",
    "revision": "4aea7beb6eab5444d60597631eb6e25b"
  },
  {
    "url": "assets/js/app.9f038672.js",
    "revision": "d19280ce3bd192f919876a17e095fa92"
  },
  {
    "url": "backend/database/index.html",
    "revision": "1cea0f7337108f54daeb87026d83ae87"
  },
  {
    "url": "backend/node/index.html",
    "revision": "a207a0fec270c76bfa026ab5041bd836"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "80452f1a107222a80344675591daf198"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "d9ac1b94bf6a2034aec2af53af3e3e91"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "2b0a7dae554a7ccd91e4369cd7487f03"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "60ab6181e9ca0170a46e5ea2ba720000"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "2d2f487911a8a2efaf9f0ac1dde612cf"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "cc03a5b78bf650ac6dbcd27d7969faa5"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "b550239af60064fa9f1fbb410be86297"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "0e4e06fc17c5f4ad2b83bd673839805c"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "8a5a526e541eaefcf924a4672adbe689"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "8df7a0d53e395fd696c333e1e444e903"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "f0ac5c12db3b16c97e0fb250d506f80d"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "3c584bdeebe434d0d384bd674922f3b8"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "46f4284a91703bddcd0c5bfb4de59006"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "8fa15f56af4e03f9f6d2a808c1ad3075"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "0d9865ffb3d987b634906e7d3c32e885"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "9fc37e0c27b310f2e30a0e6820fd296d"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "c42f44e823ee7ad034a16857c8d41584"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "10a1d00305ded9a6b86e9a701a3614df"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "86542eb260b56d6445c91882f29eedec"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "0d2f265a340e2a0b56f94e552c9e4e82"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "cd48d12e817df73a90d8dc683b9ac31f"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "8d970618ea2e9c32e03d44dd509e910a"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "1ffd327017578f50b8b83bdb884c3c27"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "8ac3dd8baffbdc62d7cf026c1de884d1"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "c2f1ce4d4581c2983be1fda476cddf55"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "4fbd86294a3857a4a774774721b647f7"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "7455174a51b269bbb634304ae09e3111"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "af6578762786bceaccae50b941deaaed"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "7453cfa407bdb27b3b61d6c46dfe1c18"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "47ba22924ec3fccf7fb2c584c71d4662"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "bf6825b6253099909c39f65dd588969b"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "295957df9888b919740c663d3c441669"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "be6806c27e0b4695c06d09a8c990a918"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "ef01f7a45bb1e0415f4e66537a993d82"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "ba304df7f9f397fbcff4909c2e88c5ed"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "51fddb2f1e11358ae13d583bdbb45d9b"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "eac3d9ef556b069e49f8427ad4ae3e37"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "22d9826dc39a6d1d51f4cfc36630e212"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "d6881d1044762a0287df170887537718"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "fb9a5e766645dabf27bec9d1238816c9"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "fff748e25c414aab8ed211272ab73a67"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "9be8099132e9f554999181694a5a3475"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "387ef9b282b8fbc565b5867b55ab23ee"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "edb149f39b5525802f0d9e92425fb834"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "26e0760fe6983767e4aead67137dfb46"
  },
  {
    "url": "books/computer/index.html",
    "revision": "1cc50b1bcdcde034f64d0ba3d8b4323e"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "99960fe1508e8cb51cef25c18e6564de"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "eaf1dab6f5e621522aa56f2ec8894fb0"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "c961aec9af6732acd56c2ff45dc9c730"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "79db5aa05b265f279d0262f1886b7e89"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "210dc02f2212f4c38ec2413910cea0bd"
  },
  {
    "url": "books/skill/index.html",
    "revision": "280be855f0b90319f896f9c9c99ddf24"
  },
  {
    "url": "categories/index.html",
    "revision": "8f732c528e771b31e5b797604ca54e86"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "ecc103e234205360eb16b87c70ebe118"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "f38dd9d304a6105a9425f33ef2ac35a8"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "e17c320644a93197a31ef10fbba5735f"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "4728076193e1a01bd9dd18f94b724ef0"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "aa102d70f4891c7c5a4cc50c3e6478c9"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "c43a4bed17cded20aa4d0cb3fd68f29a"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "ce6a69f1a6fff71e2b99abf075a2e3cd"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "c68af3f86f79d67864403862f2a4f73b"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "d3bad08d9edaa64a533ac1c0ad06bf6f"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "0b1e0028aa29fbc479c2b0b525f00377"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "4a7c2c6703f9af5095004e7861930566"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "97e7eeb7b37a751ecb1d0ce60d7175a6"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "6bbb867846a31eef31c6d2f98c73f3c8"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "1faf29c5746361615a3939e73a2d6100"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "8c4d836c5cb0a1bea3ec4b3730fdad46"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "9b4050b90aae8a78a5cc31f6f9b526f8"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "37687b1f21e491cd4d6f6fac9d546db4"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "dc651441adeb15444862d85795df23af"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "b6351ddc6c9fad44263bf59ce0034fda"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "cfa3a56e4971aadf1b1447b02fe0e0bd"
  },
  {
    "url": "front/base/array.html",
    "revision": "2ac97f773a273fc3f4000186b0071794"
  },
  {
    "url": "front/base/async.html",
    "revision": "b5b931b1b62f178fea39ee6be4648820"
  },
  {
    "url": "front/base/bom.html",
    "revision": "a18432cdbcf6b114728b69af96e0fd08"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "e398b4b02667bb2d342e9325783cbcb8"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "2114cf72b39dd787fd6fb9e6ccbc501a"
  },
  {
    "url": "front/base/class.html",
    "revision": "9a852e73c16998d07a92af09bad3fe19"
  },
  {
    "url": "front/base/cors.html",
    "revision": "d2e354eb88177cb994b99909e82701c6"
  },
  {
    "url": "front/base/date.html",
    "revision": "807092082350f44f1d71c2e1a654af96"
  },
  {
    "url": "front/base/dom.html",
    "revision": "bea128d69a2c260b5b3cfbfc21045fd1"
  },
  {
    "url": "front/base/event.html",
    "revision": "d94604cafe9ba5161c737d17d3979046"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "96971a8feec6e678bca4274597472996"
  },
  {
    "url": "front/base/function.html",
    "revision": "f95c1c9b4b670a41c012ffba4658becc"
  },
  {
    "url": "front/base/generator.html",
    "revision": "64af00b8321e28531587bf3a7865d849"
  },
  {
    "url": "front/base/history.html",
    "revision": "43b411be4dd0eb1f1d65b4f8463a70c1"
  },
  {
    "url": "front/base/index.html",
    "revision": "d4a6a273732639c923f9dc8432d66cd5"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "3bb21c2a2a9cdb2d1e8731cd8148a1f5"
  },
  {
    "url": "front/base/json.html",
    "revision": "d60351a354a31c47108552799d4e579a"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "61668fce6bee43306aad5d735e73a8a1"
  },
  {
    "url": "front/base/map.html",
    "revision": "3278f3aea40f9eb52cc50bf50247a4ad"
  },
  {
    "url": "front/base/math.html",
    "revision": "89d76d661817b9c811b01972db206f34"
  },
  {
    "url": "front/base/module.html",
    "revision": "0254115fb6790c5f50acd34331578fac"
  },
  {
    "url": "front/base/number.html",
    "revision": "54d25bf82597dbe128d9a42f11103304"
  },
  {
    "url": "front/base/object.html",
    "revision": "066908e7578ead3c261388785c5119a0"
  },
  {
    "url": "front/base/promise.html",
    "revision": "bf4b9a483c977734049c735067b99a39"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "e7bda43b8fac128c42c12fcf1b266237"
  },
  {
    "url": "front/base/reg.html",
    "revision": "8fe98ef500fb48fb79efbab0fba282b6"
  },
  {
    "url": "front/base/set.html",
    "revision": "e88f08294a0b000477bd0b571def93b2"
  },
  {
    "url": "front/base/storage.html",
    "revision": "9886daf262b7e6bbffcb42a49d2c373b"
  },
  {
    "url": "front/base/string.html",
    "revision": "24401836848d474cd6d44feacc69e4ca"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "9cb47a9e7bc311214d6ea3be68cac02e"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "5fe4080da6489fcd340106c871a0c742"
  },
  {
    "url": "front/base/var.html",
    "revision": "b1cc6456c74773aa8d7db3a224054b04"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "b483d8ef9d4446865d39da7bd91ef674"
  },
  {
    "url": "front/base/worker.html",
    "revision": "7afa67796e3197beb8300851908c25a6"
  },
  {
    "url": "front/css/animation.html",
    "revision": "5a766f7977528c40986d78739c9b97ff"
  },
  {
    "url": "front/css/box.html",
    "revision": "241f90d2c9e6f14c4411f33b542e36df"
  },
  {
    "url": "front/css/effects.html",
    "revision": "9b1cf60e5d7f2fb43cb2c736da17a92c"
  },
  {
    "url": "front/css/form.html",
    "revision": "15899bf33af26f01837972d63a637f8f"
  },
  {
    "url": "front/css/grid.html",
    "revision": "a3116034873b230473e4e2767349efc9"
  },
  {
    "url": "front/css/index.html",
    "revision": "d5c3b58d8107e7f3fed0a43c151e0a05"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "26a4edd89530f34262fe727555d0350d"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "9031479f8f724d3a01c4132fcafac96a"
  },
  {
    "url": "front/css/selector.html",
    "revision": "d572434c8d6aab61356461132c7d8b32"
  },
  {
    "url": "front/css/special.html",
    "revision": "bcb6c142bd5efc62946966726d91a4a2"
  },
  {
    "url": "front/css/svg.html",
    "revision": "e264076028cf72a6a4c3cd531085c3f2"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "5f3d77699bcfa0d81250114c57cd5485"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "039c3a08063350af65e708e289907fd7"
  },
  {
    "url": "front/css/text.html",
    "revision": "9d7357980f235e214ec09afb46b18577"
  },
  {
    "url": "front/css/transform.html",
    "revision": "bbf9b796bafd78efb04ed9f2e42aa8dc"
  },
  {
    "url": "front/css/transition.html",
    "revision": "0f8b4aa255e3dfbddde6dd9addd0ff23"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "26f2831807cd427bc6f9fdaa1bb3304b"
  },
  {
    "url": "front/interview/css.html",
    "revision": "f1051e39c9f4d099adb6dba458ee4451"
  },
  {
    "url": "front/interview/index.html",
    "revision": "871f52bdb3c0a87f2636a71e6463620d"
  },
  {
    "url": "front/interview/js.html",
    "revision": "2c558152cf0dc83813b79df7a0407d27"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "02f96975f488e9b03787e2e65de3d665"
  },
  {
    "url": "front/interview/project.html",
    "revision": "59dfed7654bcc3386dc67bbce9959025"
  },
  {
    "url": "front/ios/array.html",
    "revision": "ea2e96cbe9ddd1426c2f1f0746b908fd"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "5c36594d2816b78e393cad0429244402"
  },
  {
    "url": "front/ios/base.html",
    "revision": "7ca21f68d0ddd8dac79913497f55b7b9"
  },
  {
    "url": "front/ios/class.html",
    "revision": "17ed9b62a427713ccd8c0de3cd547173"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "51c8e8c2af0bc1854545ef06a0f79016"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "92be3b5a9d60d03c7757a4ff7c8adf15"
  },
  {
    "url": "front/ios/func.html",
    "revision": "8e4efd0853e014118611edbc8e1e97ed"
  },
  {
    "url": "front/ios/index.html",
    "revision": "f4b33e81cc285957939385d62982ce31"
  },
  {
    "url": "front/ios/number.html",
    "revision": "996ae893b1a3173cfe7f074d459da44c"
  },
  {
    "url": "front/ios/set.html",
    "revision": "0d7a7adf1475ddb200affe85ba1077ad"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "1816ed656b39747353cc336b2e6aceac"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "6331e91a2538425b54afe409d4dd031f"
  },
  {
    "url": "front/ios/string.html",
    "revision": "2055e1537cebe4b7c8796b1b2cec91ee"
  },
  {
    "url": "front/react/cli.html",
    "revision": "c1e296cafb2635224d6e0edac7d29f83"
  },
  {
    "url": "front/react/context.html",
    "revision": "0f1841a01fe44b4f141bff6a897d8be5"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "878357f5d52441dbbd77494a4482d7ae"
  },
  {
    "url": "front/react/important.html",
    "revision": "12d059e42ab0ab70a1d21c7f9b7adec0"
  },
  {
    "url": "front/react/index.html",
    "revision": "c299b3a9d4e8a7dac03fd2da816520eb"
  },
  {
    "url": "front/react/react18.html",
    "revision": "cb5b8dec5602baf00cff2ac917bb43c0"
  },
  {
    "url": "front/react/redux.html",
    "revision": "50410f00ec3fc228dc60d87a06de5145"
  },
  {
    "url": "front/react/router.html",
    "revision": "e8dba783d8baf6ab03949f1ce2268f71"
  },
  {
    "url": "front/react/scope.html",
    "revision": "00e93e4844544fbfbeb4ea93cb4f0f2c"
  },
  {
    "url": "front/react/test.html",
    "revision": "299763b363d3ecd47bb0f9908c049014"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "ccb524fe3d11ec01b1dc3617ce8b3673"
  },
  {
    "url": "front/technique/index.html",
    "revision": "a7c18b86eda0b01351474b2f364fb62b"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "efde1f5b5cf65ea742963dc2f71bc42f"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "08bc074ecd3a7048521e815166fa3bf5"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "b7209420931f0c4b46b08f1ef5f47ace"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "1ef37124f4a1e6d57f17db1098fb49c3"
  },
  {
    "url": "front/test/index.html",
    "revision": "3b4e4b00ca1e06ee2790db24c3ea65ef"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "c970a740ff0a3acfc85b49a36524ec60"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "0ae804b0a494d591df4ede8929910708"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "93a810e9067e1e14cd20ce9c848e50a5"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "83a1d8c0e53344831275ecd0fa21a29a"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "b9251e91dcaac4a7168270489fc91371"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "2a56fe404b1a80fe88bd5df606bb3972"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "a1e5ebb789fb0fd272ca74202ae500bf"
  },
  {
    "url": "index.html",
    "revision": "2e0e746f700de4bc5ef93e165cc99493"
  },
  {
    "url": "skill/git/action.html",
    "revision": "8d75603743d04c708d2a877585b87fb1"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "2e21b1d39b9a3f7451ee4a3c1684980f"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "cdcdd6e0bdb3fb52c16b58074368590e"
  },
  {
    "url": "skill/git/index.html",
    "revision": "9ab941ef410c7a8d7ebbe290a8c3cc30"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "863aa5080ba361f3b52a936913af1fe0"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "1a0c9d86e5302c0921bd96ca3b1eb50f"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "00dfba771570cb7ae343991edacd0c9b"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "064c4ef02019822d4108f89f0a4804c7"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "ba533584e06e785749a21a1cd4e2515e"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "e09478a3c799cd5d5ab864e5c6d35389"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "27ba0291ce3b23ed743e4c321082b754"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "a5c2466ded3c1fab9d3fcc9d76122c69"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "a9b6e54f42e4855910277ac77d93d085"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "372b0133a977d14e2f8316791136e49f"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "c7807167c75531ddaf7dc8b278b642e2"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "2f54c9b022027ed88b881c735cd51b14"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "58387fd3b89d070a3eba42e989a2d4ac"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "130ecf7a174f9c16b8ab799e38c5d84d"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "f18729b3882e9880f131d94f40abd249"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "62192c792a73ca72581ddc12145d198c"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "10fe4d5557ad5e73dab609e5db905692"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "ed3fe73e1262914f2aec3444f865d3d3"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "8a16267fe5c4579cebc27ca15cbc6caa"
  },
  {
    "url": "tag/index.html",
    "revision": "4cbfbadfbcc3af870af3788540f5c00d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7ee3b8cea966dd34653d1780bc621133"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "f6394a9a4817676d4a12ac93826c3b89"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "8e059193e6a37b6dfdb886f7ff45b0a5"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "084231cc60a1f62e5a3c316d7a9a06b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "b6e83fe828b787f046a863d9853c3f4a"
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
