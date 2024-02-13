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
    "revision": "26a8f701e995a2a813e67060d4b51ef7"
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
    "url": "assets/js/10.8843ea88.js",
    "revision": "098a9aa64eef5255f68785c292c8c805"
  },
  {
    "url": "assets/js/100.7df482d6.js",
    "revision": "3bd1aefb9876a37bdfa993fc2f503742"
  },
  {
    "url": "assets/js/101.f0fdcf0c.js",
    "revision": "6c2540221924404e9d2d547dbf129d9c"
  },
  {
    "url": "assets/js/102.84412d12.js",
    "revision": "6610745050ba8b17b57aead54fb1f5a0"
  },
  {
    "url": "assets/js/103.586ca755.js",
    "revision": "f418ba26ce667c30ed3cd14e7a217d6b"
  },
  {
    "url": "assets/js/104.53707d03.js",
    "revision": "b424c2d158decafd740c7f47a4b4f67b"
  },
  {
    "url": "assets/js/105.c6ea42d4.js",
    "revision": "5438baf7580dd43ff33c1d28682cdca8"
  },
  {
    "url": "assets/js/106.9c5f6f99.js",
    "revision": "ca470079aebe64ebbfdba46e9782a1e6"
  },
  {
    "url": "assets/js/107.04a2dcda.js",
    "revision": "3fd38c5b364e641187636877de6187bf"
  },
  {
    "url": "assets/js/108.f3ceae11.js",
    "revision": "7f5e126ff20c2e768831481a415b2d92"
  },
  {
    "url": "assets/js/109.3b827215.js",
    "revision": "97ea119b170763457877ac7c5cc36d8a"
  },
  {
    "url": "assets/js/11.0c779cea.js",
    "revision": "9a085c4b0bff21bceebf7d8cdc76cdb1"
  },
  {
    "url": "assets/js/110.663cd3bd.js",
    "revision": "6aef0daadac281595541ef61fa27a3ff"
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
    "url": "assets/js/113.4ea76ed6.js",
    "revision": "ddb48fc728937fdd3e7a58ece6c73bb8"
  },
  {
    "url": "assets/js/114.9f2da8e4.js",
    "revision": "c0387bdc2c9c4ec8ee70d684699600d7"
  },
  {
    "url": "assets/js/115.8d73393d.js",
    "revision": "c8b0ed371cf0e36f2203183fbe8369e5"
  },
  {
    "url": "assets/js/116.e5a49811.js",
    "revision": "8d25b522dc08ca6ec460de4b1f252d82"
  },
  {
    "url": "assets/js/117.0029f4c4.js",
    "revision": "240e62247222d83be901232586acc2b2"
  },
  {
    "url": "assets/js/118.0c3e2330.js",
    "revision": "f5df3f0dcc756edbc52dad1df7c3d89b"
  },
  {
    "url": "assets/js/119.3c2835c5.js",
    "revision": "869dad45c00f152b4587e853091c05ad"
  },
  {
    "url": "assets/js/12.aef6110f.js",
    "revision": "f750d089df709929bdd2e54267529509"
  },
  {
    "url": "assets/js/120.fbee467c.js",
    "revision": "5d3fa3ba93f3e3670bceb44d05871f1c"
  },
  {
    "url": "assets/js/121.74a9b2ca.js",
    "revision": "a0c9f2f0bda6e7f83733edb6ffa8f93a"
  },
  {
    "url": "assets/js/122.e834f57d.js",
    "revision": "103e708b29261514f8e6a1c2ef94fe87"
  },
  {
    "url": "assets/js/123.904ea596.js",
    "revision": "9f7b79d62c0d837b92487dcc36325371"
  },
  {
    "url": "assets/js/124.4f27cd11.js",
    "revision": "e2f333555059bfd3e76b4aa3d5fd9089"
  },
  {
    "url": "assets/js/125.4f731e88.js",
    "revision": "6b73f648be35c8a08ecf6ea69c4e8222"
  },
  {
    "url": "assets/js/126.aec8c162.js",
    "revision": "dc6fb266b8997ee4abe23677d321c24e"
  },
  {
    "url": "assets/js/127.79276c82.js",
    "revision": "bc35959509e3c9402a2bcbe11b962a80"
  },
  {
    "url": "assets/js/128.02780dda.js",
    "revision": "45bd3f7e355680a50bf874f276afd53a"
  },
  {
    "url": "assets/js/129.2ddd6f3d.js",
    "revision": "7ad603756515f1df815092270ec59de5"
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
    "url": "assets/js/131.fd6a1683.js",
    "revision": "17bfce0dd80d2ca60c53304fea941a5f"
  },
  {
    "url": "assets/js/132.5fd6fc8a.js",
    "revision": "c93b85fa1ed62cb08cf0c614f073034f"
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
    "url": "assets/js/137.ee125055.js",
    "revision": "ee44119388b9f23957f7640366c03d60"
  },
  {
    "url": "assets/js/138.c48186ee.js",
    "revision": "dcb558b529c857c83ccf4b1c3d07d6ae"
  },
  {
    "url": "assets/js/139.6ec357fe.js",
    "revision": "232da2ca0344cad87b5bb335a3cd65e4"
  },
  {
    "url": "assets/js/14.c63f97e7.js",
    "revision": "82c9ec54089baec878802c4b51f9b0af"
  },
  {
    "url": "assets/js/140.49e8336e.js",
    "revision": "70cff3668512e6c81c30a5a2a2053e49"
  },
  {
    "url": "assets/js/141.c70a2ca4.js",
    "revision": "707608b7a29185124411f0e4c16d51e5"
  },
  {
    "url": "assets/js/142.3fd98e59.js",
    "revision": "f8363c9902e69cfde0fb69a5b0c9b347"
  },
  {
    "url": "assets/js/143.057579c9.js",
    "revision": "9cc9b31f6ea42a1c5b126917945f71a3"
  },
  {
    "url": "assets/js/144.037df492.js",
    "revision": "7e0c14271630fb9f5083421235145ff5"
  },
  {
    "url": "assets/js/145.25f9c6c0.js",
    "revision": "a5051005549f946a4d22445b5006916b"
  },
  {
    "url": "assets/js/146.3c86035e.js",
    "revision": "077ffcb7ad33e4b5c4439ae65bd71234"
  },
  {
    "url": "assets/js/147.8b37d3c7.js",
    "revision": "b24d5b8fc56565123319f09bf5ee7d2d"
  },
  {
    "url": "assets/js/148.b75fbea3.js",
    "revision": "f25234d65da6e287025f5751654c2a22"
  },
  {
    "url": "assets/js/149.8445b2d4.js",
    "revision": "5795259ca89452fc89c2e22496b4f5dc"
  },
  {
    "url": "assets/js/15.0645a6d1.js",
    "revision": "5b2d7a96f80066c0177a7f443666eeae"
  },
  {
    "url": "assets/js/150.06fbcb4e.js",
    "revision": "1010400360c1a09cfb70c231f468fe5e"
  },
  {
    "url": "assets/js/151.0ac7e9f6.js",
    "revision": "f4b353b5b5607eb2e618f46b83a61b32"
  },
  {
    "url": "assets/js/152.753eedf6.js",
    "revision": "c3cece4283e556de1c9f3345653a369a"
  },
  {
    "url": "assets/js/153.da9504a9.js",
    "revision": "cd279505863dd0dba86337f21eece35e"
  },
  {
    "url": "assets/js/154.3a30d7b5.js",
    "revision": "ea13f76bd3cd5a2de9e32a6a52625f13"
  },
  {
    "url": "assets/js/155.ddbfe5bf.js",
    "revision": "7f091f873ccaf7f0f324f8c0d80b36ff"
  },
  {
    "url": "assets/js/156.02006cc3.js",
    "revision": "10f08908108ee70f3c931d28a76bc841"
  },
  {
    "url": "assets/js/157.9ebdca08.js",
    "revision": "10c779019d87de79ac2ec0a0bdaa1927"
  },
  {
    "url": "assets/js/158.49931775.js",
    "revision": "b2a638bf371079ca203bbc2ba441b6a2"
  },
  {
    "url": "assets/js/159.6e5ec77d.js",
    "revision": "9464fe539c2833565d1e8ff2c7738e97"
  },
  {
    "url": "assets/js/16.c1367710.js",
    "revision": "74398839f848282515c00f45c613368e"
  },
  {
    "url": "assets/js/160.7297dfb3.js",
    "revision": "dc213c36802b5b19dbbee8109b61b592"
  },
  {
    "url": "assets/js/161.78a6c52b.js",
    "revision": "66475e35a4d2d1cbcbfafd27a0f85867"
  },
  {
    "url": "assets/js/162.f98f4b2d.js",
    "revision": "ae2ff98bf5fc192d551cd9e75b3ea440"
  },
  {
    "url": "assets/js/163.f3bb1249.js",
    "revision": "f548629f3a28e1cbc258cf11f498f302"
  },
  {
    "url": "assets/js/164.a9b30938.js",
    "revision": "37e82d25b8b0ff4c7150558de4cd0345"
  },
  {
    "url": "assets/js/165.ce072144.js",
    "revision": "65ef3745889442e9739bd8136014c0b0"
  },
  {
    "url": "assets/js/166.9e1508b2.js",
    "revision": "5a9c14c6a95810cda967fb7fae9e2be5"
  },
  {
    "url": "assets/js/167.ab737c56.js",
    "revision": "146a77ab2a706c4fde7dda61381c70ff"
  },
  {
    "url": "assets/js/168.cc863a3a.js",
    "revision": "5266b9b7ee83b9ef4837ad1ad5d19a01"
  },
  {
    "url": "assets/js/169.87315b3e.js",
    "revision": "c75845d1425ca07c9586558e4e4487b5"
  },
  {
    "url": "assets/js/17.63db0395.js",
    "revision": "59826d0ff72d3cce26413b9e6045823e"
  },
  {
    "url": "assets/js/170.79dd0d2d.js",
    "revision": "109ae469195dbab2214b473876142ce6"
  },
  {
    "url": "assets/js/171.6a278264.js",
    "revision": "9c662870aa762d646bab22a1007b7398"
  },
  {
    "url": "assets/js/172.a150a319.js",
    "revision": "8300d9e15c584c3320ccd765b26711e1"
  },
  {
    "url": "assets/js/173.122acca0.js",
    "revision": "4b4cd2e7210270576c478021c9889557"
  },
  {
    "url": "assets/js/174.dbf96ba0.js",
    "revision": "5c8b8f827a0e81150f8187313205ef76"
  },
  {
    "url": "assets/js/175.a12226d6.js",
    "revision": "80edbdbc47983d83bd34af0e6a5339df"
  },
  {
    "url": "assets/js/176.cfd239ad.js",
    "revision": "9633941f16cf04c9804a9f727ef0aa7c"
  },
  {
    "url": "assets/js/177.a3d104ac.js",
    "revision": "24cdcebad1910040a687bc12c08cd53f"
  },
  {
    "url": "assets/js/178.505b324c.js",
    "revision": "2665af9da8c8f6414935cd7094162bef"
  },
  {
    "url": "assets/js/179.bb1f8544.js",
    "revision": "b54c178a8c0365d68b6fbd13a4cfee58"
  },
  {
    "url": "assets/js/18.50a07602.js",
    "revision": "776edff77aa45618d29c33da1b61e99b"
  },
  {
    "url": "assets/js/180.5cdb8098.js",
    "revision": "51b31203c98ad46cf869fa7fd37504b3"
  },
  {
    "url": "assets/js/181.49405ca8.js",
    "revision": "44dba35842d9533b4baae51b4b75e7d5"
  },
  {
    "url": "assets/js/182.a69c4b5d.js",
    "revision": "97e9e1394c6f7cdb4ddabf078bf7f849"
  },
  {
    "url": "assets/js/183.fc12ea39.js",
    "revision": "97b44ee7f6579177f18a296c46cb81cf"
  },
  {
    "url": "assets/js/184.9e0859ab.js",
    "revision": "0ce4dda3467736797d6d52ead4939b60"
  },
  {
    "url": "assets/js/185.febd3e8c.js",
    "revision": "a655121ed9374951e67384c8760dddf7"
  },
  {
    "url": "assets/js/186.a81ad99c.js",
    "revision": "9b7661219e0dea04df8e3ec1b0868959"
  },
  {
    "url": "assets/js/187.678852ef.js",
    "revision": "3d25210e6d1df966947d503547992696"
  },
  {
    "url": "assets/js/188.eb63ef98.js",
    "revision": "76cd63e24c25e3830a0b66358e1e7279"
  },
  {
    "url": "assets/js/189.f438ba28.js",
    "revision": "0feead1f106433f723f0aeb56f76e59c"
  },
  {
    "url": "assets/js/19.41070125.js",
    "revision": "7024556374d1080be26da8b9f6cb8baf"
  },
  {
    "url": "assets/js/190.8ab865a9.js",
    "revision": "a6f93067d09b88e76ef0d26757288cd3"
  },
  {
    "url": "assets/js/191.96268d95.js",
    "revision": "215db3db588e10a699b2db47c3837e53"
  },
  {
    "url": "assets/js/192.c6f4f3c3.js",
    "revision": "4faf972889c81178ed8b1423c1d9551b"
  },
  {
    "url": "assets/js/193.2cf0b765.js",
    "revision": "8d3872492e50a0cc43bea4fe0ae127aa"
  },
  {
    "url": "assets/js/194.9bb01c5f.js",
    "revision": "dbb26a27b77c2624845021b568ffb7cc"
  },
  {
    "url": "assets/js/195.7fa5ff43.js",
    "revision": "784e8e87fb46fbc4dc9a00eb66d5274c"
  },
  {
    "url": "assets/js/196.1d951c79.js",
    "revision": "b9819bf6701751e62eacba35027890e0"
  },
  {
    "url": "assets/js/197.9339e2dc.js",
    "revision": "62bb7cc61c9a15fe3c69e14a371c4c95"
  },
  {
    "url": "assets/js/198.dbc8b7d8.js",
    "revision": "071916a62c249c8ed769393808578461"
  },
  {
    "url": "assets/js/199.7df7b023.js",
    "revision": "f0edad895097277ae3ff9770080d6871"
  },
  {
    "url": "assets/js/20.2e0fcb25.js",
    "revision": "a1046897a419c1cde249bf645704cc2e"
  },
  {
    "url": "assets/js/200.f08d7feb.js",
    "revision": "9904aa224aa9ef7c1147e16a808f5e87"
  },
  {
    "url": "assets/js/201.99eb3e8c.js",
    "revision": "5111ed939d4cfdbc2edbcc14b93c20cd"
  },
  {
    "url": "assets/js/202.3bb3d1fe.js",
    "revision": "e1bd4204a96d87572631a33c8a4d74bd"
  },
  {
    "url": "assets/js/203.5ced389e.js",
    "revision": "c93ebfff1dd2b4981750a7018889312b"
  },
  {
    "url": "assets/js/204.9fcf7075.js",
    "revision": "53377669a1cc393976ac4a4164d377fc"
  },
  {
    "url": "assets/js/205.5ce018dd.js",
    "revision": "2c1a0eb5249858a19da362dbcca62d6c"
  },
  {
    "url": "assets/js/21.447f8f51.js",
    "revision": "b2e23bcdbcb3ca64c7ba97fd2420a27c"
  },
  {
    "url": "assets/js/22.6376990b.js",
    "revision": "a68c1a6d7d033fc2299963e860451a50"
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
    "url": "assets/js/3.1e8bf178.js",
    "revision": "ab7a31edb2e75bcefb8e65e372264193"
  },
  {
    "url": "assets/js/30.698edc0f.js",
    "revision": "98b651887630b003b822c36723a17148"
  },
  {
    "url": "assets/js/31.ef86e32a.js",
    "revision": "6185e6ee701d49a7ffca0afa4d656934"
  },
  {
    "url": "assets/js/32.9d70842b.js",
    "revision": "f622bc5054acee0bedf9b226ff8ae4b2"
  },
  {
    "url": "assets/js/33.e712aedf.js",
    "revision": "e84d76db40e14713e89984e3b538ac94"
  },
  {
    "url": "assets/js/34.f5baf91f.js",
    "revision": "6e6920bbee06a34071d2f66d0d3133e0"
  },
  {
    "url": "assets/js/35.3ce37530.js",
    "revision": "003070dd03a164d29e2e2973d0c710e8"
  },
  {
    "url": "assets/js/36.9e784928.js",
    "revision": "6fbde234501dee087af0346272e08f9a"
  },
  {
    "url": "assets/js/37.547d4fe7.js",
    "revision": "30fdc2e75de9bc24d1ab4758f4e57f05"
  },
  {
    "url": "assets/js/38.cd6588b9.js",
    "revision": "0e12a3d415c8e69a110385742137f79f"
  },
  {
    "url": "assets/js/39.61724dfd.js",
    "revision": "2f09a0c49f3091d9803a80165c0e6345"
  },
  {
    "url": "assets/js/4.2fd69b3d.js",
    "revision": "de89c0d1b56c73c928430fbce73d5fb2"
  },
  {
    "url": "assets/js/40.6b6211da.js",
    "revision": "6d0dbe571b1a81e5d2826b97e3415c80"
  },
  {
    "url": "assets/js/41.bf556d07.js",
    "revision": "515e042b1c37e7484679f914fd8efe47"
  },
  {
    "url": "assets/js/42.d55297c9.js",
    "revision": "ea193e8ecb6f6bbbd19cd940459f3351"
  },
  {
    "url": "assets/js/43.4039959c.js",
    "revision": "f0c5ccfbabbd7e153cb99bfc67a6cb43"
  },
  {
    "url": "assets/js/44.882a60fe.js",
    "revision": "29d2d97dd64f0b6eb229265ffe9a264a"
  },
  {
    "url": "assets/js/45.f5ee2e35.js",
    "revision": "2a6dac73868d3cca4a267eb9f539b0c2"
  },
  {
    "url": "assets/js/46.aad7a50b.js",
    "revision": "ae8cfb5691d9cbedfada931d1a81d600"
  },
  {
    "url": "assets/js/47.60482d09.js",
    "revision": "1d708138705aaab0d1f1dd0a295cbbb1"
  },
  {
    "url": "assets/js/48.bef09e53.js",
    "revision": "1d33efef5490f012d96349f2c0c442e7"
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
    "url": "assets/js/52.baa3c285.js",
    "revision": "7217814a4177ad363f39f380238651cc"
  },
  {
    "url": "assets/js/53.d4e395e4.js",
    "revision": "a226a90b2d2c124980225d9d7ff2e560"
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
    "url": "assets/js/57.2295d097.js",
    "revision": "ed81bda6393f7eece1be98af4a8b6f78"
  },
  {
    "url": "assets/js/58.5b836a6c.js",
    "revision": "e067218f65b298c100f4ff3e75d63189"
  },
  {
    "url": "assets/js/59.1bd87e5a.js",
    "revision": "9a14d240180888d0153befb90034a0a8"
  },
  {
    "url": "assets/js/6.c48b701d.js",
    "revision": "804c09ef8cbc93d124a094268d38395c"
  },
  {
    "url": "assets/js/60.baa5822a.js",
    "revision": "b86dcfc30fd0077d852852031030204c"
  },
  {
    "url": "assets/js/61.c786d1f4.js",
    "revision": "8b238fa27e3c57ff5092b57c7c10259f"
  },
  {
    "url": "assets/js/62.85baad4d.js",
    "revision": "610a6528b5759231246e601bfd86833f"
  },
  {
    "url": "assets/js/63.5fab9f88.js",
    "revision": "3ff58c6be5a22b2110bfefe02eb983fa"
  },
  {
    "url": "assets/js/64.03f94c2f.js",
    "revision": "dfa29a4fe1d224ac10cf83518d3b1eed"
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
    "url": "assets/js/7.242a802c.js",
    "revision": "8074e4a39a7b572c54865ab378fe8596"
  },
  {
    "url": "assets/js/70.043258fa.js",
    "revision": "73a8fe6a21d1e239c1734af4d1f8233f"
  },
  {
    "url": "assets/js/71.a4ab17f9.js",
    "revision": "e2965f018605a47790fe470dff97de15"
  },
  {
    "url": "assets/js/72.81e51c1f.js",
    "revision": "6b91a9b420e91cf6ad49cef74bf20685"
  },
  {
    "url": "assets/js/73.711bacda.js",
    "revision": "ca1e2aed7f0e3df91c419f5420486b85"
  },
  {
    "url": "assets/js/74.b9ed6cec.js",
    "revision": "a9010245caea5d98c037dafd964e109c"
  },
  {
    "url": "assets/js/75.78d3aa11.js",
    "revision": "5670b4e545406cf8138e5fa0643061cb"
  },
  {
    "url": "assets/js/76.ef95f117.js",
    "revision": "8accf89f084b3fa94b2c77a0327c3ca2"
  },
  {
    "url": "assets/js/77.14afe91a.js",
    "revision": "c2cfe65fed679759adfcd7e16ceeace1"
  },
  {
    "url": "assets/js/78.39de5656.js",
    "revision": "ca46e56a6030a6970ce9d1f5b073d042"
  },
  {
    "url": "assets/js/79.c58d28aa.js",
    "revision": "caac47c42baeacdd6e90e4aa728f7c72"
  },
  {
    "url": "assets/js/8.99d0cf3f.js",
    "revision": "a2cb28cc9b418ca105b44ee1b1a74010"
  },
  {
    "url": "assets/js/80.fa4d0491.js",
    "revision": "2197df21801ea613bd0e897bc3311b46"
  },
  {
    "url": "assets/js/81.f812fb0f.js",
    "revision": "29e1c6cce9821edd76e717aecca8f627"
  },
  {
    "url": "assets/js/82.91d8d467.js",
    "revision": "0d3c9af440308bab7d1bfb2421bc16b5"
  },
  {
    "url": "assets/js/83.df363604.js",
    "revision": "455e96b146eb9ce3835187f27dedb7e6"
  },
  {
    "url": "assets/js/84.90d58d8b.js",
    "revision": "7002f37fe1621aa9646ea33764628d5c"
  },
  {
    "url": "assets/js/85.e5ef046e.js",
    "revision": "6fc7dde9267087e403297e4766fb0bf0"
  },
  {
    "url": "assets/js/86.1cba26cf.js",
    "revision": "612f623dac28a13d61268d88eb88f93e"
  },
  {
    "url": "assets/js/87.7b4744d6.js",
    "revision": "da83c31c94ef762c077179f1297374c3"
  },
  {
    "url": "assets/js/88.4dbfe7cf.js",
    "revision": "947e4446fc35b9cec691f2df3df32644"
  },
  {
    "url": "assets/js/89.72e89d20.js",
    "revision": "04fa6fa44a52222daa028c19d75f3142"
  },
  {
    "url": "assets/js/9.3cebe084.js",
    "revision": "b15d2455c5ee12fb898fdfe74b40771c"
  },
  {
    "url": "assets/js/90.d5c62cb7.js",
    "revision": "6a3cb49135a59229011591089ed08df9"
  },
  {
    "url": "assets/js/91.410c35ab.js",
    "revision": "967668d2bdeaeac3dc927ee90e53806b"
  },
  {
    "url": "assets/js/92.9b1df87b.js",
    "revision": "ef19c137aba2d40fa716c013d29c569d"
  },
  {
    "url": "assets/js/93.05b034a0.js",
    "revision": "f0ed3f4d5cee571032528915082c24f1"
  },
  {
    "url": "assets/js/94.314ea46d.js",
    "revision": "10b9e2c50b40ffecad7914d1c7dfc289"
  },
  {
    "url": "assets/js/95.04a82636.js",
    "revision": "147f5f6d4930c5be0d4a7bf422b5b934"
  },
  {
    "url": "assets/js/96.df120715.js",
    "revision": "29f6d87177d0252e97dfccba7df993ab"
  },
  {
    "url": "assets/js/97.085209aa.js",
    "revision": "fcca236ee2722e4c45b38207a6dfec58"
  },
  {
    "url": "assets/js/98.e50d59f5.js",
    "revision": "76724d0c412328fd35c756f82e331408"
  },
  {
    "url": "assets/js/99.ac9b59cf.js",
    "revision": "4aea7beb6eab5444d60597631eb6e25b"
  },
  {
    "url": "assets/js/app.e8416bd8.js",
    "revision": "680ab25551f8258ce00f9bad586790d7"
  },
  {
    "url": "backend/database/index.html",
    "revision": "f5385550fc30f189582a2d41ed29f5b5"
  },
  {
    "url": "backend/node/index.html",
    "revision": "19ec587aafb8386db44c16a0827bb4f1"
  },
  {
    "url": "backend/node/upload-file.html",
    "revision": "766d1c1cb1a8fa9dad838e6b7c089bff"
  },
  {
    "url": "blog/2021/2021nian-du-zong-jie.html",
    "revision": "026ea91343f37d241d0fd5e860df0777"
  },
  {
    "url": "blog/2021/jun-lu-sheng-ya.html",
    "revision": "bea868477a21f633cdf8ff16294d11b4"
  },
  {
    "url": "blog/2022/2022ji-hua.html",
    "revision": "9f968aef5aee211af6df43ebe987ae72"
  },
  {
    "url": "blog/2022/base64wen-jian-shang-chuan-xia-zai.html",
    "revision": "9d69fc42b2046e0cf7e469f4f9ec1cd3"
  },
  {
    "url": "blog/2022/bi-mian-huan-cun.html",
    "revision": "345662830b5d998574020e314a0ecbb9"
  },
  {
    "url": "blog/2022/bubble.html",
    "revision": "0581f759ef18608eedaa05de6546a3d4"
  },
  {
    "url": "blog/2022/canvaszheng.html",
    "revision": "7b7b96a5c4bd1e80d7bf47b08fcd887a"
  },
  {
    "url": "blog/2022/console.html",
    "revision": "b1c254ae8543aa2b0c93b758d022ce86"
  },
  {
    "url": "blog/2022/contact.html",
    "revision": "0d609f765e75218cd30965b4c28c9888"
  },
  {
    "url": "blog/2022/csvwen-jian-dao-ru-dao-chu.html",
    "revision": "edee667f6810f4348e29b50d79a38f65"
  },
  {
    "url": "blog/2022/er-wei-ma-sheng-cheng.html",
    "revision": "5a3df18a9c43d4a5fe4ff013288c10eb"
  },
  {
    "url": "blog/2022/graphql.html",
    "revision": "9fe54ea7c3f868c140ad1cc4f85d6464"
  },
  {
    "url": "blog/2022/image-drag.html",
    "revision": "5af431bce31f344d9235b2ee245d3335"
  },
  {
    "url": "blog/2022/intersectionobserver.html",
    "revision": "1a146e567841b3fa1651ef9656762c6b"
  },
  {
    "url": "blog/2022/jsonwen-jian-shang-chuan-xia-zai.html",
    "revision": "7b649cbddf791afa90d47473afc2cb80"
  },
  {
    "url": "blog/2022/modules.html",
    "revision": "89f512d5461d174b2c060f2ebec2b05b"
  },
  {
    "url": "blog/2022/ni-zhen-de-ai-xue-xi-ma.html",
    "revision": "faea24c42c0fc177dd925926f984080f"
  },
  {
    "url": "blog/2022/promiseshou-xie-lian-xi.html",
    "revision": "2c78ae9c74e6bc53ee2ecf332b565a95"
  },
  {
    "url": "blog/2022/react-activation.html",
    "revision": "559dcce768e4bc23fbd65a1f2a0815f9"
  },
  {
    "url": "blog/2022/react-md.html",
    "revision": "5cfe865558921364d23fcd5d1a5130e0"
  },
  {
    "url": "blog/2022/robotjs.html",
    "revision": "77b82e9e09d897099805cfbacb942f22"
  },
  {
    "url": "blog/2022/shu-ju-qing-xi-suan-fa.html",
    "revision": "355d6556f385eac02967a8332b3fc90b"
  },
  {
    "url": "blog/2022/sleep.html",
    "revision": "16511c87cc0bba6e8a67f6c646bc86a3"
  },
  {
    "url": "blog/2022/socket.html",
    "revision": "39b698ae647e721b0c38217ab4be104d"
  },
  {
    "url": "blog/2022/video.html",
    "revision": "07cde015f2242afa91a06df24269086e"
  },
  {
    "url": "blog/2022/wang-luo-qing-qiu-yi-bu-feng-zhuang.html",
    "revision": "1a23a64a69c1012c18bc84426e4fcd1a"
  },
  {
    "url": "blog/2022/wen-jian-xia-zai-ji-jin-du-tiao.html",
    "revision": "573cdbfe00daeb3ba969cacf84973a1c"
  },
  {
    "url": "blog/2023/css-clip-path.html",
    "revision": "955885872b303d31d4783dbb30c8c483"
  },
  {
    "url": "blog/2023/gun-dong-huo-qu-chao-lian-jie-title.html",
    "revision": "4c853cc6002eb261d315920210584504"
  },
  {
    "url": "blog/2023/gun-dong-xiao-guo.html",
    "revision": "fd5fd54dac508db369c6641a14bc1522"
  },
  {
    "url": "blog/2023/kai-fa-liu-cheng.html",
    "revision": "f636041ee9398124ccbc1c3efd679b9e"
  },
  {
    "url": "blog/2023/lu-you-huan-cun-fang-shi.html",
    "revision": "a78c7d28bf43071ef293dd7f1f1c975a"
  },
  {
    "url": "blog/2023/markdown-it-container.html",
    "revision": "d3ae10418f45752d5ce1f16968aceebf"
  },
  {
    "url": "blog/2023/react-dnd.html",
    "revision": "c1f621843cc16d58e75bde3a86270b72"
  },
  {
    "url": "blog/2023/react-window.html",
    "revision": "9d6d47e1a6ec61329bbaf1cfb47a466c"
  },
  {
    "url": "blog/2023/shou-xie-promise.html",
    "revision": "fb446ec639ad6e430bd5d0764d045cd5"
  },
  {
    "url": "blog/2023/vue2xiang-ying-shi.html",
    "revision": "7294c95f1318bf32fe28902defd95fa4"
  },
  {
    "url": "blog/2023/vue3xiang-ying-shi.html",
    "revision": "82a10998c8b677916961b749310c41e2"
  },
  {
    "url": "blog/2023/xiang-ji.html",
    "revision": "1400473509ab94175ba787b58ff5dd07"
  },
  {
    "url": "blog/collection/ge-qu-chuan-shao.html",
    "revision": "fd0518f3d1e5516416953a74b22dbad7"
  },
  {
    "url": "blog/collection/gu-yong-zhe.html",
    "revision": "65bc86effba304381fdcf28f8a723893"
  },
  {
    "url": "blog/collection/hen-jiu-yi-hou.html",
    "revision": "3c0782546785bc055c64f4c7f5fe8c50"
  },
  {
    "url": "blog/collection/qing-hua-ci.html",
    "revision": "6f3c31b16d32a978e7318ea1976d6aa8"
  },
  {
    "url": "blog/collection/zhuan-zhu-li.html",
    "revision": "d54d58d17b23cae9190cd07d957dfaf3"
  },
  {
    "url": "books/computer/index.html",
    "revision": "31c4b092464bb836d036ef3027af4afd"
  },
  {
    "url": "books/javascript/design.html",
    "revision": "891924e7ed003dc4aa6e9554deb3d90a"
  },
  {
    "url": "books/javascript/index.html",
    "revision": "16c088f8c8ad8de3a5e06705995daebc"
  },
  {
    "url": "books/javascript/principle.html",
    "revision": "4cb4bffdb822bb8f5959056a15329bf5"
  },
  {
    "url": "books/javascript/ts.html",
    "revision": "efd94a0976e6dc704321f1906e7a382f"
  },
  {
    "url": "books/javascript/vue3ts.html",
    "revision": "ffd9f56407660078e996eee9bf12b7fd"
  },
  {
    "url": "categories/index.html",
    "revision": "3fbd0f12be0e4699b17597db0e2c8ce4"
  },
  {
    "url": "categories/前端难点/index.html",
    "revision": "e4310781a33cff76d47ba555718c3583"
  },
  {
    "url": "categories/收藏夹/index.html",
    "revision": "162ac92fb0460a0158d77cf8a0228532"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "df6c0a822437ca6528b7f65de216e8c1"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "00d706d6a51aab0c124164a66f233a91"
  },
  {
    "url": "front/algorithm/binarytree.html",
    "revision": "e406fe03673f0dfcd7ebd2fa438bffbb"
  },
  {
    "url": "front/algorithm/chart.html",
    "revision": "325dd70f88572539d609dc48c79b1cdb"
  },
  {
    "url": "front/algorithm/designpattern.html",
    "revision": "b66dd4e0d1746121f0d16dda4e76cae1"
  },
  {
    "url": "front/algorithm/dynamic.html",
    "revision": "6fe209b30cbe1bd4dbc32cfbf222ef42"
  },
  {
    "url": "front/algorithm/greedy.html",
    "revision": "3d4f42619b878158782dbe83fc5ac3a5"
  },
  {
    "url": "front/algorithm/hash.html",
    "revision": "c84cd4066d5b9c5777f2dae9c1dfabb3"
  },
  {
    "url": "front/algorithm/index.html",
    "revision": "dfbc1a83567f21cf66fa6f0cc540ad97"
  },
  {
    "url": "front/algorithm/leetcode.html",
    "revision": "4c653d31cf89391a6c4882158e73b5b1"
  },
  {
    "url": "front/algorithm/linklist.html",
    "revision": "a2dc01eb79167b4f1f9261c7624c4ee1"
  },
  {
    "url": "front/algorithm/pointer.html",
    "revision": "3809ceda72d6066ff7775923ed757273"
  },
  {
    "url": "front/algorithm/queue.html",
    "revision": "71fe0e612965e6d8716b3b75794ac14d"
  },
  {
    "url": "front/algorithm/recall.html",
    "revision": "121ba396ecd79a9cb7c5c8946f282b8d"
  },
  {
    "url": "front/algorithm/regexp.html",
    "revision": "35c94a40ea843b660dd3525832d1fb19"
  },
  {
    "url": "front/algorithm/sort.html",
    "revision": "8c341ecbd1e071f6e82729c7433e61e6"
  },
  {
    "url": "front/algorithm/tree.html",
    "revision": "df3c28ef7218b6c4d562c54433e52b13"
  },
  {
    "url": "front/base/ajax.html",
    "revision": "0015970c9e2576f5bb9289cd564ae493"
  },
  {
    "url": "front/base/array.html",
    "revision": "010ea1007fca016d43e5694cfbbccb79"
  },
  {
    "url": "front/base/async.html",
    "revision": "b107e554386eb2c8a6c3cc8af46bf107"
  },
  {
    "url": "front/base/bom.html",
    "revision": "4641c67d6ac18498ca4e9d4b0fd18c0f"
  },
  {
    "url": "front/base/canvas.html",
    "revision": "be47553af036d54e1cbcbe100197992a"
  },
  {
    "url": "front/base/canvas2d.html",
    "revision": "ff6a8a316ee7ef2e5b23c96461f22744"
  },
  {
    "url": "front/base/class.html",
    "revision": "49ba0ad95581b55dfcac2dbd8a14a7da"
  },
  {
    "url": "front/base/cors.html",
    "revision": "00521ff65bfdef5c4ab31581fa92cd28"
  },
  {
    "url": "front/base/date.html",
    "revision": "64fbc7e2becab7dabf0eebf7c8f165c2"
  },
  {
    "url": "front/base/dom.html",
    "revision": "57e88ad03eb523fa93c8efdca02f72a8"
  },
  {
    "url": "front/base/event.html",
    "revision": "2b7bd74bde65051c8c2a45909ae3cd41"
  },
  {
    "url": "front/base/fetch.html",
    "revision": "77a0b052e90b3208cdf62a52093c17a3"
  },
  {
    "url": "front/base/function.html",
    "revision": "33c785241a07dab704f4da84a70fc59f"
  },
  {
    "url": "front/base/generator.html",
    "revision": "a4e30715862525569b132e0bc22ad7a6"
  },
  {
    "url": "front/base/history.html",
    "revision": "3dce3b02514659b80236e37896036fd7"
  },
  {
    "url": "front/base/index.html",
    "revision": "d04936c6618ad9b20a167ed87103bf0f"
  },
  {
    "url": "front/base/indexedb.html",
    "revision": "d7a721e5ddd3d443401b120d808ffaa0"
  },
  {
    "url": "front/base/json.html",
    "revision": "ffbada78bba9ca562defc9ed6b68bc45"
  },
  {
    "url": "front/base/jwt.html",
    "revision": "b69db00f4eadb8b00698d82058d48196"
  },
  {
    "url": "front/base/map.html",
    "revision": "66e342ffbef9de84ef6dc9c8ca36edfc"
  },
  {
    "url": "front/base/math.html",
    "revision": "792acf94b4f22e53396beca31301848b"
  },
  {
    "url": "front/base/module.html",
    "revision": "4dfcb8772799981b18a6e2050be6ff14"
  },
  {
    "url": "front/base/number.html",
    "revision": "a8aec3ee6153466cf1b26ac94ea70c43"
  },
  {
    "url": "front/base/object.html",
    "revision": "7b3a25c5d1f2f0dc2a5212d55f4d01e5"
  },
  {
    "url": "front/base/promise.html",
    "revision": "81b148568224c5b211d5121a478c9ac0"
  },
  {
    "url": "front/base/proxy.html",
    "revision": "492e5c25b295dc4df66140cb6d23bd97"
  },
  {
    "url": "front/base/reg.html",
    "revision": "e24b1aa51f3c478bb03ee689b9af7515"
  },
  {
    "url": "front/base/set.html",
    "revision": "ed397f7e9e2cca4d84a7662637b66098"
  },
  {
    "url": "front/base/storage.html",
    "revision": "eb525a42cb7910a37bd3019d5989d4c5"
  },
  {
    "url": "front/base/string.html",
    "revision": "4226015754efbefcb4559be58e066b48"
  },
  {
    "url": "front/base/symbol.html",
    "revision": "f71b036938a1fe35aaebe148c56fb7a2"
  },
  {
    "url": "front/base/typeof.html",
    "revision": "687daf95798e28c96e0f91ffc81e27d5"
  },
  {
    "url": "front/base/var.html",
    "revision": "a3f971d152811bdebff5042d91ce6ecb"
  },
  {
    "url": "front/base/webanimation.html",
    "revision": "fa469509491c1b65ac5803f3d4e39b97"
  },
  {
    "url": "front/base/worker.html",
    "revision": "009a98aeaab7fd50c7e66a1f5bfa8419"
  },
  {
    "url": "front/css/animation.html",
    "revision": "d0df632df26322e1d54c14fd89fec6c1"
  },
  {
    "url": "front/css/box.html",
    "revision": "74fca83af6c47ed28a23a4615c706c35"
  },
  {
    "url": "front/css/effects.html",
    "revision": "3ffb0e77c057900de1fac2ca0d2020b8"
  },
  {
    "url": "front/css/form.html",
    "revision": "7534e834e3dcedfa97af0361d3bacebb"
  },
  {
    "url": "front/css/grid.html",
    "revision": "b64d3fb2fee0f8aada53431472ce59c7"
  },
  {
    "url": "front/css/index.html",
    "revision": "7e24c6598f2d6a6b2271713fb51cb868"
  },
  {
    "url": "front/css/omitted.html",
    "revision": "fd02a9ba815fbf3154ab9965a55a5fa5"
  },
  {
    "url": "front/css/responsive.html",
    "revision": "538b06959fd0698b318f5e94f1405d04"
  },
  {
    "url": "front/css/selector.html",
    "revision": "f0e36d2a36af5fe770114c0282c1b51d"
  },
  {
    "url": "front/css/special.html",
    "revision": "943e7c7fa5dc13a58f3af7588d8a820f"
  },
  {
    "url": "front/css/svg.html",
    "revision": "7753abfa7c4e54bc39ceaeaa03848f50"
  },
  {
    "url": "front/css/svganimate.html",
    "revision": "cb7098e7a3955a7c9b1b241b761b2f38"
  },
  {
    "url": "front/css/svgapi.html",
    "revision": "cc1e5bd68264b926f176a9e577e4cf47"
  },
  {
    "url": "front/css/text.html",
    "revision": "5308e53e9dc5cbe5b84bfe1414440170"
  },
  {
    "url": "front/css/transform.html",
    "revision": "e291571aa0d26f6cb1cef3d9913cf892"
  },
  {
    "url": "front/css/transition.html",
    "revision": "0aa69ee21957aa7498d26a3ac0154b10"
  },
  {
    "url": "front/interview/algorithm.html",
    "revision": "7db56ef4a30c7e2ac404312aceb4b544"
  },
  {
    "url": "front/interview/css.html",
    "revision": "d034cf9e5d44fba9586813c795d6643d"
  },
  {
    "url": "front/interview/index.html",
    "revision": "e2cf528cf1d0fe59a3e9cf8fc4430688"
  },
  {
    "url": "front/interview/js.html",
    "revision": "1c4232db50f6fd1d11ecde220b8aa893"
  },
  {
    "url": "front/interview/js100.html",
    "revision": "0bb35bb646d32a5b3c9949be0797b540"
  },
  {
    "url": "front/interview/project.html",
    "revision": "a623a6d713394752a7d671929b31d307"
  },
  {
    "url": "front/ios/array.html",
    "revision": "d62054b097989b5b723b30e4c5dda1e7"
  },
  {
    "url": "front/ios/autolayout.html",
    "revision": "9442f3f443c6ecda317804e30e5b98c3"
  },
  {
    "url": "front/ios/base.html",
    "revision": "6ed166abf945f6d9ef5833c63be5a5a3"
  },
  {
    "url": "front/ios/class.html",
    "revision": "158b2ee8e5dc4271c4e1bda11330af1c"
  },
  {
    "url": "front/ios/controls.html",
    "revision": "b4d7c4f6ab578395ccdcd3dcb70bdab9"
  },
  {
    "url": "front/ios/dictionary.html",
    "revision": "9933837b573f70244c18d081b5b22a37"
  },
  {
    "url": "front/ios/func.html",
    "revision": "ee53c43c149e4dba27b596b4863185c3"
  },
  {
    "url": "front/ios/index.html",
    "revision": "71b0a870fe8b579b68fb35a11942374e"
  },
  {
    "url": "front/ios/number.html",
    "revision": "1e308e0d2c54d31fe6eec476e53a258e"
  },
  {
    "url": "front/ios/set.html",
    "revision": "c1effb42b5bbe87a7ba993d4f9ba2d30"
  },
  {
    "url": "front/ios/storyboard.html",
    "revision": "37975226fa608287663cf418291c05d8"
  },
  {
    "url": "front/ios/storyboardcomp.html",
    "revision": "2ab37fef56904dccac72ef27b94aa77d"
  },
  {
    "url": "front/ios/string.html",
    "revision": "e25fc656802881cf62a2dee5010ed9b8"
  },
  {
    "url": "front/react/cli.html",
    "revision": "3cc6010804c272aca88647fc753d9a77"
  },
  {
    "url": "front/react/context.html",
    "revision": "3a2962ce690f277e570ee734679edb09"
  },
  {
    "url": "front/react/hooks.html",
    "revision": "daa957fd83fb775028619e5ee96b6f56"
  },
  {
    "url": "front/react/important.html",
    "revision": "a1ecd3c07180e93749177b2954acfaf4"
  },
  {
    "url": "front/react/index.html",
    "revision": "3f70c9e6163c55645404b33a545dd6ad"
  },
  {
    "url": "front/react/react18.html",
    "revision": "663d6a86468d88ac0eb4ad55eb8b4342"
  },
  {
    "url": "front/react/redux.html",
    "revision": "9ef32288077132f4d033204a2f713377"
  },
  {
    "url": "front/react/router.html",
    "revision": "212afec62887d82e71237fa45880d027"
  },
  {
    "url": "front/react/scope.html",
    "revision": "7074c762aef49d7884f60c9a49c1c1b2"
  },
  {
    "url": "front/react/test.html",
    "revision": "76c482406610b4a8c0a2845c45e27e94"
  },
  {
    "url": "front/technique/axiostools.html",
    "revision": "87eb2480614bfcf52a04bc2ec388d2ce"
  },
  {
    "url": "front/technique/index.html",
    "revision": "de43bdd2cdcdb5bb5c60708485a0a750"
  },
  {
    "url": "front/technique/react-hooks.html",
    "revision": "a8adbca80ff3dc721fde494072a95592"
  },
  {
    "url": "front/technique/tools.html",
    "revision": "764a05d70ccfdae511f20013c9874fa6"
  },
  {
    "url": "front/technique/toolsfunc.html",
    "revision": "512e71be723de1d774c7b9973352b8da"
  },
  {
    "url": "front/technique/vue3hooks.html",
    "revision": "2d3fab8822418ec18b5ada1a908bf312"
  },
  {
    "url": "front/test/index.html",
    "revision": "b850db0964a4e075ca2b935ccb41d9ec"
  },
  {
    "url": "front/vue2/index.html",
    "revision": "54736aa09490860f1191de9be4fa002b"
  },
  {
    "url": "front/vue2/props.html",
    "revision": "44a71a3d2d704774a7d60540be7557ce"
  },
  {
    "url": "front/vue2/reactive.html",
    "revision": "7ac6d27b1c037ab91606b66211a15b73"
  },
  {
    "url": "front/vue2/router.html",
    "revision": "3f812846a23d3aed56ff8db9753ceb20"
  },
  {
    "url": "front/vue3/index.html",
    "revision": "b675ff8a4327320ff9770bca7996ee50"
  },
  {
    "url": "front/vue3/project.html",
    "revision": "6064cdfaa438642d42468c616a6923ca"
  },
  {
    "url": "front/webpack/index.html",
    "revision": "1aaae6f7a2c6cc81b92c4782de5463f9"
  },
  {
    "url": "index.html",
    "revision": "2a9399357e7956c0703b63d41336a730"
  },
  {
    "url": "skill/git/action.html",
    "revision": "fb24cbfde2ebbfcf892f2988c5349dec"
  },
  {
    "url": "skill/git/git_thinking.html",
    "revision": "75102bc7ef5c72ea9894b80bc9cad12e"
  },
  {
    "url": "skill/git/hight_level.html",
    "revision": "9391244a22732a794c75c7f5ef7bc56a"
  },
  {
    "url": "skill/git/index.html",
    "revision": "4dabe7d89a39db601dcdb6bc74c3e2c8"
  },
  {
    "url": "skill/internet/index.html",
    "revision": "a0b75c052bcb8f154a2b377c6e01875c"
  },
  {
    "url": "skill/introduction/ability.html",
    "revision": "7c7b1c03f2b8a9eca156e0958ceb7766"
  },
  {
    "url": "skill/introduction/index.html",
    "revision": "99d3e51d63a57a98f9c29086a6481cd8"
  },
  {
    "url": "skill/introduction/plugin_dev.html",
    "revision": "63132489ecf308a6291eaf063454ca04"
  },
  {
    "url": "skill/introduction/traps.html",
    "revision": "6b13ab0cc42a688cc5d34f638deffa90"
  },
  {
    "url": "skill/linux/base.html",
    "revision": "8422ff61ea3cb953c3933e6ee1b79f1b"
  },
  {
    "url": "skill/linux/bugs.html",
    "revision": "01ecf150ed41a1d7802800ecf09c035e"
  },
  {
    "url": "skill/linux/git.html",
    "revision": "702b205f3aaff6f28ce2600ecf824507"
  },
  {
    "url": "skill/linux/index.html",
    "revision": "f7a3d96fd209a6d8247f7f30fb81b107"
  },
  {
    "url": "skill/linux/install.html",
    "revision": "6c8e91eff2079b58093d5d07c8f8d887"
  },
  {
    "url": "skill/linux/nginx.html",
    "revision": "bdd6058b4937d1311340770ff4d0cc2c"
  },
  {
    "url": "skill/linux/node.html",
    "revision": "26813d39227a5f0b91bb4f96cc3273eb"
  },
  {
    "url": "skill/linux/pm2.html",
    "revision": "ba3797ad26b9e58103e24a461527da7e"
  },
  {
    "url": "skill/linux/regexp.html",
    "revision": "8a8b6dd78e2549f758c7903af4216179"
  },
  {
    "url": "skill/shell/index.html",
    "revision": "ddf31d607e6ad93cc88291272ca47f28"
  },
  {
    "url": "skill/smalltips/index.html",
    "revision": "e333732332945ba76921beee1cece5e4"
  },
  {
    "url": "skill/smalltips/process.html",
    "revision": "5fb5940c53ca4d12c6c1c9ca745c3449"
  },
  {
    "url": "skill/smalltips/vscode.html",
    "revision": "d23ae4fa70c958f5dfc02acaf699ab93"
  },
  {
    "url": "skill/smalltips/vuepress.html",
    "revision": "fad8daa298c58fa85f61e8e680b4a5bd"
  },
  {
    "url": "tag/index.html",
    "revision": "01d7d49b1eeba71910de2718e1cf26f2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "627216090deaf01a65f6cd854c2d71fa"
  },
  {
    "url": "tag/前端重点/index.html",
    "revision": "18c35473ab79ebafb539ff05df5a75cb"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "69f9377344ed4f3bda6eb39efeb1871c"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "96202fe2a5fd179b45698c769312ccf0"
  },
  {
    "url": "timeline/index.html",
    "revision": "593f51abe9abbb577de6e126913696dc"
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
