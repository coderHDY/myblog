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
    "revision": "52a31222c727fff07dc658850c706ce6"
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
    "url": "assets/js/1.9a3c8c63.js",
    "revision": "94263da12c98cfbf1c76aca08e179818"
  },
  {
    "url": "assets/js/10.efa6f3a7.js",
    "revision": "f3b8f0219fd05d205bfbce88bdf46d98"
  },
  {
    "url": "assets/js/100.777dcae3.js",
    "revision": "85412e27235ff1c6c7c2d0f7cede07d7"
  },
  {
    "url": "assets/js/101.e1317e33.js",
    "revision": "b973e0e0c756cec119356b3475cd6988"
  },
  {
    "url": "assets/js/102.9d8d9e35.js",
    "revision": "685eee52b3e0cadd1898932245825c9d"
  },
  {
    "url": "assets/js/103.1f247411.js",
    "revision": "413f40531648e466fc31ba8c7b122ac4"
  },
  {
    "url": "assets/js/104.9d99f9bc.js",
    "revision": "58828f92fa9a058c48dff86f11d7b200"
  },
  {
    "url": "assets/js/105.97d2526c.js",
    "revision": "e8f89a74ff45656b051de43e28423fef"
  },
  {
    "url": "assets/js/106.ee5c0a8a.js",
    "revision": "866ba72f3a5068be6d46fba0defa4efc"
  },
  {
    "url": "assets/js/107.d8cc5af5.js",
    "revision": "25fa4f700de24d3568c9edb212a013a5"
  },
  {
    "url": "assets/js/108.ef53a505.js",
    "revision": "1b6d7a0f0340add6daff682b1d8884b8"
  },
  {
    "url": "assets/js/109.2d6e970b.js",
    "revision": "f81ec4c8eaeb95f88e8a7763a32f6285"
  },
  {
    "url": "assets/js/11.a247df8e.js",
    "revision": "9a74a0f6c8399ef8f4b3102b2d6fb1c2"
  },
  {
    "url": "assets/js/110.df88d970.js",
    "revision": "2d705aa7e96e20a4aef23b42f01a41d7"
  },
  {
    "url": "assets/js/111.eb2f982b.js",
    "revision": "aa49b15434ad502c1de25910e12f4a56"
  },
  {
    "url": "assets/js/112.aee01b8e.js",
    "revision": "bcd20292d972d9e078b881f42977778b"
  },
  {
    "url": "assets/js/113.9e3228aa.js",
    "revision": "0cf28bcb7a0bf365c5793d4ac1b9d9db"
  },
  {
    "url": "assets/js/114.c759f6d0.js",
    "revision": "edc01d1ed236d01d114f2b045c7125c0"
  },
  {
    "url": "assets/js/115.2edb7ec7.js",
    "revision": "c09f59a722cdfcd4e6d136933cc9ba13"
  },
  {
    "url": "assets/js/116.07dadfd3.js",
    "revision": "80d8892a475217dac4d78ef1d0430a7a"
  },
  {
    "url": "assets/js/117.1a9765e0.js",
    "revision": "0525bede74747ce40ef0b21047106691"
  },
  {
    "url": "assets/js/118.dea4e2e1.js",
    "revision": "6f94f0f02d234ab9b6605a2baaf14764"
  },
  {
    "url": "assets/js/119.4eb6e401.js",
    "revision": "d7f8f8c46320502314a258d892e2f9db"
  },
  {
    "url": "assets/js/12.41ec8876.js",
    "revision": "a3da15d67bb1d6d9d55239698b454f38"
  },
  {
    "url": "assets/js/120.bed854cd.js",
    "revision": "422ce67e6033ad040e7e38e79640c16e"
  },
  {
    "url": "assets/js/121.28130668.js",
    "revision": "0448d3257d3b348448f2b6f8ff914ea1"
  },
  {
    "url": "assets/js/122.48253eba.js",
    "revision": "e7ba70458352b9d31ac4d40a82fa6113"
  },
  {
    "url": "assets/js/123.aa93338b.js",
    "revision": "210cfc3421ba9d51ecf4e99b0b971ae4"
  },
  {
    "url": "assets/js/124.e8aef469.js",
    "revision": "d247442a51a5a3e0581d4df508654a9b"
  },
  {
    "url": "assets/js/125.4d32c7b3.js",
    "revision": "9c58f24b60f2c67b03156c0103e8eed0"
  },
  {
    "url": "assets/js/126.842d21ed.js",
    "revision": "4a87a4b1cb9c49873e769c9ad8d7182c"
  },
  {
    "url": "assets/js/127.14ed707e.js",
    "revision": "b84603650784f3c17769d242a3ea1238"
  },
  {
    "url": "assets/js/128.f65427c8.js",
    "revision": "53ab43ca39905139f2980c12685c88aa"
  },
  {
    "url": "assets/js/129.b5cb8817.js",
    "revision": "e8e22deab4eefedf619cf30b16a7b997"
  },
  {
    "url": "assets/js/13.de14c201.js",
    "revision": "b27f28262a1cc95ed8052baa41449040"
  },
  {
    "url": "assets/js/130.31e4a501.js",
    "revision": "8a93576626dd61fbb1cc397cb299f8ee"
  },
  {
    "url": "assets/js/131.339dd4c7.js",
    "revision": "616081a22c5494846d587f450f64d5b3"
  },
  {
    "url": "assets/js/132.a47fc80a.js",
    "revision": "ea23a898c789ba696d0681753f9f1c0c"
  },
  {
    "url": "assets/js/133.d5df3262.js",
    "revision": "45ea11eb16f33bf1d71a9b9a1d7eaff8"
  },
  {
    "url": "assets/js/134.7ee50e3a.js",
    "revision": "2a96791812403a7f4f2ef3966e292609"
  },
  {
    "url": "assets/js/135.ddd17272.js",
    "revision": "ac0084a3557a70ec0c6942b11ab38ac2"
  },
  {
    "url": "assets/js/136.e62b7e38.js",
    "revision": "f8bc6ee395d5ee0608356b8ca6685cd2"
  },
  {
    "url": "assets/js/137.ffe391e3.js",
    "revision": "bab67e184dc738b0e413d08d135b0530"
  },
  {
    "url": "assets/js/138.71cd3be8.js",
    "revision": "97383c049f43de24d5094f93301a348c"
  },
  {
    "url": "assets/js/139.f4d3ed2c.js",
    "revision": "c72ebb60983ee11e79e99595bedd2ebd"
  },
  {
    "url": "assets/js/14.117bfc48.js",
    "revision": "4fadf488f84b175becf114814f675436"
  },
  {
    "url": "assets/js/140.60fc7398.js",
    "revision": "cd1ccc8cb1298c0da9cb7bea648a5755"
  },
  {
    "url": "assets/js/141.15933b1f.js",
    "revision": "458def0fa78754dc01cf61108345a0ac"
  },
  {
    "url": "assets/js/142.05b45f8c.js",
    "revision": "2841082f42880aa0395b29f97b24f7e9"
  },
  {
    "url": "assets/js/143.85cf564e.js",
    "revision": "18b7247ca8107ee96a8baf35c54b6e81"
  },
  {
    "url": "assets/js/144.90bc2394.js",
    "revision": "ababbbca7620fb4eb1d050ba56f3fb01"
  },
  {
    "url": "assets/js/145.70c96fef.js",
    "revision": "4825e63c14156b75095f222173301e65"
  },
  {
    "url": "assets/js/146.8b066877.js",
    "revision": "5f366681849576c17d635bd0488030b6"
  },
  {
    "url": "assets/js/147.4cc2719a.js",
    "revision": "038bc9cd255a78bfcdf217cf26433e3d"
  },
  {
    "url": "assets/js/148.ca570744.js",
    "revision": "8b517b33833cabbb3bef2bde9a15f9e3"
  },
  {
    "url": "assets/js/149.da7dd164.js",
    "revision": "646d19ea26dc336141f48077fe6e9843"
  },
  {
    "url": "assets/js/15.0da6e6a9.js",
    "revision": "4a9a4398baba17bee4804d911f1c4eac"
  },
  {
    "url": "assets/js/150.a4f398f9.js",
    "revision": "7f5c877a3886bb0b6bb13c8ad82bd69a"
  },
  {
    "url": "assets/js/151.e6ec5aca.js",
    "revision": "ef94fcd5769c3a807753f0ba18ea004f"
  },
  {
    "url": "assets/js/152.e4b8bd3c.js",
    "revision": "53ee00e6f5ad52a9952551b11ce0b775"
  },
  {
    "url": "assets/js/153.bfb29641.js",
    "revision": "60fab1bcc11a521d7c3fffba70ddce3b"
  },
  {
    "url": "assets/js/154.ba32ce77.js",
    "revision": "52b932c90d4d4fcb5a954a6c687cccfa"
  },
  {
    "url": "assets/js/155.4d7f9370.js",
    "revision": "19b0df420571c3ad232920ab15a5f5cd"
  },
  {
    "url": "assets/js/156.4c2f5d13.js",
    "revision": "3c3b8fc47a81d3aba5dc877780cfa02d"
  },
  {
    "url": "assets/js/157.009a8ac7.js",
    "revision": "9348f17e06aac5347a174b017d8313ad"
  },
  {
    "url": "assets/js/158.aec55fc1.js",
    "revision": "0b5b7b96155821fd7116d10dd38e36ae"
  },
  {
    "url": "assets/js/159.5ae94d27.js",
    "revision": "efbdb5962a33a3a13b13fa31b551a57d"
  },
  {
    "url": "assets/js/16.acb713c8.js",
    "revision": "d763e46b44993edcb2704db6d8d8b1fb"
  },
  {
    "url": "assets/js/160.b2abfb2f.js",
    "revision": "fd0363189963f0962de0f6fa43597fc6"
  },
  {
    "url": "assets/js/161.f689bd7e.js",
    "revision": "60f6ad5a46f57ca9bc76814cf498e303"
  },
  {
    "url": "assets/js/162.b335087a.js",
    "revision": "4158247f465b7de61e31293ee6dfb819"
  },
  {
    "url": "assets/js/163.47da733d.js",
    "revision": "1828fc041022b93b55188bd07d3b68e0"
  },
  {
    "url": "assets/js/164.e3922f0a.js",
    "revision": "e9f2497c9c86b1ca89ff09deb6579189"
  },
  {
    "url": "assets/js/165.27eeed48.js",
    "revision": "348b04180f5a4e05c44e13007f1bc81c"
  },
  {
    "url": "assets/js/166.ec1058a5.js",
    "revision": "6892c745c6f77c77ce5e7608b04c5ab5"
  },
  {
    "url": "assets/js/167.0e663780.js",
    "revision": "4edc11c78dc300bf1da355bbd127e101"
  },
  {
    "url": "assets/js/168.96e7a578.js",
    "revision": "cfca20679ae708a13c2b38286edbb885"
  },
  {
    "url": "assets/js/169.0ef42571.js",
    "revision": "c0282d285c27bdf5cf0c16df67cd0907"
  },
  {
    "url": "assets/js/17.eb3ea35f.js",
    "revision": "c2007d219c0b13451b7f5cffc66d38f5"
  },
  {
    "url": "assets/js/170.6ccbe327.js",
    "revision": "3fa2ca7432642773a703f9ea0bc7e928"
  },
  {
    "url": "assets/js/171.7af9ceb5.js",
    "revision": "2611db587ea6c100d0c9ec43f3b4c9f6"
  },
  {
    "url": "assets/js/172.f240918d.js",
    "revision": "25998af8f4dc35e9aa04c6c488ea3843"
  },
  {
    "url": "assets/js/173.422d89fb.js",
    "revision": "3c0bf56a774831a35374e64ed3e7d8ce"
  },
  {
    "url": "assets/js/174.fa4ca958.js",
    "revision": "477077499cb0828c7b6221cb777e1b14"
  },
  {
    "url": "assets/js/175.4179a489.js",
    "revision": "a9757955ca28fe6015184f47aea3ffa6"
  },
  {
    "url": "assets/js/176.7741a278.js",
    "revision": "9873e4458c3e4f07bfea8b272db1bc4f"
  },
  {
    "url": "assets/js/177.c5128d63.js",
    "revision": "365a215bdedfac92d84ef3b3e33cbe01"
  },
  {
    "url": "assets/js/178.8fee86d6.js",
    "revision": "17fbbe948ae404ab8a6c6edb5f5dfa11"
  },
  {
    "url": "assets/js/179.98022a6d.js",
    "revision": "1dc21f9800d5ec165a7c4548f712ca48"
  },
  {
    "url": "assets/js/18.96459aa6.js",
    "revision": "2915f466426d77fe594ead8491e89eb6"
  },
  {
    "url": "assets/js/180.669e38ff.js",
    "revision": "1068570a7c2052a498448c23ace6468d"
  },
  {
    "url": "assets/js/181.eea4f204.js",
    "revision": "770553a95ff0c45cc6156058639084d9"
  },
  {
    "url": "assets/js/182.788533f6.js",
    "revision": "6751039207f7cb6ba24a4e68309d5d5b"
  },
  {
    "url": "assets/js/183.26b7d3be.js",
    "revision": "faf20fb58ee87dff787065a8742983ff"
  },
  {
    "url": "assets/js/184.f14bca8d.js",
    "revision": "ceb879ec956bc64992757559546538ef"
  },
  {
    "url": "assets/js/185.719dbc5a.js",
    "revision": "59f7593cafc82750ec61c4c929f029b7"
  },
  {
    "url": "assets/js/186.eec5aa68.js",
    "revision": "f56ee925267b7c56a13c3947b0faf183"
  },
  {
    "url": "assets/js/187.28bf6aa6.js",
    "revision": "29f4d7fb4e3b2380dec74a1182677117"
  },
  {
    "url": "assets/js/188.cd5ea610.js",
    "revision": "843d5b72f5708d5da62f976ef9bd475f"
  },
  {
    "url": "assets/js/189.a360efa8.js",
    "revision": "69aca2550b211da0851e4b3c5ab393d3"
  },
  {
    "url": "assets/js/19.7da3d619.js",
    "revision": "0d5f5fb7c82e1414f9030883de5773c3"
  },
  {
    "url": "assets/js/190.b7d2b381.js",
    "revision": "4c01c6e42f3f7c07bf761a3ece4dffcb"
  },
  {
    "url": "assets/js/191.011e3703.js",
    "revision": "6385738fbea8fbda97383f61575ea344"
  },
  {
    "url": "assets/js/192.078abce2.js",
    "revision": "fd6d584ab1226511d8831daba3a8d587"
  },
  {
    "url": "assets/js/193.3c13be00.js",
    "revision": "e0a43b8f98c634f50fcc00f24ccc4447"
  },
  {
    "url": "assets/js/194.d1baf9cf.js",
    "revision": "e4814a3e60dbb265873c572d1f8fb8fb"
  },
  {
    "url": "assets/js/195.a831f85f.js",
    "revision": "254083c0664c7421cfa79b28dd05c7e7"
  },
  {
    "url": "assets/js/196.337156c2.js",
    "revision": "fd0cc055e493d942a16370e824c76536"
  },
  {
    "url": "assets/js/197.41b03653.js",
    "revision": "1ce7d6f503043c121903a2ff24c55f78"
  },
  {
    "url": "assets/js/198.f966f8cd.js",
    "revision": "f4bf7f1509189e4f30704eeef7eecd3e"
  },
  {
    "url": "assets/js/199.c0ce554a.js",
    "revision": "bdca1e432d0eb2b626ebd6ff1aa225a1"
  },
  {
    "url": "assets/js/20.891a903f.js",
    "revision": "47a7a2b2c0057cb4487e24b3ac76e66c"
  },
  {
    "url": "assets/js/200.303a4cd6.js",
    "revision": "176077972359c33e1311024bb2e99ae8"
  },
  {
    "url": "assets/js/201.42f160cd.js",
    "revision": "a5a2e4879639fb4cc38fd312c5e01c7f"
  },
  {
    "url": "assets/js/202.3bfd56a0.js",
    "revision": "423b1b5f5c263783ec9fbb7fb583cdd6"
  },
  {
    "url": "assets/js/203.92a8a818.js",
    "revision": "923df2c387521bf4c3130d9feb8ed5d0"
  },
  {
    "url": "assets/js/204.53e46923.js",
    "revision": "4efdad539877eef99a8d03878aca8429"
  },
  {
    "url": "assets/js/205.433348a5.js",
    "revision": "077851fc509c2abb572f3db247cb0221"
  },
  {
    "url": "assets/js/206.b2b4e35e.js",
    "revision": "18e905440fa9564d9b890fc19576218b"
  },
  {
    "url": "assets/js/21.cd0cb3fd.js",
    "revision": "5d373928b83c70fb57a9fb6119a0cc7a"
  },
  {
    "url": "assets/js/22.8360f4f0.js",
    "revision": "33ea3043b994ad88c1ae7c28b7013e63"
  },
  {
    "url": "assets/js/23.cf3388fc.js",
    "revision": "bf0ac995ba76a3d00cdd7c6e96bd3129"
  },
  {
    "url": "assets/js/24.77b86f40.js",
    "revision": "cfb1416eec00c481e1bbc8fd136f10cb"
  },
  {
    "url": "assets/js/25.c46a382a.js",
    "revision": "24d57350c3075453570a4b08bf15fea4"
  },
  {
    "url": "assets/js/26.6aa37ed1.js",
    "revision": "71365cae65f3a28d35fce7e3eec7d70a"
  },
  {
    "url": "assets/js/27.15286824.js",
    "revision": "04b3b5456514e31548d0425566a37564"
  },
  {
    "url": "assets/js/28.bc47800d.js",
    "revision": "3e7b0d7710ec39e127cd92372554bc27"
  },
  {
    "url": "assets/js/29.28c77faa.js",
    "revision": "860758d22b5d9574d3e0f25a80f3a5df"
  },
  {
    "url": "assets/js/3.2ef3c87b.js",
    "revision": "7763f8129e38f5f55ab6e715aa1add64"
  },
  {
    "url": "assets/js/30.3875ace7.js",
    "revision": "611cf5151a06f33748a30dc7617b643b"
  },
  {
    "url": "assets/js/31.666f8287.js",
    "revision": "fb0d09fefd8429ff86b450b473de3dc2"
  },
  {
    "url": "assets/js/32.ee668152.js",
    "revision": "801c078889e6ab0edf6a23f7873b6b26"
  },
  {
    "url": "assets/js/33.790c9159.js",
    "revision": "c225e7a9579c6c8220fe33b074207ead"
  },
  {
    "url": "assets/js/34.02414ecb.js",
    "revision": "78a953954ee3edec5dc8bde4f1141efc"
  },
  {
    "url": "assets/js/35.62aeb22a.js",
    "revision": "24593f5f606eb86c1575b3bf59765eba"
  },
  {
    "url": "assets/js/36.7d075523.js",
    "revision": "e44b8e9fde0bf2368aa29ba580acf0c8"
  },
  {
    "url": "assets/js/37.7f06cd0f.js",
    "revision": "97ddd27065c63678c2c3371534229e4b"
  },
  {
    "url": "assets/js/38.6283358b.js",
    "revision": "cbb435f57367e96d7d5a556ab9cf188a"
  },
  {
    "url": "assets/js/39.61ea8784.js",
    "revision": "aa1fb848bd9a1165eb4d9f3c0871a4c0"
  },
  {
    "url": "assets/js/4.634776f4.js",
    "revision": "2bbb1e0cc6373d78ca92bdd6f27eb780"
  },
  {
    "url": "assets/js/40.dad1e6c4.js",
    "revision": "861358f053f4acf6cc6dfd749a3d3704"
  },
  {
    "url": "assets/js/41.53485a32.js",
    "revision": "c93ed077cb41354ac11767eaab528b55"
  },
  {
    "url": "assets/js/42.85803347.js",
    "revision": "f0d6bab65298157ce940c996d31a66c7"
  },
  {
    "url": "assets/js/43.84b1b6e6.js",
    "revision": "1a0e126811849b91a5caeb8f10c62333"
  },
  {
    "url": "assets/js/44.f9de91f3.js",
    "revision": "2e904030ef10b58f123b5445db1b2fc1"
  },
  {
    "url": "assets/js/45.a3605a8d.js",
    "revision": "e4408e6b6299ef47febe0aaedc273cfa"
  },
  {
    "url": "assets/js/46.1a122079.js",
    "revision": "9d3dc2cfdfc0f89eef0c0bc727cffbf0"
  },
  {
    "url": "assets/js/47.2177f760.js",
    "revision": "b5efacd60c42b36dc29d8226a82c8c50"
  },
  {
    "url": "assets/js/48.3c34c9b1.js",
    "revision": "21d9ee61180ec9b20bbe9403c5bc2682"
  },
  {
    "url": "assets/js/49.228ae9c5.js",
    "revision": "bce9d125f92dfffc1693e4fc4a159edf"
  },
  {
    "url": "assets/js/5.6d93eebf.js",
    "revision": "6cf0f80266a731a1b481db175f1865a5"
  },
  {
    "url": "assets/js/50.86c910c7.js",
    "revision": "1ceb21470dc7177a74fb2502c660a16a"
  },
  {
    "url": "assets/js/51.6a134435.js",
    "revision": "e4ab17c242cdec745afd64bf23664666"
  },
  {
    "url": "assets/js/52.386ba693.js",
    "revision": "28196fd85a1249cf00f15d84f5c52a87"
  },
  {
    "url": "assets/js/53.7b3d2c33.js",
    "revision": "37b6530dfbaa4b41b631f7d087fb8816"
  },
  {
    "url": "assets/js/54.fd33afbb.js",
    "revision": "9acacfea43c5286c0123ffee0e6ae23e"
  },
  {
    "url": "assets/js/55.1bfc3f37.js",
    "revision": "8106bc891fb34c5d7e8aecf0e6825fa6"
  },
  {
    "url": "assets/js/56.fb16621f.js",
    "revision": "9322f45243959da24031e99fd91f7baa"
  },
  {
    "url": "assets/js/57.b8a3de9d.js",
    "revision": "d945a66f63264767849797563ac79c7a"
  },
  {
    "url": "assets/js/58.ad79fe84.js",
    "revision": "098b62c7ea41d1c01bb70ab01bdd963c"
  },
  {
    "url": "assets/js/59.f5f8fcf7.js",
    "revision": "cbb7ad889a0ab994e0091959b7b8bfdc"
  },
  {
    "url": "assets/js/6.af193cbc.js",
    "revision": "22c23e1d8c2fa444771e3cf76bbdd869"
  },
  {
    "url": "assets/js/60.4120f3fd.js",
    "revision": "3232a1326e99b41a789b775192f6c1fa"
  },
  {
    "url": "assets/js/61.d66f009f.js",
    "revision": "eb90a50992017e285bb867cea4b11c54"
  },
  {
    "url": "assets/js/62.63999715.js",
    "revision": "d2d8f60e9a6f1ce9768c63dc3c839e23"
  },
  {
    "url": "assets/js/63.6006c352.js",
    "revision": "45098883189094599b65b13eee703787"
  },
  {
    "url": "assets/js/64.6ba45e54.js",
    "revision": "8f0e6ba314df171ecb3f42bddd8829f5"
  },
  {
    "url": "assets/js/65.1e44de4f.js",
    "revision": "a3886f9404447a083efa12dd5aaebc6c"
  },
  {
    "url": "assets/js/66.54d3045b.js",
    "revision": "16a1305d55ce08dbc8d1e298fcc0c1e2"
  },
  {
    "url": "assets/js/67.60f762b5.js",
    "revision": "841eb8d651e8fe2f314183e0bb8e2210"
  },
  {
    "url": "assets/js/68.e5534799.js",
    "revision": "09fa664dd2a92d16b7247aba7d01f20f"
  },
  {
    "url": "assets/js/69.a97ce0ca.js",
    "revision": "567ee16432942dee0832d510839e6919"
  },
  {
    "url": "assets/js/7.236f89b0.js",
    "revision": "a2727eacb083a73ca839ae2f710339a0"
  },
  {
    "url": "assets/js/70.e952bb30.js",
    "revision": "474afa7678b20522da2ada1b709bcf6e"
  },
  {
    "url": "assets/js/71.2efda635.js",
    "revision": "9f1975f7e617800a82402fa103e4fa7f"
  },
  {
    "url": "assets/js/72.4cd86738.js",
    "revision": "8cc6d715eedbcd1eb22cd5ab2a30fa2b"
  },
  {
    "url": "assets/js/73.a55896fa.js",
    "revision": "9525223744682db972d18d105d47d0d3"
  },
  {
    "url": "assets/js/74.d91a9108.js",
    "revision": "061a2ff0461e1773a3fc337526df5328"
  },
  {
    "url": "assets/js/75.7434fcf1.js",
    "revision": "79ff57751bd7b97f1cc78b29798fbd28"
  },
  {
    "url": "assets/js/76.a8604753.js",
    "revision": "439505c298709e570a165f876718f771"
  },
  {
    "url": "assets/js/77.46ea6380.js",
    "revision": "e537f05fbc84cb008845214df641a84b"
  },
  {
    "url": "assets/js/78.4e503aab.js",
    "revision": "fef5ad753fbb49d86d2d2bdd07c8ac7a"
  },
  {
    "url": "assets/js/79.f1305540.js",
    "revision": "cba72ff570c42b16dd1d7b41249d7bcb"
  },
  {
    "url": "assets/js/8.ac08a48c.js",
    "revision": "9cedc1b2526871ab9f12a5511fb3a645"
  },
  {
    "url": "assets/js/80.08d43fd0.js",
    "revision": "2db2dde5d09ee177b43e440d5e8dde23"
  },
  {
    "url": "assets/js/81.1176710f.js",
    "revision": "d0a5dd2487da4d7405b0ae22160dfb16"
  },
  {
    "url": "assets/js/82.af37de9b.js",
    "revision": "fc91859436d554512f1f4e934f9bca45"
  },
  {
    "url": "assets/js/83.61e5acd6.js",
    "revision": "ede6322c7339d47b4f2371c49787a5a7"
  },
  {
    "url": "assets/js/84.02bee707.js",
    "revision": "f01a41567234900486ed6a240c89d18c"
  },
  {
    "url": "assets/js/85.2a5092d8.js",
    "revision": "da6f6bd4eed8687bc125935a4ed1f63a"
  },
  {
    "url": "assets/js/86.fe3c2a1d.js",
    "revision": "fbf8ed9d05f7acada3ff228fed521fe1"
  },
  {
    "url": "assets/js/87.b32b9a21.js",
    "revision": "f4cd7a5b5612fbc14fe307256d0907da"
  },
  {
    "url": "assets/js/88.4e72c569.js",
    "revision": "38faa0cd64bbc4abf5eaa741bd588949"
  },
  {
    "url": "assets/js/89.b5447509.js",
    "revision": "1afe0bddf5bf2436c968cec75de23066"
  },
  {
    "url": "assets/js/9.4976f1be.js",
    "revision": "71b5c979abf7d21dca99c8047f858c03"
  },
  {
    "url": "assets/js/90.84b4b6a2.js",
    "revision": "b79288d9af8f12f5a9202042c489c8a7"
  },
  {
    "url": "assets/js/91.5820aa51.js",
    "revision": "872c4249c8f9eb992730891c695b0dbe"
  },
  {
    "url": "assets/js/92.7d26c0d6.js",
    "revision": "c6b4611e2124f1a027c7a5afaf778baa"
  },
  {
    "url": "assets/js/93.e0b6c97c.js",
    "revision": "9a7851bcf4e7e76ef3938abf6f3040a3"
  },
  {
    "url": "assets/js/94.05e6809d.js",
    "revision": "309ce5091377eb71e014c0e8d0e7516c"
  },
  {
    "url": "assets/js/95.eaa407f7.js",
    "revision": "0a05f87e71eb3f757841cd8c4190c263"
  },
  {
    "url": "assets/js/96.0ab804f9.js",
    "revision": "1fe5a079187cab96f13094a94d366233"
  },
  {
    "url": "assets/js/97.209e8890.js",
    "revision": "de74409bc39059525e12f72b8ac7f743"
  },
  {
    "url": "assets/js/98.73d74d27.js",
    "revision": "7d274ac827d63cac7cb95dea5bcd19d4"
  },
  {
    "url": "assets/js/99.a2a4c3f2.js",
    "revision": "fa38e4f6620ead541043cb8cc89e358d"
  },
  {
    "url": "assets/js/app.63ed6a60.js",
    "revision": "de26daab291cfaa109577659dd704ab5"
  },
  {
    "url": "backend/database/index.html",
    "revision": "959df141ff2a20b759fc3e6342d09e77"
  },
  {
    "url": "backend/node/index.html",
    "revision": "6e52b4d385bd3ba9a5736ca652b71abb"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "ea9e7aeb7959b39d0ca19279bf3c0e49"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "3943a3ba07e70220416c24fa0b9d7231"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "85bff7d9f43dcc964bb975be6a07e9f7"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "ba465c77d69366bbd9239fbf48a90229"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "723b2e5625decad41800e4339c87d126"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "224997de8227d8d907e3c0b24face59e"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "8862ac4aa110ed2d2a83102f7e2ce12c"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "60b374905cb29d3acaec0c4f6e5eb6de"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "41b88190030f1cf1d02b35150c29ec0b"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "0c89e61293bd290384e1f80fe68cb5d2"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "0ffd5a5878d491cc8e174cecdd974abb"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "8d48d322679fb298be89a5e190b4e1a7"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "5bc8254dba54de4d8b6f86ce6e0335e5"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "5bfce6f1151fb6d3346556b5be773ea3"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "7779b1972de79561b1fdb4a989551059"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "7340d4baaa188ee7e64610ac756705de"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "7b28c0cd1efef0e03025529c9b9f60ed"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "b4171b21563328be03149f8452117cd5"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "5cc14f57bae3f5d9bb2599189606c611"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "0f8b72984fa2e16bc49b90c8cadc5bd9"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "212746361c737de42bc89631e91860f9"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "f8a624c2580982c9d86e35bc004b45dd"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "12b4a1e3825f95f65b68a242e009a89f"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "b8f74641dab57111e89a13dc92ea3276"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "98aa9ac420a47ee7dda918fe87037fd2"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "cf665bed6ef3b3555d4257708ab4aabe"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "1b0e7544c97f929ce40cc0ee891a4e47"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "25ec76f8c5b8060ff4034025bcbf7b02"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "8f5e66facca44fd936710d98ef567274"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "7530459771fd590a66161e39f785c0b4"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "1c63ccd8f6a4bc41ea2f957cfe6dd636"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "3972c42b1d6863592f6b7f9979eead4c"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "ff056f751184694a9c49d813205c0716"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "52fd8ad805eae92606a5b2da6030284d"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "641df58015502f0b21349d25232fa9c1"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "a0d2978b42a384609b68e4da8e9b9631"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "cf3fe856383dc7744eeefe42a42b9d1d"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "07d45de59cc1d809c6bb0cd3decdd4fa"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "68e44a947cb31d6dd0643fba50199367"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "af816613f311c4ef63cab726b1912245"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "003d568b92b8e8cdc11d71d636567169"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "0b1ca5878e55e74fe5a09a3c41a07242"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "dafe9fe3a0b2c1bea2537f95f639ea01"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "8b6a489fcd1113fbabdcb582c34c8c7b"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "ccb98fc87aba5f894d600cbc26b275db"
  },
  {
    "url": "books/computer/index.html",
    "revision": "01e0a1d88910671b4d35469fe4e90da9"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "6416b28e2b3f67f9b14e869da2e75930"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "14627109deaf9bb495dbaf8bba01fa1d"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "27eeb8078de07854af405f86181f9ea8"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "72edf0d630e31c39975ea234a19bdd6b"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "59402a370d60412a86816c20376bce58"
  },
  {
    "url": "books/skill/index.html",
    "revision": "6795330cff509dc44d6cc9c5ced6fab9"
  },
  {
    "url": "categories/index.html",
    "revision": "766f093713b0bb25864057b6fde460f6"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "94246a9e563a3bc0ca65939ffebf9848"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "22dcde3f852a76f79c494e9e1021e9eb"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "1e017d19126edd5f9e5768861763beef"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "fc2f64c4942545e29c7289bf6484bdfc"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "a166bd45d417357980223f07eec2a242"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "a2ddaa3fa59fe008961779b350e2b40f"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "5822f94095b77ed42915e39486b68e3b"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "04220ec9b8f2f5b8f7e455050f0f583f"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "6762471797a402f0bfa8bf160ba17bae"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "43f7ff988efd4b323b69e5e03057e4ff"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "a985246cc8050d97ba7e763227f259ff"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "7df5bee5befde91bedd4d65be82a6ae3"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "f6270e87e93725fe856c07e370f76591"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "333cb78a076d2117aa6974579e94c5b6"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "ac7c785e79903a41a1817c7d79bb1082"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "e4a18e3acf5d42f928fe797ebad46743"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "952445d02d47eb3ed7782748f7b955cd"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "a765ccaa5a12bcb8d4895c235604d8ae"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "373598695d3d8edf6e75fff9e62c611c"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "924e09bc59506f04f8ca8be99fcc1af1"
  },
  {
    "url": "front/base/array.html",
    "revision": "adbc004fa42c8a801642c50df3822ba4"
  },
  {
    "url": "front/base/async.html",
    "revision": "d01316466b5957bd288c7a569725553d"
  },
  {
    "url": "front/base/bom.html",
    "revision": "abc9906cd7c10105d85e22dcca94952c"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "922d1ea37c945cdd598192172926e2c3"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "c416ded01ea7fffc9f274bb063a2d791"
  },
  {
    "url": "front/base/class.html",
    "revision": "0f6afa3ee4a4d512bb498b35cdffc639"
  },
  {
    "url": "front/base/cors.html",
    "revision": "7111e29a06af663ad95d775775feb88f"
  },
  {
    "url": "front/base/date.html",
    "revision": "7270340d21777aed8e433eac3e68ef55"
  },
  {
    "url": "front/base/dom.html",
    "revision": "162f390ab4e97f34e880529bab77a1e1"
  },
  {
    "url": "front/base/event.html",
    "revision": "d462740e032d12f17a725e80b148ebab"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "51f62b2a9cf936d7368689e91b3900c9"
  },
  {
    "url": "front/base/function.html",
    "revision": "10c95516f431ab4b667a73d811cb6077"
  },
  {
    "url": "front/base/generator.html",
    "revision": "3cfe67f296a296d4fed6e52ffc9f4fd8"
  },
  {
    "url": "front/base/history.html",
    "revision": "7a2ac80556479bf630a043c213ebc5ca"
  },
  {
    "url": "front/base/index.html",
    "revision": "62f582c89f4105e3964120773daceb99"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "9547201c1e04efd29c148c4b3b90d1cc"
  },
  {
    "url": "front/base/json.html",
    "revision": "80aa0d880329b2519808afaf6ee28082"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "d06b88be4c303e39a568dbe90d4e5716"
  },
  {
    "url": "front/base/map.html",
    "revision": "7087ea8c51e68f4c50e4d8b5bf9e6a8c"
  },
  {
    "url": "front/base/math.html",
    "revision": "30e39099b8bdc7dc4ffb692e51f039fa"
  },
  {
    "url": "front/base/module.html",
    "revision": "99232448b31fa9204ae9c01f031912ac"
  },
  {
    "url": "front/base/number.html",
    "revision": "ff8d63d6fee1f0bdb0dd46f13d731e35"
  },
  {
    "url": "front/base/object.html",
    "revision": "cafa0aec857f5540300f55bc65d25130"
  },
  {
    "url": "front/base/promise.html",
    "revision": "125b9707b369fdec67363f52d6b43538"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "e9533b0f6f0b7918e5df93e3a28dfbb9"
  },
  {
    "url": "front/base/reg.html",
    "revision": "6ec61bcee12215b9ff886b9abf8e0722"
  },
  {
    "url": "front/base/set.html",
    "revision": "268a7debe4e27ac05c0dbb4a9b991828"
  },
  {
    "url": "front/base/storage.html",
    "revision": "1a93e1ff192cff7326f07ce001cdf355"
  },
  {
    "url": "front/base/string.html",
    "revision": "c69ac474061d23a8b23526790bbe1a67"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "5f9c943715ff9818dd88edd38ca3c64f"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "8aecffa496016bd126b9ed676bea13e7"
  },
  {
    "url": "front/base/var.html",
    "revision": "c07fcfe5c21e90ecdeef04a3d437b8b6"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "bef718bef68fe8790a39307cdf216f4e"
  },
  {
    "url": "front/base/worker.html",
    "revision": "5a2216a40b5ce548b3de04772290bc09"
  },
  {
    "url": "front/css/animation.html",
    "revision": "07a87ebe56c3251c23903b33ff81f066"
  },
  {
    "url": "front/css/box.html",
    "revision": "3470f374b3229502e3379ed9ce64000f"
  },
  {
    "url": "front/css/effects.html",
    "revision": "63bff89d729988af368d06921fed8639"
  },
  {
    "url": "front/css/form.html",
    "revision": "881f6dcb3d5b2e7ff43317239c1fa540"
  },
  {
    "url": "front/css/grid.html",
    "revision": "7b1d113e7f7db99e4507dbf55b2a93b9"
  },
  {
    "url": "front/css/index.html",
    "revision": "9751b7def8afa04668d88a319c069fce"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "3e159dd084aad029b047d9a329086e38"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "4f700746e84cab1a301f4ea76c85cba6"
  },
  {
    "url": "front/css/selector.html",
    "revision": "6d31ea8a7f79727041e07a183d789677"
  },
  {
    "url": "front/css/special.html",
    "revision": "a9af2fe69c055975cfadaeb5ca539536"
  },
  {
    "url": "front/css/svg.html",
    "revision": "fce5672b91f6f86e6c814ab9c640e852"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "3ee639e6c79c0d9d4ee2fed09e8bc065"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "1d33c4f16cdc1d9d13031d55676a9498"
  },
  {
    "url": "front/css/text.html",
    "revision": "39542dba2093b088630f3f0c498e12a9"
  },
  {
    "url": "front/css/transform.html",
    "revision": "9ed02922474e658ed098322bd0cd6d28"
  },
  {
    "url": "front/css/transition.html",
    "revision": "ee93d7b6779c95711c751b964166ac5b"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "72b2a2f0bc276cd65706713760f268da"
  },
  {
    "url": "front/interview/css.html",
    "revision": "696531c0a128173750d0e5abce994d3f"
  },
  {
    "url": "front/interview/index.html",
    "revision": "5c5faf3d79d9d2ca2a9eb45426d848e1"
  },
  {
    "url": "front/interview/js.html",
    "revision": "1dbe0ce74a4e4e8c40e207dc48f08071"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "9c0f5ff1b76d0a87bea86be2725e6977"
  },
  {
    "url": "front/interview/project.html",
    "revision": "b5a8eb080ad1cff12a555f29400afb5f"
  },
  {
    "url": "front/ios/array.html",
    "revision": "f0bace7af0597484a975f36017c5d2a1"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "46c4d0cfd3ac0b9e690114e476b9c88a"
  },
  {
    "url": "front/ios/base.html",
    "revision": "fdb827883a346885ecb3a06dccfe381f"
  },
  {
    "url": "front/ios/class.html",
    "revision": "2be21d424a25a98216db3f65ccd88ebd"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "2c5707b2edb7c2c5b7422b833281471b"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "9ab8dc45d7651e9fa48fbed67a4fe34f"
  },
  {
    "url": "front/ios/func.html",
    "revision": "d5bbc8430337e291a850b0724fe152a5"
  },
  {
    "url": "front/ios/index.html",
    "revision": "86cefe0df5e8fc3c94be06102154b401"
  },
  {
    "url": "front/ios/number.html",
    "revision": "e510d014843fa2aa989a86f6f9706b47"
  },
  {
    "url": "front/ios/set.html",
    "revision": "2d3b20f4fa2cce57746a9cd36cacc2c4"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "756f6004262dde1cc86b6d70df16f0c8"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "73c825d6ba0f450f2e01edcfd8248b7f"
  },
  {
    "url": "front/ios/string.html",
    "revision": "9508a429dbeb226c5987d637061c9d48"
  },
  {
    "url": "front/react/cli.html",
    "revision": "118de8f5574851e4b91f21cbaf83b530"
  },
  {
    "url": "front/react/context.html",
    "revision": "7e90eea361dcd212c2b4c124c9f2421a"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "25808b253136856744ce6f9c9e37000f"
  },
  {
    "url": "front/react/important.html",
    "revision": "cb07d65c50ff27d6e4e846b58e357533"
  },
  {
    "url": "front/react/index.html",
    "revision": "af42a861cf361c854cba8bf2d15ec585"
  },
  {
    "url": "front/react/react18.html",
    "revision": "23cff728cad4dc9faff7a92dc3af7b20"
  },
  {
    "url": "front/react/redux.html",
    "revision": "1b32c633f8228e7f382f616530792b90"
  },
  {
    "url": "front/react/router.html",
    "revision": "f9b07b9083b3dba7c8233f50e448a81e"
  },
  {
    "url": "front/react/scope.html",
    "revision": "3d25223e0236fe5b95a3c9439888753d"
  },
  {
    "url": "front/react/test.html",
    "revision": "1cdeee04f35220cb7ed61abff135744e"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "f909f9bd25a45b488a7f27783453879c"
  },
  {
    "url": "front/technique/index.html",
    "revision": "bd1fd7dbcf3247080176a30f2d58a52e"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "86b20acf26c327d86e27340fa158eff7"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "bc0930836796bf15ec5ea47e3a7ea74a"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "9feba41585c24f2fd6d5667ce27476eb"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "cfb6827dab776eaf8310ca8df696e2dc"
  },
  {
    "url": "front/test/index.html",
    "revision": "b44e897bdba1a2af20d9449909cc636e"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "99631b55caff8f5aacfbba01e5cfb27e"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "c5a69a9995541540fa44459b5b50886a"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "7290b38e2ee05de34aca4db936d3c9fb"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "92a5622baf5e4398869cd8532114d2af"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "892b4f8bd86fd5196a46fdf9463ee235"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "8ce3809ab706c8aa2ad17ec350ccf9a7"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "24d94014dcfbde5961628c67cb806d33"
  },
  {
    "url": "index.html",
    "revision": "6cb4220b39f9843d2e55490aced511d3"
  },
  {
    "url": "skill/git/action.html",
    "revision": "b802cd01d514e57e91cf8cabb29d23a2"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "c7e8a0bff6f5b72435c080c89ca5756a"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "e2995a88d72eace689cacf4c4402ac72"
  },
  {
    "url": "skill/git/index.html",
    "revision": "21261d2dbea31062ab431eea91ff783c"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "9fe4f3113ebb00a068842e16d810b721"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "035030a84b11607151e5e2371b85efcb"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "bc72be2191a330894cfea7853f66bb58"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "ffaca85804367293370a99728705c413"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "8e4e9938407fa98be6393a2fe79f24a3"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "70b4685f764875cdcc6518b4ff71835a"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "dfa6054bf82dfcd147262bce6f83c457"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "8750afe6a7dadbe18d6b2f37197956b2"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "9b8da2b840844ae4df4e5d89e5c6eb3d"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "c22c028b33b85133755725baff6d5431"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "3506390f0ea7d5a4461e4918a5dec2bc"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "9b8396af60e41dc5f8504828a57cadcb"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "223ae42109a13200c5b06792013f5096"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "8ed7be61cafa215942be8c04b6cdabf7"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "1bcf6df8e7b4f2255847cfe70bda8b93"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "6a3ec71213e12490824e901fecdcca83"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "620ca66ccd47fa41f92ed75fd47a3b53"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "4c217f0bdf35fd72dff9834fb77f7608"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "be4db8b7f665f035e70ddd4b02b3ecc5"
  },
  {
    "url": "tag/index.html",
    "revision": "fac21de17306c7c059b54616b2710294"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "58c3ae1cc89ae82d20699c68708cbb1b"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "727368bc95e030747657b74eede084bd"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7bd1924b3e9f4da4b543ab47ecd72ab7"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "11e762cc0749e7000fa79cb81521cf07"
  },
  {
    "url": "timeline/index.html",
    "revision": "fcd25e346485b4e83a4df853265ccff8"
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
