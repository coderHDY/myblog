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
    "revision": "6aa50b647507e6f1ca309b53369235f8"
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
    "url": "assets/js/100.7df482d6.js",
    "revision": "3bd1aefb9876a37bdfa993fc2f503742"
  },
  {
    "url": "assets/js/101.e80b30c6.js",
    "revision": "cfd631d8c7ffcdc6c6cb755b20db1c61"
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
    "url": "assets/js/109.083b7a80.js",
    "revision": "41577bc76beab55b6a04e3ffe9876509"
  },
  {
    "url": "assets/js/11.c2210223.js",
    "revision": "b4cee53325de7697d5f831503eb40665"
  },
  {
    "url": "assets/js/110.abe5b0a0.js",
    "revision": "502c8b531f0f9659230af91cc888a8b1"
  },
  {
    "url": "assets/js/111.1128cbb3.js",
    "revision": "97049742d3901dc1f62fc4349018627e"
  },
  {
    "url": "assets/js/112.37b49c07.js",
    "revision": "eaaf420f68a99f8d1f0303ebc18db0fa"
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
    "url": "assets/js/118.55fde4eb.js",
    "revision": "f7a6db6d665b6542406dfad6f1ee6047"
  },
  {
    "url": "assets/js/119.532fdee5.js",
    "revision": "22f900a906e542061da5df443ed310f1"
  },
  {
    "url": "assets/js/12.158eb473.js",
    "revision": "8794195c69a63da9b7b516151fa4b874"
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
    "url": "assets/js/126.e3adb29e.js",
    "revision": "55d100be103e7cf6311fc17dde9fcaaa"
  },
  {
    "url": "assets/js/127.ea188356.js",
    "revision": "a907f8f3860cddaf5c6e06305e597508"
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
    "url": "assets/js/134.3d14d4f6.js",
    "revision": "e18d0056334827260de0ed7462d3d111"
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
    "url": "assets/js/139.9d8a5e76.js",
    "revision": "b5996129c2ddfbc03e9c0a4235119613"
  },
  {
    "url": "assets/js/14.b8a65e08.js",
    "revision": "27a4c1a9547cf7ef780316095d7fbf3b"
  },
  {
    "url": "assets/js/140.d7e292c0.js",
    "revision": "144f83e9dfdf28bfc2d48f78e5db3f7c"
  },
  {
    "url": "assets/js/141.d027c6a6.js",
    "revision": "ffa506b08083ded43c436ff7b944bc84"
  },
  {
    "url": "assets/js/142.a57c86a7.js",
    "revision": "4d3459abc3b1d3419f937999a395f264"
  },
  {
    "url": "assets/js/143.44b3aa1a.js",
    "revision": "0f5d0447e1e0bda776b841412613f9c6"
  },
  {
    "url": "assets/js/144.03042222.js",
    "revision": "c3c22a2dad8a344169a23065913d207c"
  },
  {
    "url": "assets/js/145.b3b96823.js",
    "revision": "71a62d3c8f13b7fdf7bc9835185f09fe"
  },
  {
    "url": "assets/js/146.f452b020.js",
    "revision": "33dc9cd0161e1b72d5c015a7caf53a76"
  },
  {
    "url": "assets/js/147.33577f9e.js",
    "revision": "5446a2fb04be177bf95509447d089dd4"
  },
  {
    "url": "assets/js/148.d670e1d9.js",
    "revision": "44f96e4a022a9c8979d57855648d8e7a"
  },
  {
    "url": "assets/js/149.fabc2964.js",
    "revision": "f1d726f2304f43d3fbf10e59492f70ac"
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
    "url": "assets/js/152.952ab1fe.js",
    "revision": "2ef5d44cd8665498ed3c339325555b1f"
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
    "url": "assets/js/155.205010b5.js",
    "revision": "f40cd97aa6bf2eca82db2af8efd8c430"
  },
  {
    "url": "assets/js/156.e609b371.js",
    "revision": "d244a0f202ccf22b973acce726964e86"
  },
  {
    "url": "assets/js/157.194d4627.js",
    "revision": "4944399c47813653ff336da3bc217a11"
  },
  {
    "url": "assets/js/158.904682e8.js",
    "revision": "a4f3150259561bb0d83874cdd1f8fc12"
  },
  {
    "url": "assets/js/159.bbf0a17d.js",
    "revision": "c3872dac1c02c70491bd03742f125f24"
  },
  {
    "url": "assets/js/16.d91fa7cd.js",
    "revision": "18ce9e485d35537f7bc51725580e610a"
  },
  {
    "url": "assets/js/160.b0bf4904.js",
    "revision": "de8b4a373528a697b2be6d7751442f41"
  },
  {
    "url": "assets/js/161.10842fc7.js",
    "revision": "f9bcb5e9cc090fbf1a50fd023c513a85"
  },
  {
    "url": "assets/js/162.3dc80a13.js",
    "revision": "180c51f619e6b6a2421df1d8445564de"
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
    "url": "assets/js/165.11f44cff.js",
    "revision": "42938d2c40609ff08e9f4d078a123af4"
  },
  {
    "url": "assets/js/166.a659f0e1.js",
    "revision": "fc6eb256f1dbf619b68b18616cdc762a"
  },
  {
    "url": "assets/js/167.0856b735.js",
    "revision": "6497c0047e96b3eadfd02ddbdbff946c"
  },
  {
    "url": "assets/js/168.fd5cab0b.js",
    "revision": "1c61f232e14f2bc7876e7cadd4ad67ef"
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
    "url": "assets/js/171.f394c17e.js",
    "revision": "7e1049fe57c5e93942cc4901d786ad90"
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
    "url": "assets/js/177.f124afc6.js",
    "revision": "6a1cf84185532243d264d01929697fa7"
  },
  {
    "url": "assets/js/178.54d9a775.js",
    "revision": "63f3d3d31b2f0b44c4ed821d6e5c9387"
  },
  {
    "url": "assets/js/179.28194738.js",
    "revision": "860a6dadf5012bbba928dfc6e2c3072b"
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
    "url": "assets/js/181.c6f270ce.js",
    "revision": "0a09fb684077166feb22dbfc036ca7f5"
  },
  {
    "url": "assets/js/182.967caa61.js",
    "revision": "5f586d642359bb6937495a2b51496f44"
  },
  {
    "url": "assets/js/183.5123ff06.js",
    "revision": "eef676e80318225d0070b0d04ee4142b"
  },
  {
    "url": "assets/js/184.8fddb38d.js",
    "revision": "ddac5bdfcd052a85abff66fdb55aacb6"
  },
  {
    "url": "assets/js/185.8e874499.js",
    "revision": "e1d2f79d76339901135719587c9588e2"
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
    "url": "assets/js/188.120c969d.js",
    "revision": "4a2b779540ca7e512f07e1b51675cf51"
  },
  {
    "url": "assets/js/189.5a3eba22.js",
    "revision": "d8ba54a217d750be18c3ae11c72843eb"
  },
  {
    "url": "assets/js/19.668ed856.js",
    "revision": "4ce5eb5678dabc14d3688420086d4af4"
  },
  {
    "url": "assets/js/190.6e23008c.js",
    "revision": "7d9a2276f6fae675c7d090bc4e9e0003"
  },
  {
    "url": "assets/js/191.78268397.js",
    "revision": "6a88b33f0c37820786fbe2f0fc24cce6"
  },
  {
    "url": "assets/js/192.613cdec9.js",
    "revision": "4459ab2a1230eac2a4416b16a2bce595"
  },
  {
    "url": "assets/js/193.4ce5330e.js",
    "revision": "cbb03b86916051c3c600b6c31c403a1b"
  },
  {
    "url": "assets/js/194.55e3c9cc.js",
    "revision": "6141f9c3221ea5c2b772329a10bf98e6"
  },
  {
    "url": "assets/js/195.b84529d1.js",
    "revision": "f64cb8a361379b2ef95fe7aeb669cdfe"
  },
  {
    "url": "assets/js/196.6914f3a8.js",
    "revision": "002ea97a572e2c33dcf67b4046f1a3fe"
  },
  {
    "url": "assets/js/197.009968e2.js",
    "revision": "42655c961dd526b65c5d8b103aacf092"
  },
  {
    "url": "assets/js/198.147954ee.js",
    "revision": "6e9d22833458585a2ea3276f5bbcf182"
  },
  {
    "url": "assets/js/199.8f9ec5bc.js",
    "revision": "9998bf04ad91d0b133d9362f0aad62bb"
  },
  {
    "url": "assets/js/20.b3313845.js",
    "revision": "640621fecdea0243df19be0e02d8c7c2"
  },
  {
    "url": "assets/js/200.abe427a6.js",
    "revision": "68b8edef25ba7c4ecaaa430c9ce54423"
  },
  {
    "url": "assets/js/201.b5151892.js",
    "revision": "1039ce58ee3bb9e8f9049ebf1589e3e5"
  },
  {
    "url": "assets/js/202.66c44abb.js",
    "revision": "018160ee38ce8ca128e414252194304a"
  },
  {
    "url": "assets/js/203.68c4c199.js",
    "revision": "79e3bc879c28e088e8f1005dc738ed51"
  },
  {
    "url": "assets/js/204.d13e1bec.js",
    "revision": "2e98e20d1edb9f14ef84a5e03e1f9e8d"
  },
  {
    "url": "assets/js/205.d6651195.js",
    "revision": "cad5662b71f5695ccbf1f64c6e7ac99b"
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
    "url": "assets/js/22.14663d6e.js",
    "revision": "ccf81f2ceb29b618cddd96249ad84ca8"
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
    "url": "assets/js/3.96f0f7f8.js",
    "revision": "9472f86383f271f35c596bfed2130370"
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
    "url": "assets/js/35.e9b027eb.js",
    "revision": "7f8cd908a6ce35a893097849fd256ad5"
  },
  {
    "url": "assets/js/36.52454e36.js",
    "revision": "442425961e85317b268af6b6af4f7189"
  },
  {
    "url": "assets/js/37.f5490ec2.js",
    "revision": "8edc5d9910633d2218954fac7d5f9cef"
  },
  {
    "url": "assets/js/38.70346744.js",
    "revision": "b9564a9b18698b8cbc2daa76c36acb48"
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
    "url": "assets/js/41.79dfcdbd.js",
    "revision": "2a230873325ce8c91b35adf2a6fdb196"
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
    "url": "assets/js/44.ad82367a.js",
    "revision": "4630074ae1e329db3368771cc22f3732"
  },
  {
    "url": "assets/js/45.67e5a702.js",
    "revision": "83b01f4754e2786328f34857f6e5fba8"
  },
  {
    "url": "assets/js/46.8db358a0.js",
    "revision": "ffdbf45c6cf735ddab38b607d9d6c10f"
  },
  {
    "url": "assets/js/47.629b7b13.js",
    "revision": "23f24f1559d5a710efdc3678a7409990"
  },
  {
    "url": "assets/js/48.7838dae6.js",
    "revision": "9a86dc190272641e3d53703efbe8286c"
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
    "url": "assets/js/50.cbc50fd7.js",
    "revision": "86c792be7c1b03d0dccc0005bdffaf76"
  },
  {
    "url": "assets/js/51.1ec8f756.js",
    "revision": "db5d92789058008c1772f5ba52cd658f"
  },
  {
    "url": "assets/js/52.baa3c285.js",
    "revision": "7217814a4177ad363f39f380238651cc"
  },
  {
    "url": "assets/js/53.f40ed9e2.js",
    "revision": "126631d3d36da464c343bd5b0f567ce7"
  },
  {
    "url": "assets/js/54.03a107bd.js",
    "revision": "55f75af35ce66eead6b9aef21b9d1c4a"
  },
  {
    "url": "assets/js/55.4d6feb21.js",
    "revision": "b8d4b99482debde045d3e223cd30473c"
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
    "url": "assets/js/63.5fab9f88.js",
    "revision": "3ff58c6be5a22b2110bfefe02eb983fa"
  },
  {
    "url": "assets/js/64.227cf6f3.js",
    "revision": "1f881290d84644da1cefe25f196d5f09"
  },
  {
    "url": "assets/js/65.8275895d.js",
    "revision": "81220cddbf3d2e42caf075e172c24911"
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
    "url": "assets/js/70.7584d2aa.js",
    "revision": "6711073389b4ed3700f8cad2529e4b29"
  },
  {
    "url": "assets/js/71.5a4dafc2.js",
    "revision": "07fea59d2155618a46e9d0251847fb01"
  },
  {
    "url": "assets/js/72.08063b2e.js",
    "revision": "6a60b88f4a123f2deab3c04e1aa12ba0"
  },
  {
    "url": "assets/js/73.711bacda.js",
    "revision": "ca1e2aed7f0e3df91c419f5420486b85"
  },
  {
    "url": "assets/js/74.26ab306a.js",
    "revision": "8e1fea7ee79338b02d8ea23b12d0afb9"
  },
  {
    "url": "assets/js/75.9fe8db80.js",
    "revision": "a2fd2eea077e3fd89a359baa36c72661"
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
    "url": "assets/js/86.ff603ed5.js",
    "revision": "7675c33e3f9c37b562e2b61b35f06d9b"
  },
  {
    "url": "assets/js/87.3bd64cf0.js",
    "revision": "9ade99129e054763d62f679ecd2bf176"
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
    "url": "assets/js/94.42cb6d85.js",
    "revision": "9871a282ba39b56334935952366f9099"
  },
  {
    "url": "assets/js/95.a528ce81.js",
    "revision": "63b0aebc307e6d8d9448ef551db0093f"
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
    "url": "assets/js/app.2b994e67.js",
    "revision": "1efb8f39ea89da7f478e79149cf402cc"
  },
  {
    "url": "backend/database/index.html",
    "revision": "8e0eef0153f3166d83c04e346ce7dbc6"
  },
  {
    "url": "backend/node/index.html",
    "revision": "37b031dbdbad1450c1e64384bb65e8f8"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "42e56467a3c4c4f961dfc7d76df11318"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "ac6efa04b9047b4c048962005d3e44d2"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "850fccae24ef523b7dfe9a408d8892af"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "3165ecee905b008376dcb5fed021caf6"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "b497c01034010785f431d2a4ad04bafe"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "ff59902441055e9d32286f4fabeb40c2"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "1ede4eec576ac8aa4cbcbf9495e2c686"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "8b821b4c32f5b074e06860bba085ac74"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "827f86d5243de388f9f21493aa642a58"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "ea05b85172b7ce3a6b16699159dbe341"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "d2f736b1dbb5257adaa280a680b4174a"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "c2ecfb16053d0a178eb78913f04cd11f"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "46b581e9a0d74df1b1790847ab504407"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "64e5a6cc51c073ef98fed3b699057002"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "a40f31e4448532c7e3aec92241b0462d"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "a9f0534b5eee5826bfbf11ef1aa32b63"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "0cc0a8077874434fd1eb41d6e4ccc69a"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "ce83054005608399ed99b3d8f7e5dbe9"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "7a108f0b02d582f65decec73ab2cf356"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "f1d3d0cbdb74d2526261814228513aa9"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "a1fad5ee9537375b065572e3a4de586b"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "ad061dc90f9e0571cd24c933a6e7ce65"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "68e13ef4edb14e43f95cfc3d1603fa92"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "5abdac6af1ea1eb56c7d30f04b2b60dd"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "4f912fe10f8b0aa058c1e726a2b0a649"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "8efe7691c75d0a90d4581baea974d6ce"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "a1c499e6f6e80e451f1f4d87a37891f6"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "e3a3647f070b3325c20f82550aba8f62"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "f55f860781b23ba6e46772ae539013f6"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "40e67663af4f1c5974df9d2608f1a2d0"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "d4360af51af5ef07885e430584d34bfe"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "62fee01c3023e4cd3e95d99f696a4a5d"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "75e8c3de75a270f83a1c04933776c9f6"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "6482b9b7f693af40629b373d1b0a3f0a"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "41a052947eb8bb552c3a6f71520253bc"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "773a3c7e7acf04cc7d4c55663355d5e0"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "36193d189db8aec67795794bcd31bb31"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "e5a5a30f632b1c45af70d2fe1cdbf3c7"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "efccf92dec512bcd365256d978effffe"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "dc672433ceeca6d334bb79153c5471ce"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "bb66594a9c879111c2e471e7aa4256db"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "b63c3b9326527f69c29ec557328b065e"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "b5a652df4b0a734ecb5fa2b4ad52ef0f"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "151ca3e5993a5ae52ac5589b99edffd7"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "bd17d318ace859c009b57319a1626103"
  },
  {
    "url": "books/computer/index.html",
    "revision": "46bb39d1e4edadd41f8f49cb02778239"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "c8909f74ab1da034688144fbfb08dc79"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "21b0976feecb0fb2f62c7cebcdb28638"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "c5108d2a71f31ec17739d22f08ef7640"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "63c446605d273e35698ecad264f5341f"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "fe22b1b30fcc0713f5da14e0558f1ec8"
  },
  {
    "url": "books/skill/index.html",
    "revision": "499d4cb6a1fdd6ac28ddf3de4ee02cc9"
  },
  {
    "url": "categories/index.html",
    "revision": "eabdc10475b4f9a05cc90dd38e7bc81a"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "319e42ed2de866aecac525026fc17033"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "f1974d4e6139e18173ee9275ed2af1e4"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a34b8b9df0acc02611d758f98f47b988"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "d741bcec2dbc470e198dc67292d0775d"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "14076dd9711779425103724e1561e18e"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "24842866315a2d618e753dadfc331c23"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "7ce51d2dbed953ed40c3904c454bd16b"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "2513d671e043c96b35310164c335d18e"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "fd98d191bc48e498d3c224bd81219fa0"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "483139a1cb18e919b4795b29377fa3e5"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "783dce2568b47ec7b7e1df12cda6fa31"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "d8a18b178a6d5b135992c8da0a2d2dfe"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "6dda59cc1f81af9468699e87cb709582"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "58e007956dacaa1ec02562252a8024a1"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "161257f019cdc8f4a71167e2065faecb"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "2bd019d8c8b20f7cdb18e097761c4cde"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "32f6c5376e8047784177da2b50544485"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "a176dea16c6a14b0e124010d86beba0b"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "ecec20010337e185be1b02b06e3f831f"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "f343dce2d1ff4335e06047b1b8568a0e"
  },
  {
    "url": "front/base/array.html",
    "revision": "0e3b12dbec494276806296fcce6b00b7"
  },
  {
    "url": "front/base/async.html",
    "revision": "d425a6c222f16d89ed2e180c1a2c4d25"
  },
  {
    "url": "front/base/bom.html",
    "revision": "ed67b115ffdeddccacda41ed514859a2"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "ecd6a90c4e34e607839d1017b756c2e1"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "f70c3c1e2ec53339a34fa54d77a5cb4e"
  },
  {
    "url": "front/base/class.html",
    "revision": "474dc2c4ea532855a6081154ad68c80a"
  },
  {
    "url": "front/base/cors.html",
    "revision": "7b4d41e749ce943c223bb223e29cc794"
  },
  {
    "url": "front/base/date.html",
    "revision": "c0f9829a3df3ff1c3a3ac74e9318eed7"
  },
  {
    "url": "front/base/dom.html",
    "revision": "263c33fce0eabd934794de81998e840c"
  },
  {
    "url": "front/base/event.html",
    "revision": "096b06f8b93b2f5fe97dbc7a764c04f5"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "17e15e68f3f0a659fb54b1a86ff90697"
  },
  {
    "url": "front/base/function.html",
    "revision": "18f697f0a8f59e639065da372be11acf"
  },
  {
    "url": "front/base/generator.html",
    "revision": "c6e3c201a5f42d7c3b3db9923b4e5b3b"
  },
  {
    "url": "front/base/history.html",
    "revision": "389a4d7593b6243ff76ad6bc32fa5812"
  },
  {
    "url": "front/base/index.html",
    "revision": "e5b2ccc0507f20988f043d5e47511e65"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "b44d69775e542584fe40e3663f6be0f4"
  },
  {
    "url": "front/base/json.html",
    "revision": "ffcfee95046fde48382ba2485fe31af4"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "01d657f9a0bcb097cf547533014c2577"
  },
  {
    "url": "front/base/map.html",
    "revision": "1ec08e401a3731a03f6ec32654fda20e"
  },
  {
    "url": "front/base/math.html",
    "revision": "4d3031d22ebef4ed9739ce2e18384a33"
  },
  {
    "url": "front/base/module.html",
    "revision": "b4021ab70b4fc7bb3eedb2df50177cca"
  },
  {
    "url": "front/base/number.html",
    "revision": "9fe17b6f95f4cdf2742b9fe0e760b669"
  },
  {
    "url": "front/base/object.html",
    "revision": "6175ef27604f59e104b5133a3c17a359"
  },
  {
    "url": "front/base/promise.html",
    "revision": "532ea6e2d1d32dbc67f53a0fc272d989"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "16e2f1c0f3a2a00cbb803ea080817043"
  },
  {
    "url": "front/base/reg.html",
    "revision": "3a4ba489088b2c3bcc19423ef8f5e150"
  },
  {
    "url": "front/base/set.html",
    "revision": "24d05e91b36f03684b82db5edae5124a"
  },
  {
    "url": "front/base/storage.html",
    "revision": "98c5122d7c9701dc8b4e20052a932527"
  },
  {
    "url": "front/base/string.html",
    "revision": "8d0b1eb90b5899ee6eb3efef6fcc73be"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "244d8e5cb39a43d1fc334269607a5c14"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "e58fa87c38c75e6baf10d2749ab0b7fd"
  },
  {
    "url": "front/base/var.html",
    "revision": "7f0d4f08e619dfcc9e443431ebb53fb9"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "aef4958b624a710d44ef15affea8e9ef"
  },
  {
    "url": "front/base/worker.html",
    "revision": "77cbb2e8ac0b82f1aeceb17e326efdd2"
  },
  {
    "url": "front/css/animation.html",
    "revision": "c147c29a46183dc4e7a9b5cebd2cf316"
  },
  {
    "url": "front/css/box.html",
    "revision": "88a8c60c2f11343c0fa5a60612c20826"
  },
  {
    "url": "front/css/effects.html",
    "revision": "fa0109856d849972775190c70792e1ff"
  },
  {
    "url": "front/css/form.html",
    "revision": "5dfa20e50aa7b2e75d3062915b91593b"
  },
  {
    "url": "front/css/grid.html",
    "revision": "43d6960d799431de17e38ec8c0182d63"
  },
  {
    "url": "front/css/index.html",
    "revision": "46ba72cfce0e6d39ca9ff52d792181f7"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "74f858e3ace9cff948a1abb510bf3999"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "633ff152ef45836d863bb5f44083cbd5"
  },
  {
    "url": "front/css/selector.html",
    "revision": "00da8509daf13e66fe118566e3ce2632"
  },
  {
    "url": "front/css/special.html",
    "revision": "9ed7f84d181bba41959e32fd2ab3e2c7"
  },
  {
    "url": "front/css/svg.html",
    "revision": "495cb5c3015132d248155f7dbd1a1b8d"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "1f04178523c6ec34ccdca60fa24666bf"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "3e8cc54ac52a6953bc70105024b589dc"
  },
  {
    "url": "front/css/text.html",
    "revision": "8fe3edfbb9c8af9a21148fa89ebd6a47"
  },
  {
    "url": "front/css/transform.html",
    "revision": "4cc9cdd9c64ffecb406da4b8d83664ad"
  },
  {
    "url": "front/css/transition.html",
    "revision": "b44d66dc51fe2cfbf5302dcf06acc5ed"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "54529e86917c2af83d49aec968d6321a"
  },
  {
    "url": "front/interview/css.html",
    "revision": "4ac55443504fb07751ea6d8b2d246bae"
  },
  {
    "url": "front/interview/index.html",
    "revision": "0ff3393a501642df0fe504c564193bc7"
  },
  {
    "url": "front/interview/js.html",
    "revision": "6b1408c300af85c3c94d1c039ef829c2"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "27b1d093715658ebbd65369204a58eca"
  },
  {
    "url": "front/interview/project.html",
    "revision": "f0bc7d90776eaf965029ff9f63eda4ef"
  },
  {
    "url": "front/ios/array.html",
    "revision": "71342d00424add93dcedbd462048bf01"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "3c67f9910a8f0f1471bbf26799f8f1b4"
  },
  {
    "url": "front/ios/base.html",
    "revision": "296f3b459aceadb2563d41697a591c97"
  },
  {
    "url": "front/ios/class.html",
    "revision": "81a2ae8927d4278eb6a47d9681c00906"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "bae15236ba4927d9ffd3880df1f42376"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "be7ac93b6c12ac65784f850cc7844721"
  },
  {
    "url": "front/ios/func.html",
    "revision": "0de64bf4f5f1346539a41e414bc9684f"
  },
  {
    "url": "front/ios/index.html",
    "revision": "8805c804afb00642df653c751bd2f51c"
  },
  {
    "url": "front/ios/number.html",
    "revision": "04dcc225bde88423db2ad840a3ff48a8"
  },
  {
    "url": "front/ios/set.html",
    "revision": "e8c6c67bab5b0c33a73d162269f475db"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "657b026a151cd32120ebbc3666265f10"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "1c27fb3a69b43b4afe216a76095141f6"
  },
  {
    "url": "front/ios/string.html",
    "revision": "904d4bf25671e73b1d90bcc676d79de8"
  },
  {
    "url": "front/react/cli.html",
    "revision": "c1784c5b2d78caad996ed2f686e5b520"
  },
  {
    "url": "front/react/context.html",
    "revision": "1485ce55563040b69f26431e99314b77"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "3a0a09f61fdb8618bc2e45de630339dc"
  },
  {
    "url": "front/react/important.html",
    "revision": "49b8074f4cd0a762ccef3eada9ec9cce"
  },
  {
    "url": "front/react/index.html",
    "revision": "2951fd40ee8808ccc3abe18974dbb7ff"
  },
  {
    "url": "front/react/react18.html",
    "revision": "81c73b1429d98a2386b081a65af5eb21"
  },
  {
    "url": "front/react/redux.html",
    "revision": "a07cc1e0fcfc0755a1cada48624430b0"
  },
  {
    "url": "front/react/router.html",
    "revision": "88ce3b0a7ee4c42bab1d14d97d37d2f1"
  },
  {
    "url": "front/react/scope.html",
    "revision": "9c1ca80dc7fbf02aac6239c72e1a4a66"
  },
  {
    "url": "front/react/test.html",
    "revision": "e97648ba11a7d2762cf526044cc1d86c"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "c5731ff6ef43d431b4d9c16b5bed16ad"
  },
  {
    "url": "front/technique/index.html",
    "revision": "b9c87cdb848bc0dc9c4b1e557c1a726f"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "7ba369d8c198c0e8c821a718c7a49d3f"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "97d19f77bd719e8de04c63c547babe5a"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "b68c6260ef2d5fc23ae8bfede2981489"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "448737351233029ee11627e046b7ccf0"
  },
  {
    "url": "front/test/index.html",
    "revision": "2b8d355b67964c6d83e889dd034b7f68"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "31f3a24c6e3a94741c111e2feab3e65b"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "f5bed5652fbb756953ed1c3bb59c4ce7"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "a7598760b3b58e6d832fcec0ba312741"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "c59e0178db3944cbddf9e4f5c85974a4"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "3d75e111d6c4501d45f2fa4ba92f667e"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "e957bfbeddba31a09fa0ca0cc6db43f4"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "a3f92f09788f85286bbed5e907c0b64b"
  },
  {
    "url": "index.html",
    "revision": "5605df7d0b7ab8707e1b4bcaf632bc5e"
  },
  {
    "url": "skill/git/action.html",
    "revision": "5fd96d35b77d3afeae4c7d043787e85b"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "5228786f3502597f7bc1bf0c170b9738"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "8d2ef29a53c40c65c168e5583f89d778"
  },
  {
    "url": "skill/git/index.html",
    "revision": "6c8a3a55389806ba78fee1c9b917e02a"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "080e09ff6f15b2a820db2569c8d54437"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "10d34040d44ac28718c6a166e1f7a67b"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "e5fd5ae0868764dc60443df164c230cd"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "e227fa8a6113c0a80c55493003f329ff"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "a4346faaecb7410e05539f6d21f9d91f"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "8504d36007a712ab216627aa48b0b803"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "62be4091c10ddeb1a7c64e6e4cab0dec"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "8e8f9aaa6ff1ce95ed28f892e93bc93c"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "f9510c10b13be188578b041e6f423dd8"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "66981867ad7ca8b904ed38a8b6f06231"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "c25e15cffd8440659a6e5a6e6b9914dd"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "dba35184f738af38065d2c9f55fa3301"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "3daa2fa887257e114583d70253af254a"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "eaf51faff4aea08044eb55d557a24b1b"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "abb48d84529edc1fc419e65f0bde940f"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "e296ab2ba927df5925045441c27a0c8c"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "7e841c7d3f4264145d5117039464ca5a"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "3d61cded4f123d3a2dd1452ad27e97a9"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "c0c45ca57586180e6a3f1f68fc795562"
  },
  {
    "url": "tag/index.html",
    "revision": "4338c6fa009a3c1ed93242bcacaef575"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f775e0352012278bfd2c19a810492277"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "49932d6c8df3b78127304f0d60dd055f"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "c35844c35a381b62f8e664c0a10d88cd"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "2b609aee565ab50ba5212d3bcad24fd2"
  },
  {
    "url": "timeline/index.html",
    "revision": "d29b7849df11a826f231cf4982f9b447"
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
