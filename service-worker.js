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
    "revision": "b156662bd7668f21c07f6683e63247d1"
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
    "url": "assets/js/10.731d4f06.js",
    "revision": "2e2db9ec4c552a71fb849abcd8b0926c"
  },
  {
    "url": "assets/js/100.777dcae3.js",
    "revision": "85412e27235ff1c6c7c2d0f7cede07d7"
  },
  {
    "url": "assets/js/101.e34e46f3.js",
    "revision": "3696021344e7f1b4418e30cf255f5d84"
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
    "url": "assets/js/104.330ac786.js",
    "revision": "1484285d6acb37f495e2499abf0ddc16"
  },
  {
    "url": "assets/js/105.97d2526c.js",
    "revision": "e8f89a74ff45656b051de43e28423fef"
  },
  {
    "url": "assets/js/106.7a2e724c.js",
    "revision": "feb6141e12323ba737dab01d49d39cea"
  },
  {
    "url": "assets/js/107.db556c25.js",
    "revision": "94e73f2df82631d23d5a8872129e5682"
  },
  {
    "url": "assets/js/108.1b30e6f6.js",
    "revision": "42469dcb3b5f8a615a610f23f6cf9389"
  },
  {
    "url": "assets/js/109.969ad1e8.js",
    "revision": "26d0f9c1dfa62f69766ae1ace295413c"
  },
  {
    "url": "assets/js/11.a96042f6.js",
    "revision": "0315ffbd7b8b25491968a66c5281843f"
  },
  {
    "url": "assets/js/110.7459a1b5.js",
    "revision": "43f1336b7e30c4cce5d47801a45e5944"
  },
  {
    "url": "assets/js/111.fb3e15e1.js",
    "revision": "89c253de0477d715f3ceccaac575c697"
  },
  {
    "url": "assets/js/112.d9e98c70.js",
    "revision": "c45460c936ce159133216101d7fc02c7"
  },
  {
    "url": "assets/js/113.5925119d.js",
    "revision": "f7fe1501e6dd8f6e2702031d056f94d9"
  },
  {
    "url": "assets/js/114.bf5fca7d.js",
    "revision": "48e2bc8d562de3074d7aba44b6b29122"
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
    "url": "assets/js/118.b51bf334.js",
    "revision": "acbc0d6020bff85c6077796845479733"
  },
  {
    "url": "assets/js/119.09a8e049.js",
    "revision": "fc0932ed0501dbbd53ff18c01eacf3b6"
  },
  {
    "url": "assets/js/12.23c162ee.js",
    "revision": "19e0336690e7dc0064c638e11111c14d"
  },
  {
    "url": "assets/js/120.17a98839.js",
    "revision": "4bae0c861695d9a4a5af516e7b55a4fa"
  },
  {
    "url": "assets/js/121.511501f3.js",
    "revision": "2762f8ff294b5d37b09650fe2a0352bf"
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
    "url": "assets/js/127.919b81ca.js",
    "revision": "501b6fa5e7430beff6f4d1f6e99342bf"
  },
  {
    "url": "assets/js/128.f65427c8.js",
    "revision": "53ab43ca39905139f2980c12685c88aa"
  },
  {
    "url": "assets/js/129.a9c6e3ce.js",
    "revision": "70aea1621c4cb038d8d6ca841752a63a"
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
    "url": "assets/js/131.ccee6334.js",
    "revision": "001fb26664f8b2302cecb066b98d975c"
  },
  {
    "url": "assets/js/132.c0949971.js",
    "revision": "8f0d6f4bbbdc1d9a570804a12c66b0e2"
  },
  {
    "url": "assets/js/133.9e8ba66d.js",
    "revision": "48697423ab72dc240ae79dfd02d466eb"
  },
  {
    "url": "assets/js/134.daa2dbef.js",
    "revision": "c33055c87cf6bdfe71ea16d9aef711b6"
  },
  {
    "url": "assets/js/135.ddd17272.js",
    "revision": "ac0084a3557a70ec0c6942b11ab38ac2"
  },
  {
    "url": "assets/js/136.28efa533.js",
    "revision": "66be97af3cf50b6aeb1297ba65d35291"
  },
  {
    "url": "assets/js/137.4d1abd94.js",
    "revision": "0ff61d26ea8de9d79cb15bba3f62a486"
  },
  {
    "url": "assets/js/138.71cd3be8.js",
    "revision": "97383c049f43de24d5094f93301a348c"
  },
  {
    "url": "assets/js/139.dd61c266.js",
    "revision": "47cb60ae2044e4f5ca63232dabc537b8"
  },
  {
    "url": "assets/js/14.117bfc48.js",
    "revision": "4fadf488f84b175becf114814f675436"
  },
  {
    "url": "assets/js/140.d7538c79.js",
    "revision": "6fc62318c8d3a6d641b49f2b2a8f1ce9"
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
    "url": "assets/js/143.51480124.js",
    "revision": "ddaa389987e14ecba723993118e67a00"
  },
  {
    "url": "assets/js/144.90bc2394.js",
    "revision": "ababbbca7620fb4eb1d050ba56f3fb01"
  },
  {
    "url": "assets/js/145.91aaa6f6.js",
    "revision": "e588c9ea79f944314d72a2ce36d011d0"
  },
  {
    "url": "assets/js/146.8b066877.js",
    "revision": "5f366681849576c17d635bd0488030b6"
  },
  {
    "url": "assets/js/147.18d3d05f.js",
    "revision": "8c8ffe56660c1c3b602ee5de5c8f8a0a"
  },
  {
    "url": "assets/js/148.ca570744.js",
    "revision": "8b517b33833cabbb3bef2bde9a15f9e3"
  },
  {
    "url": "assets/js/149.6cb27b77.js",
    "revision": "b29abf459ca775157effba1904bc6fff"
  },
  {
    "url": "assets/js/15.0da6e6a9.js",
    "revision": "4a9a4398baba17bee4804d911f1c4eac"
  },
  {
    "url": "assets/js/150.371f2206.js",
    "revision": "e1e95c84a649cd3130ec6449834fe8c0"
  },
  {
    "url": "assets/js/151.8d46580d.js",
    "revision": "eab22f25bc6dd7f6caa3ee0c389d30b3"
  },
  {
    "url": "assets/js/152.6a843536.js",
    "revision": "5d84d82e662e5d0ba966a03467a8c16b"
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
    "url": "assets/js/155.800c0cb4.js",
    "revision": "7d8f72c31e683e7e3737634790b7a3bd"
  },
  {
    "url": "assets/js/156.66d6be8d.js",
    "revision": "2becd2f1282e88c3569183f0d5742994"
  },
  {
    "url": "assets/js/157.c579b922.js",
    "revision": "9032c11031fd826d2a2c9b423db60350"
  },
  {
    "url": "assets/js/158.8f438de6.js",
    "revision": "03236c7b7593a63c54875b8c3bfbeaca"
  },
  {
    "url": "assets/js/159.1bac68ba.js",
    "revision": "a8af0f5c0d83a2a76f29ef8674db0fc7"
  },
  {
    "url": "assets/js/16.03e657cf.js",
    "revision": "340b298a8da0a3cdc169c529821df692"
  },
  {
    "url": "assets/js/160.732e7358.js",
    "revision": "4dd2c298b770e369e03a9ce7e3a98c7e"
  },
  {
    "url": "assets/js/161.a3421a16.js",
    "revision": "2be49f4fa20a5a0158b242fe96bb3365"
  },
  {
    "url": "assets/js/162.768a97d4.js",
    "revision": "5c40229ce08c8cb202f98a359efdcc83"
  },
  {
    "url": "assets/js/163.fcca911e.js",
    "revision": "200ba8466e15caaf19991f2888bdee25"
  },
  {
    "url": "assets/js/164.499d4093.js",
    "revision": "66661de7b44f1f4e7e34317d0a02db72"
  },
  {
    "url": "assets/js/165.27eeed48.js",
    "revision": "348b04180f5a4e05c44e13007f1bc81c"
  },
  {
    "url": "assets/js/166.79a29d09.js",
    "revision": "0ca9fd9eaf51805fa890e45b59ede968"
  },
  {
    "url": "assets/js/167.810a16b0.js",
    "revision": "9a0b44914c795d33f30031daa7a671ad"
  },
  {
    "url": "assets/js/168.ea49cb14.js",
    "revision": "08b0b239f9602269c80ed1d743b69718"
  },
  {
    "url": "assets/js/169.98dbea63.js",
    "revision": "ad7f194864dd2913a2b2bdd887460b39"
  },
  {
    "url": "assets/js/17.eb3ea35f.js",
    "revision": "c2007d219c0b13451b7f5cffc66d38f5"
  },
  {
    "url": "assets/js/170.c7142ecb.js",
    "revision": "85bcc255faf3635bc4b2d9184d6b494f"
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
    "url": "assets/js/175.12948ffe.js",
    "revision": "fe8d66e235780c93948a77ad7c35e6e9"
  },
  {
    "url": "assets/js/176.b368691e.js",
    "revision": "bbdab90d05087edf787e213340a3dbbc"
  },
  {
    "url": "assets/js/177.56b70d56.js",
    "revision": "0022eae6f6b859e9ff3693f09d9002a7"
  },
  {
    "url": "assets/js/178.763b6029.js",
    "revision": "37bae21e6885c449e226bfc7982e8d2d"
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
    "url": "assets/js/182.96e69289.js",
    "revision": "8164fb41edf0ac72c64fbf41cb7218de"
  },
  {
    "url": "assets/js/183.cc4ad3f4.js",
    "revision": "f6262a901a80d2cfcf7774769c88d902"
  },
  {
    "url": "assets/js/184.0c22249a.js",
    "revision": "28dd8c8d489c1bb6d007a3ebfbeb9070"
  },
  {
    "url": "assets/js/185.7278e7de.js",
    "revision": "91a5d8f4635efa1aac7d2262b881e24b"
  },
  {
    "url": "assets/js/186.3b85bbfe.js",
    "revision": "a9952c2d10c1b1c41b3f60cd9fc5ce04"
  },
  {
    "url": "assets/js/187.cdfd0c68.js",
    "revision": "f644c92ca0691bc170a3870067693497"
  },
  {
    "url": "assets/js/188.8efe8da2.js",
    "revision": "51b5efeb05a6c4e18be2477443130f79"
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
    "url": "assets/js/190.565c6f25.js",
    "revision": "bb1d7d5eeda240d62638307dc846aeba"
  },
  {
    "url": "assets/js/191.011e3703.js",
    "revision": "6385738fbea8fbda97383f61575ea344"
  },
  {
    "url": "assets/js/192.750c363b.js",
    "revision": "d9ddaf261aba6d885087b16ddf71c8af"
  },
  {
    "url": "assets/js/193.3c13be00.js",
    "revision": "e0a43b8f98c634f50fcc00f24ccc4447"
  },
  {
    "url": "assets/js/194.4fae137d.js",
    "revision": "bdf9e83d8e6da43acb4dadcd43f6f6ee"
  },
  {
    "url": "assets/js/195.a831f85f.js",
    "revision": "254083c0664c7421cfa79b28dd05c7e7"
  },
  {
    "url": "assets/js/196.875877ed.js",
    "revision": "65c871928d79feca7962338ccd719b31"
  },
  {
    "url": "assets/js/197.6617c4a5.js",
    "revision": "00686ae4cc57669b0b17e4dd198a91ec"
  },
  {
    "url": "assets/js/198.48e71193.js",
    "revision": "0add5b80d661ba02aa9993dc86fe4a91"
  },
  {
    "url": "assets/js/199.3c7084d9.js",
    "revision": "8183031ae2c6b6c2f4ad41d05dec1a75"
  },
  {
    "url": "assets/js/20.f57f6db5.js",
    "revision": "20016233eee9d19782f185f5d172ab5f"
  },
  {
    "url": "assets/js/200.e467e592.js",
    "revision": "6314f8b431dada7cf4f5cfadc15d538b"
  },
  {
    "url": "assets/js/201.3c189e0e.js",
    "revision": "cb313270241a8da115548ca90ae8f7d9"
  },
  {
    "url": "assets/js/202.8aac4c41.js",
    "revision": "1d002a923dac27e0be16245d1fa58fdb"
  },
  {
    "url": "assets/js/203.9cfb544f.js",
    "revision": "c59955df016d7f57969920b9932875fa"
  },
  {
    "url": "assets/js/204.e6fb46f5.js",
    "revision": "5f8b8ca3ab755a60944ffbb82a2e5042"
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
    "url": "assets/js/21.38adb031.js",
    "revision": "86dc3acf5f380b1b25cf9e78fdecbec8"
  },
  {
    "url": "assets/js/22.823906d1.js",
    "revision": "29c2075980157f610409f00324cf8d22"
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
    "url": "assets/js/3.cd0636ba.js",
    "revision": "1312fdd2874c1c794de5d6ad317b3936"
  },
  {
    "url": "assets/js/30.3875ace7.js",
    "revision": "611cf5151a06f33748a30dc7617b643b"
  },
  {
    "url": "assets/js/31.055bc6c3.js",
    "revision": "5d1137de73026eabe8c719a4760fc95d"
  },
  {
    "url": "assets/js/32.ee668152.js",
    "revision": "801c078889e6ab0edf6a23f7873b6b26"
  },
  {
    "url": "assets/js/33.b6e5fcef.js",
    "revision": "ae432350f92b68d735812708109e95a3"
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
    "url": "assets/js/36.f464238f.js",
    "revision": "1bac3e685bfc41a9ff037b804d5a74e2"
  },
  {
    "url": "assets/js/37.40074809.js",
    "revision": "a1d0ab8657de456d1dca2547adfb59ca"
  },
  {
    "url": "assets/js/38.6283358b.js",
    "revision": "cbb435f57367e96d7d5a556ab9cf188a"
  },
  {
    "url": "assets/js/39.c27f70b5.js",
    "revision": "051f99f877a3ec5462c27736ff676850"
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
    "url": "assets/js/41.45227965.js",
    "revision": "1b10ff202439c84b11669e77e63d5da6"
  },
  {
    "url": "assets/js/42.9992cc62.js",
    "revision": "f1698da2fd42ec11800e41a61c1a6db1"
  },
  {
    "url": "assets/js/43.cea728de.js",
    "revision": "5cce8d2b9162e813d8d0b5d8ade78882"
  },
  {
    "url": "assets/js/44.622aaa54.js",
    "revision": "b5bddfbf7655f20856844b6a30c05bcd"
  },
  {
    "url": "assets/js/45.5561aa88.js",
    "revision": "0e2801531d6601c759b1dc84db10a777"
  },
  {
    "url": "assets/js/46.805a4c06.js",
    "revision": "4a70fc62dd463ea45c60eb7a80ab07e5"
  },
  {
    "url": "assets/js/47.507b302f.js",
    "revision": "9d944931824c670a5548cc0b88173d90"
  },
  {
    "url": "assets/js/48.ac8c45c6.js",
    "revision": "4e92d237e8a10bfeda50fef232d724de"
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
    "url": "assets/js/50.b13c5761.js",
    "revision": "53349058962f5ae7eb84a225464ac572"
  },
  {
    "url": "assets/js/51.11f9632c.js",
    "revision": "4cced54e38c7d2f6adc573931cdf1002"
  },
  {
    "url": "assets/js/52.456c9018.js",
    "revision": "a35a19208a0d35c736ad85aa3db62b9f"
  },
  {
    "url": "assets/js/53.e89d84d6.js",
    "revision": "b05b440574cf25168c89233fb0c12158"
  },
  {
    "url": "assets/js/54.89d79971.js",
    "revision": "31b56b8ad49a191134b4051d9dd00cae"
  },
  {
    "url": "assets/js/55.a7793b8d.js",
    "revision": "db752e075a991b622968b44d05cc7ad7"
  },
  {
    "url": "assets/js/56.f503d352.js",
    "revision": "f5b405ab711b602b8634c4e8eb4f4867"
  },
  {
    "url": "assets/js/57.aa1b166d.js",
    "revision": "7a8aa26e81a3bbf498bfefa1ea7e0d9a"
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
    "url": "assets/js/61.36e97c94.js",
    "revision": "b08c9061701a5cc721995560a1965dd1"
  },
  {
    "url": "assets/js/62.788ba555.js",
    "revision": "c4308e674f89284e5af2a14f1e410433"
  },
  {
    "url": "assets/js/63.03ccd141.js",
    "revision": "89489ca471486438fbddd19b49cb2490"
  },
  {
    "url": "assets/js/64.635c72e8.js",
    "revision": "0c8cdb440e28ecdbd124ba4ddd48e8c7"
  },
  {
    "url": "assets/js/65.1e44de4f.js",
    "revision": "a3886f9404447a083efa12dd5aaebc6c"
  },
  {
    "url": "assets/js/66.4ef25673.js",
    "revision": "84866b7d7d8c0c152a9afee879ed9dbe"
  },
  {
    "url": "assets/js/67.d75193b2.js",
    "revision": "19d60e194b3748c79ad31242bba9f36e"
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
    "url": "assets/js/77.8c1f45aa.js",
    "revision": "d02703e46657b8ff8a2434d19e6bb71c"
  },
  {
    "url": "assets/js/78.8c4d3621.js",
    "revision": "6b022b6b09225cddff7d5d808dfbeb85"
  },
  {
    "url": "assets/js/79.8a7b53ca.js",
    "revision": "59e4b7e4c91b68d2cec3610c94b3afb1"
  },
  {
    "url": "assets/js/8.04660745.js",
    "revision": "d037be596c11142abe8df38f3060c50a"
  },
  {
    "url": "assets/js/80.e4887d9d.js",
    "revision": "3449de30af981380edbe50cf0f7aeeee"
  },
  {
    "url": "assets/js/81.20acfdce.js",
    "revision": "2c89718319f5f71d14e2ad7ae5ab1c04"
  },
  {
    "url": "assets/js/82.e416b659.js",
    "revision": "9eabcfa62ab160086f083341fbf86301"
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
    "url": "assets/js/85.1716836b.js",
    "revision": "ed35fabcfdd409d494137d1eaf566e27"
  },
  {
    "url": "assets/js/86.401c6920.js",
    "revision": "ccb7c683e087ebc9b5e8e7b916ef7594"
  },
  {
    "url": "assets/js/87.beb73e83.js",
    "revision": "a13720dc81ae484e92862f7dce20ba2c"
  },
  {
    "url": "assets/js/88.11959f14.js",
    "revision": "6818703d5e8181b228009d0f5c3543f4"
  },
  {
    "url": "assets/js/89.09365400.js",
    "revision": "8dc8db85236fa583c2c749d271dd9ba7"
  },
  {
    "url": "assets/js/9.b082f6f6.js",
    "revision": "b28d5158496dbf880e3d265008afd05a"
  },
  {
    "url": "assets/js/90.bfb06d26.js",
    "revision": "7f7539e4afb2f4a7e50f033567b203e2"
  },
  {
    "url": "assets/js/91.a5d3bfb1.js",
    "revision": "975286ead67f722857390becb36197eb"
  },
  {
    "url": "assets/js/92.9448a787.js",
    "revision": "6e252f615a397e641730c4f62bbbaed2"
  },
  {
    "url": "assets/js/93.94e4d0f1.js",
    "revision": "9e6eb0e21f2ca731fc5b73538e27ec82"
  },
  {
    "url": "assets/js/94.05e6809d.js",
    "revision": "309ce5091377eb71e014c0e8d0e7516c"
  },
  {
    "url": "assets/js/95.1b934a25.js",
    "revision": "4035e9903513429cb4d04ec58a7eed73"
  },
  {
    "url": "assets/js/96.aadad331.js",
    "revision": "a6a44d88f73057859867c4874a52a1c6"
  },
  {
    "url": "assets/js/97.f32882a6.js",
    "revision": "c78d6c0961bae3ea0eceb58eaaf1a38b"
  },
  {
    "url": "assets/js/98.02df8bc5.js",
    "revision": "3157a1d7e3cf09f3f0bf449c22ee4480"
  },
  {
    "url": "assets/js/99.a2a4c3f2.js",
    "revision": "fa38e4f6620ead541043cb8cc89e358d"
  },
  {
    "url": "assets/js/app.0ff12f55.js",
    "revision": "3ef1de8d71e0a1d70242c7d344a3a891"
  },
  {
    "url": "backend/database/index.html",
    "revision": "5f2bc2888af4a90324a01f7f4e524e23"
  },
  {
    "url": "backend/node/index.html",
    "revision": "7936ae9419596d5d26083d9619ec210a"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "c5771613bb0a6d225fc5401198febaff"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "f520de15ba8eec215183a74530e34bd3"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "6e14de16b52d96c7e1ca860870d9c069"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "7d7143e625402d479a78c3c1756fd74d"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "9de5e7bd7498c1d4872a2881594a499e"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "cf085a218b07ac1144a5cc5d789fc1a5"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "743b3d9863696cbf1c288b450afeddea"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "df20073f54bd10423e51bdbb61e79d51"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "dad94025c2171b3d1dd27df7d92fc226"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "c60aee5df62e0bbcb25755c2aa946a3a"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "02f4b3c4e306f06589cad6fac82de7da"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "6190c64f777b861948674e7fb8d8c445"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "3a2960489c7b121e2c923f9162f215d8"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "8dc09998271f25577abe0cfc90608d93"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "9013eff8857429c99aa159670ca92ce5"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "bd4c953b6fb9b49f17f6892ac4c469b3"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "bb30684c0d8ac6e8561013b1859eefbf"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "d0e99bde588e43501c5f0d3940694dc4"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "2aefb24924699210a3c9eacd50160dda"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "fc0a8b09ad4a46d00d0e5e485305d3d1"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "50234cd2b9abeb07d8a4e4fe27eee8fc"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "d027f5f2885a639a3798f3ce8dfe0ff7"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "5ba2903e2b7b4de0793de1b2f17a0d04"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "fffd7bb69d655e2b2794f9ce2e5a649f"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "bdf2e543380b13a269325f25e4a828d3"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "2c050b3cf482636e09474ab0a510435f"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "44009cec42753e940970996f2daf1525"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "57fd735d430a20fbc70d07ee0edde994"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "74108784c5388224b0e1d2e04937c827"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "d1426e1bcfeff5bfa002973d2ff0a060"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "7f8b2b26848f454d0f2de52ea54bce08"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "5946c3d6ddf5eac67e9b1315c9bce0c5"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "f7628025c4b089c742f5770ff349a83b"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "2e373931d873f05e3c043317ebd4cc1c"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "beeecd3a4f37cbb3fb4b77f5813060a7"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "cfcf424f6cd15c9ad3455ef9b683f985"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "0912e60f5bdebcd4d199954936683e57"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "bc95fd12f8672928e780ad507c24a681"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "f1e6bada1f98ba07c4f5d5689c6ac536"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "da0781b4156813de85c7b29bb133eea3"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "72f9278959cf27218e985e0fec1bc8dc"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "045516bec2d46ca1a678cbaa9ba6fb88"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "2b6be07dbc49399b4ba99e8e24f4f6be"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "2b5ca17a4cf29205c1c303d840acbdd9"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "60547d58f23663a3aa14a12b3e4e8023"
  },
  {
    "url": "books/computer/index.html",
    "revision": "23c8d3d11686921b503b50116ebcdf83"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "410633f2702bdde2a479ce4bdee0bb25"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "25e7669eaa965f16cf9476eca27ddeab"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "967937eb322669c6455a7ec46ae3147a"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "502999dc5a9a1de6cdf3ee08514ccb99"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "0b2a32d83c159267fb95634870edf807"
  },
  {
    "url": "books/skill/index.html",
    "revision": "1df9afb83a29ed03254ac38139543bd3"
  },
  {
    "url": "categories/index.html",
    "revision": "8365081927e3a538827b8ee9e5c28faa"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "933d1fb387846e21cd0b421fa2dcd7f9"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "ffb619bcaf690eb1db2f3c68e0313458"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "93085f9c172ebfe6ef945c60406fca70"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "d862c2531dfa280737af4e31ec784d87"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "9e0410bb56cf85edc890ae813ba6f78f"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "fd91ab1f67e62f11ab050cdb595ee25c"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "fb14092cd36c1a1fe50700aa1a5f9b6f"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "4063ae83d92b7bc7166767caa7f9c677"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "744b1d4a3ee442fcc1ba7f0f5613e9dc"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "8f79d4b14f8da6b3f3068ad18d67bdae"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "c1f453a339a0cdf790f397bf01fdc943"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "f0655730e79a9364ef896ee9808f57a8"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "2dfda932feb04f79735e62870c97feec"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "5290c22d1a50f6a7148ba617fefc0cbe"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "9b7f4d0e11d05d60b738b7300f0bd72a"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "ea2c0bfafa302db9a8ff2a2576cf8fcc"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "1d29754ad334a5c81af614c4941c2643"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "b24a9c79f44a08b735f96a85e5f9488f"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "f3625e139407244d7ad4c43f1525e8ed"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "fa7a80f57014e7c4b0f4f9b32d882a50"
  },
  {
    "url": "front/base/array.html",
    "revision": "7ac37a368248679b9b8f275cefa2982d"
  },
  {
    "url": "front/base/async.html",
    "revision": "540fc88833dcbfabf4af982bcbafa951"
  },
  {
    "url": "front/base/bom.html",
    "revision": "9dd0ceddfb4e9aaaaee70e0d846a9980"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "41b1c84c344b997447df2a67f21bd504"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "4d9b3ff60d0c737e5957c2b7aeffb42b"
  },
  {
    "url": "front/base/class.html",
    "revision": "6f863efed9b5971e667c6cf3ee88cb8b"
  },
  {
    "url": "front/base/cors.html",
    "revision": "93696ceca0029904da6bfd5c72e97d1b"
  },
  {
    "url": "front/base/date.html",
    "revision": "2dff92a84acdb2a6133cc6d862ea5bad"
  },
  {
    "url": "front/base/dom.html",
    "revision": "a49b0db285e8cc94f7de906b3281d88d"
  },
  {
    "url": "front/base/event.html",
    "revision": "d07e2f9eb79bbdcff69d842124d3bc0b"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "8315390638feb6b2918fe5beb10471d2"
  },
  {
    "url": "front/base/function.html",
    "revision": "9a1804c73ca91f080544de645992a4a6"
  },
  {
    "url": "front/base/generator.html",
    "revision": "0a86fe4b1afbc56f3430921d04d3dfdd"
  },
  {
    "url": "front/base/history.html",
    "revision": "d78c0ff75b8d519930ecf07ac4890d6c"
  },
  {
    "url": "front/base/index.html",
    "revision": "ce636fd75fbeeea0d92f5ff3799e40c9"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "0bc554ab222502b343b8738903482032"
  },
  {
    "url": "front/base/json.html",
    "revision": "9c5d3663c03bc0c28f5ff6144fbf7aeb"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "a8f2d474c9ab757312c08b2173a64712"
  },
  {
    "url": "front/base/map.html",
    "revision": "1b9253f8209a50147a487f7ba47b8f4a"
  },
  {
    "url": "front/base/math.html",
    "revision": "4bf3148677d297546147149cc97483fc"
  },
  {
    "url": "front/base/module.html",
    "revision": "28a7ddb9104fae0fd0aa383c7d38d747"
  },
  {
    "url": "front/base/number.html",
    "revision": "94c2c48d81815e4cb388e4cb73712f43"
  },
  {
    "url": "front/base/object.html",
    "revision": "50a39ea79b90314fabec708dea70c6b2"
  },
  {
    "url": "front/base/promise.html",
    "revision": "bcd9472b69459f176a211c928bbbf826"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "3d756d1b85c2eac3761f12965b5af8c7"
  },
  {
    "url": "front/base/reg.html",
    "revision": "0e665dd9321241eda1896dc0dd2cdc77"
  },
  {
    "url": "front/base/set.html",
    "revision": "32fe94c68b6c9d1c9bc2282285997f99"
  },
  {
    "url": "front/base/storage.html",
    "revision": "a2ab9a4545ee1ef12b2150ca9858f2d0"
  },
  {
    "url": "front/base/string.html",
    "revision": "d1c57dca68701720cc3a7201b1f6f9d1"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "741edc091f156d76948b4c03a1b1e0ac"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "3e23d6fc196fd38454e25704b94db55e"
  },
  {
    "url": "front/base/var.html",
    "revision": "5aa75f4c1fdbb4fb95fbcd21df5d71f1"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "f4d0008883d1351e10939c2e25050ebb"
  },
  {
    "url": "front/base/worker.html",
    "revision": "632f3ac0a34cf3251cace2b2ce0c4be7"
  },
  {
    "url": "front/css/animation.html",
    "revision": "6bc00d29a02587558a15c59211ecac5f"
  },
  {
    "url": "front/css/box.html",
    "revision": "57842a83243a93863d04e61a45391216"
  },
  {
    "url": "front/css/effects.html",
    "revision": "2716788c4cc97d541f3f103b86a1a55f"
  },
  {
    "url": "front/css/form.html",
    "revision": "b797cff318b82854395c5bfd07ef8c0c"
  },
  {
    "url": "front/css/grid.html",
    "revision": "15c050643fec0cf86663577868f71aa2"
  },
  {
    "url": "front/css/index.html",
    "revision": "a4f8613cd4adc6d0a0b8cfd60c3d83b4"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "d864de4717a607df4bd51bb59cf90bf9"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "3bcec82a185af2bfac26313737b251fe"
  },
  {
    "url": "front/css/selector.html",
    "revision": "c4dd69fd339c2321c034e74b9bbd25d3"
  },
  {
    "url": "front/css/special.html",
    "revision": "f31c10a00a8ac0f5c6de975abdbf1ae6"
  },
  {
    "url": "front/css/svg.html",
    "revision": "34f91c76168abfcfec1df99a055b6c87"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "a2f63c8693daaf640d793dcabb66a68e"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "fdf8702a24f21cd69cf12a362f59c318"
  },
  {
    "url": "front/css/text.html",
    "revision": "6fe61c68dc3a7442c6f73cbbfd3441fd"
  },
  {
    "url": "front/css/transform.html",
    "revision": "16bcc6b5056a635af079c72a48a7e85d"
  },
  {
    "url": "front/css/transition.html",
    "revision": "2caf933e7a5fc1131daf1c7c8402027b"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "f67b060560c4b5a5e186c6b987837860"
  },
  {
    "url": "front/interview/css.html",
    "revision": "7bbe88b2434165ebedf6c8f5dbabc801"
  },
  {
    "url": "front/interview/index.html",
    "revision": "ce8da64b44da8be358253e28962d0de2"
  },
  {
    "url": "front/interview/js.html",
    "revision": "5fbf7bf5339e00b7bfdd29cb13c3b9a8"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "13d69a47b836fe0b490546925e25dd96"
  },
  {
    "url": "front/interview/project.html",
    "revision": "0406844d18a69beb1f945be7ca0a2d6c"
  },
  {
    "url": "front/ios/array.html",
    "revision": "24eaaffe06457c72d7484ae40e9ea721"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "4a795d864331ac2341035668ff32e43b"
  },
  {
    "url": "front/ios/base.html",
    "revision": "734480d7ec80f87841757af8a24ab695"
  },
  {
    "url": "front/ios/class.html",
    "revision": "6de10862950941cfb438a304bca5cf0c"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "8af10e30056c405ec52939719dd78252"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "7f59dfc8fe06eed2f8997c354ade9c90"
  },
  {
    "url": "front/ios/func.html",
    "revision": "be003063193e49c0e141e1496332286e"
  },
  {
    "url": "front/ios/index.html",
    "revision": "bc3903786e10bc9b984ce40419beb18e"
  },
  {
    "url": "front/ios/number.html",
    "revision": "2cdad43f7873c0abc9cd5e5f54040f98"
  },
  {
    "url": "front/ios/set.html",
    "revision": "401f6a2b1b5ee94e2d10fb478b6b4344"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "4784d9a8f9805cbd677bf0a2a7a85376"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "6b556b5392506a6c6ca3f23594ef55b8"
  },
  {
    "url": "front/ios/string.html",
    "revision": "ffb08b1f3fc62ab3e5f04fbf410f8451"
  },
  {
    "url": "front/react/cli.html",
    "revision": "9b20a3c6c8b792befb6a10b5f0e8c300"
  },
  {
    "url": "front/react/context.html",
    "revision": "6db6f40a9900f8a84db5ab3be74930f8"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "cf4af4e8e46764fb1cf57158c59f0e50"
  },
  {
    "url": "front/react/important.html",
    "revision": "c65a6de74e99745322b1dc22c2f492f1"
  },
  {
    "url": "front/react/index.html",
    "revision": "ff84a758f60d963f6982a01401a49205"
  },
  {
    "url": "front/react/react18.html",
    "revision": "81baf6da7cc71a8b101562b046a37c18"
  },
  {
    "url": "front/react/redux.html",
    "revision": "07fb2d8c8e23cc2ddd1e08d903aa511d"
  },
  {
    "url": "front/react/router.html",
    "revision": "5c569a1c913170ce6fe5a1116ff545f4"
  },
  {
    "url": "front/react/scope.html",
    "revision": "ae61e8d97e69f135d627ea28334ae58e"
  },
  {
    "url": "front/react/test.html",
    "revision": "c9aca279b511a275c52d3fbe159097b5"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "eac0dc0f0523a4f98ca785ee4bcf19bd"
  },
  {
    "url": "front/technique/index.html",
    "revision": "ee13c6eb6476dd705fec38d180a475fe"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "955dc13cacb9289f73ae8d1da2c7c115"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "37820b064df85c58a7a4673d5399bcd4"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "f122769d6f6873a965127b412c630e01"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "8fb7bec149b5f007921bf3fd95c4fe24"
  },
  {
    "url": "front/test/index.html",
    "revision": "654416286bc003fbf7ab828add560160"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "3b532230ba3682f207502d595f433bb6"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "fe3399f93eef9c2b0fc51c82aa142e2d"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "961910453baec366c808e4a97b9b82c6"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "18cca9e3202cfeabe4c52caf66b0c7f0"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "262938b12d98e48a4892d799b233d6e0"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "57847d828b2ae1118e2458cccf801615"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "a689a5b8d8c5997a2b8c9d75c65ff75b"
  },
  {
    "url": "index.html",
    "revision": "39400b8d2fdc629ff4a79aae48dd66e5"
  },
  {
    "url": "skill/git/action.html",
    "revision": "3defc80770fdcbb55f33f0fd10e56383"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "0319136f88aebf82225af0a865a14058"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "ef0ea4baba355a22ab50592132d65e8a"
  },
  {
    "url": "skill/git/index.html",
    "revision": "2b850537b00e688b6304cc12a2832ef1"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "26639a0636a0c3cf87e4f5e56f01f09a"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "d749c7046369e0ac248c4f31c6930a88"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "da3229ba3e5661f3a0ac1d02108ddb53"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "2513119cf3b93830f2898195e60014b2"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "4421f49f2e7b933df774f64a6c577946"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "e20ba9360ac6883d4debf7c20553b715"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "8226c56d3c4604d54f35dfb9bb6ce5ce"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "8c0a3aeb8fcd96e2c7da3afaa448a0c9"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "84dfe2adeac07e27c726fb6f5f13f194"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "60ef6fcea656dbccf1fe1f3d947521c3"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "eafc12968db383e86badda3b8288d97e"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "e77fb694349766b63e213d2c1fb31e53"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "33c55de8f0fbdb8c5a00e4d129f87764"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "0facbf97532f24d465c7228dfa398d29"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "e474dcb945a36a058f1252cf057856ef"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "a4cd234f9b9d3d663219db4e2ae84ae3"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "b1920de1de4c90a3d4a2d3647847aac8"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "9aa09e762cadfda0106cd8582c0e0372"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "3ebcc9240976d86ce54b48ffe5c0abf1"
  },
  {
    "url": "tag/index.html",
    "revision": "c7fecb23c221ca9fee00da0702f8276e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "750d8fb124c8caeaf597babfa4f3cc3c"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "8a46b7f9d276455a81e62eb5707e39dd"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "45c29ec5abc1be3167bed9f1b461bddb"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "5cc3e01a9dcf2f948ca8a7db836a6c75"
  },
  {
    "url": "timeline/index.html",
    "revision": "b8b67e4227f9591c23492ff51506ed02"
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
