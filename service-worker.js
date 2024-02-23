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
    "revision": "d23a3e3809b17d7148c38bd09d8e0bce"
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
    "url": "assets/img/textdecoration.1e39c98c.png",
    "revision": "1e39c98c5b10c38201af9e03ea2ed0e7"
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
    "url": "assets/js/10.eb6e90d1.js",
    "revision": "724f61cd3a783a982c5b64ae0c75fe6d"
  },
  {
    "url": "assets/js/100.cd537b9c.js",
    "revision": "6eb39d3974bd27bb4da92340ea457edb"
  },
  {
    "url": "assets/js/101.f0fdcf0c.js",
    "revision": "6c2540221924404e9d2d547dbf129d9c"
  },
  {
    "url": "assets/js/102.ef2002f2.js",
    "revision": "1d1ddfb055810b161752ca12b6161bea"
  },
  {
    "url": "assets/js/103.2a7f540e.js",
    "revision": "bf15b63be4a241bcefb2bc9c5781dbf2"
  },
  {
    "url": "assets/js/104.1fc945df.js",
    "revision": "24e9b8740e9b700a6e865e5243e525c6"
  },
  {
    "url": "assets/js/105.b84cc5ee.js",
    "revision": "118fac8a1cd38e259730989f8ab606c2"
  },
  {
    "url": "assets/js/106.f143a831.js",
    "revision": "81e5c747c42f611c9474cb9f0ec4c0cb"
  },
  {
    "url": "assets/js/107.de538756.js",
    "revision": "9fb8a7d44d7a07078a47ba4d3883a67a"
  },
  {
    "url": "assets/js/108.81079b6b.js",
    "revision": "9f5b3b2fe33775827ace46b4d130e7c4"
  },
  {
    "url": "assets/js/109.3b827215.js",
    "revision": "97ea119b170763457877ac7c5cc36d8a"
  },
  {
    "url": "assets/js/11.160a3a66.js",
    "revision": "cd64063eaff4a64d63246e0233cccaa1"
  },
  {
    "url": "assets/js/110.0459e11c.js",
    "revision": "cd767c6013b740730fb8256badad5ce4"
  },
  {
    "url": "assets/js/111.5892728d.js",
    "revision": "342c81036af41bdf4a3b3b00c91a4524"
  },
  {
    "url": "assets/js/112.47456261.js",
    "revision": "d8ae12e2a44e927e25f6dcc6b3a255e3"
  },
  {
    "url": "assets/js/113.66317ac8.js",
    "revision": "9512c3db1ac73df31156c3e31bedb34e"
  },
  {
    "url": "assets/js/114.16d75d67.js",
    "revision": "f4a993111a070dc291e5a44d63757071"
  },
  {
    "url": "assets/js/115.bb400e80.js",
    "revision": "5651b09bb4534e86ac578b62323d4fde"
  },
  {
    "url": "assets/js/116.bd3f3ee8.js",
    "revision": "2ffda0a8a2eee449f7ab09b10214463d"
  },
  {
    "url": "assets/js/117.5e8c8b6b.js",
    "revision": "5d9cb9b2fd29f2cd0eeb77f726551ea0"
  },
  {
    "url": "assets/js/118.0c3e2330.js",
    "revision": "f5df3f0dcc756edbc52dad1df7c3d89b"
  },
  {
    "url": "assets/js/119.debc2399.js",
    "revision": "f35e00fb002d0ac96baeead1e8f0acf2"
  },
  {
    "url": "assets/js/12.aef6110f.js",
    "revision": "f750d089df709929bdd2e54267529509"
  },
  {
    "url": "assets/js/120.f28e8135.js",
    "revision": "51f24c428137f0307c49b6c841359bf7"
  },
  {
    "url": "assets/js/121.8eb4ed4d.js",
    "revision": "28e56dd763a99e7e85bfd906cd2e935b"
  },
  {
    "url": "assets/js/122.7262e1ef.js",
    "revision": "d36d7dbffa3cae2859cf6fe458125c30"
  },
  {
    "url": "assets/js/123.67230705.js",
    "revision": "b61b7d3cdf13ac233cde3ea7ac29ae20"
  },
  {
    "url": "assets/js/124.178434c9.js",
    "revision": "ce0cf0c5ba06d42ac7de37cade22c789"
  },
  {
    "url": "assets/js/125.65c0033b.js",
    "revision": "348746b11603c4c4e2b70076fdb9a486"
  },
  {
    "url": "assets/js/126.c05a5ea2.js",
    "revision": "944509bb2852071d08dd0a1b2fed8c3a"
  },
  {
    "url": "assets/js/127.79276c82.js",
    "revision": "bc35959509e3c9402a2bcbe11b962a80"
  },
  {
    "url": "assets/js/128.7c365d4f.js",
    "revision": "cb0bd6c3e343e57e434b127d78e9cf75"
  },
  {
    "url": "assets/js/129.e41da9f5.js",
    "revision": "5c64f1960796cfe47c6c204e879d07cd"
  },
  {
    "url": "assets/js/13.b2779701.js",
    "revision": "8f8d474d06cd2424e284560d8dc9d441"
  },
  {
    "url": "assets/js/130.2bc3c785.js",
    "revision": "5fd002996e5a48cba8229bbc1989874f"
  },
  {
    "url": "assets/js/131.4de62855.js",
    "revision": "2ad5675ac33bdcae2ee8ccd1a80999b1"
  },
  {
    "url": "assets/js/132.eb2db627.js",
    "revision": "4e3e2c7e9e09ae2eb7c6eb1a3609f490"
  },
  {
    "url": "assets/js/133.adeec77d.js",
    "revision": "5001dad7e45c5bb1daab1bc6ccff3118"
  },
  {
    "url": "assets/js/134.b62a0af1.js",
    "revision": "8036496eb8729877484e93e111ae2646"
  },
  {
    "url": "assets/js/135.157f8bc7.js",
    "revision": "c75e5e86c9c6f7be61a15d48fbee5485"
  },
  {
    "url": "assets/js/136.84eaaa52.js",
    "revision": "1b9afee2a5cdcec50e625373a18791f9"
  },
  {
    "url": "assets/js/137.452352b1.js",
    "revision": "15676efa43bca6de03805f5a6651660e"
  },
  {
    "url": "assets/js/138.495c3e66.js",
    "revision": "51817858bd4da81c54b67a3d40743dbd"
  },
  {
    "url": "assets/js/139.dc0a2c8c.js",
    "revision": "0bd63f81800bc5fb386d71ff6fca31f9"
  },
  {
    "url": "assets/js/14.c63f97e7.js",
    "revision": "82c9ec54089baec878802c4b51f9b0af"
  },
  {
    "url": "assets/js/140.50f114c0.js",
    "revision": "102d2bdcbdb8c29af559dc60f4c54aaf"
  },
  {
    "url": "assets/js/141.c70a2ca4.js",
    "revision": "707608b7a29185124411f0e4c16d51e5"
  },
  {
    "url": "assets/js/142.82c2763d.js",
    "revision": "dde282cf1c612a55ae09269fc60d7387"
  },
  {
    "url": "assets/js/143.dbc048aa.js",
    "revision": "acd67309c483e30554cc243f40b61ee5"
  },
  {
    "url": "assets/js/144.1483d7c4.js",
    "revision": "09872b33bde9b2072c563ffaba7550f9"
  },
  {
    "url": "assets/js/145.5178d80a.js",
    "revision": "38c9d8b28202f8255684613c49055a02"
  },
  {
    "url": "assets/js/146.1dc4b6a1.js",
    "revision": "95488ba931f428029680d20b68e16174"
  },
  {
    "url": "assets/js/147.f9e84fb8.js",
    "revision": "153e4baadc548f42375314b1a8b8620d"
  },
  {
    "url": "assets/js/148.62835bec.js",
    "revision": "0fece8df080eeb23c03a740caf169eda"
  },
  {
    "url": "assets/js/149.95ef7abf.js",
    "revision": "8bb62109024102d02dc0000366c0537d"
  },
  {
    "url": "assets/js/15.0645a6d1.js",
    "revision": "5b2d7a96f80066c0177a7f443666eeae"
  },
  {
    "url": "assets/js/150.7c6b6c27.js",
    "revision": "b91b8674527aaa61332ef09f00acc01f"
  },
  {
    "url": "assets/js/151.e7e26e3f.js",
    "revision": "ded6a051e06579d54dde53c52fa85ede"
  },
  {
    "url": "assets/js/152.fd242292.js",
    "revision": "37afc4325590be174bef119f620fd009"
  },
  {
    "url": "assets/js/153.08965453.js",
    "revision": "4efec096ce4cfbf0b5f5fb757d8987b1"
  },
  {
    "url": "assets/js/154.c250926c.js",
    "revision": "b3b9de30ae756d38edda8d34f0823f42"
  },
  {
    "url": "assets/js/155.978c313a.js",
    "revision": "41b7b3a7c61d92639e7f196967521e45"
  },
  {
    "url": "assets/js/156.efe962b4.js",
    "revision": "d0907ead36b16ed39670f5007a7ef46f"
  },
  {
    "url": "assets/js/157.63de1f83.js",
    "revision": "f9dcbcd542b5c618dc5d10d06beee46e"
  },
  {
    "url": "assets/js/158.49931775.js",
    "revision": "b2a638bf371079ca203bbc2ba441b6a2"
  },
  {
    "url": "assets/js/159.e6b3f107.js",
    "revision": "5a57dd852bf9a5d5ad286de615c1a4b2"
  },
  {
    "url": "assets/js/16.55fe223a.js",
    "revision": "a1462236e00900f5569b38fb6f4ba38b"
  },
  {
    "url": "assets/js/160.2a78f820.js",
    "revision": "a619ff9ea26e349164d4a593d3acd8f8"
  },
  {
    "url": "assets/js/161.6ea6b33b.js",
    "revision": "b55ba5c6d3d19d0ce72a393963c92829"
  },
  {
    "url": "assets/js/162.38636ffd.js",
    "revision": "dbd930299ddf265efd87ab66ca11f0eb"
  },
  {
    "url": "assets/js/163.f8f629ec.js",
    "revision": "7f8b4f16e06347df4ea5b8b3a95b5781"
  },
  {
    "url": "assets/js/164.dcdfb3c3.js",
    "revision": "0018678e0e3cafbf5bc2a31ae9167cb5"
  },
  {
    "url": "assets/js/165.5f3cf9a5.js",
    "revision": "f2b41ed86edfad24815efe8dbbf782f5"
  },
  {
    "url": "assets/js/166.d912b19d.js",
    "revision": "eefd6dbe594b791f539015bc91730e8e"
  },
  {
    "url": "assets/js/167.ebbbcb0e.js",
    "revision": "34fcce0064745ced021d028947ee0e89"
  },
  {
    "url": "assets/js/168.6fe96b19.js",
    "revision": "d49b778da21cfbd59097a261335d737f"
  },
  {
    "url": "assets/js/169.8a8ebb1f.js",
    "revision": "93a31f7ec03498f52c5eaaebe1ee7f55"
  },
  {
    "url": "assets/js/17.63db0395.js",
    "revision": "59826d0ff72d3cce26413b9e6045823e"
  },
  {
    "url": "assets/js/170.0cb200cb.js",
    "revision": "5dd2b3988d46d0163e843c02beb1bda6"
  },
  {
    "url": "assets/js/171.703d2f1a.js",
    "revision": "454832741b564a448d37fd7200ee8603"
  },
  {
    "url": "assets/js/172.266e3a8a.js",
    "revision": "e6efbf1c55f2541ad402c9f0a6b3edbe"
  },
  {
    "url": "assets/js/173.3f94e059.js",
    "revision": "e9546d0c595b55db4ddb8194dacd1255"
  },
  {
    "url": "assets/js/174.c21ebbc7.js",
    "revision": "4fa4fa8513c908a523c6e470ea7f3b21"
  },
  {
    "url": "assets/js/175.61a1fb96.js",
    "revision": "6f80bc6e62e5a8d18ad03b654961e71c"
  },
  {
    "url": "assets/js/176.a3344515.js",
    "revision": "2a38e4b35e88fe1fe7095358a19da5ac"
  },
  {
    "url": "assets/js/177.c6a04b53.js",
    "revision": "134cfd9dfb9dd8779779a4b46f426e05"
  },
  {
    "url": "assets/js/178.b26fddcd.js",
    "revision": "481894a3f61a3123e1d5cfc9be84af4a"
  },
  {
    "url": "assets/js/179.6e442361.js",
    "revision": "23dc38817ff883256d45cd8e94802e2e"
  },
  {
    "url": "assets/js/18.0ff34d13.js",
    "revision": "79c91393c9308ecfad8125e078de26e9"
  },
  {
    "url": "assets/js/180.be407778.js",
    "revision": "e5b87699fbf339822e872d8b60cdf030"
  },
  {
    "url": "assets/js/181.718d7c4e.js",
    "revision": "0c908891d5d607a0db7e48ac52486cff"
  },
  {
    "url": "assets/js/182.7e6d3ff6.js",
    "revision": "3355488d3368a5c97387e569bf642085"
  },
  {
    "url": "assets/js/183.2c679a61.js",
    "revision": "219f47c59b2eb9b3cf1d47677fc53b1d"
  },
  {
    "url": "assets/js/184.b80d5999.js",
    "revision": "fd3aec9b702fdd5a44565e2f36c02c46"
  },
  {
    "url": "assets/js/185.bd6f5f09.js",
    "revision": "d8e09ac1e3bd1c493e0ef7e4750adc28"
  },
  {
    "url": "assets/js/186.83e56691.js",
    "revision": "851771f99b21409b7dae802c6d92b2df"
  },
  {
    "url": "assets/js/187.d73a3cc3.js",
    "revision": "9e6ec100922fbcb147417658f1c32c6a"
  },
  {
    "url": "assets/js/188.7383d475.js",
    "revision": "862b39c9782995ee8b4e740aa794c548"
  },
  {
    "url": "assets/js/189.96acd149.js",
    "revision": "6df093eb05da32c05fc0970949bf0f31"
  },
  {
    "url": "assets/js/19.4355e600.js",
    "revision": "a5dce519aa9f861b0c3e41086c427374"
  },
  {
    "url": "assets/js/190.9ebd2ed6.js",
    "revision": "a7f3d0e7d907a9e187a84c4a004ff81c"
  },
  {
    "url": "assets/js/191.70b4e984.js",
    "revision": "236c93941030a8f75a72b8eee320744d"
  },
  {
    "url": "assets/js/192.5b46a272.js",
    "revision": "74b766710e3e6b6920e81582219b0b82"
  },
  {
    "url": "assets/js/193.6f295c49.js",
    "revision": "b4d3ca0fc0a2d1fd0ba6e3705d21ccde"
  },
  {
    "url": "assets/js/194.66dc43a6.js",
    "revision": "2654181144c70ee1805bef9c67e620a4"
  },
  {
    "url": "assets/js/195.4f8842d5.js",
    "revision": "2603650e398755b96791e5f7aa4f4a15"
  },
  {
    "url": "assets/js/196.fea1d721.js",
    "revision": "0edd7b136ec7fa50b0d0d899ed7e2284"
  },
  {
    "url": "assets/js/197.45609cb4.js",
    "revision": "5da609e2fe39a9c564e2c67d97b60b8f"
  },
  {
    "url": "assets/js/198.4f786bb5.js",
    "revision": "bcc49e607bf66d16d4e67a775b9b6587"
  },
  {
    "url": "assets/js/199.b5edc055.js",
    "revision": "9ff284e449637711e58d289416018273"
  },
  {
    "url": "assets/js/20.8d30d4d7.js",
    "revision": "bb4b21f4fa07273795e8f5dd04af010b"
  },
  {
    "url": "assets/js/200.592fe250.js",
    "revision": "bbb2a910f9904e00768f533b83116a8c"
  },
  {
    "url": "assets/js/201.993e7413.js",
    "revision": "67230b8ba34536968fac7fa88f8cc41e"
  },
  {
    "url": "assets/js/202.105fa150.js",
    "revision": "be0665026187551510f6a152c5c7d658"
  },
  {
    "url": "assets/js/203.23cba935.js",
    "revision": "40087a427d767c8eab435be64b8d4fa4"
  },
  {
    "url": "assets/js/204.a0096ff4.js",
    "revision": "c4ab9fcb3815fd12a14f7df600b003b2"
  },
  {
    "url": "assets/js/205.5ce018dd.js",
    "revision": "2c1a0eb5249858a19da362dbcca62d6c"
  },
  {
    "url": "assets/js/21.fe23bdff.js",
    "revision": "b0cfa3497037c8475d44c565e5411572"
  },
  {
    "url": "assets/js/22.2bb91c80.js",
    "revision": "b1b7a7a9de4a7a49bb23e5b60989ee01"
  },
  {
    "url": "assets/js/23.fe8d5c24.js",
    "revision": "822a274662a4253c29330a10aff70871"
  },
  {
    "url": "assets/js/24.6471f501.js",
    "revision": "6bf9230bbe77ca454d494ded8ac0efca"
  },
  {
    "url": "assets/js/25.a4c08060.js",
    "revision": "ba1cb57ec71ee3ed93ff810a75e2203d"
  },
  {
    "url": "assets/js/26.263e4120.js",
    "revision": "1e386dd96e866ddd11d20ea03f5cf993"
  },
  {
    "url": "assets/js/27.85d5c7d9.js",
    "revision": "9d10eb3c25f8cccee625a60fff0a13ba"
  },
  {
    "url": "assets/js/28.ff75990e.js",
    "revision": "d276f0e8067e5862e6f727b0ec4e07fb"
  },
  {
    "url": "assets/js/29.2cc54603.js",
    "revision": "3ece941e3cc8a10a387ab5155dd149a1"
  },
  {
    "url": "assets/js/3.be2f49a6.js",
    "revision": "263c97ec97ec03ed50f8db088c22b565"
  },
  {
    "url": "assets/js/30.698edc0f.js",
    "revision": "98b651887630b003b822c36723a17148"
  },
  {
    "url": "assets/js/31.98467ed8.js",
    "revision": "c3cc46c68bc14fd9eb0546f969dd8a13"
  },
  {
    "url": "assets/js/32.830a81c2.js",
    "revision": "c0045788c1b5a284bae4e7718d56e30c"
  },
  {
    "url": "assets/js/33.9616216c.js",
    "revision": "a1e0142145af674e2a33f527be5f848a"
  },
  {
    "url": "assets/js/34.c68b9cbe.js",
    "revision": "bf85dc5ad45a869c2657d73f7ac66d97"
  },
  {
    "url": "assets/js/35.88a68224.js",
    "revision": "4abf9688a2eae8d39e280967d998d6b0"
  },
  {
    "url": "assets/js/36.3361f1ea.js",
    "revision": "472d28250be9766316a5d808d3edc252"
  },
  {
    "url": "assets/js/37.8327356f.js",
    "revision": "5b3f819000ea7180713f053a76ae32dc"
  },
  {
    "url": "assets/js/38.fdb34025.js",
    "revision": "560863969f1899dc037f0a05aa7afa69"
  },
  {
    "url": "assets/js/39.7ef28792.js",
    "revision": "a82f80295c543404cfb1108f0fee99b2"
  },
  {
    "url": "assets/js/4.2fd69b3d.js",
    "revision": "de89c0d1b56c73c928430fbce73d5fb2"
  },
  {
    "url": "assets/js/40.e52b0592.js",
    "revision": "d25742b183ab300565f44bd4a7d8c0a0"
  },
  {
    "url": "assets/js/41.885dc6eb.js",
    "revision": "29c8c85304f0919520bc5c1bc20d7b47"
  },
  {
    "url": "assets/js/42.346a734f.js",
    "revision": "70e2ae766cbf567fda930a6b5b352bfe"
  },
  {
    "url": "assets/js/43.78af645d.js",
    "revision": "19ba49534222b5703e03c4236cc369d0"
  },
  {
    "url": "assets/js/44.c5929116.js",
    "revision": "c4e747f5ebcc0f06cb28016aeed4b10d"
  },
  {
    "url": "assets/js/45.9c66bec3.js",
    "revision": "820881e2de6e6de508e7171ac5dd95cc"
  },
  {
    "url": "assets/js/46.ffdfbbac.js",
    "revision": "09fc2e7cd45773785acf616fb65906e6"
  },
  {
    "url": "assets/js/47.de44c25d.js",
    "revision": "9f441bbf330fc571bfb9db26dabe5ac6"
  },
  {
    "url": "assets/js/48.81b34341.js",
    "revision": "06d706861bb308975b032b9434df74e7"
  },
  {
    "url": "assets/js/49.7c01a7c7.js",
    "revision": "f0974a64f8a2920202045a7dcc1d640a"
  },
  {
    "url": "assets/js/5.0648fa57.js",
    "revision": "923419a932e8dd3c50fb795d9b0899d1"
  },
  {
    "url": "assets/js/50.b78eeb45.js",
    "revision": "1ef26bf3c1d5c050832e3db35082517b"
  },
  {
    "url": "assets/js/51.04e0735f.js",
    "revision": "b9e63c0df94170cf372b6d751f2c804a"
  },
  {
    "url": "assets/js/52.b5bb0447.js",
    "revision": "5bf42f06bc891e28e962405abf758a57"
  },
  {
    "url": "assets/js/53.b3faa1c6.js",
    "revision": "e901ece70ec73836cb85bc43498205f0"
  },
  {
    "url": "assets/js/54.0e503278.js",
    "revision": "56ae651a1f64b29013425c9bf12e4981"
  },
  {
    "url": "assets/js/55.df0c48b0.js",
    "revision": "3008c4b27b4f6b6bd83ede43f719854b"
  },
  {
    "url": "assets/js/56.abb249e4.js",
    "revision": "3e6ecc86a6a469d323f634dd70daeef3"
  },
  {
    "url": "assets/js/57.2cda47e3.js",
    "revision": "6e6136b49566fccf8a5ce65837c14360"
  },
  {
    "url": "assets/js/58.71b4914c.js",
    "revision": "cd0c526e28fb38856dfcd91fd9affef9"
  },
  {
    "url": "assets/js/59.82741ba7.js",
    "revision": "c28eace8959a75a96901475ba81c8599"
  },
  {
    "url": "assets/js/6.c48b701d.js",
    "revision": "804c09ef8cbc93d124a094268d38395c"
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
    "url": "assets/js/62.6c606ee2.js",
    "revision": "ffc146b6c31ac2fb6fd978cb30c01fbc"
  },
  {
    "url": "assets/js/63.7e5c257f.js",
    "revision": "14a992fb81cbca21279b7848c6da8f3c"
  },
  {
    "url": "assets/js/64.b2eb4edf.js",
    "revision": "9e0b27d8f245d36e308b2eecde5a6964"
  },
  {
    "url": "assets/js/65.8275895d.js",
    "revision": "81220cddbf3d2e42caf075e172c24911"
  },
  {
    "url": "assets/js/66.98feb3a7.js",
    "revision": "6572c11d45c99ee4b76a9af1f856baa0"
  },
  {
    "url": "assets/js/67.429230ad.js",
    "revision": "1871792a1b9e3dbd634172bf13123326"
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
    "url": "assets/js/7.242a802c.js",
    "revision": "8074e4a39a7b572c54865ab378fe8596"
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
    "url": "assets/js/78.4ecade39.js",
    "revision": "180fdcccbbc0a472e5b0607b7a368f22"
  },
  {
    "url": "assets/js/79.45155e57.js",
    "revision": "c18b21afe8d5adaaa076436a06d69942"
  },
  {
    "url": "assets/js/8.71e66960.js",
    "revision": "0343aa82b10130e599c3a96b07c61e37"
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
    "url": "assets/js/9.f3662153.js",
    "revision": "7d9842983444981db4190a924b89c1b9"
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
    "url": "assets/js/app.e1057b8d.js",
    "revision": "cb970255596cf70492ff770590df0187"
  },
  {
    "url": "backend/database/index.html",
    "revision": "f2af25489e702313d70edd0fc1dcaec5"
  },
  {
    "url": "backend/node/index.html",
    "revision": "77ac402e11d1b8061824904106b340d2"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "a86b0dc1ccd5fa3ae57cafa0c60bb231"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "4666e4db738ad8638f60337ee1741e5f"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "4f861c4e1a31a7644d497ea32627fe4a"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "bfb55695bbc78288afdd65544add0aa2"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "5b2482a68da3d783515bd3fa004e956e"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "ee6b81a95c4b70a72b4d404415de9c1a"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "13a304a2d28235385d03e804b1b2b463"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "10667c576e827697af4804e1b00eb9c4"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "8cd262c607cf3de30ff9074780c3531a"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "cd002aedee8e9019ffd9c7747d58be5e"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "1a30de4af35a3a54df33dfbeb168081b"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "1aa35aab637c31434c2b8ccc3058c69e"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "b1af8b4205783f316ab570d57ce37410"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "0bde705463605e800883d39fba5a79aa"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "139189f9a6c5cd76d6e0c1b86e00e708"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "8bc44285a2b093e72faa6d3b8679f3d1"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "56aeb8769319cacd635bc4d519160d81"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "dec82059eda77b00b2c53373a869f2bf"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "f9d7aad0da562e704cd940d97ad27252"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "18b33e539090212f177e02d198ebfcaf"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "2efa7d55a8aca8569642d432aa1a366e"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "e8a8655f271929bcd08ccb94c83c2e9c"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "415e49d0eb91ad13edbf74d77be2a684"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "6a7eb47ccaa7d9cf0ce84501860e2799"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "e475a27efbb84b35eb2f8efa85b11045"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "9a94e0db21f40ec7d91c440165a2e4c4"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "e2b041148314e4c55be05a8c4ce2f63a"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "4f770c7934561a45758d65250abad00f"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "7e75a3641148f1390155d52d35dbdd3c"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "99f782ce4c2304f16a7813321452ca33"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "297ebcdc30cea5a4280859e15d9a28a6"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "9b4d790df6be9be99bafca86012cddad"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "9bc88fa7ce87c99c1e2f2616f9a005ff"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "65b1ca7f34b4f3844b513b67794117ce"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "7e21bf9373cc783dca6433f8d664adaa"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "4249d99ccdedf48d856fcd6599d6a921"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "29c920d2fb593c59d3b55343c5445a02"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "19a2d0921c7cdc4f9a7400a31a527486"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "0aee8a2920326f8361ca9557e8928912"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "65394390379e612367feb6add735cd3a"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "ab79d3c6fefcd49a3f3f3ff3b54f9646"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "6fd8da9efb8d6ebc45667d5ffb5c76dc"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "42ebdf3263292902c91c5325267f1bbd"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "7f5f93cea3289fb04ae218ffbb31a7f9"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "604485e74008a95e5aea28b45f81a5a2"
  },
  {
    "url": "books/computer/index.html",
    "revision": "effa51b86208b33c86258fe83b7595b3"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "9004f21af46823ccb0f02a21c50bdfc2"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "7db76fe5258ed61c7c46a654406bf04e"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "88a1b30dc02a5e2e1d460323d5320a17"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "e362ae724bdaa8380606dc0f78a8e63d"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "01d1a39675def12a3e8b5bd1f6a7ef9d"
  },
  {
    "url": "categories/index.html",
    "revision": "e4793f7d412ab4445e9d6540a7447d88"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "a7c103a9a6b1598d3ed807cdf153f088"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "84d1f8edd2f96e071c1d62ae0af1f133"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "74c1fa037070b247d539e2d3b1cca374"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "05c530156211f4a07480d0b3212894a8"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "096a1d2d1723622d93de49d50148bf87"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "49e359eaa8ddacb36f9dee7a284c8c5c"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "5506b58db198c7bb3bb6b409e536e54a"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "15fbe028ca7b83a0a7cd2ab9c02d6b39"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "7eddbfed1eabbe77360341d50a59920a"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "43a5eb01cbb0e1e8bd1f995d51e7eeac"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "4350edf8682468d0c394ce741a7d46c4"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "a2e2ca68d7903163773132fcd75bc574"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "651686773850c11cadb006848f268f8c"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "c2345cccaadcd73effd462048a66f3b7"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "5a7e2c9cd20661e024200da0de44df40"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "04e213060bc4e3b3a07e9a3366046c81"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "1950b264eb1adb527ba30312105997d5"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "3767476e65f0b20522b7081c5b745121"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "60d64c97b3e14f7fbdd348c1efad77a6"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "e5c5801530d4a84187e61a385a66987f"
  },
  {
    "url": "front/base/array.html",
    "revision": "6cd89542c8951521dbfaf2de2d74af5a"
  },
  {
    "url": "front/base/async.html",
    "revision": "051e69e187eef63dca120953a1aacdea"
  },
  {
    "url": "front/base/bom.html",
    "revision": "b35bd12e5ac96c4dcbed95911c7329a4"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "fb3477bda331cdbb8524fbebabd124c3"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "6e0abeaa7e4ce2dfa3be98db00bab166"
  },
  {
    "url": "front/base/class.html",
    "revision": "8caddf55e613548aa6189ba78e6c768c"
  },
  {
    "url": "front/base/cors.html",
    "revision": "71218d2a293b054d16dda8bd110fabd3"
  },
  {
    "url": "front/base/date.html",
    "revision": "d6c96c1bfc47540013b74241a6c971fc"
  },
  {
    "url": "front/base/dom.html",
    "revision": "98c4079d37c1aa7a50c71b6c1b5664ce"
  },
  {
    "url": "front/base/event.html",
    "revision": "1c48d302a686ef2cae47106de62a4f08"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "5afd6fbd9f29cbb6b8008767497dd2e4"
  },
  {
    "url": "front/base/function.html",
    "revision": "a97ae639cab65a944879e0e2a4ea4053"
  },
  {
    "url": "front/base/generator.html",
    "revision": "d8b0d73651846e60a6a78a586d569f5b"
  },
  {
    "url": "front/base/history.html",
    "revision": "faa9d549066695c465a4dec1c52fd357"
  },
  {
    "url": "front/base/index.html",
    "revision": "ed3d9bb7a0cb21f85424990788ab5c6b"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "ef1f7ec2afbcd4542792066e1b332209"
  },
  {
    "url": "front/base/json.html",
    "revision": "e01d54c6dea691b194d66cc2dcd23913"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "991219069ea47cbf219b1ac0e641c33a"
  },
  {
    "url": "front/base/map.html",
    "revision": "c893ecc50d6334e32fbab08050fd6ab2"
  },
  {
    "url": "front/base/math.html",
    "revision": "127a9d8ee073b158030307cca1986cb3"
  },
  {
    "url": "front/base/module.html",
    "revision": "dbee82447e36004714329c1e159b0f62"
  },
  {
    "url": "front/base/number.html",
    "revision": "015997a5cb01f32b8db25de0c5968e67"
  },
  {
    "url": "front/base/object.html",
    "revision": "a62beeb4657cd6b97426afb384060f35"
  },
  {
    "url": "front/base/promise.html",
    "revision": "9ede7a2c995b1fdf1586778f01a03ea4"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "0f48d14d9896715d712231d18a4a4fa6"
  },
  {
    "url": "front/base/reg.html",
    "revision": "1fc2cc5faca90f131dd6519e42787a74"
  },
  {
    "url": "front/base/set.html",
    "revision": "3dd089a2f0f4d70453fb3520098418f5"
  },
  {
    "url": "front/base/storage.html",
    "revision": "f1d20ca6c8c0927b6e4f6ce7d0c87285"
  },
  {
    "url": "front/base/string.html",
    "revision": "15b80db5c7be52cb701a8260e8b24f1f"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "2e7307ea028762df1566b0b4e2b52056"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "a7897bdd468111ce60c164cf3262f0f2"
  },
  {
    "url": "front/base/var.html",
    "revision": "f9714a1e38d1ba92455cb9ce966cc721"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "a26d0eea63d02b9878d4b31324b6b4de"
  },
  {
    "url": "front/base/worker.html",
    "revision": "18c0210b2a5e6d59d89c06a328d24574"
  },
  {
    "url": "front/css/animation.html",
    "revision": "109398f005c5a2ab3270ef275a75d960"
  },
  {
    "url": "front/css/box.html",
    "revision": "2512f1934176c81fc0a2f53858b4ab2f"
  },
  {
    "url": "front/css/effects.html",
    "revision": "2bb78fc2042513385b4ae47e5d72fa8f"
  },
  {
    "url": "front/css/form.html",
    "revision": "2e5c44a0afff8d52daa9f8b9d51f0e84"
  },
  {
    "url": "front/css/grid.html",
    "revision": "8e36652fdc809e96e6e175d09e815038"
  },
  {
    "url": "front/css/index.html",
    "revision": "c8949e6ac9369542af1f63509051c8c4"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "6c0a6a66db0cc0f18c027fefb52035a9"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "1da7cd6ddd8ff84da58fdeba68eef9b3"
  },
  {
    "url": "front/css/selector.html",
    "revision": "9e91242497b1b5e7681ce9ad6dc6ada9"
  },
  {
    "url": "front/css/special.html",
    "revision": "55a236ab4b3c1972438ecfa67f32094f"
  },
  {
    "url": "front/css/svg.html",
    "revision": "53a3bb0e19886a37c9859d1893a86640"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "2c1fae57026165f17cbcca85cceda906"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "d995f336ed0ddee0466080256b703452"
  },
  {
    "url": "front/css/text.html",
    "revision": "e004bdf8d8d31516781dff9fdad7f818"
  },
  {
    "url": "front/css/transform.html",
    "revision": "8e951c3bda3f078b8b5c5438bee2956b"
  },
  {
    "url": "front/css/transition.html",
    "revision": "18ca113a3d0b9bb57dd7194e5b8655f4"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "5f6a94a579299d2c716f0142340d1fdc"
  },
  {
    "url": "front/interview/css.html",
    "revision": "45b639753f8f929352013ce4f15e19a0"
  },
  {
    "url": "front/interview/index.html",
    "revision": "4e0d18315778a40eda6fb631fc721ca7"
  },
  {
    "url": "front/interview/js.html",
    "revision": "81c0294bf48ca183f568ddf3bfabcd0f"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "53abbfe7bef05ab6c2a2d4789fcec1d8"
  },
  {
    "url": "front/interview/project.html",
    "revision": "8a30ee5dbe5a69f2a92380488adbc7fa"
  },
  {
    "url": "front/ios/array.html",
    "revision": "6d178a96393724800c5c12c576c0118c"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "57d2ffa90649f2df0bee991c5079f3ea"
  },
  {
    "url": "front/ios/base.html",
    "revision": "7478223b3730ade372742dcb640bf3f0"
  },
  {
    "url": "front/ios/class.html",
    "revision": "49224e3c4fb6b279a306b25943648a53"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "f673dfcfeba37678a50a59c43903dc87"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "763f1960d5607c4f6ff617dcb948e061"
  },
  {
    "url": "front/ios/func.html",
    "revision": "1e53e57a6d127ed75b3babc9cb978db4"
  },
  {
    "url": "front/ios/index.html",
    "revision": "4cc7a82aa0b3185eea08789040eba66f"
  },
  {
    "url": "front/ios/number.html",
    "revision": "a8cab42ac15a515eddff3e2a4b42542a"
  },
  {
    "url": "front/ios/set.html",
    "revision": "507c7ae4ec8131f72ef1ba0b18827a5e"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "8df6823900bd44e39142d0b764578245"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "359e260eb52a9a6319b58afd2a327687"
  },
  {
    "url": "front/ios/string.html",
    "revision": "d3150c2b326853856a00aaaeb37704b1"
  },
  {
    "url": "front/react/cli.html",
    "revision": "242cb0f08f762e39dd519404016470fd"
  },
  {
    "url": "front/react/context.html",
    "revision": "563cce05f1cd0d69a37a7a72ee563968"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "ab1ff5d64a41482ac24df50468e3e45a"
  },
  {
    "url": "front/react/important.html",
    "revision": "d6123a39901358a8063921dac05dbd06"
  },
  {
    "url": "front/react/index.html",
    "revision": "c2e2b9afda8df215b422bb240830cf57"
  },
  {
    "url": "front/react/react18.html",
    "revision": "3dee8d80c48f69cc9da0389385b9526d"
  },
  {
    "url": "front/react/redux.html",
    "revision": "4d8bc3422416a0437582224d99bc0f45"
  },
  {
    "url": "front/react/router.html",
    "revision": "5eec5745cf113b8ce60e15eddfc580d5"
  },
  {
    "url": "front/react/scope.html",
    "revision": "d02c1bb17b2e22a54062cb7552a4be43"
  },
  {
    "url": "front/react/test.html",
    "revision": "ae66bd33de3c6037139c51c522162072"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "5a04990230def9e9b48e4a43e65bbe03"
  },
  {
    "url": "front/technique/index.html",
    "revision": "922b79d2c50c9b2ef2bc89ab17c8d4fa"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "6258738f4b4abefbb441b5efd170c9ff"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "b23826f600d9e1dcb6c09419093378cb"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "d901ffd0bc101ceecf343ab6bb779b99"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "88adbd04b0fdf7c7b96e3074db684551"
  },
  {
    "url": "front/test/index.html",
    "revision": "b1e1a26a065ce16d9234bafd9ed64db4"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "e7e81220f2f00d070e9d2f2f5c798eff"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "e92b8ff4e0748d22db6eeb664bca81fc"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "c3a08f3fc7caf0e5957c5decdd16be77"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "aceeb3945f0a34b857fdcf2d887a6cb6"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "a9873b3d30e894d1c358e8e80a448eeb"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "122d4036510de0c15f99968217e1efe8"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "0bd9a7e7158c38df449a8579de281c26"
  },
  {
    "url": "index.html",
    "revision": "12f0e0d567d4e1ef021419f29e0fb92c"
  },
  {
    "url": "skill/git/action.html",
    "revision": "5027bf1009ca3585ffb1812910f9c31c"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "8527fd19d116d0e1d65f0d16670c5b12"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "0465ac3655834b6b9cb8f5c0dd7b8757"
  },
  {
    "url": "skill/git/index.html",
    "revision": "b963621b245f3f7a8a8b1470eefe4626"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "f21de90a6fa62938728e7f473dc4214c"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "705ede0719d57454c7798cb0670214f2"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "fe39728ba7cae024e30c98c16524cd4a"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "799a4f503aaea58da446b4f64e3f60bb"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "2172f1248c895f5707b3bfb283d5a301"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "3966a28050c680d7e18d3257ba8efd77"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "ce62b6a6127224bee52fd551e4cc2319"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "537832f8a8db8c8dedc6bfadf4e507c6"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "068d0437e6a52e563465be51408d867b"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "03e0865432da65e7ea504e7f9f5d217b"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "fba0c82b210b89b199b3b85fef737f5a"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "63f09bbabdf7f08191d5a5f99d127539"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "7aa47c8e9f8ce1d3256bde7f7bea2738"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "2ebc6573d986640e4c47faf642c27fac"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "c292a0023843c0e020f18ee000f6a825"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "693f9dfbc077a55626ebdc4cc4161288"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "fbe54896110dc0b16cc879f2182631d8"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "b119d3cf2484a8e1a4866579924a4138"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "ef2f77fa6b876407f27abeada14e0e6d"
  },
  {
    "url": "tag/index.html",
    "revision": "d4397d6954a8d2bc570fb9f1705578d1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "03b1c6136444ecf62d153afd99a4e9f0"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "f2fc7157e0048ac42f286793d3eb8991"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "bafe99be02ffb571e63658267afc774b"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "01861bb74286d63cc0d3459a406602fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e6264d8173d3721a8f36871ee2021dd"
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
