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
    "revision": "33358992a352bc589e6fc223b655bcf6"
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
    "url": "assets/js/102.c2e871dd.js",
    "revision": "c3569ed4bfbaec131ab50bd57dc7fa00"
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
    "url": "assets/js/109.bfb3e0ad.js",
    "revision": "2bb34e67665f9c007edf405cda0024d3"
  },
  {
    "url": "assets/js/11.d7d77c21.js",
    "revision": "0a345fc3694d44ae654433ee39baf18d"
  },
  {
    "url": "assets/js/110.1a206033.js",
    "revision": "f9a6d2ac32e65c72e1ead924d2c0d364"
  },
  {
    "url": "assets/js/111.6b9c04c2.js",
    "revision": "1fc78cea181049bda09409bd0c183993"
  },
  {
    "url": "assets/js/112.44a81eaa.js",
    "revision": "1902f9a7268292f7562a0a1ddef261ef"
  },
  {
    "url": "assets/js/113.e1e05a53.js",
    "revision": "46d45b5649de39a19a244fff39ec36a2"
  },
  {
    "url": "assets/js/114.b7113fa4.js",
    "revision": "8d9ae9d63c514a7fd84b1e97f785db53"
  },
  {
    "url": "assets/js/115.34dd56b0.js",
    "revision": "93c75a60eb5227bb844e526c52ab28ad"
  },
  {
    "url": "assets/js/116.10db660e.js",
    "revision": "1f0d0df27116d60f650ffed5b7a4dde3"
  },
  {
    "url": "assets/js/117.5185308c.js",
    "revision": "11ea9bf6bb8dcdd33a6c21ae1e55e746"
  },
  {
    "url": "assets/js/118.52e95895.js",
    "revision": "915d16c45acbf3b8934d4c66049a6adf"
  },
  {
    "url": "assets/js/119.48627965.js",
    "revision": "0b4f64a1875bf5b02b3a3f93b86ef41d"
  },
  {
    "url": "assets/js/12.78f9218c.js",
    "revision": "fbf8f7fa5c7a00ffad5201131dd0ca27"
  },
  {
    "url": "assets/js/120.a31c6505.js",
    "revision": "747446b88ea9e269c3223f47ad12f8d7"
  },
  {
    "url": "assets/js/121.45afc061.js",
    "revision": "159061060e698d947dc9fb1bd0e1f80d"
  },
  {
    "url": "assets/js/122.888a9c8a.js",
    "revision": "f330ac1a9f17f6c865e9b6bc01482eb0"
  },
  {
    "url": "assets/js/123.3542705c.js",
    "revision": "0928e226ce02aee24268fdf2489de6fc"
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
    "url": "assets/js/129.142c9eb0.js",
    "revision": "c4f99bf07b2322cb3ab9202a3596a5be"
  },
  {
    "url": "assets/js/13.596dfc1f.js",
    "revision": "a864390a62681487a5df408d3b93b77c"
  },
  {
    "url": "assets/js/130.226ca44d.js",
    "revision": "c296b4188c8f0fa40082ccf5cb4a48e0"
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
    "url": "assets/js/137.395bc5c9.js",
    "revision": "213e58c9bf1bf8e0b9726a330d0709d0"
  },
  {
    "url": "assets/js/138.d38c2947.js",
    "revision": "40b6591f6d9a0b4b39a38c53203ce852"
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
    "url": "assets/js/141.3856d674.js",
    "revision": "a4c8afbf0418e0536a06eee866fb4095"
  },
  {
    "url": "assets/js/142.03a83927.js",
    "revision": "4250fc43cfb78332113e7838ae89101c"
  },
  {
    "url": "assets/js/143.b35feed4.js",
    "revision": "eb4823177734ad37a56d8561ac0c2d29"
  },
  {
    "url": "assets/js/144.6da3d745.js",
    "revision": "3cfc1e8b6cd4a2278cb4b0aeb986fd26"
  },
  {
    "url": "assets/js/145.b0242744.js",
    "revision": "db398e61b02219ece0753ef93ee286e3"
  },
  {
    "url": "assets/js/146.ba746959.js",
    "revision": "662fa23c66360e6e44d30f195502a2eb"
  },
  {
    "url": "assets/js/147.dfb222e9.js",
    "revision": "d515a6659a72538a587253175c4d61d7"
  },
  {
    "url": "assets/js/148.5bb7cd39.js",
    "revision": "706b4e4c737f88f9bd0dcead7fca303a"
  },
  {
    "url": "assets/js/149.4ee47b23.js",
    "revision": "306a31e342962be368389120672884d0"
  },
  {
    "url": "assets/js/15.5145ce9d.js",
    "revision": "37461e53ba48a3d35a5879cea290e11b"
  },
  {
    "url": "assets/js/150.f06ac892.js",
    "revision": "8d02875f433a48e28d9fc0717546682d"
  },
  {
    "url": "assets/js/151.f23a46f4.js",
    "revision": "5e04461af40bd346c97ee7a56e4a977b"
  },
  {
    "url": "assets/js/152.bfe577b5.js",
    "revision": "3fc4490ee99e9cff37cae087ddb9ecfd"
  },
  {
    "url": "assets/js/153.aa001bb5.js",
    "revision": "72e97c5a011e97bf38e8f3e4519baf11"
  },
  {
    "url": "assets/js/154.6d585c92.js",
    "revision": "53a1c8b462bb92c6ac099afe4409f95e"
  },
  {
    "url": "assets/js/155.71d25b7f.js",
    "revision": "29e0be1f2c46b9512fe3df2fbd5b63d7"
  },
  {
    "url": "assets/js/156.297094d0.js",
    "revision": "36ef7138bf76e524021614ec48467a1c"
  },
  {
    "url": "assets/js/157.03ef2d4a.js",
    "revision": "ce5336564dfc6af79ceab9ed62b48706"
  },
  {
    "url": "assets/js/158.4860a2e8.js",
    "revision": "e4f89c148560dff8e5a7386bf96f7997"
  },
  {
    "url": "assets/js/159.1a4834dc.js",
    "revision": "7595aa7208c4133cfe228fb64c25f29b"
  },
  {
    "url": "assets/js/16.820c6294.js",
    "revision": "43fd7bf969ee826256a2d4746df4dbd9"
  },
  {
    "url": "assets/js/160.82729aa5.js",
    "revision": "12b426dfd97ad3e4c66a518f0f088aae"
  },
  {
    "url": "assets/js/161.138ae8cb.js",
    "revision": "09d66a6a3b20182fa2b20c561a087ee1"
  },
  {
    "url": "assets/js/162.1049883a.js",
    "revision": "c574bf1814f9650f589c6ac845ea9e6d"
  },
  {
    "url": "assets/js/163.86d7a391.js",
    "revision": "353140093659fc7d7629f4af12312f53"
  },
  {
    "url": "assets/js/164.95f9af62.js",
    "revision": "3fb7a63a594fc306c1cf4934837a4c6a"
  },
  {
    "url": "assets/js/165.a1266973.js",
    "revision": "0a7db1a2d77f53286ad83e4acb1ae93f"
  },
  {
    "url": "assets/js/166.c662602d.js",
    "revision": "e55c966369d783628c30432e6d0563b1"
  },
  {
    "url": "assets/js/167.0856b735.js",
    "revision": "6497c0047e96b3eadfd02ddbdbff946c"
  },
  {
    "url": "assets/js/168.11a005d2.js",
    "revision": "68be8295ae307e4e7399897f191d72f7"
  },
  {
    "url": "assets/js/169.95a8e227.js",
    "revision": "162163ed2403cfd568c749057e57b7dd"
  },
  {
    "url": "assets/js/17.4f9c2ebb.js",
    "revision": "99eb957f1048a18753ea52bc4f7d6188"
  },
  {
    "url": "assets/js/170.56c9a7a2.js",
    "revision": "549c4ad2055d16559f9ebf8aa6beb7a4"
  },
  {
    "url": "assets/js/171.e25bae9a.js",
    "revision": "89fdecca3fdc3ca4df8ed96968b097d8"
  },
  {
    "url": "assets/js/172.2ba5bad0.js",
    "revision": "f5e0ea4c1ac4b0e597e51df07f94a623"
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
    "url": "assets/js/175.f69a2e9a.js",
    "revision": "5c1d6262e905e3ea1b82fdc138093af1"
  },
  {
    "url": "assets/js/176.61f42080.js",
    "revision": "56d560f68251da17e50506ac376d994a"
  },
  {
    "url": "assets/js/177.67d54f20.js",
    "revision": "98322eb4b30d7f7170adc321b8b5e686"
  },
  {
    "url": "assets/js/178.54d9a775.js",
    "revision": "63f3d3d31b2f0b44c4ed821d6e5c9387"
  },
  {
    "url": "assets/js/179.6772b5ce.js",
    "revision": "3b92faddf94af049ff4b1621a84819f8"
  },
  {
    "url": "assets/js/18.3065156e.js",
    "revision": "aec7be00f0de77d9ee57005d1eb163f2"
  },
  {
    "url": "assets/js/180.aac94a11.js",
    "revision": "fe064239de1ab9eef51951705c0d646f"
  },
  {
    "url": "assets/js/181.dcd743b5.js",
    "revision": "45432f23939914382b57d43f10b393d8"
  },
  {
    "url": "assets/js/182.967caa61.js",
    "revision": "5f586d642359bb6937495a2b51496f44"
  },
  {
    "url": "assets/js/183.627a1ba1.js",
    "revision": "f9f6c2a6efa76747052c133146fffbb5"
  },
  {
    "url": "assets/js/184.d83ffec8.js",
    "revision": "1f7c20a08d62178035f60b4dc95a8f9b"
  },
  {
    "url": "assets/js/185.8e874499.js",
    "revision": "e1d2f79d76339901135719587c9588e2"
  },
  {
    "url": "assets/js/186.1e2c5c3e.js",
    "revision": "c933e6a39c33a5a6de41b81e7916abaa"
  },
  {
    "url": "assets/js/187.d33df96d.js",
    "revision": "1cac0c142617f13e5eeda791657c0948"
  },
  {
    "url": "assets/js/188.53ebbdac.js",
    "revision": "e8e9ac8b64f6c4f91cc136ac15696089"
  },
  {
    "url": "assets/js/189.f90c9b35.js",
    "revision": "8af029cdc97566316c19fe4e15403e41"
  },
  {
    "url": "assets/js/19.c7e49649.js",
    "revision": "adc3b14457226565fdffbb52d96b4264"
  },
  {
    "url": "assets/js/190.d39878ce.js",
    "revision": "c49bb1725bd1dddeb0f1177017eafbdf"
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
    "url": "assets/js/194.01339bba.js",
    "revision": "d62e64d4ed509dffaf1c12dd00514bc0"
  },
  {
    "url": "assets/js/195.6ec0ad4d.js",
    "revision": "b524f9746b850071226e08fe605dff37"
  },
  {
    "url": "assets/js/196.1f27be65.js",
    "revision": "d9f37aa44238e5e8af1a4e0a5f5e3478"
  },
  {
    "url": "assets/js/197.c44e8838.js",
    "revision": "e68e52832a0af90545c50661d31ad5e7"
  },
  {
    "url": "assets/js/198.f8033008.js",
    "revision": "48e46e75b3b5a21b3a483ff42ed77fb0"
  },
  {
    "url": "assets/js/199.7995e565.js",
    "revision": "fd3944a528ce2bec5c73e879e8ae53a6"
  },
  {
    "url": "assets/js/20.b3313845.js",
    "revision": "640621fecdea0243df19be0e02d8c7c2"
  },
  {
    "url": "assets/js/200.6ff9e5f8.js",
    "revision": "c08519fafd16e66dfeb85ae636715fc2"
  },
  {
    "url": "assets/js/201.cbe65520.js",
    "revision": "6618015147ba53a2eb950081d85250bb"
  },
  {
    "url": "assets/js/202.e6a1c80a.js",
    "revision": "6464421e51edcc537c08737369401eef"
  },
  {
    "url": "assets/js/203.32bc27bf.js",
    "revision": "afeb69c953dcfb1bd664ce30586e5cb8"
  },
  {
    "url": "assets/js/204.d13e1bec.js",
    "revision": "2e98e20d1edb9f14ef84a5e03e1f9e8d"
  },
  {
    "url": "assets/js/205.1d022900.js",
    "revision": "9ad4985fde5ac94cdb7aa8f99465e9eb"
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
    "url": "assets/js/22.4400d60b.js",
    "revision": "fc29611922f81838ab336ab7c1229fa4"
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
    "url": "assets/js/3.f7da621b.js",
    "revision": "ce08bc0efa68b5f44025494807c22db5"
  },
  {
    "url": "assets/js/30.ce236118.js",
    "revision": "db2fa0f68644c256ab4000d648e39ab2"
  },
  {
    "url": "assets/js/31.031b5429.js",
    "revision": "30bbb9b0431230d0f7a31f10f28afa78"
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
    "url": "assets/js/36.72d9c747.js",
    "revision": "c3564eea95127763c66315e553c19266"
  },
  {
    "url": "assets/js/37.f5490ec2.js",
    "revision": "8edc5d9910633d2218954fac7d5f9cef"
  },
  {
    "url": "assets/js/38.d9222942.js",
    "revision": "b84b5c9e0fab5fdfda6de0e7aac6e3cd"
  },
  {
    "url": "assets/js/39.7ef28792.js",
    "revision": "a82f80295c543404cfb1108f0fee99b2"
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
    "url": "assets/js/43.78af645d.js",
    "revision": "19ba49534222b5703e03c4236cc369d0"
  },
  {
    "url": "assets/js/44.cedd5030.js",
    "revision": "5781367600965a5536e9da69e925f02e"
  },
  {
    "url": "assets/js/45.873e5a01.js",
    "revision": "e31c9429f8183e170a33468c51b69b23"
  },
  {
    "url": "assets/js/46.8db358a0.js",
    "revision": "ffdbf45c6cf735ddab38b607d9d6c10f"
  },
  {
    "url": "assets/js/47.cef80299.js",
    "revision": "eef2bff4b1087df1a987a311e504f437"
  },
  {
    "url": "assets/js/48.e4809d40.js",
    "revision": "6cefd3ebd780f04c7ff84a3eedc3a37c"
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
    "url": "assets/js/52.ead00c9d.js",
    "revision": "3ac6062a4845aacdb8ace9dd98049088"
  },
  {
    "url": "assets/js/53.32495df7.js",
    "revision": "4525faaac4934e47cbed43e3e068c3c2"
  },
  {
    "url": "assets/js/54.e791dc00.js",
    "revision": "8f2fb70f97f9bfabaecd31f8e9c9882e"
  },
  {
    "url": "assets/js/55.5623d57f.js",
    "revision": "fcfc110e42fda573876320294dec9f77"
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
    "url": "assets/js/59.0d5f5d37.js",
    "revision": "0f136840887356b02349a9557682fc99"
  },
  {
    "url": "assets/js/6.89223d8f.js",
    "revision": "b5af6e7f293feecff774f087af6d452e"
  },
  {
    "url": "assets/js/60.b65e7e21.js",
    "revision": "00cb29ad3ab932b392b43f9f2fe46c09"
  },
  {
    "url": "assets/js/61.8d26c15f.js",
    "revision": "ba305aad14aeaf404a162faccc4f65f2"
  },
  {
    "url": "assets/js/62.28fe147c.js",
    "revision": "aaca366c9f6327bda52c91c3027e63b4"
  },
  {
    "url": "assets/js/63.1203937e.js",
    "revision": "e48cc26524c20f01ec88a7ca138b1f65"
  },
  {
    "url": "assets/js/64.227cf6f3.js",
    "revision": "1f881290d84644da1cefe25f196d5f09"
  },
  {
    "url": "assets/js/65.042735f0.js",
    "revision": "545ba01181cb007145f6f04a88457518"
  },
  {
    "url": "assets/js/66.bc7fd5cc.js",
    "revision": "00e6a00c3ce6a093b7bb384f0891c4af"
  },
  {
    "url": "assets/js/67.a1c41de8.js",
    "revision": "be40d06ffef70bcd2c1f9cc1bed798c1"
  },
  {
    "url": "assets/js/68.e39dcdb9.js",
    "revision": "65d0dfc809755d3df3c4c79b007a4bc1"
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
    "url": "assets/js/70.043258fa.js",
    "revision": "73a8fe6a21d1e239c1734af4d1f8233f"
  },
  {
    "url": "assets/js/71.3db2a518.js",
    "revision": "6657c166f456e9b383c24558df882617"
  },
  {
    "url": "assets/js/72.81e51c1f.js",
    "revision": "6b91a9b420e91cf6ad49cef74bf20685"
  },
  {
    "url": "assets/js/73.905057d1.js",
    "revision": "1af1224c9f2d533caf720c3d364a9933"
  },
  {
    "url": "assets/js/74.24b54981.js",
    "revision": "1928db69cd1fe0fbc3df0719b5eb50ad"
  },
  {
    "url": "assets/js/75.5b11e000.js",
    "revision": "943008d0070c36e33436dfe1837edcfb"
  },
  {
    "url": "assets/js/76.ef95f117.js",
    "revision": "8accf89f084b3fa94b2c77a0327c3ca2"
  },
  {
    "url": "assets/js/77.710595ab.js",
    "revision": "1b4a1dc8791c7e6b10d484c0113e38ff"
  },
  {
    "url": "assets/js/78.39de5656.js",
    "revision": "ca46e56a6030a6970ce9d1f5b073d042"
  },
  {
    "url": "assets/js/79.5287dad1.js",
    "revision": "2ab8e362f2a1130a1f591f8f2204a45e"
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
    "url": "assets/js/81.f812fb0f.js",
    "revision": "29e1c6cce9821edd76e717aecca8f627"
  },
  {
    "url": "assets/js/82.a9291b8d.js",
    "revision": "80a5191f905cf724e8df5b94f5ffa0dc"
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
    "url": "assets/js/86.1cba26cf.js",
    "revision": "612f623dac28a13d61268d88eb88f93e"
  },
  {
    "url": "assets/js/87.4cfcd0e7.js",
    "revision": "e25bf4a9d264ad5301000783170999f8"
  },
  {
    "url": "assets/js/88.bf516199.js",
    "revision": "39db7716d0dd85dd2f3ec48166db576e"
  },
  {
    "url": "assets/js/89.48bace6f.js",
    "revision": "8f6c2d2a677a0cc7fb855f5dbca74a26"
  },
  {
    "url": "assets/js/9.00b9eeb0.js",
    "revision": "e52b6f5f4e2e7356b6a273dda465e446"
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
    "url": "assets/js/92.4310db12.js",
    "revision": "52d771968ecd780f0fcddb2ae9d0e81b"
  },
  {
    "url": "assets/js/93.dee355ce.js",
    "revision": "f4899c14551b1e5fe8788ba01ac38bef"
  },
  {
    "url": "assets/js/94.291e93a4.js",
    "revision": "144755efa4a49b345ab6e1c99c9e5aab"
  },
  {
    "url": "assets/js/95.7c238cb3.js",
    "revision": "c2be796c6da98772821f348fe8d1522e"
  },
  {
    "url": "assets/js/96.5a5e8145.js",
    "revision": "473bafb8809d72b31e6451718ac28217"
  },
  {
    "url": "assets/js/97.cdb9fd0b.js",
    "revision": "de968b6498f8d9c67b9935fd200a5351"
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
    "url": "assets/js/app.439a8854.js",
    "revision": "c35219c1fe923d6b8ae36b59d9372486"
  },
  {
    "url": "backend/database/index.html",
    "revision": "5be039351d274bdd2c8b06adfd33bcc4"
  },
  {
    "url": "backend/node/index.html",
    "revision": "cd8ec02d8a1a8f2c8c15241e07efbbe0"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "44ac34acb387303a8a7e3456f104d5b9"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "ac907dcd7b2e16f9e268928269bc89d5"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "2a120b9d9efa281b3054c9493538e907"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "79c34d1b02ff60a591a21fa4964daa05"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "14c710ead9f3e5b233f577ba2f8d140a"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "913ab38d19675cad2b210e361b7e3ef1"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "49ede0f90ded35959d0380ec14f653d1"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "a32b9b29687975e8f1b061566384505d"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "a7acf5c5d768984307ebd79ec2f5a216"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "965dbfbff5704e501a7a0b7d23dfdefe"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "5c92526b4f7b55f32a5104d20e41712c"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "68fd77a106a9dc8b1b7fc732661e177e"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "d0a1ed22cfa912d50d821849d9841c46"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "c45dc01d33f6a77f30352637635e804e"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "b055c8cfd090ce16c87e50b3da5063dd"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "8730d79295d2c44bf81a5f488b8cf816"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "3aef4a0c8a6581108dcaa02714c789f3"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "b21b4fb0b29b9a1e9a566608451a70e4"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "25543b6b4728facdedbec79c07c18310"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "d4d9e3168356d67adacabd9c3e29bcc6"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "5f217a7a22035e6beb17364dfa5e3557"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "a730d90a85d365a7aebe4a799dece9dc"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "717df54dd47076756a64b0aaa0df6152"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "f98708c2a7a86a1a19fd9437384c58b8"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "2a5fc5a6a914ed13275b20b6854cd15c"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "327e6c453cf6c6d7f0b81de347c9a781"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "8519f4f3424adb0a017b50bb53537b32"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "8e2940dc826e6fc6519fcb42cf3dfbbd"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "7403c86dfbffdc4b0cae5fa2903eccd1"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "ea1bd8d40fcf93395ae752a3f2563b37"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "ffc08ae32f8a8d04f4d33351f447ff90"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "058e05b04ca23a31500aa2821d3115b9"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "16020b516b4fd4722d74533396155134"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "0e2fdaca1441b57ba7d9872febff93aa"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "bf4cc4370d1e1328481276872d160323"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "a2c3f24e6680d1fbb23e06a0464ccf39"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "6daae475c1913ae5332fa2197dd80908"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "c7eed16bd3650fe994655fa25e7b299c"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "8f6564115735c15da08c5a63f01ededb"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "6948c8a8df17d696ef5a706c8b6bada2"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "99b35481b5c296f6ba40919515d4a712"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "21ac766946b765b3fded034e1c6c0b86"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "ca81c3cf2b4c0a30a570cb8f417fb3e2"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "01d1610e230143b022a450fc0a0c0bbb"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "4d96d74970e711b84846f8861c8ea1af"
  },
  {
    "url": "books/computer/index.html",
    "revision": "2ee004d5e95e7761792a07efe69c4941"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "9dc36d30e1f49444548c700e324ae0e7"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "e5fcc9906e3920cd2dbf430fe510cf25"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "ee57f1c03606d359a3f7071cd0982394"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "948a0f391f0b462ef04004a723ae2997"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "9b7a59e031c8050bc942b4a43e0eaa16"
  },
  {
    "url": "books/skill/index.html",
    "revision": "1088f84a406190ae3151f471ac4e077e"
  },
  {
    "url": "categories/index.html",
    "revision": "b688a6bfeb688b9e45133a74fe13c53b"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "bbc08acc6ea1d585768835943b471f40"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "d0109492156582d5221c93d71fd9b624"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "97066f814d0f9849514348f401bdc039"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "48cbc5dbef7260fd046d10d6b998092e"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "ecf5cfe4788d1b19be0907e6d789836a"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "ef7e0586254ef89629acd19d349e7049"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "552af5844936bf96685c6062055216f0"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "c1f09aeda96be15f4bab8dec6307ebe3"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "2718c9c9163047cdab68a4cd659af112"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "0143959f42d24d962c129bad97294d70"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "335b9b2bd7bc991a5faf1f38062baf13"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "659bfe7814dea689f568e3280d5f0bc6"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "2a9956c7d31fcca5c2b3fb2fea4466fb"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "ff06951a3542a3c5a773039b2ee52312"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "39e9f7446035c9561db92bfb27834c73"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "aed672c5bef976aa533932895923ddcf"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "3846a813dcee2be0daaf4575f5c0e6a2"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "7978b50d11e582d67018493d9cfa7683"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "7e0cda740466f378cdfbdf0dc290c887"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "29d29330078fdf865a71a12a99b4f003"
  },
  {
    "url": "front/base/array.html",
    "revision": "b6a9df9fe3522db69d9f82fdc431dccd"
  },
  {
    "url": "front/base/async.html",
    "revision": "62397fcea04eb0c0bf435404b4a2e792"
  },
  {
    "url": "front/base/bom.html",
    "revision": "8be2145132179cb1ea8f2f88468262a2"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "fba0b1a6ee8cc66d8645e62ba562ce44"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "f65bb9c99c0435603a65d37249e98d33"
  },
  {
    "url": "front/base/class.html",
    "revision": "f06100b2ca4fc84cdf3a877cb17f95c2"
  },
  {
    "url": "front/base/cors.html",
    "revision": "e64416913c2e7fa503026b79ad64342c"
  },
  {
    "url": "front/base/date.html",
    "revision": "f8bee5814b840b9609771b4c368363e5"
  },
  {
    "url": "front/base/dom.html",
    "revision": "c607e1bd4fa15a385e665437fe469444"
  },
  {
    "url": "front/base/event.html",
    "revision": "14be62a2a4e4cda777ad515476b47f37"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "7a805848015b36209b21a642beda6b25"
  },
  {
    "url": "front/base/function.html",
    "revision": "d423625e53b4409af3cef1b6bc93c9d8"
  },
  {
    "url": "front/base/generator.html",
    "revision": "3d491020838b241f931141a3a76a0240"
  },
  {
    "url": "front/base/history.html",
    "revision": "ecedbf8a9783c2023b4e1037ccf3832d"
  },
  {
    "url": "front/base/index.html",
    "revision": "e4874b73ff2d7f096b0b28b4744fb235"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "b95f2e50bb6f1ded31ccad2980c31fa8"
  },
  {
    "url": "front/base/json.html",
    "revision": "afff1314261b7a07cc6306d265ad326e"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "5439597f10d970c7ea0c4dd0ea99157b"
  },
  {
    "url": "front/base/map.html",
    "revision": "621417f564764c10b5ceb7202cf157ce"
  },
  {
    "url": "front/base/math.html",
    "revision": "18436fc0c5d983dcd8147ee43323ac04"
  },
  {
    "url": "front/base/module.html",
    "revision": "3690bd0c44c10e2767adb9df857de874"
  },
  {
    "url": "front/base/number.html",
    "revision": "2f0f1265214bae7908950d614292ba07"
  },
  {
    "url": "front/base/object.html",
    "revision": "e9b11e054c5c97c2f1876586bfcea9c0"
  },
  {
    "url": "front/base/promise.html",
    "revision": "23ae6630eb5e6c1e6a5cc617c832a378"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "01aac94a512c2b762aa42843741ba643"
  },
  {
    "url": "front/base/reg.html",
    "revision": "5a5b74ca85dcfa986b1bc300ae7265b3"
  },
  {
    "url": "front/base/set.html",
    "revision": "ea78038a9ef32c704177172aacf9c090"
  },
  {
    "url": "front/base/storage.html",
    "revision": "d840f9151e017fa1cb7f4a24dec03ec5"
  },
  {
    "url": "front/base/string.html",
    "revision": "a0c4f417524dab22ea3fef8c5a577424"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "bc3f06e9aad48de40ba403dcafd2bbd8"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "59afdc742a758e31277ea4dfe4af9b6a"
  },
  {
    "url": "front/base/var.html",
    "revision": "5fa0ca55281a9cb8fcb0c0cf0f847e8e"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "75fb3c3f6b2c97696344a985766d6c62"
  },
  {
    "url": "front/base/worker.html",
    "revision": "1ce9b30b0b1a187384487098174ed7b2"
  },
  {
    "url": "front/css/animation.html",
    "revision": "d19124c7ffde688bc4becee185204082"
  },
  {
    "url": "front/css/box.html",
    "revision": "5a33b3a31d8fa4544a794a92ee0f56cf"
  },
  {
    "url": "front/css/effects.html",
    "revision": "235c280b1b5dd7cf835b5acebf8eb056"
  },
  {
    "url": "front/css/form.html",
    "revision": "7bdf9d132ceebeacebc4d749309f2e1f"
  },
  {
    "url": "front/css/grid.html",
    "revision": "249b34383fb9f2606beb811df249cbb1"
  },
  {
    "url": "front/css/index.html",
    "revision": "3482bb10b1082872dfe180313c68f225"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "a21e420e7cfcf0f1aeadca9d0941c4d4"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "6ea6460e18d6dad5232bcf4e387fe7ab"
  },
  {
    "url": "front/css/selector.html",
    "revision": "0d79b41649ecc177aba948261a422fcb"
  },
  {
    "url": "front/css/special.html",
    "revision": "8c74859cd39c392d38e1f055ce35fbae"
  },
  {
    "url": "front/css/svg.html",
    "revision": "033e467a86a1ae1b7895d26fe8560ca9"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "59e2013306ba3b3d67fe4ffb1ac9401e"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "70087c03a2d680870c59867257d1e6fd"
  },
  {
    "url": "front/css/text.html",
    "revision": "071273885ec25933d34c9dbd6c1cea8f"
  },
  {
    "url": "front/css/transform.html",
    "revision": "41bc8457d6cc0a0d4625115b42fb3fe1"
  },
  {
    "url": "front/css/transition.html",
    "revision": "ac77c2197e89def9375b5ec5f9d05e97"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "3e04f5fa933c07795bd54543d2825bab"
  },
  {
    "url": "front/interview/css.html",
    "revision": "abab38bba61be494d37c913fa55d76a0"
  },
  {
    "url": "front/interview/index.html",
    "revision": "ef081ab7f01f4ca02be34027bdac64bf"
  },
  {
    "url": "front/interview/js.html",
    "revision": "5183b1827afb96807a8e37b4feaff61f"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "84008c0d9f8ef8f0d32113705c515580"
  },
  {
    "url": "front/interview/project.html",
    "revision": "722657726c030d75986f7f884ebe0c84"
  },
  {
    "url": "front/ios/array.html",
    "revision": "5fda437ec9170104f1e07d8538f3d2e9"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "3b6e62ee6ba9f88ee8866ec20e7a06ad"
  },
  {
    "url": "front/ios/base.html",
    "revision": "bed27979b3df4faa225a1216628b9a7a"
  },
  {
    "url": "front/ios/class.html",
    "revision": "0f1da996ed0e7272f391e18528a2967b"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "3a13b3081436628e2665f84394952948"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "2c4db8a4f5692cf372f9a8d1ab9e09fc"
  },
  {
    "url": "front/ios/func.html",
    "revision": "83de26a5298eee318255835341ce58d9"
  },
  {
    "url": "front/ios/index.html",
    "revision": "22a50d42b1172340537710cdd3002d96"
  },
  {
    "url": "front/ios/number.html",
    "revision": "a62c08b4a2b340a04749e1d0cebeff6a"
  },
  {
    "url": "front/ios/set.html",
    "revision": "8f0f1c60f46847337999edbf76794ac4"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "5060ea8bcf22bb747a69d8eb8e8ea3df"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "a7cf55a8dee52a7d113355bc1e01fd07"
  },
  {
    "url": "front/ios/string.html",
    "revision": "e4b89d45a503ae84276e209e107fcac3"
  },
  {
    "url": "front/react/cli.html",
    "revision": "e9ae547773f76c311dd2ce3f0228b622"
  },
  {
    "url": "front/react/context.html",
    "revision": "802c7dc1155024433b02403f74e5f27c"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "d7fef1403b7c41a32b5cd891bee011ba"
  },
  {
    "url": "front/react/important.html",
    "revision": "f0231e47e8f7afdee6fb3a365d22f024"
  },
  {
    "url": "front/react/index.html",
    "revision": "a656ac5c05c10286075b07d709dea54f"
  },
  {
    "url": "front/react/react18.html",
    "revision": "8362319315edf2b5969e3cd83637601a"
  },
  {
    "url": "front/react/redux.html",
    "revision": "b15d3cbc316f3ce429f03d9300c4cfde"
  },
  {
    "url": "front/react/router.html",
    "revision": "763e18a440f45e00bc063788fa276c10"
  },
  {
    "url": "front/react/scope.html",
    "revision": "6e039b84310efb80aa4c9906667e9f52"
  },
  {
    "url": "front/react/test.html",
    "revision": "c9d3bab0c47b0ebe5ce5aa27fe14d618"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "f18f9896baaa55ba6d3987e5d5bbf8c7"
  },
  {
    "url": "front/technique/index.html",
    "revision": "af438b04dac4a3654e252c09ba52bb0d"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "f2ddd77c842bf811107cc2aeccb97559"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "a8a89e71a410f7e4bb3c73b4133ed9d6"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "283d6971ec64f50b955d705fe93550a3"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "db89748e53743c7c8cafacaa2a621662"
  },
  {
    "url": "front/test/index.html",
    "revision": "b6e13514570c974e842f396171cd0607"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "2e1ae3d38a8b3975cfd64ac1607153ae"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "a39a9d4028b0c99f9426f09be94f5eaa"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "942f3d7ea2ab749357b8526c15b0c9e9"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "783429b43777b929ba01173116b202f4"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "3e97e640e2ef860e2c4113f31f30511e"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "2f0065d4bd2bd8beb8798cdefdf22748"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "862d091e0f4237e365a23496bd978840"
  },
  {
    "url": "index.html",
    "revision": "aa944219a106477dcd317c77f6739e12"
  },
  {
    "url": "skill/git/action.html",
    "revision": "539cf3232e78eeaa3341c6b038d7778e"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "2741599a68d692613054f4725969b56c"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "f5bdbe659176c96db1185cfc87034c59"
  },
  {
    "url": "skill/git/index.html",
    "revision": "762850f01da0e05f864705c65eb8bfd2"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "4b3cd27f08f388c8bdb5d76fa1604add"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "8b51e9d68b70d8eaaacbd495ad2cf4ac"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "df6ab7a7ba90b81b70c349528d2291aa"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "6df8710116351ace789d580189cfd0f4"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "8ab2eb500ac03119b8722bb660b28d46"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "eefbabf0f929d614969a4b4710131f1b"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "6236cad769a904b1a481d52a8b96745e"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "c464a09658357c3b0f0d99c08dad24b8"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "79cd3090af9e5b9ee2237b90a54b0eaf"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "24d4ed8516eac3299c76b3a8296de6cd"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "1d6b77aaee8f4bee329b2c515997cf20"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "705bb076c6672d9a145c500fb791ee66"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "c3a85bc27d664e119154f54482ef333c"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "fa0ff35ed482efa465b6896f9a7fea53"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "80b4262759e97352616c776e20bc0ff3"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "77760af321d34447c196ac47c923b5fb"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "ce9b4a201f73bdf4a9780032b24421fa"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "53e8a89d880f67be21e275619b115e98"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "471164b9ed8c249de76a8f7315176da5"
  },
  {
    "url": "tag/index.html",
    "revision": "99311151404cf85e6a3504dc11708109"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fc3a6a9252645670b7628c1a88c52d63"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "33dc31396990be2289018b45c521deaf"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "3796f79284121a82dc65178de52911e0"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "c086ee4df85412f6b4c6945da10e1866"
  },
  {
    "url": "timeline/index.html",
    "revision": "0168b5d8f74c1491f4b0acda65e1599c"
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
