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
    "revision": "92652ad406b83348cef8e10227914776"
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
    "url": "assets/js/10.87fff311.js",
    "revision": "b708862abb8a16b757d34704abba0f5e"
  },
  {
    "url": "assets/js/100.0158c20f.js",
    "revision": "a2891033e0bc8ae38018b00be0ba6e29"
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
    "url": "assets/js/104.b87365ea.js",
    "revision": "acbd625218ac05260c4d131fba39a62d"
  },
  {
    "url": "assets/js/105.662acb10.js",
    "revision": "38004fbc8dad2b5f9cff02aa8b9425d5"
  },
  {
    "url": "assets/js/106.196e8c29.js",
    "revision": "ef4e9496d4d98472a6beeb768be564cb"
  },
  {
    "url": "assets/js/107.4caf755b.js",
    "revision": "213ec24972c531d2f4e497e57dda3363"
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
    "url": "assets/js/11.33657b80.js",
    "revision": "75ee5d88507a54623d1bcefd0821dd96"
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
    "url": "assets/js/116.49fcede2.js",
    "revision": "e8276e824707620c7c919143532ac92b"
  },
  {
    "url": "assets/js/117.40decb51.js",
    "revision": "5ce4bd4503c9e8abeb44a509af0ec0a1"
  },
  {
    "url": "assets/js/118.0421e9c4.js",
    "revision": "6dca0a1642bb7855d80c4edfad523ddb"
  },
  {
    "url": "assets/js/119.b9fe861a.js",
    "revision": "754a9bd09403f2865e359413572e71da"
  },
  {
    "url": "assets/js/12.8531fb1d.js",
    "revision": "5a9e365b1aadbfe6e6b22bb5204c1a21"
  },
  {
    "url": "assets/js/120.96b56498.js",
    "revision": "842cfe2e74448eeb2234ea2300ccdc34"
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
    "url": "assets/js/124.f257d697.js",
    "revision": "fc773b2508dba3e66e8932e95220ce7a"
  },
  {
    "url": "assets/js/125.1fa26bc5.js",
    "revision": "5f44d8f60e7ef05257eb7068e6034515"
  },
  {
    "url": "assets/js/126.44105c3a.js",
    "revision": "a8a2b54b08606b92b8bb627a5e58f063"
  },
  {
    "url": "assets/js/127.f90460fb.js",
    "revision": "a7a067587dcff673b6b42a4fc23ed8cf"
  },
  {
    "url": "assets/js/128.ff859624.js",
    "revision": "bb984326a0043b1067cc911bf946147c"
  },
  {
    "url": "assets/js/129.2d8d5f60.js",
    "revision": "6cb629cf6524e8f51792493fc70c7f1a"
  },
  {
    "url": "assets/js/13.de14c201.js",
    "revision": "b27f28262a1cc95ed8052baa41449040"
  },
  {
    "url": "assets/js/130.be2ef823.js",
    "revision": "d275af9589180d36e964146fd7b418ad"
  },
  {
    "url": "assets/js/131.1d13af0c.js",
    "revision": "713292841141632ea1caa80f05a45d8a"
  },
  {
    "url": "assets/js/132.a47fc80a.js",
    "revision": "ea23a898c789ba696d0681753f9f1c0c"
  },
  {
    "url": "assets/js/133.dbb976f8.js",
    "revision": "13be4620661f15554ded4ec37c126180"
  },
  {
    "url": "assets/js/134.0503cad4.js",
    "revision": "f52d547552afa1e41e25d640454d4c88"
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
    "url": "assets/js/138.db29873d.js",
    "revision": "3c9e978bf415220dd77903ef83cf1400"
  },
  {
    "url": "assets/js/139.dc0cbc3f.js",
    "revision": "52f5610117f88c0fd7d4aea8ca9376f8"
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
    "url": "assets/js/145.cc9eaeea.js",
    "revision": "2493c555b4f00be645a62f31a85a667b"
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
    "url": "assets/js/148.ac37cd45.js",
    "revision": "1c0f40af7fd231fdc257b92acf5a2210"
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
    "url": "assets/js/151.a203dcf9.js",
    "revision": "5f5e967b72724e8b4fb7ec3aab561a2a"
  },
  {
    "url": "assets/js/152.0bc826d0.js",
    "revision": "22524d995e1c84bbadbb87f53959bb95"
  },
  {
    "url": "assets/js/153.bfb29641.js",
    "revision": "60fab1bcc11a521d7c3fffba70ddce3b"
  },
  {
    "url": "assets/js/154.9a101539.js",
    "revision": "4a58e0b48773e49704546af516c3b3fc"
  },
  {
    "url": "assets/js/155.ec5288b7.js",
    "revision": "1ea36477520bc2e59ebe96c252768195"
  },
  {
    "url": "assets/js/156.3381b524.js",
    "revision": "a0a14c7d4c8addd856182062eb2583b1"
  },
  {
    "url": "assets/js/157.43dfc06e.js",
    "revision": "39c2853beed0203278656bb7d78567be"
  },
  {
    "url": "assets/js/158.8f438de6.js",
    "revision": "03236c7b7593a63c54875b8c3bfbeaca"
  },
  {
    "url": "assets/js/159.f457ec4c.js",
    "revision": "5aad8c28681177abc8aa6356457fc1c7"
  },
  {
    "url": "assets/js/16.03e657cf.js",
    "revision": "340b298a8da0a3cdc169c529821df692"
  },
  {
    "url": "assets/js/160.b2abfb2f.js",
    "revision": "fd0363189963f0962de0f6fa43597fc6"
  },
  {
    "url": "assets/js/161.a3421a16.js",
    "revision": "2be49f4fa20a5a0158b242fe96bb3365"
  },
  {
    "url": "assets/js/162.0693d028.js",
    "revision": "c0461e3ba2b7a21918e0559530f170cb"
  },
  {
    "url": "assets/js/163.9ddb8ef0.js",
    "revision": "dcf90cca3f20fa06e8dc4e801eb85c19"
  },
  {
    "url": "assets/js/164.499d4093.js",
    "revision": "66661de7b44f1f4e7e34317d0a02db72"
  },
  {
    "url": "assets/js/165.e2330397.js",
    "revision": "eed8ab039881c2dfbf354b3ce1ae2832"
  },
  {
    "url": "assets/js/166.72a6c945.js",
    "revision": "f19fa190f867d447c153ef2155d68044"
  },
  {
    "url": "assets/js/167.cf97f316.js",
    "revision": "6b47629fd42305b0e5cf53a29678b910"
  },
  {
    "url": "assets/js/168.4a7a2148.js",
    "revision": "697ee9fdea274585ab17e1c610f5b363"
  },
  {
    "url": "assets/js/169.ea81d44d.js",
    "revision": "7d01b6895abd2cf6ac1e09fefd1ae5c3"
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
    "url": "assets/js/171.d9853eb4.js",
    "revision": "d8d30f5ae35753e5c3cb4fc5429219f9"
  },
  {
    "url": "assets/js/172.3adb8904.js",
    "revision": "27424201b3762e5e2f567d5ac2535e2f"
  },
  {
    "url": "assets/js/173.ff4a2134.js",
    "revision": "88fa6c75e88feb4ed11d97a6aa1c2327"
  },
  {
    "url": "assets/js/174.4a46974f.js",
    "revision": "68b26974ab2c0c904aa8edba1a0cef21"
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
    "url": "assets/js/177.e186c405.js",
    "revision": "4e15628a570e102c1cfb262133875984"
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
    "url": "assets/js/18.ae30fb28.js",
    "revision": "180be8e6dceb5a9d240983e934688ae7"
  },
  {
    "url": "assets/js/180.669e38ff.js",
    "revision": "1068570a7c2052a498448c23ace6468d"
  },
  {
    "url": "assets/js/181.507cf13d.js",
    "revision": "48cf73768920f8424e03af0d579eab57"
  },
  {
    "url": "assets/js/182.e9a7d8bf.js",
    "revision": "d2f27a9cbb56b0c601fa66748f0c3dba"
  },
  {
    "url": "assets/js/183.35c52113.js",
    "revision": "58e85b11700157b2db7ef21cef7f282d"
  },
  {
    "url": "assets/js/184.0c22249a.js",
    "revision": "28dd8c8d489c1bb6d007a3ebfbeb9070"
  },
  {
    "url": "assets/js/185.539947a4.js",
    "revision": "49ee9ae876902c5a6b03732a26770cb1"
  },
  {
    "url": "assets/js/186.3b85bbfe.js",
    "revision": "a9952c2d10c1b1c41b3f60cd9fc5ce04"
  },
  {
    "url": "assets/js/187.da6c6eab.js",
    "revision": "d265bde8c59450b7e2086c52e4b8f56d"
  },
  {
    "url": "assets/js/188.ffb33f8a.js",
    "revision": "434b54382ab7353db25f52994676a166"
  },
  {
    "url": "assets/js/189.a360efa8.js",
    "revision": "69aca2550b211da0851e4b3c5ab393d3"
  },
  {
    "url": "assets/js/19.e9aee25e.js",
    "revision": "7c1db15a7c9cd20332717a2c8b000043"
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
    "url": "assets/js/192.c25cf221.js",
    "revision": "a91c26a140adaae3389dd3c450381fff"
  },
  {
    "url": "assets/js/193.1f324730.js",
    "revision": "ea642bb98e05fe30016964896c687ee0"
  },
  {
    "url": "assets/js/194.4fae137d.js",
    "revision": "bdf9e83d8e6da43acb4dadcd43f6f6ee"
  },
  {
    "url": "assets/js/195.95d9e30d.js",
    "revision": "1f5ddaedf48b9070b534f63df261ea72"
  },
  {
    "url": "assets/js/196.f31385c9.js",
    "revision": "b304eb75d94350b429113f05fad4d9c8"
  },
  {
    "url": "assets/js/197.41b03653.js",
    "revision": "1ce7d6f503043c121903a2ff24c55f78"
  },
  {
    "url": "assets/js/198.48e71193.js",
    "revision": "0add5b80d661ba02aa9993dc86fe4a91"
  },
  {
    "url": "assets/js/199.c2557f7f.js",
    "revision": "f24e32ba44d7851d67f68b0064ec2df0"
  },
  {
    "url": "assets/js/20.8a6e7601.js",
    "revision": "aa931020191ff0ec3c7b2d5d73ab4747"
  },
  {
    "url": "assets/js/200.e467e592.js",
    "revision": "6314f8b431dada7cf4f5cfadc15d538b"
  },
  {
    "url": "assets/js/201.d37771f7.js",
    "revision": "c674d4240f5fe20a20e275ff8098816c"
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
    "url": "assets/js/204.f659a236.js",
    "revision": "00774f9b6a9940e4e2c859111ec813fc"
  },
  {
    "url": "assets/js/205.995c96f4.js",
    "revision": "4ebf3fe2ca503b485c1b637693a815b0"
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
    "url": "assets/js/22.d1ae59e7.js",
    "revision": "e2d10f8872ec22c4cb3c577e422ada51"
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
    "url": "assets/js/35.d3bbe0da.js",
    "revision": "10e6dfd350b58c270bc1a64cfd6ad8f9"
  },
  {
    "url": "assets/js/36.7d075523.js",
    "revision": "e44b8e9fde0bf2368aa29ba580acf0c8"
  },
  {
    "url": "assets/js/37.40074809.js",
    "revision": "a1d0ab8657de456d1dca2547adfb59ca"
  },
  {
    "url": "assets/js/38.4a682427.js",
    "revision": "b9993b290ecc477c8e5160ab16462a22"
  },
  {
    "url": "assets/js/39.2c4b00a3.js",
    "revision": "3afff425b1453875246f3cf6e5ac787e"
  },
  {
    "url": "assets/js/4.634776f4.js",
    "revision": "2bbb1e0cc6373d78ca92bdd6f27eb780"
  },
  {
    "url": "assets/js/40.f433e771.js",
    "revision": "ca1d7eec46ef83d01e8c71a201d508a4"
  },
  {
    "url": "assets/js/41.7e084a4b.js",
    "revision": "f73e83d2df10d5c1b6d76120f654366f"
  },
  {
    "url": "assets/js/42.2e8757eb.js",
    "revision": "18c6fe4bc3d9ccab05f63f89ec275f8b"
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
    "url": "assets/js/45.06b2e7fb.js",
    "revision": "16a9e28888ffb607f64d654b49348c1c"
  },
  {
    "url": "assets/js/46.4cde14ae.js",
    "revision": "842ad67a6c7f98d2edc4286781d0ae96"
  },
  {
    "url": "assets/js/47.507b302f.js",
    "revision": "9d944931824c670a5548cc0b88173d90"
  },
  {
    "url": "assets/js/48.9449c17d.js",
    "revision": "c0540d0cc5115d559a48faffb8dbac6f"
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
    "url": "assets/js/51.b3d27533.js",
    "revision": "d2d548437abc5dba7cc00e2ba1380a33"
  },
  {
    "url": "assets/js/52.762c82cf.js",
    "revision": "0f5c302712ceb1d3469e726186400506"
  },
  {
    "url": "assets/js/53.29ede356.js",
    "revision": "58d9f2062ac0f11d176720e755cc71d1"
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
    "url": "assets/js/56.0bfea872.js",
    "revision": "e297526c3837cb7d89da996d267b79da"
  },
  {
    "url": "assets/js/57.aa1b166d.js",
    "revision": "7a8aa26e81a3bbf498bfefa1ea7e0d9a"
  },
  {
    "url": "assets/js/58.557824ad.js",
    "revision": "f4ac66d0ba559308cae582ee85d15755"
  },
  {
    "url": "assets/js/59.91a1083c.js",
    "revision": "97934d46299b5d08108f081124b473ed"
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
    "url": "assets/js/61.1d382b0c.js",
    "revision": "be30ed1ee784f19020a35265fda2f725"
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
    "url": "assets/js/64.99a654cc.js",
    "revision": "0840d61b4a6cc4a8569d018bc03a1c57"
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
    "url": "assets/js/67.c3131b65.js",
    "revision": "6dc654c04b65ef8d4508dddbcd90e32e"
  },
  {
    "url": "assets/js/68.4fb8ea3d.js",
    "revision": "55bc69a354a6bbdc35e67367f60614c3"
  },
  {
    "url": "assets/js/69.ff12e027.js",
    "revision": "4034d02463e4169481746230c46e19f3"
  },
  {
    "url": "assets/js/7.236f89b0.js",
    "revision": "a2727eacb083a73ca839ae2f710339a0"
  },
  {
    "url": "assets/js/70.369fde3e.js",
    "revision": "41fec32355c5e72af90d2df53b1cf0ca"
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
    "url": "assets/js/79.8a7b53ca.js",
    "revision": "59e4b7e4c91b68d2cec3610c94b3afb1"
  },
  {
    "url": "assets/js/8.dd110d4b.js",
    "revision": "034a24f05f14a2f4a0c90d78a09d4573"
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
    "url": "assets/js/84.e595b593.js",
    "revision": "60b3a869093539de387fd1817ae78b9f"
  },
  {
    "url": "assets/js/85.afa98cb9.js",
    "revision": "e98170bba418cd06d9fce367941a2a9f"
  },
  {
    "url": "assets/js/86.f357e257.js",
    "revision": "4f377f3a5a556d70b5d77d620bd20813"
  },
  {
    "url": "assets/js/87.659a04fe.js",
    "revision": "98a7b253ba5ce6dab382ec1e960daa47"
  },
  {
    "url": "assets/js/88.66a835e5.js",
    "revision": "1dc843ce196025860653b39675cb3e04"
  },
  {
    "url": "assets/js/89.09365400.js",
    "revision": "8dc8db85236fa583c2c749d271dd9ba7"
  },
  {
    "url": "assets/js/9.24976ec7.js",
    "revision": "c375ca638ccc8ff8c87e58db5d0291ee"
  },
  {
    "url": "assets/js/90.84b4b6a2.js",
    "revision": "b79288d9af8f12f5a9202042c489c8a7"
  },
  {
    "url": "assets/js/91.c86e12b1.js",
    "revision": "cd38f1d8ce78a0b879b8c64a2d61edab"
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
    "url": "assets/js/96.12c97c3c.js",
    "revision": "a2957944eaae1813568faf88fd76c501"
  },
  {
    "url": "assets/js/97.feca55da.js",
    "revision": "eba371ccb1baead7ac4a2637faefe5ed"
  },
  {
    "url": "assets/js/98.02df8bc5.js",
    "revision": "3157a1d7e3cf09f3f0bf449c22ee4480"
  },
  {
    "url": "assets/js/99.21ff8765.js",
    "revision": "d618fe9e4d245e6bde721428251f622a"
  },
  {
    "url": "assets/js/app.db5f0530.js",
    "revision": "aa0d51cce58f3ead74c1989888d6cc22"
  },
  {
    "url": "backend/database/index.html",
    "revision": "42d8179eda905f19007a0e3c09182eba"
  },
  {
    "url": "backend/node/index.html",
    "revision": "350d8f49ccc035e91badb108da8dc20f"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "6c3ab18eabed480380e9a0cdb15a4234"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "5d101908f423e3193870bf40830a356c"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "e2f9271cd17e2ed1f2a0e149c2cb5971"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "f7cfa71e2cfd5e4b7d76e10553a9c6db"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "995ffabd35ba32253fd66b7f0a118f62"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "9f34b9eff3ae982fa51d65815ed60646"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "40def9f63ee491b26a9660f3194900e2"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "b41560f592ccbd25f67f95bac539e185"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "409918417ca8b9750164f1453e4f6932"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "238b67012ac7676881bb66c112543b1b"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "0c2e63b5af4660b687875797d4baa1e8"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "84e486f4821f351d5edd0ec8c4c25214"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "a7df216e71cc1bd0d9ccb0b2f9091b68"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "3c2fa921a5eab96d73a57da83a071dbd"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "94e39f7ef6cfbda7f6ddcc4947048279"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "29cf440ae6a00cc1d614a01dc45d86d5"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "9db4af80d6f2b07e31f6808489cda5fe"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "6e839eb949842cfe4b006993f05324e4"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "266ca5cac6ef7d1f8313100fa911a571"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "f4ed386c02bf873aa37e1d92a6266f0d"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "7e6dfb4214ab24fc378390c04e8d068e"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "f5b3d72a66923506bb8e8627520038e8"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "97d8e64fb0e7ffce680c7748ed871d69"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "704914a8c2bcaeae29312b327c1dd7f3"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "9917def2ab054120d7653e71adacc5fd"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "ae4c62d0ec2b90e73bc4200064c11838"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "bf509bc3b175390d3f3908c0a0ecd419"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "8108f04f987d975159c4f2680a4a56eb"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "c1aa7a3428d9a601ac666bcfd71bf610"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "68a1122d0e3288a144077a95e37b5f96"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "9c9eff10908407e746c3bab4b7851fc0"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "85af4b804ef3ac4fd2296e9e59e7c58e"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "f54fdedd0828f119fd3d344070f847dc"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "91d1a14d69aa4a65aa603a5b9d1a7cff"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "8a2dbc799b2b5f84d5a1bfd0b003a139"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "3b3615254cb6f77c3b0d0ab65122f66b"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "a7d5a2cb339fff4c558d6b8c555e7b69"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "c9af1949ef9ec0661a5595755db6d8f2"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "8f35cdfea708831f832d7d4b7148e92b"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "6c8d2a8a250b0049b5a6b86124d9d8f2"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "7b91453e8df5cff5be35f96adf78eb22"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "993859400260ea1440f69e18f513b1df"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "29882a857915bb79338e3845896b3b15"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "797b88b7b207c9b6537717c82f6bd913"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "a5a7ff4687a41be2a70f1510ef18dc13"
  },
  {
    "url": "books/computer/index.html",
    "revision": "00a4b948631165cd398a9e212df9bbb5"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "32be51ce82c1b7ab9ee1c597d7c4ef5f"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "6d14bccb8dcc5b8665ad7a65b6e155de"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "d40a6293647b2360b8a4798e59bb46dc"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "c26c93fcc5e1e5e9c0294d3e149be4f2"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "93adb602700ac0fc3c85a5e2479dec51"
  },
  {
    "url": "books/skill/index.html",
    "revision": "7c2f9f50391752d207104a31aa68f0a4"
  },
  {
    "url": "categories/index.html",
    "revision": "afcd05bde9cd2eb41f0021bfa0aff0c3"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "9bf16f7ea014e102e0c6624421ac5fd3"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "5e3caa9c0771f0e1fcc612e93540e414"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "9897f91a4740d6c9db913b83fed867a2"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "98208615656ed2ac1e6a2425044bad16"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "ef06d1e6190c570208760dbb5b656334"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "f17f409136cda5b5a19b6008fb0dbeda"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "19c5349574df7a48b48e97faba300135"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "972e77af8d8ea8ea32159e01119fbc92"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "461225203b85643012fb667cea264647"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "f83557baf55874c178c3282249c8e5b3"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "1c495811b80e9db1e62662f55fb44440"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "7d388208a48d7773189eb0c6ebcce6c5"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "8020b123d52e19600f744159f281a8e3"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "4529c6f941b89688af290607fe99543d"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "36b0fd06d1f469461f6987738e73270a"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "43f75ac23a651247bfdb61e42e2e0008"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "0e593fb8e20670f3d17132db6588d31f"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "36343a571b66485865f14c323e4dd0d5"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "2a0d37a643dfa3f5bdf2cd286e509a1a"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "99e49e5684a64b481b2a2a827d5a201d"
  },
  {
    "url": "front/base/array.html",
    "revision": "cb10ddd5bf426d3838194570b269e226"
  },
  {
    "url": "front/base/async.html",
    "revision": "84b7933ca2bfee2e62885a34086269b4"
  },
  {
    "url": "front/base/bom.html",
    "revision": "5909792a6ff9d3c208242ec8d007bee4"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "613708a4f2e4df56dd92d4f4561f9039"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "577642d32a2fed2a1c670a7b82747b2f"
  },
  {
    "url": "front/base/class.html",
    "revision": "31cc5bd0ac96d2be9446077ba910f27f"
  },
  {
    "url": "front/base/cors.html",
    "revision": "fd9e372abad80e1b521515cf2bd88b97"
  },
  {
    "url": "front/base/date.html",
    "revision": "e0eb4589cf81dbaa92cd8cbde6e564ee"
  },
  {
    "url": "front/base/dom.html",
    "revision": "493e9eda034509049802e221bd932186"
  },
  {
    "url": "front/base/event.html",
    "revision": "db5ed99a9d65d7de844ed17724dfab1f"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "68990652310925ff227578cebe99dbf2"
  },
  {
    "url": "front/base/function.html",
    "revision": "75250dcd2ed2f88e75b130e9eda6fd0c"
  },
  {
    "url": "front/base/generator.html",
    "revision": "df63ff2184c092d044293cca47412c0d"
  },
  {
    "url": "front/base/history.html",
    "revision": "629d9de9778c3d096e0ac419416bb1d6"
  },
  {
    "url": "front/base/index.html",
    "revision": "726f066e56423bcebc8acece31cb4e9e"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "6cb880a2cd257ea26b3dfa5b732ab165"
  },
  {
    "url": "front/base/json.html",
    "revision": "29fa908bd3872da68f3181d58d2a62cd"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "97f8b6cc36df2214bf1c20757d84047f"
  },
  {
    "url": "front/base/map.html",
    "revision": "ba8e236ea0e57b2c301b5df96668cf2d"
  },
  {
    "url": "front/base/math.html",
    "revision": "e9605ff23f91a24a4e1dbbc5fe01760c"
  },
  {
    "url": "front/base/module.html",
    "revision": "2c1b91e35e7a8ac902c37fd3bd958c5c"
  },
  {
    "url": "front/base/number.html",
    "revision": "5edd13680229327f33e391985880a0d6"
  },
  {
    "url": "front/base/object.html",
    "revision": "a8f9d347bf05a70f01f0d5f06cb8b80d"
  },
  {
    "url": "front/base/promise.html",
    "revision": "cdb3f7582b55c5095b6e4a035e0da5e7"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "fa9264b427c0e78a71df3f1fb6e999ef"
  },
  {
    "url": "front/base/reg.html",
    "revision": "f19d0a0b124b52320937bd491d46570b"
  },
  {
    "url": "front/base/set.html",
    "revision": "d0c068596d4abee5c7f400fe97a7b71d"
  },
  {
    "url": "front/base/storage.html",
    "revision": "27e8dbfd9290e151102e091c031d36ad"
  },
  {
    "url": "front/base/string.html",
    "revision": "0b79be3f1322c87760132f14d343fffa"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "e4e937bcb088f272a1a8ada2ca6407d7"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "8dcfa945f86df4d046a946cc5020b826"
  },
  {
    "url": "front/base/var.html",
    "revision": "705785425012f3b004490ec0f717d362"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "cecb0cf46207d8b447c98388dd895562"
  },
  {
    "url": "front/base/worker.html",
    "revision": "dcecf061b714389807a5a26509aafbc8"
  },
  {
    "url": "front/css/animation.html",
    "revision": "499e266ea647f8d5c520befe96fa7cfb"
  },
  {
    "url": "front/css/box.html",
    "revision": "2915028d1c307e818d1945d22f552aec"
  },
  {
    "url": "front/css/effects.html",
    "revision": "d7f3d52ca6a6fc82f0666cc4e594473a"
  },
  {
    "url": "front/css/form.html",
    "revision": "368792e9655eb13984ac1ffccfcc4d7b"
  },
  {
    "url": "front/css/grid.html",
    "revision": "7a181104e37fab9fce692fddfc5a9ad3"
  },
  {
    "url": "front/css/index.html",
    "revision": "81911ea4bde31428fd1f0488942d335d"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "95ffa081232df6bb21c1087360fb9b66"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "4e6fe19e143f01c2bb1bd595cf01a460"
  },
  {
    "url": "front/css/selector.html",
    "revision": "0b91cfb13b5597e492c05b2da28287bc"
  },
  {
    "url": "front/css/special.html",
    "revision": "372d19e238cdc40608296e9a5a945649"
  },
  {
    "url": "front/css/svg.html",
    "revision": "bb4ade38c59b4f0b03dc17f650bd44e5"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "30595806c81a3d76bde0d23d7f290531"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "519cc2a4325f4110e9985e51c200b3f0"
  },
  {
    "url": "front/css/text.html",
    "revision": "66d9223dd3105dae8944094bee2ae927"
  },
  {
    "url": "front/css/transform.html",
    "revision": "598274cd34e5b5d7dafe549981115d42"
  },
  {
    "url": "front/css/transition.html",
    "revision": "c38422b9b8e2bce5156e72076114258a"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "3e3d127c8b0641ccc281ced5ed61b2fa"
  },
  {
    "url": "front/interview/css.html",
    "revision": "7827f8f546f4ea853fbb1f1f3d967ac5"
  },
  {
    "url": "front/interview/index.html",
    "revision": "052429bcf8a587dfe80d652b8dabe423"
  },
  {
    "url": "front/interview/js.html",
    "revision": "ec0e6c2dc33873afe16cba37a8849161"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "6ce662c9aeb940734ed1aadf89234968"
  },
  {
    "url": "front/interview/project.html",
    "revision": "599eda1b077b48111427b02877d1fa89"
  },
  {
    "url": "front/ios/array.html",
    "revision": "5b0273d13b96919fd78b55960c4d4f56"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "2c5438b1c569cd6eda99b19ad4d7b3ec"
  },
  {
    "url": "front/ios/base.html",
    "revision": "58c057f9aeae6cb82acb10108ec2b497"
  },
  {
    "url": "front/ios/class.html",
    "revision": "91b6cd370745cc76ae29f99ce778e07e"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "d74db7efcd145e201f09b48f0197be27"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "44bcadad0bedb95f414e73979a4830b0"
  },
  {
    "url": "front/ios/func.html",
    "revision": "e8b8adeab76fd49f2620b84dd88c34b2"
  },
  {
    "url": "front/ios/index.html",
    "revision": "4f78bc38da4561151c2957e187dd303f"
  },
  {
    "url": "front/ios/number.html",
    "revision": "f17ced7ef825ae9dd3e170589c2121a8"
  },
  {
    "url": "front/ios/set.html",
    "revision": "f51ed8df274e475e40c94f822f2e6185"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "93ab8605f815fc00ff80c332693122c0"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "7c3bffb670d4f1b4316c00f25d6c49d1"
  },
  {
    "url": "front/ios/string.html",
    "revision": "df3186475679bcda33da0e7912b659a2"
  },
  {
    "url": "front/react/cli.html",
    "revision": "25c952bd52f5988d45543f34fa3b23a7"
  },
  {
    "url": "front/react/context.html",
    "revision": "1fddd6d7c27835426df44ae848eea099"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "aecd83427a172da8f96f83fffb5ff92b"
  },
  {
    "url": "front/react/important.html",
    "revision": "876e9fff1aa2e85593efb7bda05d7acb"
  },
  {
    "url": "front/react/index.html",
    "revision": "73ec5c7e471d54fd4c27a1e46762bd47"
  },
  {
    "url": "front/react/react18.html",
    "revision": "b398e0f55fe7b1a595a1ab629b2ffb7b"
  },
  {
    "url": "front/react/redux.html",
    "revision": "195be3a7d28a66b93099efd2a4703dd4"
  },
  {
    "url": "front/react/router.html",
    "revision": "b6ca24a7b1e0c392464664e914a6edd6"
  },
  {
    "url": "front/react/scope.html",
    "revision": "9ee256c99d447c4eb5ac0ae00c7858c4"
  },
  {
    "url": "front/react/test.html",
    "revision": "603eadb0ab0154141423a639a68111d7"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "b58285fdf28da8823f4a1bee34b176bf"
  },
  {
    "url": "front/technique/index.html",
    "revision": "62ec8cb8530e0162d203c425f7eb704b"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "c13758f3c7e487f35db13654920035bb"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "181b9eb9e2c04026c7c6031622182e9d"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "3acb8e92eb32f0363257fb7acd0ef0ee"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "9ee6bb0cfa1a15972572e88c9adfc63d"
  },
  {
    "url": "front/test/index.html",
    "revision": "8aaaf7cb4a0ef7554ada52e0d3e97f29"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "5a7271491998e12dca463e754874d588"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "5874b1374b97d62301bfd37bb92da6f8"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "446459ea7446f440d252a9d471b07199"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "046d84c89c04035d67b53166ebdf5770"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "e5d28eb0d64740f522b48c1bfc2f2151"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "a71918c08ccf6625c4ec78f25a63a29b"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "f8233aa75cc45e8257f289036d44c9e3"
  },
  {
    "url": "index.html",
    "revision": "86a8cd15829383e1b8e9b96c9e1b2060"
  },
  {
    "url": "skill/git/action.html",
    "revision": "4365250c2bc91d67a1961677bae25d87"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "cc85686570e60ef546d22fb0cdae9ec1"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "8213505d9be5aec24be3e4fcc7639b3a"
  },
  {
    "url": "skill/git/index.html",
    "revision": "61929e808be3539db9e36017381ebaa7"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "34bac39199ad9a0a22c2cbcbe511a9dc"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "d7b834744eaa3702a9e9bca0e73e6e36"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "63c7d5f99495beecee910aa3eb46c42c"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "a69feefd6f9dbebfd8ef1a8b54edbe22"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "d9cf22d87da51fb40911c0b2e2221432"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "41cf3c50a731ac9975f603e100874109"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "2a7ff0f053694fc9ddcbd1f0effe7844"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "aff09b6d8c5b747fd83b4bea116dae15"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "f58f6cabc56d6cfd0e1aac6c3ef701c9"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "4677ea69ed672faa6428115554b56364"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "1122e75da660e6d2385674854359945d"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "6c6547e9711389b016af794eb7595ab2"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "93ee078150f618df2fb8c0941c35112d"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "631f165fe3dcf299a36dea180c2947b4"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "77556b709acdef92e62af46d4ced9795"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "7bfdf808b870d436eb9c1c54812ed7d5"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "f37ba5dc574420c367ca95d4f960e9e8"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "35bcb36dd8f8ca9cef82ae2aded82ba2"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "91fbe5bda3d2762d32b1d2dbe60f60f9"
  },
  {
    "url": "tag/index.html",
    "revision": "55762a226b56e2ec56160db6b63c54ff"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b0f1bed9900cc3fbbf6e171e7882fe44"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "e1d19828329a6c9933ac4a80f198de9a"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "1d80e76492f500768c7a0d20cdf1ecf1"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "12b7f07169b1457e1de84c480fc0056a"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d95905158f211cc1975505ad3b18062"
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
